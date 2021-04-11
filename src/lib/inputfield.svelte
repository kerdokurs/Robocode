<script lang="ts">
  export let name: string;
  export let label: string;

  export let disabled: boolean = false;
  export let email: boolean = false;
</script>

{#if email}
  <div>
    <label for={name} class="text-lg font-medium block">{label}</label>
    <input
      type="email"
      {disabled}
      class="bg-transparent border-b-2 border-kollane w-full p-2 outline-none {disabled
        ? 'text-gray-400'
        : ''}"
      {name}
    />
  </div>
{:else}
  <div>
    <label for={name} class="text-lg font-medium block">{label}</label>
    <input
      type="text"
      {disabled}
      class="bg-transparent border-b-2 border-kollane w-full p-2 outline-none {disabled
        ? 'text-gray-400'
        : ''}"
      {name}
    />
  </div>
{/if}
