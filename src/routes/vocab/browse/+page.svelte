<script lang="ts">
  import { vocabStore } from '$lib/vocab/store'
  import { words } from '$lib/vocab/words'
  import { filterWords, getCategories } from '$lib/vocab/utils'
  import type { Word } from '$lib/vocab/types'
  import WordListItem from '../../../components/vocab/WordListItem.svelte'
  import WordCard from '../../../components/vocab/WordCard.svelte'

  let query    = $state('')
  let category = $state('')
  let selected = $state<Word | null>(null)

  const categories  = getCategories(words)
  const filtered    = $derived(filterWords(words, query, category))
  const progress    = $derived($vocabStore.words)
</script>

<svelte:head><title>Browse — Vocabulário</title></svelte:head>

<div class="browse-layout">
  <div class="browse-main">
    <div class="browse-header">
      <h1 class="page-title">Browse</h1>
      <span class="count-badge">{filtered.length} palavras</span>
    </div>

    <div class="filters">
      <input
        class="search-input"
        type="text"
        placeholder="Buscar palavra em inglês ou português..."
        bind:value={query}
      />
      <select class="cat-select" bind:value={category}>
        <option value="">Todas as categorias</option>
        {#each categories as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
    </div>

    <div class="word-list">
      {#each filtered as word (word.id)}
        <WordListItem
          {word}
          progress={progress[word.id]}
          onclick={() => selected = word}
        />
      {/each}
      {#if filtered.length === 0}
        <p class="empty">Nenhuma palavra encontrada.</p>
      {/if}
    </div>
  </div>

  {#if selected}
    <div class="detail-panel">
      <button class="close-btn" onclick={() => selected = null} aria-label="Fechar">✕</button>
      <WordCard word={selected} progress={progress[selected.id]} />
    </div>
  {/if}
</div>

<style>
  .browse-layout {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .browse-header {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .page-title { font-size: 28px; font-weight: 800; margin: 0; letter-spacing: -0.02em; }
  .count-badge {
    font-size: 12px;
    font-weight: 600;
    background: rgba(0,0,0,0.06);
    color: rgba(13,18,37,0.5);
    padding: 4px 10px;
    border-radius: var(--radius-pill);
  }

  .filters { display: flex; gap: 10px; flex-wrap: wrap; }
  .search-input {
    flex: 1;
    min-width: 200px;
    padding: 10px 16px;
    border: 1.5px solid rgba(0,0,0,0.12);
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: 14px;
    color: var(--color-navy-900);
    background: white;
    transition: border-color var(--transition);
  }
  .search-input:focus { outline: none; border-color: var(--color-orange-500); }
  .cat-select {
    padding: 10px 16px;
    border: 1.5px solid rgba(0,0,0,0.12);
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: 14px;
    color: var(--color-navy-900);
    background: white;
    cursor: pointer;
  }
  .cat-select:focus { outline: none; border-color: var(--color-orange-500); }

  .word-list { display: flex; flex-direction: column; gap: 6px; }
  .empty { text-align: center; color: rgba(13,18,37,0.4); padding: 32px; font-size: 14px; }

  .detail-panel {
    position: relative;
    background: white;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }
  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0,0,0,0.06);
    border: none;
    border-radius: var(--radius-pill);
    width: 28px;
    height: 28px;
    font-size: 14px;
    cursor: pointer;
    color: rgba(13,18,37,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: var(--transition);
  }
  .close-btn:hover { background: rgba(0,0,0,0.12); }
</style>
