<script>
  import { email, Hint, minLength, required, useForm } from 'svelte-use-form';
  import { firestore, serverTimeStamp } from '../firebase';
  import Inputfield from './inputfield.svelte';
  import Textfield from './textfield.svelte';
  import { fade } from 'svelte/transition';
  import { isLoading, _ } from 'svelte-i18n';

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

{#if !$isLoading}
  {#if submitted}
    <div class="col-span-12 order-6" in:fade>
      <h1 class="text-4xl">{$_('ask.success')}</h1>
      <p class="text-xl mt-3">{$_('ask.respond')}</p>
    </div>
  {:else}
    <div class="col-span-12 order-6" out:fade>
      <h1 class="text-4xl">{$_('ask.header')}</h1>

      <form
        use:form
        on:submit|preventDefault={onSubmit}
        class="grid gap-4 mt-3"
      >
        <Inputfield name="name" label={$_('ask.name')} disabled={submitted} />
        <Hint for="name" on="minLength" class="text-red-400" let:value>
          {$_('ask.name_must')}
          {value}
          {$_('ask.name_char')}
        </Hint>

        <Inputfield name="email" label={$_('ask.email')} disabled={submitted} />
        <Hint for="email" on="email" class="text-red-400">
          {$_('ask.email_correct')}
        </Hint>

        <Textfield
          name="question"
          label={$_('ask.question')}
          disabled={submitted}
        />
        <Hint for="question" on="minLength" class="text-red-400" let:value>
          {$_('ask.question_must')}
          {value}
          {$_('ask.question_char')}
        </Hint>

        <button
          type="submit"
          class="w-3/5 sm:w-1/3 md:w-1/6 {!$form.valid || submitted
            ? 'cursor-not-allowed opacity-75'
            : ''}"
          disabled={!$form.valid || submitted}
        >
          {$_('ask.ask')}
        </button>
      </form>
    </div>
  {/if}
{/if}
