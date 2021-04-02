<script lang="ts">
  export let disabled: boolean = false;

  let classNames: string;

  export { classNames as class };
</script>

<button
  {disabled}
  type="submit"
  class="bg-secondary w-24 py-2 rounded uppercase font-bold {classNames}"
>
  <slot />
</button>
