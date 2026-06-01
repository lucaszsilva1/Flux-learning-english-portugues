<script lang="ts">
  import { onMount } from 'svelte'
  import type { Word } from '$lib/vocab/types'
  import { vocabStore } from '$lib/vocab/store'
  import { getQuizOptions } from '$lib/vocab/utils'

  let { words, allWords }: { words: Word[]; allWords: Word[] } = $props()

  type Question = {
    word: Word
    options: string[]
    correct: boolean | null
    selected: string | null
  }

  let questions = $state<Question[]>([])
  let idx       = $state(0)
  let score     = $state(0)
  let done      = $state(false)
  let selected  = $state<string | null>(null)
  let feedback  = $state<boolean | null>(null)

  onMount(() => {
    questions = words.map(w => ({
      word: w,
      options: getQuizOptions(w, allWords),
      correct: null,
      selected: null
    }))
  })

  const current = $derived(questions[idx] ?? null)
  const wrong   = $derived(questions.filter(q => q.correct === false))

  function pick(option: string) {
    if (!current || feedback !== null) return
    selected = option
    const isCorrect = option === current.word.translation
    feedback = isCorrect
    questions[idx].selected = option
    questions[idx].correct = isCorrect
    if (isCorrect) score++

    setTimeout(() => {
      if (idx + 1 >= questions.length) {
        vocabStore.recordQuiz(score, questions.length)
        done = true
      } else {
        idx++
        selected = null
        feedback = null
      }
    }, 1000)
  }

  function optionClass(option: string) {
    if (!current || feedback === null) return 'option'
    if (option === current.word.translation) return 'option correct'
    if (option === selected && feedback === false) return 'option wrong'
    return 'option dimmed'
  }
</script>

{#if done}
  <div class="result-screen block-card">
    <div class="result-score" class:perfect={score === questions.length}>
      {score}/{questions.length}
    </div>
    <h2 class="result-title">
      {score === questions.length ? 'Perfeito!' : score >= questions.length * 0.7 ? 'Muito bem!' : 'Continue praticando!'}
    </h2>

    {#if wrong.length > 0}
      <div class="wrong-list">
        <p class="wrong-title">Palavras para revisar:</p>
        {#each wrong as q (q.word.id)}
          <div class="wrong-item">
            <span class="wrong-word">{q.word.word}</span>
            <span class="wrong-arrow">→</span>
            <span class="wrong-pt">{q.word.translation}</span>
          </div>
        {/each}
      </div>
    {/if}

    <div class="result-actions">
      <a href="/vocab/quiz" class="btn-primary" onclick={() => { window.location.reload() }}>Novo quiz</a>
      <a href="/vocab" class="btn-ghost">Dashboard</a>
    </div>
  </div>

{:else if current}
  <div class="quiz-wrap">
    <div class="quiz-header">
      <span class="quiz-count">{idx + 1} / {questions.length}</span>
      <span class="quiz-score">Acertos: {score}</span>
    </div>

    <div class="question-card block-card">
      <p class="question-label">Qual é a tradução?</p>
      <p class="question-word">{current.word.word}</p>
      {#if current.word.pronunciation}
        <span class="question-pron">{current.word.pronunciation}</span>
      {/if}
    </div>

    <div class="options">
      {#each current.options as option (option)}
        <button
          class={optionClass(option)}
          onclick={() => pick(option)}
          type="button"
          disabled={feedback !== null}
        >
          {option}
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  .quiz-wrap { display: flex; flex-direction: column; gap: 20px; }

  .quiz-header {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 600;
    color: rgba(13,18,37,0.45);
  }

  .question-card {
    text-align: center;
    padding: 36px 32px;
  }
  .question-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(13,18,37,0.4);
    margin: 0 0 12px;
  }
  .question-word {
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--color-navy-900);
    margin: 0 0 8px;
    line-height: 1;
  }
  .question-pron {
    font-size: 14px;
    color: rgba(13,18,37,0.4);
    font-family: monospace;
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .option {
    padding: 16px;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: var(--radius-md);
    background: white;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-navy-900);
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    line-height: 1.4;
  }
  .option:hover:not(:disabled) {
    border-color: var(--color-orange-500);
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
  }
  .option.correct {
    background: var(--color-green-300);
    border-color: var(--color-green-300);
    color: white;
  }
  .option.wrong {
    background: #E57373;
    border-color: #E57373;
    color: white;
  }
  .option.dimmed {
    opacity: 0.4;
    cursor: default;
  }

  /* Result screen */
  .result-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    text-align: center;
    gap: 20px;
  }
  .result-score {
    font-size: 64px;
    font-weight: 800;
    color: var(--color-orange-500);
    line-height: 1;
  }
  .result-score.perfect { color: var(--color-green-300); }
  .result-title { font-size: 24px; font-weight: 800; margin: 0; }

  .wrong-list {
    width: 100%;
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
    padding: 16px 20px;
    text-align: left;
  }
  .wrong-title {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(13,18,37,0.4);
    margin: 0 0 10px;
  }
  .wrong-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    font-size: 14px;
  }
  .wrong-item:last-child { border-bottom: none; }
  .wrong-word { font-weight: 700; }
  .wrong-arrow { color: rgba(13,18,37,0.3); }
  .wrong-pt { color: var(--color-orange-500); font-weight: 600; }

  .result-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
</style>
