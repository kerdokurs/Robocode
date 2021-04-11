<script>
  import { Link } from 'svelte-navigator';
  import Ask from '../lib/ask.svelte';
</script>

<svelte:head>
  <title>Robocode 2021</title>
</svelte:head>

<div class="grid grid-cols-12 gap-y-12 md:gap-y-20 gap-x-0 md:gap-x-8">
  <div class="block col-span-12 md:col-span-6 order-1 text-center md:text-left">
    <h1 class="text-4xl leading-tight text-left">
      Pane end proovile Robocodeil!
    </h1>

    <p class="font-medium mt-3 text-xl text-left">
      Tule tõesta oma progemisoskusi tuntud võistlusprogrammeerimisüritusel -
      Robocode! Registreeru koos oma tiimiga!
    </p>

    <Link to="registreeri" class="button text-xl mx-auto">Registreerimine</Link>
  </div>

  <div class="block col-span-12 md:col-span-6 order-2">
    <img src="/img/bot.gif" alt="ROBOCODE GIF" class="w-auto m-auto" />
  </div>

  <div class="md:py-12 col-span-12 md:col-span-6 order-4 md:order-3">
    <img src="/img/battle.png" alt="" />
  </div>

  <div class="info col-span-12 md:col-span-6 order-3 md:order-4">
    <div class="bg-taust w-full h-full p-4 text-center">
      <h2 class="text-4xl font-extrabold text-left">Mis on Robocode?</h2>

      <p class="mt-3 text-lg text-left">
        Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin
        porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia
        non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet,
        augue eros luctus sapien, ut euismod leo tortor ac enim. In hac
        habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis
        diam volutpat sit amet. Sed tellus augue, hendrerit eu rutrum in,
        porttitor at metus.
      </p>

      <button class="rounded-full">Soovid rohkem infot?</button>
    </div>
  </div>

  <Ask />
</div>

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
