<script>
  import Inputfield from '../lib/inputfield.svelte';
  import { email, minLength, required, useForm, Hint } from 'svelte-use-form';
  import Textfield from '../lib/textfield.svelte';
  import Button from '../lib/button.svelte';
  import { firestore, serverTimeStamp } from '../firebase';

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

<svelte:head>
  <title>Küsi | Robocode 2021</title>
</svelte:head>

<div>
  <h1 class="text-4xl">Küsi</h1>
  <form use:form on:submit|preventDefault={onSubmit} class="grid gap-4 mt-4">
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
    <Button>Küsi!</Button>
  </form>
</div>
