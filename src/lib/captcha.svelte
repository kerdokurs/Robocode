<script lang="ts">
  import { onMount } from 'svelte';
  import { firestore, RecaptchaVerifier, serverTimeStamp } from '../firebase';

  let recaptcha: any;
  let verifier: any;

  export let verified = false;
  export let captchaHint = false;

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
</script>

<div id="recaptcha" bind:this={recaptcha} class="mt-3" />
{#if captchaHint}
  <span class="text-red-600">Palun kinnita, et sa ei ole robot</span>
{/if}
