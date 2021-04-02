<footer class="flex flex-col items-center border-t-2 border-gray-200 px-2 pt-8">
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
          <span class="ml-3">email@example.ee</span>
        </div>
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
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span class="ml-3">
            <a href="https://mits.ee/">mits.ee</a>
          </span>
        </div>
      </div>
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
          <span class="ml-3">email@example.ee</span>
        </div>
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
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span class="ml-3">
            <a href="https://ituk.ee/">ituk.ee</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-full md:w-3/5 mt-4 border-t border-gray-200 text-center text-md"
  >
    <p class="mt-2 mb-2">
      &copy; MITS & ITÜK {new Date().getFullYear()}.
      <span>
        <a
          href="https://github.com/kerdokurs/Robocode"
          target="_blank"
          class="hover:text-white"
        >
          GitHub
        </a>
      </span>
    </p>
  </div>
</footer>

<style lang="scss">
  .grid {
    & > div {
      @apply text-center;
    }
  }
</style>
