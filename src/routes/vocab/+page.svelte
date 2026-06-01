<script lang="ts">
  import { vocabStore } from '$lib/vocab/store'
  import { words, TOTAL_WORDS } from '$lib/vocab/words'
  import { countByStatus, countDueToday, getLastQuizScore } from '$lib/vocab/utils'
  import ProgressBar from '../../components/vocab/ProgressBar.svelte'

  const data = $derived(countByStatus($vocabStore, TOTAL_WORDS))
  const due  = $derived(countDueToday(words, $vocabStore))
  const last = $derived(getLastQuizScore($vocabStore))
  const pct  = $derived(Math.round((data.known / TOTAL_WORDS) * 100))
</script>

<svelte:head><title>Vocabulário — FLUX</title></svelte:head>

<div class="dashboard">
  <div class="dash-header">
    <div>
      <h1 class="dash-title">Vocabulário</h1>
      <p class="dash-sub">As {TOTAL_WORDS} palavras mais comuns do inglês</p>
    </div>
    <div class="streak-badge">
      <span class="streak-num">{$vocabStore.streak}</span>
      <span class="streak-label">dias seguidos</span>
    </div>
  </div>

  <div class="lesson-card progress-card">
    <p class="block-label">Progresso geral</p>
    <ProgressBar value={pct} label="{data.known} de {TOTAL_WORDS} palavras conhecidas" />
    <div class="status-row">
      <div class="status-item">
        <span class="status-num">{data.fresh}</span>
        <span class="status-label badge-new-light">Novas</span>
      </div>
      <div class="status-item">
        <span class="status-num" style="color: var(--color-sand-100);">{data.learning}</span>
        <span class="status-label" style="color: var(--color-sand-100);">Aprendendo</span>
      </div>
      <div class="status-item">
        <span class="status-num" style="color: var(--color-green-300);">{data.known}</span>
        <span class="status-label" style="color: var(--color-green-300);">Conhecidas</span>
      </div>
    </div>
  </div>

  <div class="mode-grid">
    <a href="/vocab/flashcard" class="mode-card">
      <div class="mode-icon">🃏</div>
      <div class="mode-body">
        <h3 class="mode-title">Flashcard</h3>
        <p class="mode-desc">Revisão com SRS</p>
        <span class="mode-stat">{due} palavras para revisar</span>
      </div>
      <span class="mode-arrow">→</span>
    </a>

    <a href="/vocab/quiz" class="mode-card">
      <div class="mode-icon">⚡</div>
      <div class="mode-body">
        <h3 class="mode-title">Sprint Quiz</h3>
        <p class="mode-desc">10 questões rápidas</p>
        {#if last}
          <span class="mode-stat">Último: {last.score}/{last.total}</span>
        {:else}
          <span class="mode-stat">Nunca jogado</span>
        {/if}
      </div>
      <span class="mode-arrow">→</span>
    </a>

    <a href="/vocab/browse" class="mode-card">
      <div class="mode-icon">🔍</div>
      <div class="mode-body">
        <h3 class="mode-title">Browse</h3>
        <p class="mode-desc">Explorar todas as palavras</p>
        <span class="mode-stat">{data.known} conhecidas</span>
      </div>
      <span class="mode-arrow">→</span>
    </a>
  </div>

  {#if $vocabStore.quiz_history.length > 0}
    <div class="block-card history-card">
      <p class="block-label">Histórico de quizzes</p>
      <div class="history-list">
        {#each [...$vocabStore.quiz_history].reverse().slice(0, 7) as entry}
          <div class="history-item">
            <span class="history-date">{entry.date}</span>
            <div class="history-bar-wrap">
              <div
                class="history-bar"
                style="width: {Math.round(entry.score / entry.total * 100)}%"
              ></div>
            </div>
            <span class="history-score">{entry.score}/{entry.total}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .dashboard { display: flex; flex-direction: column; gap: 20px; }

  .dash-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
  }
  .dash-title { font-size: 32px; font-weight: 800; letter-spacing: -0.03em; margin: 0 0 4px; }
  .dash-sub   { font-size: 15px; color: rgba(13,18,37,0.5); margin: 0; }

  .streak-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: var(--radius-md);
    padding: 12px 20px;
    box-shadow: var(--shadow-sm);
    min-width: 80px;
  }
  .streak-num   { font-size: 28px; font-weight: 800; color: var(--color-orange-500); line-height: 1; }
  .streak-label { font-size: 11px; font-weight: 600; color: rgba(13,18,37,0.4); text-align: center; }

  .progress-card { padding: 24px; display: flex; flex-direction: column; gap: 16px; }

  .status-row {
    display: flex;
    gap: 24px;
    padding-top: 8px;
    border-top: 1px solid rgba(0,0,0,0.06);
  }
  .status-item { display: flex; flex-direction: column; gap: 2px; }
  .status-num  { font-size: 22px; font-weight: 800; color: rgba(13,18,37,0.3); line-height: 1; }
  .status-label { font-size: 11px; font-weight: 600; color: rgba(13,18,37,0.4); }
  .badge-new-light { color: rgba(13,18,37,0.35) !important; }

  .mode-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }
  .mode-card {
    display: flex;
    align-items: center;
    gap: 14px;
    background: white;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: var(--radius-md);
    padding: 20px 16px;
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
  }
  .mode-card:hover {
    border-color: var(--color-orange-500);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  .mode-icon  { font-size: 28px; flex-shrink: 0; }
  .mode-body  { flex: 1; min-width: 0; }
  .mode-title { font-size: 15px; font-weight: 700; margin: 0 0 2px; }
  .mode-desc  { font-size: 12px; color: rgba(13,18,37,0.45); margin: 0 0 4px; }
  .mode-stat  { font-size: 11px; font-weight: 600; color: var(--color-orange-500); }
  .mode-arrow { font-size: 18px; color: rgba(13,18,37,0.25); flex-shrink: 0; }

  .history-card { padding: 20px 24px; }
  .history-list { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
  .history-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
  }
  .history-date  { color: rgba(13,18,37,0.4); width: 80px; flex-shrink: 0; font-family: monospace; font-size: 12px; }
  .history-bar-wrap {
    flex: 1;
    height: 8px;
    background: rgba(0,0,0,0.06);
    border-radius: var(--radius-pill);
    overflow: hidden;
  }
  .history-bar {
    height: 100%;
    background: var(--color-orange-500);
    border-radius: var(--radius-pill);
  }
  .history-score { font-weight: 600; width: 36px; text-align: right; flex-shrink: 0; }
</style>
