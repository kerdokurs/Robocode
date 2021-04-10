<script>
  import { email, Hint, minLength, required, useForm } from 'svelte-use-form';
  import { firestore, serverTimeStamp } from '../firebase';
  import Inputfield from './inputfield.svelte';
  import Textfield from './textfield.svelte';

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

  const onSubmit = () => {
    const { values } = $form;
    collection.add({
      ...values,
      createdAt: serverTimeStamp(),
    });

    console.log('Submitted:', values);
  };
</script>

<div class="col-span-12 order-5">
  <h1 class="text-4xl">Lisaküsimuste korral täida vorm</h1>

  <form use:form on:submit|preventDefault={onSubmit} class="grid gap-4 mt-3">
    <Inputfield name="name" label="Nimi" />
    <Hint for="name" on="minLength" class="text-red-400" let:value>
      Nimi peab sisaldama vähemalt {value} tähemärki
    </Hint>

    <Inputfield name="email" label="Email" />
    <Hint for="email" on="email" class="text-red-400">
      Palun sisesta korrektne email
    </Hint>

    <Textfield name="question" label="Küsimus" />
    <Hint for="question" on="minLength" class="text-red-400" let:value>
      Küsimus peab sisaldama vähemalt {value} tähemärki
    </Hint>

    <button
      type="submit"
      disabled={!$form.valid}
      class="w-3/5 sm:w-1/3 md:w-1/6 rounded-full mx-auto md:mx-0"
    >
      Küsi!
    </button>
  </form>
</div>
