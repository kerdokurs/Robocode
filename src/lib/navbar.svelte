<script>
  import { Link } from 'svelte-navigator';
  import Navlink from './navlink.svelte';
</script>

<!-- <nav
  class="fixed top-0 flex items-center w-full px-2 md:px-14 bg-gray-900 text-white"
>
  <Link to="/" class="p-2 mr-4 inline-flex items-center">
    <span class="text-xl text-white font-bold uppercase tracking-wide">
      Robocode 2021
    </span>
  </Link>
  <button
    class="text-white inline-flex hover:bg-gray-900 rounded md:hidden ml-auto hover:text-white outline-none"
    name="mobile_menu"
  >
    <svg
      class="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      /></svg
    >
  </button>
  <div class="hidden w-full md:inline-flex md:flex-grow md:w-auto">
    <div
      class="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto gap-3"
    >
      <Navlink to="/guide" text="Juhendid" />
      <Navlink to="/reeglid" text="Reeglid" />
      <Navlink to="/ask" text="Küsi" />
      <Navlink to="/registreeri" text="Registreeri" />
    </div>
  </div>
</nav> -->

<nav class="pt-8">
  <div class="flex flex-col">
    <div class="flex flex-row justify-between w-4/5 mx-auto">
      <div class="flex flex-col justify-end">
        <img src="/img/robocode_logo.svg" alt="ROBOCODE logo" width="240" />
      </div>
      <div class="flex flex-col justify-end">
        <div class="flex flex-row gap-4">
          <button
            class="bg-transparent text-lg border border-oranz px-12 py-1 rounded-3xl focus:outline-none"
          >
            Juhend
          </button>
          <button
            class="bg-transparent text-lg border border-oranz px-12 py-1 rounded-3xl focus:outline-none"
          >
            Reeglid
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mt-4 h-1 bg-gradient-to-r from-tlilla to-oranz" />
</nav>

<style>
  nav {
    background: linear-gradient(180deg, #ffab15db 0%, #ff5c4921 94.06%);
  }
</style>
