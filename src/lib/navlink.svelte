<script lang="ts">
  import { Link } from 'svelte-navigator';

  export let to: string;
  export let text: string;
</script>

<Link
  {to}
  class="lg:inline-flex lg:w-auto w-full py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
>
  <span>{text}</span>
</Link>
