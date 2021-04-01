<script lang="ts">
  export let name: string;
  export let placeholder: string;
</script>

<input
  type="text"
  class="bg-transparent border-b-2 border-white text-white w-72 p-2 outline-none"
  {name}
  {placeholder}
/>
