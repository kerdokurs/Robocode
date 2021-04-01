<script lang="typescript">
  import { Router, Link, Route } from 'svelte-navigator';
  import Footer from './lib/footer.svelte';
  import Navbar from './lib/navbar.svelte';
  import Index from './routes/index.svelte';
  import Register from './routes/register.svelte';
  import Rules from './routes/rules.svelte';
</script>

<Router>
  <Navbar />
  <main class="w-full px-4 md:w-3/5 mx-auto my-10">
    <Route path="/"><Index /></Route>
    <Route path="/reeglid"><Rules /></Route>
    <Route path="/registreeri"><Register /></Route>
  </main>
  <Footer />
</Router>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(body) {
    @apply bg-gray-800 text-white;
  }
</style>
