<script>
  import { Link } from 'svelte-navigator';
  import Ask from '../lib/ask.svelte';
</script>

<svelte:head>
  <title>Robocode 2021</title>
</svelte:head>

<div class="grid grid-cols-12 gap-y-12 md:gap-y-20 gap-x-0 lg:gap-x-12">
  <div class="block col-span-12 md:col-span-6 order-1 text-center md:text-left">
    <h1 class="text-4xl leading-tight text-left">
      Pane end proovile Robocode'il!
    </h1>

    <p class="font-medium mt-3 text-xl text-left">
      Tule tõesta oma progemisoskusi tuntud võistlusprogrammeerimisüritusel -
      Robocode! Registreeru koos oma tiimiga!
    </p>

    <Link to="registreeri" class="button text-xl mx-auto">Registreerimine</Link>
  </div>

  <div class="block col-span-12 lg:col-span-6 order-2">
    <img src="/img/bot.gif" alt="ROBOCODE GIF" class="w-auto m-auto" />
  </div>

  <div
    class="flex lg:block lg:py-12 col-span-12 lg:col-span-7 order-4 lg:order-3"
  >
    <img src="/img/battle.png" alt="" class="mx-auto lg:mx-0" />
  </div>

  <div class="info my-12 col-span-12 lg:col-span-5 order-3 lg:order-4">
    <div class="bg-taust w-full h-full p-4 text-center">
      <h2 class="text-4xl font-extrabold text-left">Mis on Robocode?</h2>

      <div class="text-lg text-left mt-2">
        <p class="mt-1">
          Robocode on programmeerimismäng, kus mängija ülesandeks on kirjutada
          lahingutank, mis võistleb lahinguväljal teiste tankide vastu.
        </p>
        <p class="mt-1">
          Mängija on roboti programmeerija, kellel ei ole mängu toimumise ajal
          mingit otsest mõju mängukursile. Mängija peab kirjutama roboti AI, mis
          määrab roboti käitumise ja reageerimise lahinguväljal toimuvatele
          sündmustele.
        </p>
        <p class="mt-1">
          Võistlemine lahinguväljal toimub reaalajas, kus kuuerattalised
          automatiseeritud tankid võitlevad niikaua, kuni ainult võitja jääb
          järele.
        </p>
      </div>

      <!-- <button class="rounded-full">Soovid rohkem infot?</button> -->
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
