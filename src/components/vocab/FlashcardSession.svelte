<script lang="ts">
  import type { Word, WordProgress } from '$lib/vocab/types'
  import { vocabStore } from '$lib/vocab/store'
  import WordCard from './WordCard.svelte'

  let { cards, userProgress }: {
    cards: Word[]
    userProgress: Record<number, WordProgress>
  } = $props()

  let idx      = $state(0)
  let revealed = $state(false)
  let known    = $state(0)
  let learning = $state(0)
  let done     = $state(false)

  const current = $derived(cards[idx])
  const pct     = $derived(Math.round((idx / cards.length) * 100))

  function reveal() { revealed = true }

  function markKnown() {
    vocabStore.markKnown(current.id)
    known++
    advance()
  }

  function markLearning() {
    vocabStore.markLearning(current.id)
    learning++
    advance()
  }

  function advance() {
    if (idx + 1 >= cards.length) {
      vocabStore.updateStreak()
      done = true
    } else {
      idx++
      revealed = false
    }
  }

  function restart() {
    idx      = 0
    revealed = false
    known    = 0
    learning = 0
    done     = false
  }
</script>

{#if done}
  <div class="result-screen block-card">
    <div class="result-icon">✓</div>
    <h2 class="result-title">Sessão concluída!</h2>
    <p class="result-sub">{cards.length} palavras revisadas</p>
    <div class="result-stats">
      <div class="stat">
        <span class="stat-num" style="color: var(--color-green-300);">{known}</span>
        <span class="stat-label">Já sei</span>
      </div>
      <div class="stat">
        <span class="stat-num" style="color: var(--color-sand-100);">{learning}</span>
        <span class="stat-label">Preciso revisar</span>
      </div>
    </div>
    <div class="result-actions">
      <button class="btn-primary" onclick={restart}>Nova sessão</button>
      <a href="/vocab" class="btn-ghost">Dashboard</a>
    </div>
  </div>

{:else}
  <div class="session-wrap">
    <div class="session-header">
      <span class="session-count">{idx + 1} / {cards.length}</span>
      <div class="session-progress">
        <div class="session-fill" style="width: {pct}%;"></div>
      </div>
    </div>

    {#if !revealed}
      <div class="card-front block-card">
        <div class="front-meta">
          <span class="pill">{current.category}</span>
          {#if current.pronunciation}
            <span class="front-pron">{current.pronunciation}</span>
          {/if}
        </div>
        <p class="front-word">{current.word}</p>
        <button class="btn-reveal btn-primary" onclick={reveal}>Revelar tradução</button>
      </div>
    {:else}
      <div class="card-back">
        <WordCard word={current} progress={userProgress[current.id]} />
        <div class="back-actions">
          <button class="btn-ghost btn-learning" onclick={markLearning}>
            Preciso revisar
          </button>
          <button class="btn-primary btn-known" onclick={markKnown}>
            Já sei ✓
          </button>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .session-wrap { display: flex; flex-direction: column; gap: 20px; }

  .session-header { display: flex; flex-direction: column; gap: 8px; }
  .session-count {
    font-size: 12px;
    font-weight: 600;
    color: rgba(13,18,37,0.45);
    letter-spacing: 0.05em;
    text-align: right;
  }
  .session-progress {
    height: 6px;
    background: rgba(0,0,0,0.08);
    border-radius: var(--radius-pill);
    overflow: hidden;
  }
  .session-fill {
    height: 100%;
    background: var(--color-orange-500);
    border-radius: var(--radius-pill);
    transition: width var(--transition);
  }

  .card-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    text-align: center;
    gap: 20px;
    min-height: 280px;
    justify-content: center;
  }
  .front-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center; }
  .front-pron { font-size: 14px; color: rgba(13,18,37,0.45); font-family: monospace; }
  .front-word {
    font-size: 52px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--color-navy-900);
    margin: 0;
    line-height: 1;
  }
  .btn-reveal { padding: 14px 32px; font-size: 15px; }

  .card-back { display: flex; flex-direction: column; gap: 16px; }

  .back-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn-known    { padding: 14px 32px; font-size: 15px; min-width: 140px; }
  .btn-learning { padding: 14px 32px; font-size: 15px; min-width: 140px; }

  /* Result screen */
  .result-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    text-align: center;
    gap: 16px;
  }
  .result-icon { font-size: 48px; color: var(--color-green-300); font-weight: 800; }
  .result-title { font-size: 28px; font-weight: 800; margin: 0; }
  .result-sub { color: rgba(13,18,37,0.5); margin: 0; font-size: 15px; }
  .result-stats {
    display: flex;
    gap: 32px;
    padding: 20px 32px;
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
    margin: 8px 0;
  }
  .stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .stat-num { font-size: 36px; font-weight: 800; line-height: 1; }
  .stat-label { font-size: 12px; font-weight: 600; color: rgba(13,18,37,0.5); }
  .result-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
</style>
