<script lang="ts">
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  import { vocabStore } from '$lib/vocab/store'
  import { words } from '$lib/vocab/words'
  import { getSessionCards } from '$lib/vocab/srs'
  import type { Word } from '$lib/vocab/types'
  import FlashcardSession from '../../../components/vocab/FlashcardSession.svelte'

  let cards  = $state<Word[]>([])
  let ready  = $state(false)

  onMount(() => {
    const data = get(vocabStore)
    cards = getSessionCards(words, data)
    ready = true
  })

  const progress = $derived($vocabStore.words)
</script>

<svelte:head><title>Flashcard — Vocabulário</title></svelte:head>

<div class="flash-page">
  <div class="page-header">
    <h1 class="page-title">Flashcard</h1>
    <p class="page-sub">Vire o card, avalie seu conhecimento</p>
  </div>

  {#if !ready}
    <div class="loading block-card">Carregando sessão...</div>
  {:else if cards.length === 0}
    <div class="empty-state block-card">
      <p class="empty-icon">🎉</p>
      <h2>Tudo em dia!</h2>
      <p>Nenhuma palavra para revisar agora. Volte amanhã ou explore no Browse.</p>
      <div class="empty-actions">
        <a href="/vocab/browse" class="btn-primary">Browse</a>
        <a href="/vocab" class="btn-ghost">Dashboard</a>
      </div>
    </div>
  {:else}
    <FlashcardSession {cards} userProgress={progress} />
  {/if}
</div>

<style>
  .flash-page { display: flex; flex-direction: column; gap: 20px; }

  .page-header { margin-bottom: 4px; }
  .page-title { font-size: 28px; font-weight: 800; margin: 0 0 4px; letter-spacing: -0.02em; }
  .page-sub   { font-size: 14px; color: rgba(13,18,37,0.5); margin: 0; }

  .loading {
    padding: 48px;
    text-align: center;
    color: rgba(13,18,37,0.4);
    font-size: 15px;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 48px 32px;
    gap: 12px;
  }
  .empty-icon { font-size: 48px; }
  .empty-state h2 { font-size: 24px; font-weight: 800; margin: 0; }
  .empty-state p  { color: rgba(13,18,37,0.5); margin: 0; font-size: 15px; }
  .empty-actions  { display: flex; gap: 12px; margin-top: 8px; }
</style>
