<script>
  import { Link } from 'svelte-navigator';
  import { _, isLoading } from 'svelte-i18n';
  import Est from './lang/est.svelte';
  import Eng from './lang/eng.svelte';
  import { getLocale, setLocale } from '../locale/locale';

  const changeLocale = (locale: 'et' | 'en'): void => {
    setLocale(locale);
    window.location.reload();
  };
</script>

{#if !$isLoading}
  <nav class="pt-8 bg-gradient-to-b from-kollane to-tlilla">
    <div class="flex flex-col">
      <div
        class="flex flex-col md:flex-row justify-between px-2 md:px-0 w-full md:w-4/5 mx-auto"
      >
        <div class="flex flex-col justify-end">
          <Link to="/" class="w-full md:w-80">
            <img
              src="/img/robocode_logo.svg"
              alt="Robocode logo"
              class="w-full"
            />
          </Link>
        </div>

        <div class="flex flex-col justify-end mt-3 md:mt-0 items-center">
          <div class="flex flex-row gap-4 flex-wrap justify-center">
            <Link
              to="/juhend"
              class="bg-transparent inline-block text-lg border border-oranz px-8 py-1 rounded-full focus:outline-none"
            >
              {$_('nav.guide')}
            </Link>

            <Link
              to="/reeglid"
              class="bg-transparent inline-block text-lg border border-oranz px-8 py-1 rounded-full focus:outline-none"
            >
              {$_('nav.rules')}
            </Link>

            <div class="inline-flex flex-row items-end gap-2">
              <p
                class="transform cursor-pointer {getLocale() === 'et'
                  ? 'scale-125'
                  : 'scale-100'}"
                on:click={() => changeLocale('et')}
              >
                <Est />
              </p>
              <p
                class="cursor-pointer {getLocale() === 'en'
                  ? 'scale-125'
                  : 'scale-100'}"
                on:click={() => changeLocale('en')}
              >
                <Eng />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full mt-4 h-1 bg-gradient-to-r from-tlilla to-oranz" />
  </nav>
{/if}

<style>
  /* nav {
    background: linear-gradient(180deg, #ffab15db 0%, #ff5c4921 94.06%);
  } */
</style>
