<script>
  import { onMount } from 'svelte';
  import { email, required, useForm } from 'svelte-use-form';
  import { firestore } from '../firebase';
  import Button from '../lib/button.svelte';
  import Inputfield from '../lib/inputfield.svelte';

  // let recaptcha: any;
  // let verifier;

  const form = useForm({
    teamName: {
      validators: [required],
    },
    teamCaptain: {
      validators: [required],
    },
    captainEmail: {
      validators: [email],
    },
    captainNumber: {
      validators: [required],
    },
  });

  onMount(() => {
    // verifier = new RecaptchaVerifier(recaptcha, {
    //   size: 'invisible',
    //   callback: (res: any) => {
    //     console.log(res);
    //   },
    //   'expired-callback': () => {
    //     console.log('expired');
    //   },
    // });
    // verifier.verify();
  });

  const registerCollection = firestore.collection('registers');

  const onSubmit = () => {
    const { values } = $form;
    registerCollection.add({
      ...values,
    });
    console.log('submitted:', values);
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
    <Inputfield name="teamName" label="Tiimi nimi" />
    <Inputfield name="captainName" label="Tiimi kapten" />
    <Inputfield name="captainEmail" label="Kapteni email" />
    <Inputfield name="captainNumber" label="Kapteni telefon" />

    <!-- <div id="recaptcha" bind:this={recaptcha} /> -->

    <Button>Esita</Button>
  </form>
</div>
