<script lang="typescript">
  import { Route, Router } from 'svelte-navigator';
  import Footer from './lib/footer.svelte';
  import Navbar from './lib/navbar.svelte';
  import Guide from './routes/guide.svelte';
  import Index from './routes/index.svelte';
  import Register from './routes/register.svelte';
  import Rules from './routes/rules.svelte';
</script>

<Router>
  <Navbar />
  <main class="w-full h-full md:w-4/5 mx-auto px-4 py-6 md:py-20">
    <Route path="/" primary={false}><Index /></Route>
    <Route path="/reeglid" primary={false}><Rules /></Route>
    <Route path="/registreeri" primary={false}><Register /></Route>
    <Route path="/juhend" primary={false}><Guide /></Route>
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
    @apply bg-taust text-gray-200;
  }

  :global(button),
  :global(.button) {
    @apply mt-8 inline-block bg-kollane text-black font-bold px-8 py-2 rounded-lg;
  }
</style>
