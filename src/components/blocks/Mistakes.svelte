<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()
</script>

<div class="block-card">
  <p class="block-label">Armadilhas Comuns</p>
  <div class="mistakes-list">
    {#each lesson.common_mistakes as m}
      <div class="mistake-item">
        <div class="mistake-row">
          <span class="wrong">✗ {m.wrong}</span>
        </div>
        <div class="correct-row">
          <span class="right">✓ {m.right}</span>
        </div>
        <p class="tip">💡 {m.tip}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .mistakes-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .mistake-item {
    padding: 14px;
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
  }
  .mistake-row, .correct-row {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .wrong {
    color: #D94040;
    text-decoration: line-through;
    text-decoration-color: #D94040;
  }
  .right {
    color: var(--color-green-300);
  }
  .tip {
    font-size: 13px;
    color: rgba(13,18,37,0.6);
    margin-top: 6px;
    line-height: 1.5;
  }
</style>
