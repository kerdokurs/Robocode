<script lang="ts">
  import Carousel from 'svelte-carousel';
  // import 'svelte-carousel/dist/index.css';

  let sponsors: Sponsor[] = [];

  interface Sponsor {
    imageUrl: string;
    alt: string;
  }
</script>

{#if sponsors.length}
  <div>
    <Carousel
      let:loaded
      autoplay={true}
      autoplayDuration={5000}
      let:showNextPage
    >
      {#each sponsors as sponsor, i (sponsor.imageUrl)}
        <div class="img-container bg-red-200">
          {#if loaded.includes(i)}
            <img src={sponsor.imageUrl} alt={sponsor.alt} />
          {/if}
        </div>
      {/each}
    </Carousel>
  </div>
{/if}
