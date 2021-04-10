<script>
  import { Link } from 'svelte-navigator';
</script>

<nav class="pt-8 bg-gradient-to-b from-kollane to-tlilla">
  <div class="flex flex-col">
    <div
      class="flex flex-col md:flex-row justify-between px-2 md:px-0 w-full md:w-4/5 mx-auto"
    >
      <div class="flex flex-col justify-end">
        <Link to="/" class="w-full md:w-80">
          <img
            src="/img/robocode_logo.svg"
            alt="ROBOCODE logo"
            class="w-full"
          />
        </Link>
      </div>

      <div class="flex flex-col justify-end mt-3 md:mt-0 items-center">
        <div class="flex flex-row gap-4">
          <Link
            to="/juhend"
            class="bg-transparent inline-block text-lg border border-oranz px-12 py-1 rounded-full focus:outline-none"
          >
            Juhend
          </Link>

          <Link
            to="/reeglid"
            class="bg-transparent inline-block text-lg border border-oranz px-12 py-1 rounded-full focus:outline-none"
          >
            Reeglid
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full mt-4 h-1 bg-gradient-to-r from-tlilla to-oranz" />
</nav>

<style>
  /* nav {
    background: linear-gradient(180deg, #ffab15db 0%, #ff5c4921 94.06%);
  } */
</style>
