<script lang="ts">
  import { lessons } from '$lib/lessons'
  import { TOTAL_LESSONS } from '$lib/utils'
</script>

<header class="welcome">
  <div class="welcome-left">
    <div class="welcome-top">
      <h1 class="welcome-title">FLUX</h1>
      <span class="open-source-badge">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M4 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="currentColor"/>
        </svg>
        open source
      </span>
    </div>
    <p class="welcome-tagline">
      Sistema de imersão em inglês — {TOTAL_LESSONS} lições, uma por dia.
    </p>
    <p class="welcome-desc">
      Cada dia ensina uma estrutura real. Scroll para avançar, scroll para cima para revisar.
      Sem gamificação, sem anúncios — só prática deliberada.
    </p>
  </div>

  <img
    src="/home.svg"
    alt="FLUX — imersão em inglês"
    class="welcome-img"
    width="88"
    height="88"
  />
</header>

<style>
  .welcome {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: white;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: var(--radius-lg);
    padding: 28px 32px;
    margin-bottom: 40px;
  }

  .welcome-left {
    flex: 1;
    min-width: 0;
  }

  .welcome-top {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }

  .welcome-title {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--color-navy-900);
    line-height: 1;
  }

  .open-source-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-green-300);
    background: rgba(138,166,118,0.12);
    border-radius: var(--radius-pill);
    padding: 4px 10px;
  }

  .welcome-tagline {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-navy-900);
    margin-bottom: 6px;
    line-height: 1.4;
  }

  .welcome-desc {
    font-size: 13px;
    color: rgba(13,18,37,0.5);
    line-height: 1.6;
    max-width: 480px;
  }

  .welcome-img {
    flex-shrink: 0;
    border-radius: var(--radius-md);
    object-fit: cover;
  }

  @media (max-width: 560px) {
    .welcome { flex-direction: column-reverse; align-items: flex-start; }
    .welcome-img { width: 64px; height: 64px; }
  }
</style>
