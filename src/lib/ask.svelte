<script>
  import { email, Hint, minLength, required, useForm } from 'svelte-use-form';
  import { firestore, serverTimeStamp } from '../firebase';
  import Inputfield from './inputfield.svelte';
  import Textfield from './textfield.svelte';
  import { fade } from 'svelte/transition';

  let submitted = false;

  const form = useForm({
    name: {
      validators: [required, minLength(3)],
    },
    email: {
      validators: [required, email],
    },
    question: {
      validators: [required, minLength(10)],
    },
  });

  const collection = firestore.collection('questions');

  const onSubmit = async () => {
    const { values } = $form;

    if (submitted) return;

    await collection.add({
      ...values,
      created_at: serverTimeStamp(),
    });

    submitted = true;
  };
</script>

{#if submitted}
  <div class="col-span-12 order-5" in:fade>
    <h1 class="text-4xl">Küsimus edukalt esitatud!</h1>
    <p class="text-xl mt-3">Vastame esimesel võimalusel!</p>
  </div>
{:else}
  <div class="col-span-12 order-5" out:fade>
    <h1 class="text-4xl">Lisaküsimuste korral täida vorm</h1>

    <form use:form on:submit|preventDefault={onSubmit} class="grid gap-4 mt-3">
      <Inputfield name="name" label="Nimi" disabled={submitted} />
      <Hint for="name" on="minLength" class="text-red-400" let:value>
        Nimi peab sisaldama vähemalt {value} tähemärki
      </Hint>

      <Inputfield name="email" label="Email" disabled={submitted} />
      <Hint for="email" on="email" class="text-red-400">
        Palun sisesta korrektne email
      </Hint>

      <Textfield name="question" label="Küsimus" disabled={submitted} />
      <Hint for="question" on="minLength" class="text-red-400" let:value>
        Küsimus peab sisaldama vähemalt {value} tähemärki
      </Hint>

      <button
        type="submit"
        class="w-3/5 sm:w-1/3 md:w-1/6 {!$form.valid || submitted
          ? 'cursor-not-allowed opacity-75'
          : ''}"
        disabled={!$form.valid || submitted}
      >
        Küsi!
      </button>
    </form>
  </div>
{/if}
