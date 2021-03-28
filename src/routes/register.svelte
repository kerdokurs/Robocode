<script>
  import { firestore } from '../firebase';
</script>

registreeri
{#if firestore}
  <p>firebase was initialized correctly!</p>
{/if}
