<script lang="ts">
  export let name: string;
  export let label: string;
</script>

<div>
  <label for={name} class="text-lg font-medium block">{label}</label>
  <input
    type="text"
    class="bg-transparent border-b-2 border-gray-200 w-full p-2 outline-none"
    {name}
  />
</div>
