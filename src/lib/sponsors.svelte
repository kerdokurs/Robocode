<script lang="ts">
  // @ts-nocheck
  import Carousel from 'svelte-carousel';

  let sponsors: Batch[] = [
    {
      sponsors: [
        {
          imageUrl:
            'http://skypemafia.com/wp-content/uploads/2016/03/pipedrive-logo.png',
          alt: 'Pipedrive1',
        },
      ],
    },
    {
      sponsors: [
        {
          imageUrl:
            'http://skypemafia.com/wp-content/uploads/2016/03/pipedrive-logo.png',
          alt: 'Pipedrive2',
        },
        {
          imageUrl:
            'http://skypemafia.com/wp-content/uploads/2016/03/pipedrive-logo.png',
          alt: 'Pipedrive3',
        },
        {
          imageUrl:
            'http://skypemafia.com/wp-content/uploads/2016/03/pipedrive-logo.png',
          alt: 'Pipedrive4',
        },
      ],
    },
  ];

  interface Sponsor {
    imageUrl: string;
    alt: string;
  }

  interface Batch {
    sponsors: Sponsor[];
  }
</script>

{#if sponsors.length}
  <div class="block col-span-12 order-5">
    <Carousel
      let:loaded
      autoplay={sponsors.length >= 2}
      autoplayDuration={5000}
    >
      {#each sponsors as batch, i (i)}
        <div class="flex flex-row">
          {#each batch.sponsors as sponsor}
            <!-- {#if loaded.includes()} -->
            <img src={sponsor.imageUrl} alt={sponsor.alt} />
            <!-- {/if} -->
          {/each}
        </div>
      {/each}
    </Carousel>
  </div>
{/if}
