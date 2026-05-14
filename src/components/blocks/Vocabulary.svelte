<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()
</script>

<div class="block-card">
  <p class="block-label">Vocabulário Essencial</p>
  <div class="vocab-grid">
    {#each lesson.core_vocabulary as item}
      <div class="vocab-card">
        <div class="vocab-top">
          <span class="word">{item.word}</span>
          <span class="pill">{item.translation}</span>
        </div>
        <p class="example">"{item.example}"</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .vocab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
  }
  .vocab-card {
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
    padding: 14px;
  }
  .vocab-top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }
  .word {
    font-weight: 700;
    font-size: 15px;
  }
  .example {
    font-size: 13px;
    color: rgba(13,18,37,0.6);
    font-style: italic;
    line-height: 1.5;
  }
</style>
