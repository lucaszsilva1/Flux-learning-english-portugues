<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()
</script>

<div class="block-card">
  <p class="block-label">Anatomia da Estrutura</p>
  <p class="pattern-box">{lesson.pattern}</p>
  <div class="breakdown">
    {#each lesson.breakdown as item}
      <div class="breakdown-row">
        <span class="piece">{item.piece}</span>
        <span class="role">{item.role}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .pattern-box {
    font-family: monospace;
    font-size: 14px;
    background: var(--color-neutral-50);
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    margin-bottom: 16px;
    color: var(--color-purple-400);
    font-weight: 600;
  }
  .breakdown {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .breakdown-row {
    display: flex;
    gap: 12px;
    align-items: baseline;
    font-size: 14px;
  }
  .piece {
    font-family: monospace;
    font-weight: 700;
    color: var(--color-navy-900);
    min-width: 120px;
    flex-shrink: 0;
  }
  .role {
    color: rgba(13,18,37,0.6);
  }
</style>
