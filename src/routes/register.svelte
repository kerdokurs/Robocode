<script>
  import { onMount } from 'svelte';
  import { email, minLength, required, useForm } from 'svelte-use-form';
  import Hint from 'svelte-use-form/dist/ts/components/Hint.svelte';
  import { firestore, RecaptchaVerifier, serverTimeStamp } from '../firebase';
  import Button from '../lib/button.svelte';
  import Inputfield from '../lib/inputfield.svelte';

  let recaptcha: any;
  let verifier: any;
  let captchaHint = false;
  let verified = false;

  let otherSchool = '';
  let otherSchoolHint = false;

  let submitted = false;

  const form = useForm({
    team_name: {
      validators: [minLength(3)],
    },
    captain_name: {
      validators: [minLength(3)],
    },
    captain_email: {
      validators: [email],
    },
    member1_name: {
      validators: [],
    },
    member2_name: {
      validators: [],
    },
    member3_name: {
      validators: [],
    },
    member4_name: {
      validators: [],
    },
    school: {
      validators: [minLength(2)],
    },
  });

  onMount(() => {
    verifier = new RecaptchaVerifier(recaptcha, {
      callback: (res: any) => {
        verified = true;
        captchaHint = false;
      },
      'expired-callback': () => {
        captchaHint = true;
      },
    });
    verifier.render();
  });

  const registerCollection = firestore.collection('registered');

  const onSubmit = async () => {
    try {
      if (!verified) {
        captchaHint = true;
        return;
      } else {
        captchaHint = false;
      }

      const { values } = $form;

      console.log(values);
      if (
        values.school === 'muu' &&
        (!otherSchool || otherSchool.length <= 2)
      ) {
        otherSchoolHint = true;
        return;
      } else otherSchoolHint = false;

      await registerCollection.add({
        ...values,
        other_school: otherSchool,
        created_at: serverTimeStamp(),
      });
      submitted = true;
    } catch (err) {
      alert('Tundmatu viga: ' + err);
      await firestore.collection('reports').add({
        err,
        created_at: serverTimeStamp(),
      });
    }
  };
</script>

<svelte:head>
  <title>Registreeri | Robocode 2021</title>
</svelte:head>

<div>
  <h1 class="text-4xl">Registreeri</h1>
  <form
    use:form
    on:submit|preventDefault={onSubmit}
    class="grid grid-flow-row gap-4 w-full md:w-4/5 mt-3"
  >
    <Inputfield name="team_name" label="Tiimi nimi" disabled={submitted} />
    <Hint for="team_name" on="minLength" class="text-red-400" let:value>
      Tiiminimi peab sisaldama vähemalt {value} tähemärki
    </Hint>

    <Inputfield name="captain_name" label="Tiimi kapten" disabled={submitted} />
    <Hint for="captain_name" on="minLength" class="text-red-400" let:value>
      Nimi peab sisaldama vähemalt {value} tähemärki
    </Hint>

    <Inputfield
      name="captain_email"
      label="Kapteni email"
      email
      disabled={submitted}
    />
    <Hint for="captain_email" on="email" class="text-red-400">
      Palun sisesta korrektne email
    </Hint>

    <h2 class="text-2xl mt-3">Liikmed</h2>

    <Inputfield name="member2_name" label="Liige #2" disabled={submitted} />
    <Inputfield name="member3_name" label="Liige #3" disabled={submitted} />
    <Inputfield name="member4_name" label="Liige #4" disabled={submitted} />
    <Inputfield name="member5_name" label="Liige #5" disabled={submitted} />

    <div>
      <label for="school" class="text-lg font-medium block">Kool</label>
      <select
        name="school"
        class="block bg-transparent border-b-2 border-kollane w-full p-2 outline-none"
      >
        <option value="" selected>Vali kool</option>
        <option value="TU">Tartu Ülikool</option>
        <option value="TTU">TalTech</option>
        <option value="TLU">Tallinna Ülikool</option>
        <option value="muu">Muu</option>
      </select>
      <div class="mt-4">
        {#if $form.values['school'] === 'muu'}
          <div>
            <label for="school_other" class="text-lg font-medium block"
              >Palun täpsusta</label
            >
            <input
              type="text"
              name="school_other"
              disabled={submitted}
              class="bg-transparent border-b-2 border-kollane w-full p-2 outline-none {submitted
                ? 'text-gray-400'
                : ''}"
              bind:value={otherSchool}
            />
          </div>
          {#if otherSchoolHint}
            <span class="text-red-600">Palun täpsusta</span>
          {/if}
          <!-- <input
          type="text"
          name="school_other"
          class="bg-transparent border-b-2 border-kollane w-full p-2 outline-none block mt-10"
          /> -->
        {/if}
      </div>
    </div>

    <div id="recaptcha" bind:this={recaptcha} class="mt-3" />
    {#if captchaHint}
      <span class="text-red-600">Palun kinnita, et sa ei ole robot</span>
    {/if}

    <!-- <pre>{JSON.stringify($form.values,null,2)}</pre> -->

    <button
      type="submit"
      class="w-3/5 sm:w-1/3 md:w-1/6 {!$form.valid || submitted
        ? 'cursor-not-allowed opacity-75'
        : ''}"
      disabled={!$form.valid || submitted}
    >
      Esita
    </button>
  </form>
</div>

<style>
  option {
    @apply border-b-2;
    @apply border-kollane;
    @apply bg-taust;
  }
</style>
