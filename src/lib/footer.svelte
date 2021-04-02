<footer class="flex flex-col items-center border-t-2 border-white px-2 pt-8">
  <div class="w-full grid md:w-3/5">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div class="flex">
        <img
          src="/img/logo_tekstiga-valge.png"
          alt="MITS logo"
          class="mx-auto h-12"
        />
      </div>
      <div class="flex flex-col">
        <div class="m-auto flex">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            /></svg
          >
          <span class="ml-3">example@example.ee</span>
        </div>
      </div>
      <div />
      <div class="flex">
        <img
          src="https://praktikakohvik.ituk.ee/static/37b7551d24e3cc72853394dfa8025fc1/ituktaltechlogo.svg"
          alt="ITÜK logo"
          class="h-12 mx-auto"
        />
      </div>
      <div class="flex flex-row">
        <div class="m-auto flex">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            /></svg
          >
          <span class="ml-3">example@example.ee</span>
        </div>
      </div>
      <div />
    </div>
  </div>
  <div class="w-full md:w-3/5 mt-4 border-t border-white text-center text-md">
    <p class="mt-2 mb-2">&copy; MITS & ITÜK {new Date().getFullYear()}.</p>
  </div>
</footer>

<style lang="scss">
  .grid {
    & > div {
      @apply text-center;
    }
  }
</style>
