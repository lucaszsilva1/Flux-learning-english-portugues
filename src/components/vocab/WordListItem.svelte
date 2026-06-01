<script lang="ts">
  import type { Word, WordProgress } from '$lib/vocab/types'

  let { word, progress, onclick }: {
    word: Word
    progress?: WordProgress
    onclick?: () => void
  } = $props()

  const statusLabel = $derived(
    !progress || progress.status === 'new' ? 'Novo' :
    progress.status === 'learning' ? 'Aprendendo' : 'Conhecido'
  )
  const statusClass = $derived(
    !progress || progress.status === 'new' ? 'badge-new' :
    progress.status === 'learning' ? 'badge-learning' : 'badge-known'
  )
</script>

<button class="word-item" {onclick} type="button">
  <div class="word-left">
    <span class="word-rank">#{word.frequency_rank}</span>
    <span class="word-en">{word.word}</span>
    <span class="pill cat-pill">{word.category}</span>
  </div>
  <div class="word-right">
    <span class="word-pt">{word.translation}</span>
    <span class="badge {statusClass}">{statusLabel}</span>
  </div>
</button>

<style>
  .word-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    background: white;
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: var(--radius-sm);
    cursor: pointer;
    text-align: left;
    transition: var(--transition);
    gap: 12px;
  }
  .word-item:hover {
    border-color: var(--color-orange-500);
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
  }

  .word-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    min-width: 0;
  }
  .word-rank {
    font-size: 11px;
    font-weight: 600;
    color: rgba(13,18,37,0.3);
    font-family: monospace;
    flex-shrink: 0;
  }
  .word-en {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-navy-900);
  }
  .cat-pill {
    font-size: 11px;
    padding: 3px 8px;
  }

  .word-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .word-pt {
    font-size: 14px;
    color: rgba(13,18,37,0.6);
    max-width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .badge-new     { background: rgba(0,0,0,0.06); color: rgba(13,18,37,0.5); }
  .badge-learning { background: var(--color-sand-100); color: var(--color-navy-900); }
  .badge-known   { background: var(--color-green-300); color: white; }
</style>
