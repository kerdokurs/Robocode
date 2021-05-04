<script lang="ts">
  import { isLoading, _ } from 'svelte-i18n';
  import { Link } from 'svelte-navigator';
</script>

{#if !$isLoading}
  <div class="flex flex-col gap-1">
    <h1 class="text-4xl">{$_('archive.title')}</h1>

    <h2 class="text-2xl mt-4">Robocode 2020</h2>
    <p>{$_('archive.winner')}: Rainer Vakra protež€€d</p>

    <p>{$_('archive.participants')}:</p>
    <ul class="list-inside list-disc">
      <li>roosad Roombad</li>
      <li>); DROP TABLE TEAMS; --</li>
      <li>QWERTY</li>
      <li>Anonymous Python</li>
      <li>MustPiuPiu</li>
      <li>Panzertank</li>
    </ul>

    <p>
      <a
        href="https://www.facebook.com/events/201716850900722"
        target="_blank"
        rel="noopener"
      >
        Facebook event
      </a>
    </p>

    <p>
      <a href="https://youtu.be/U-aSeWP7oaY" target="_blank" rel="noopener">
        Robocode 2020 {$_('archive.livestream')}
      </a>
    </p>

    <h2 class="text-2xl mt-4">Robocode 2019</h2>

    <p>{$_('archive.participants')}:</p>
    <ul class="list-inside list-disc">
      <li>Vasja Traktor</li>
      <li>Wololo</li>
      <li>Dva debila eta sila</li>
      <li>Hyperion</li>
      <li>Mehmet Çelen</li>
      <li>Kirmann</li>
      <li>OCD</li>
      <li>HESOYAM</li>
      <li>Papist Panzer IV</li>
      <li>The Turf Nerds</li>
      <li>Teras</li>
      <li>Pitkoin</li>
      <li>Informaatiku Lollid Luuad</li>
      <li>Agonaudid</li>
      <li>Kaherattaline</li>
      <li>Triumviraat</li>
      <li>3rida</li>
      <li>;DROP TABLE Tiiminimed;--</li>
      <li>AKM</li>
      <li>Quaraseeque</li>
    </ul>

    <p>
      <a
        href="https://www.facebook.com/events/2110999418967390"
        target="_blank"
        rel="noopener"
      >
        Facebook event
      </a>
    </p>

    <p>
      <Link to="/juhend" class="border-b border-white">{$_('nav.guide')}</Link>
    </p>
  </div>
{/if}

<style>
  a {
    @apply border-b;
    @apply border-white;
  }

  p {
    @apply mt-3;
  }
</style>
