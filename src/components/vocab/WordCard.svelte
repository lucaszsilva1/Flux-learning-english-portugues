<script lang="ts">
  import type { Word, WordProgress } from '$lib/vocab/types'

  let { word, progress }: { word: Word; progress?: WordProgress } = $props()

  const statusLabel = $derived(
    !progress || progress.status === 'new' ? 'Novo' :
    progress.status === 'learning' ? 'Aprendendo' : 'Conhecido'
  )
  const statusClass = $derived(
    !progress || progress.status === 'new' ? 'badge-new' :
    progress.status === 'learning' ? 'badge-learning' : 'badge-known'
  )

  const posLabel: Record<string, string> = {
    noun: 'substantivo', verb: 'verbo', adjective: 'adjetivo',
    adverb: 'advérbio', preposition: 'preposição', conjunction: 'conjunção',
    pronoun: 'pronome', other: 'outra classe'
  }
</script>

<div class="word-card block-card">
  <div class="word-header">
    <div class="word-meta">
      <span class="pill">{word.category}</span>
      <span class="pos-tag">{posLabel[word.pos] ?? word.pos}</span>
    </div>
    <span class="badge {statusClass}">{statusLabel}</span>
  </div>

  <div class="word-main">
    <h2 class="word-en">{word.word}</h2>
    {#if word.pronunciation}
      <span class="pronunciation">{word.pronunciation}</span>
    {/if}
    <p class="word-pt">{word.translation}</p>
  </div>

  <div class="word-example">
    <p class="example-en">"{word.example}"</p>
    <p class="example-pt">{word.example_pt}</p>
  </div>

  {#if progress && progress.reviews > 0}
    <p class="word-stats">
      {progress.reviews} revisões · {progress.correct} acertos
    </p>
  {/if}
</div>

<style>
  .word-card { padding: 24px; }

  .word-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .word-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

  .pos-tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: rgba(13,18,37,0.45);
    text-transform: uppercase;
  }

  .word-main { margin-bottom: 16px; }

  .word-en {
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--color-navy-900);
    margin: 0 0 4px;
    line-height: 1.1;
  }
  .pronunciation {
    display: block;
    font-size: 14px;
    color: rgba(13,18,37,0.45);
    margin-bottom: 8px;
    font-family: monospace;
  }
  .word-pt {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-orange-500);
    margin: 0;
  }

  .word-example {
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
    padding: 14px 16px;
    margin-bottom: 12px;
  }
  .example-en {
    font-size: 15px;
    font-style: italic;
    color: var(--color-navy-900);
    margin: 0 0 4px;
    line-height: 1.5;
  }
  .example-pt {
    font-size: 13px;
    color: rgba(13,18,37,0.55);
    margin: 0;
    line-height: 1.5;
  }

  .word-stats {
    font-size: 12px;
    color: rgba(13,18,37,0.4);
    margin: 0;
    text-align: right;
  }

  .badge-new     { background: rgba(0,0,0,0.06); color: rgba(13,18,37,0.5); }
  .badge-learning { background: var(--color-sand-100); color: var(--color-navy-900); }
  .badge-known   { background: var(--color-green-300); color: white; }
</style>
