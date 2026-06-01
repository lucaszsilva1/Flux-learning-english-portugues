<script lang="ts">
  import VocabNav from '../../components/vocab/VocabNav.svelte'
  let { children } = $props()
</script>

<div class="vocab-layout">
  <VocabNav />
  <main class="vocab-main">
    {@render children()}
  </main>
</div>

<style>
  .vocab-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--color-neutral-50);
  }
  .vocab-main {
    max-width: 720px;
    margin: 0 auto;
    padding: 32px 24px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
