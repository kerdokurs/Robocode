<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
  <title>Juhendid | Robocode 2021</title>
</svelte:head>

{#if !$isLoading}
  <div>
    <h1 class="text-4xl">{$_('guide.header')}</h1>
    <p class="mt-3 text-lg">
      {$_('guide.text')}
    </p>
    <div class="iframe-wrapper mt-3">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Fa8LU7tB1yM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
{/if}

<style>
  .iframe-wrapper {
    position: relative;
    padding-bottom: 56.1%;
    height: 0;
    overflow: hidden;
  }

  .iframe-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
