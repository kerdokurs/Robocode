<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
  <title>Reeglid | Robocode 2021</title>
</svelte:head>

{#if !$isLoading}
  <div class="font-medium text-lg mb-0 md:mb-14">
    <h1 class="text-4xl">{$_('rules.header')}</h1>
    <h2 class="mt-4 text-2xl">{$_('rules.participating.header')}</h2>
    <ul class="list-decimal list-inside">
      {#each $_('rules.participating.rules') as rule}
        <li>{@html rule}</li>
      {/each}
    </ul>
    <h2 class="mt-4 text-2xl">
      {$_('rules.tech.header')}
    </h2>
    <ul class="list-decimal list-inside">
      {#each $_('rules.tech.rules') as rule}
        <li>{@html rule}</li>
      {/each}
    </ul>
  </div>
{/if}
