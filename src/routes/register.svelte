<script>
  import Inputfield from '../lib/inputfield.svelte';
  import { Hint, minLength, useForm, validators } from 'svelte-use-form';

  const form = useForm({
    teamName: {
      validators: [minLength(5)],
    },
  });

  // const registerCollection = firestore.collection('registreerunud');

  const onSubmit = () => {
    const { values } = $form;
    console.log('submitted:', values);
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
  <div>
    <form
      use:form
      on:submit|preventDefault={onSubmit}
      class="grid grid-flow-row gap-4"
    >
      <Inputfield name="teamName" placeholder="Tiimi nimi" />

      <button
        disabled={!$form.valid}
        type="submit"
        class="bg-secondary w-24 py-2 rounded"
      >
        Esita
      </button>
    </form>
  </div>
  <div />
</div>

<!-- <form use:form on:submit|preventDefault={onSubmit}>
  <input type="text" name="name" use:validators={[minLength(5)]} />
  <Hint for="name" on="minLength" let:value>
    Nimes peab olema vähemalt {value} tähemärki.
  </Hint>
</form> -->
