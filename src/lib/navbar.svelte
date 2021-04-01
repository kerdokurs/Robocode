<script>
  import { Link } from 'svelte-navigator';
  import Navlink from './navlink.svelte';

  let extended = false;
</script>

<nav class="flex items-center w-full px-14 bg-gray-900 text-white">
  <Link to="/" class="p-2 mr-4 inline-flex items-center">
    <span class="text-xl text-white font-bold uppercase tracking-wide">
      Robocode 2021
    </span>
  </Link>
  <button
    class="text-white inline-flex hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
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
  <div class="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
    <div
      class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
    >
      <Navlink to="/reeglid" text="Reeglid" />
      <Navlink to="/registreeri" text="Registreeri" />
    </div>
  </div>
</nav>
