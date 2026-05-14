<script lang="ts">
  import { TOTAL_LESSONS } from '$lib/utils'
</script>

<header class="welcome">
  <div class="welcome-badge">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <circle cx="4" cy="4" r="3" fill="currentColor"/>
    </svg>
    open source
  </div>

  <div class="welcome-body">
    <div class="welcome-left">
      <h1 class="welcome-title">FLUX</h1>
      <p class="welcome-sub">Sistema de imersão em inglês</p>
      <p class="welcome-desc">
        Scroll para avançar · revise quando quiser.<br>
        Sem gamificação — só prática deliberada.
      </p>
    </div>

    <div class="welcome-stat" aria-hidden="true">
      <span class="stat-number">{TOTAL_LESSONS}</span>
      <span class="stat-label">lições<br>disponíveis</span>
    </div>
  </div>
</header>

<style>
  .welcome {
    background: linear-gradient(135deg, #F5ECD9 0%, white 65%);
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: var(--radius-lg);
    padding: 28px 32px 32px;
    margin-bottom: 40px;
  }

  .welcome-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-green-300);
    margin-bottom: 20px;
  }

  .welcome-body {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
  }

  .welcome-left {
    flex: 1;
    min-width: 0;
  }

  .welcome-title {
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.05em;
    color: var(--color-navy-900);
    line-height: 1;
    margin-bottom: 6px;
  }

  .welcome-sub {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-navy-900);
    margin-bottom: 10px;
    opacity: 0.7;
  }

  .welcome-desc {
    font-size: 13px;
    color: rgba(13,18,37,0.45);
    line-height: 1.7;
  }

  .welcome-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
    text-align: right;
  }

  .stat-number {
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    color: var(--color-orange-500);
    opacity: 0.15;
  }

  .stat-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(13,18,37,0.35);
    line-height: 1.4;
    text-align: right;
    margin-top: 4px;
  }

  @media (max-width: 560px) {
    .welcome { padding: 20px; margin-bottom: 24px; }
    .welcome-title { font-size: 36px; }
    .welcome-stat { display: none; }
  }
</style>
