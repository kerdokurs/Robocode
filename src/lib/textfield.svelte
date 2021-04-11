<script lang="ts">
  export let name: string;
  export let label: string;

  export let disabled: boolean = false;
</script>

<div>
  <label for={name} class="text-lg font-medium block">{label}</label>
  <textarea
    {name}
    {disabled}
    class="bg-transparent border-b-2 border-kollane text-white w-full p-2 outline-none {disabled
      ? 'text-gray-400'
      : ''}"
  />
</div>
