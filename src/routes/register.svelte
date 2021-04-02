<script>
  import Button from '../lib/button.svelte';
  import { onMount } from 'svelte';
  import { email, minLength, required, useForm } from 'svelte-use-form';
  import { firestore } from '../firebase';
  import Inputfield from '../lib/inputfield.svelte';

  let recaptcha: any;
  let verifier;

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
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-4">
    <div>
      <form
        use:form
        on:submit|preventDefault={onSubmit}
        class="grid grid-flow-row gap-4 w-full md:w-4/5"
      >
        <Inputfield name="teamName" label="Tiimi nimi" />
        <Inputfield name="captainName" label="Tiimi kapten" />
        <Inputfield name="captainEmail" label="Kapteni email" />
        <Inputfield name="captainNumber" label="Kapteni telefon" />

        <div id="recaptcha" bind:this={recaptcha} />

        <Button>Esita</Button>
      </form>
    </div>
    <div class="mt-12 md:mt-0">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
        consectetur eveniet tempore aperiam nulla qui eligendi excepturi
        veritatis. Et molestiae fuga, dolor, debitis dolorum, suscipit cum
        expedita odit nam molestias nostrum culpa eum vero inventore ab quasi?
        Odit, ex. Ad recusandae voluptates aspernatur impedit illo, saepe eum
        nihil necessitatibus expedita earum voluptatum harum soluta labore iure
        a quasi, hic culpa?
      </p>
      <p class="mt-2">
        Omnis nam quod quaerat est eum ut temporibus fugit et quas ipsum,
        corrupti aperiam aut delectus voluptatibus commodi hic, quidem modi
        reprehenderit officia ipsa laudantium! Perspiciatis ullam vitae neque
        non sint, tenetur facere modi beatae libero ad architecto mollitia iste
        esse quaerat, inventore distinctio saepe nostrum recusandae error
        cupiditate excepturi. Ipsa, rerum aperiam. Enim sapiente ut quasi,
        possimus delectus quaerat.
      </p>
      <p class="mt-2">
        Iure aspernatur quae commodi. Quasi qui excepturi obcaecati a,
        dignissimos voluptatum molestias quo natus quis repellendus sed quaerat
        inventore consectetur nisi error earum, aperiam, optio harum deserunt
        eligendi! Pariatur minus cupiditate sapiente magnam ipsum repudiandae
        voluptate, laudantium nostrum recusandae quod iste quidem quam facere
        eligendi iure expedita neque odit, qui tenetur necessitatibus,
        distinctio accusamus aut. Beatae, non. Maiores, velit. Explicabo.
      </p>
    </div>
  </div>
</div>
