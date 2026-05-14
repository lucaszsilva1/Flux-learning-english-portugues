<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()

  const contexts = [
    { key: 'work', label: 'Trabalho', icon: '💼' },
    { key: 'travel', label: 'Viagem', icon: '✈️' },
    { key: 'study', label: 'Estudo', icon: '📚' }
  ] as const
</script>

<div class="block-card">
  <p class="block-label">Exemplos Contextualizados</p>
  <div class="examples-list">
    {#each contexts as ctx}
      <div class="example-item">
        <span class="ctx-label">{ctx.icon} {ctx.label}</span>
        <p class="en">{lesson.examples[ctx.key].en}</p>
        <p class="pt">{lesson.examples[ctx.key].pt}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .examples-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .example-item {
    padding: 14px;
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
  }
  .ctx-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(13,18,37,0.45);
    display: block;
    margin-bottom: 6px;
  }
  .en {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .pt {
    font-size: 13px;
    color: rgba(13,18,37,0.55);
    font-style: italic;
  }
</style>
