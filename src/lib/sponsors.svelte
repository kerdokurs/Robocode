<script lang="ts">
  // @ts-nocheck
  import Carousel from 'svelte-carousel';

  let sponsors: Sponsor[] = [];

  interface Sponsor {
    imageUrl: string;
    alt: string;
  }
</script>

{#if sponsors.length}
  <div class="block col-span-12 order-5">
    <Carousel
      let:loaded
      autoplay={sponsors.length >= 2}
      autoplayDuration={5000}
    >
      {#each sponsors as sponsor, i (sponsor.imageUrl)}
        <div class="flex flex-row justify-center">
          {#if loaded.includes(i)}
            <img src={sponsor.imageUrl} alt={sponsor.alt} />
          {/if}
        </div>
      {/each}
    </Carousel>
  </div>
{/if}
