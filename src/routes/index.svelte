<script>
  import { Link } from 'svelte-navigator';
  import Ask from '../lib/ask.svelte';
  import { isLoading, _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>Robocode 2021</title>
</svelte:head>

{#if !$isLoading}
  <div class="grid grid-cols-12 gap-y-12 md:gap-y-20 gap-x-0 lg:gap-x-12">
    <div
      class="block col-span-12 md:col-span-6 order-1 text-center md:text-left"
    >
      <h1 class="text-4xl leading-tight text-left">
        {$_('index.main.header')}
      </h1>

      <p class="font-medium mt-3 text-xl text-left">
        {$_('index.main.subheader')}
      </p>

      <Link to="registreeri" class="button text-xl mx-auto"
        >{$_('index.main.register')}</Link
      >
    </div>

    <div class="block col-span-12 lg:col-span-6 order-2">
      <img src="/img/bot.gif" alt="Robocode GIF" class="w-auto m-auto" />
    </div>

    <div
      class="flex lg:block lg:py-12 col-span-12 lg:col-span-7 order-4 lg:order-3"
    >
      <img src="/img/battle.png" alt="" class="mx-auto lg:mx-0" />
    </div>

    <div class="info my-12 col-span-12 lg:col-span-5 order-3 lg:order-4">
      <div class="bg-taust w-full h-full p-4 text-center">
        <h2 class="text-4xl font-extrabold text-left">
          {$_('index.side.header')}
        </h2>

        <div class="text-lg text-left mt-2">
          {#each $_('index.side.paragraphs') as p}
            <p class="mt-1">{@html p}</p>
          {/each}
        </div>

        <a
          class="button rounded-full"
          href="https://robocode.sourceforge.io/"
          target="_blank"
          rel="noopener">{$_('index.side.more')}</a
        >
      </div>
    </div>

    <Ask />
  </div>
{/if}

<style>
  .info {
    background-image: linear-gradient(
      to bottom,
      #ff5c49,
      #d73f52,
      #aa2b53,
      #7a1e4c,
      #4c153c,
      #4c153c,
      #4c153c,
      #4c153c,
      #7a1e4c,
      #aa2b53,
      #d73f52,
      #ff5c49
    );
    padding: 2px;
  }
</style>
