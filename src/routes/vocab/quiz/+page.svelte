<script lang="ts">
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  import { vocabStore } from '$lib/vocab/store'
  import { words } from '$lib/vocab/words'
  import { pickQuizWords } from '$lib/vocab/utils'
  import type { Word } from '$lib/vocab/types'
  import QuizSession from '../../../components/vocab/QuizSession.svelte'

  let quizWords = $state<Word[]>([])
  let ready     = $state(false)

  onMount(() => {
    const data = get(vocabStore)
    quizWords = pickQuizWords(words, data, 10)
    ready = true
  })
</script>

<svelte:head><title>Quiz — Vocabulário</title></svelte:head>

<div class="quiz-page">
  <div class="page-header">
    <h1 class="page-title">Sprint Quiz</h1>
    <p class="page-sub">10 questões de múltipla escolha</p>
  </div>

  {#if !ready}
    <div class="loading block-card">Preparando quiz...</div>
  {:else if quizWords.length < 4}
    <div class="empty-state block-card">
      <p>Palavras insuficientes para gerar quiz.</p>
      <a href="/vocab/browse" class="btn-primary">Ver palavras</a>
    </div>
  {:else}
    <QuizSession words={quizWords} allWords={words} />
  {/if}
</div>

<style>
  .quiz-page { display: flex; flex-direction: column; gap: 20px; }

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
    gap: 16px;
  }
</style>
