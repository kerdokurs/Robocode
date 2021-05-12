<script>
  import Captcha from '../lib/captcha.svelte';
  import { isLoading, _ } from 'svelte-i18n';
  import { email, minLength, useForm } from 'svelte-use-form';
  import Hint from 'svelte-use-form/dist/ts/components/Hint.svelte';
  import { fade } from 'svelte/transition';
  import { firestore, serverTimeStamp } from '../firebase';
  import Inputfield from '../lib/inputfield.svelte';

  let captchaHint = false;
  let verified = false;

  let otherSchool = '';
  let otherSchoolHint = false;

  const endDate = new Date('2021-05-12 23:59');

  let ended = new Date() >= endDate;

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

  const registerCollection = firestore.collection('registered');

  const onSubmit = async () => {
    if (ended) return;

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
      // const sleep = (ms: number) =>
      //   new Promise((resolve) => setTimeout(resolve, ms));
      // await sleep(2000);
      submitted = true;
    } catch (err) {
      alert(`${$_('register.error')}: ` + err);
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

{#if ended && !$isLoading}
  <div>
    <h1 class="text-4xl">{$_('register.ended.header')}</h1>
    <p class="text-lg mt-3">
      {$_('register.ended.subheader')}
    </p>
    <p class="text-lg mt-3">
      {$_('register.ended.keep')}
      <a
        href="https://fb.me/e/4nLwvxJn3"
        target="_blank"
        rel="noopener noreferrer"
        class="border-b border-white"
      >
        {$_('register.ended.event')}
      </a>.
    </p>
  </div>
{:else if submitted && !$isLoading}
  <div in:fade>
    <h1 class="text-4xl">{$_('register.successful')}</h1>
    <p class="text-lg mt-3">{$_('register.be_there')}</p>
    <p class="text-lg mt-3">
      {$_('register.mail')}
    </p>
  </div>
{:else if !$isLoading}
  <div out:fade>
    <h1 class="text-4xl">{$_('register.header')}</h1>
    <form
      use:form
      on:submit|preventDefault={onSubmit}
      class="grid grid-flow-row gap-4 w-full md:w-4/5 mt-3"
    >
      <Inputfield
        name="team_name"
        label={$_('register.team_name')}
        disabled={submitted}
      />
      <Hint for="team_name" on="minLength" class="text-red-400" let:value>
        {$_('register.team_name_must')}
        {value}
        {$_('register.team_name_char')}
      </Hint>

      <Inputfield
        name="captain_name"
        label={$_('register.captain_name')}
        disabled={submitted}
      />
      <Hint for="captain_name" on="minLength" class="text-red-400" let:value>
        {$_('register.captain_name_must')}
        {value}
        {$_('register.captain_name_char')}
      </Hint>

      <Inputfield
        name="captain_email"
        label={$_('register.captain_email')}
        email
        disabled={submitted}
      />
      <Hint for="captain_email" on="email" class="text-red-400">
        {$_('register.captain_email_correct')}
      </Hint>

      <h2 class="text-2xl mt-3">{$_('register.members')}</h2>

      <Inputfield
        name="member2_name"
        label={$_('register.member') + ' #2'}
        disabled={submitted}
      />
      <Inputfield
        name="member3_name"
        label={$_('register.member') + ' #3'}
        disabled={submitted}
      /><Inputfield
        name="member4_name"
        label={$_('register.member') + ' #4'}
        disabled={submitted}
      />
      <Inputfield
        name="member5_name"
        label={$_('register.member') + ' #5'}
        disabled={submitted}
      />

      <div>
        <label for="school" class="text-lg font-medium block"
          >{$_('register.school.school')}</label
        >
        <select
          name="school"
          class="block bg-transparent border-b-2 border-kollane w-full p-2 outline-none"
        >
          <option value="" selected>{$_('register.school.choose')}</option>
          <option value="TU">{$_('register.school.tu')}</option>
          <option value="TTU">{$_('register.school.ttu')}</option>
          <option value="TLU">{$_('register.school.tlu')}</option>
          <option value="muu">{$_('register.school.other')}</option>
        </select>
        <div class="mt-4">
          {#if $form.values['school'] === 'muu'}
            <div>
              <label for="school_other" class="text-lg font-medium block"
                >{$_('register.school.specify')}</label
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
              <span class="text-red-600">{$_('register.school.hint')}</span>
            {/if}
            <!-- <input
          type="text"
          name="school_other"
          class="bg-transparent border-b-2 border-kollane w-full p-2 outline-none block mt-10"
          /> -->
          {/if}
        </div>
      </div>

      <Captcha bind:verified bind:captchaHint />

      <!-- <pre>{JSON.stringify($form.values,null,2)}</pre> -->

      <button
        type="submit"
        class="w-3/5 sm:w-1/3 md:w-1/6 {!$form.valid || submitted
          ? 'cursor-not-allowed opacity-75'
          : ''}"
        disabled={!$form.valid || submitted}
      >
        {$_('register.submit')}
      </button>
    </form>
  </div>
{/if}

<style>
  option {
    @apply border-b-2;
    @apply border-kollane;
    @apply bg-taust;
  }
</style>
