<script lang="ts">
  import { isLoading, _ } from 'svelte-i18n';
  import { Link } from 'svelte-navigator';
</script>

{#if !$isLoading}
  <div>
    <h1 class="text-4xl">{$_('archive.title')}</h1>
    <p>
      <a
        href="https://www.facebook.com/events/201716850900722"
        target="_blank"
        rel="noopener"
      >
        Robocode 2020
      </a>
    </p>
    <p>
      <a href="https://youtu.be/U-aSeWP7oaY" target="_blank" rel="noopener">
        Robocode 2020 {$_('archive.livestream')}
      </a>
    </p>
    <p>
      <a
        href="https://www.facebook.com/events/2110999418967390"
        target="_blank"
        rel="noopener"
      >
        Robocode 2019
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
