<script>
  import { Hint,minLength,useForm,validators } from 'svelte-use-form';

  const form = useForm();

  // const registerCollection = firestore.collection('registreerunud');

  const onSubmit = () => {
    const { values } = $form;
    console.log('submitted:', values);
  };
</script>

registreeri

<form use:form on:submit|preventDefault={onSubmit}>
  <input type="text" name="name" use:validators={[minLength(5)]} />
  <Hint for="name" on="minLength" let:value>
    Nimes peab olema vähemalt {value} tähemärki.
  </Hint>
</form>
