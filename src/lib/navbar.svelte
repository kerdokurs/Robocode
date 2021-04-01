<script>
  import { Link } from 'svelte-navigator';
</script>

<nav class="flex w-full h-14 px-14 bg-gray-900 text-white">
  <div class="flex justify-between w-full my-auto">
    <h1><Link to="/" class="text-xl">Robocode 2021</Link></h1>
    <div class="grid gap-4 grid-flow-col">
      <Link to="/reeglid">Reeglid</Link>
      <Link to="/registreeri">Registreerimine</Link>
    </div>
  </div>
</nav>

<style>
</style>
