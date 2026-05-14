<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()

  const contexts = [
    { key: 'work',   label: 'Trabalho', icon: '💼', accent: 'var(--color-blue-500)' },
    { key: 'travel', label: 'Viagem',   icon: '✈️', accent: 'var(--color-orange-500)' },
    { key: 'study',  label: 'Estudo',   icon: '📚', accent: 'var(--color-green-300)' }
  ] as const
</script>

<div class="block-card">
  <p class="block-label">Exemplos Contextualizados</p>
  <div class="examples-list">
    {#each contexts as ctx}
      <div class="example-item" style="--accent: {ctx.accent}">
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
    gap: 10px;
  }
  .example-item {
    padding: 14px 14px 14px 18px;
    background: white;
    border: 1px solid rgba(0,0,0,0.07);
    border-left: 3px solid var(--accent);
    border-radius: var(--radius-md);
  }
  .ctx-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    display: block;
    margin-bottom: 6px;
    opacity: 0.85;
  }
  .en {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .pt {
    font-size: 13px;
    color: rgba(13,18,37,0.5);
    font-style: italic;
  }
</style>
