<script lang="ts">
  export let disabled: boolean = false;
  export let rounded: boolean = false;

  let classNames: string;

  export { classNames as class };
</script>

<button
  {disabled}
  type="submit"
  class="mt-8 inline-block bg-kollane text-black font-bold text-xl px-8 py-2 {rounded
    ? 'rounded-full'
    : 'rounded-sm'}"
>
  <slot />
</button>
