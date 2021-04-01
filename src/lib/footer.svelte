<footer class="flex flex-col items-center border-t-2 border-white px-2 pt-8">
  <div class="w-full grid md:w-3/5">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div>
        <img src="/img/logo_tekstiga-valge.png" alt="" />
      </div>
      <div class="text-center">MITS INFO</div>
      <div class="text-center">MITS LINK</div>
      <div>
        <img
          src="https://praktikakohvik.ituk.ee/static/37b7551d24e3cc72853394dfa8025fc1/ituktaltechlogo.svg"
          alt=""
        />
      </div>
      <div>ITÜK INFO</div>
      <div>ITÜK LINK</div>
    </div>
  </div>
  <div class="w-full md:w-3/5 mt-4 border-t border-white text-center text-md">
    <p class="mt-2">&copy; MITS & ITÜK {new Date().getFullYear()}.</p>
  </div>
</footer>

<style lang="scss">
  .grid {
    & > div {
      @apply text-center;
    }
  }
</style>
