<script lang="ts">
  import { page } from '$app/stores'

  const links = [
    { href: '/vocab',           label: 'Dashboard', icon: '📊' },
    { href: '/vocab/browse',    label: 'Browse',    icon: '🔍' },
    { href: '/vocab/flashcard', label: 'Flashcard', icon: '🃏' },
    { href: '/vocab/quiz',      label: 'Quiz',      icon: '⚡' },
  ]
</script>

<nav class="vocab-nav">
  <div class="nav-inner">
    <span class="nav-brand">Vocabulário</span>
    <div class="nav-links">
      {#each links as link}
        <a
          href={link.href}
          class="nav-tab"
          class:active={$page.url.pathname === link.href}
        >
          <span class="nav-icon">{link.icon}</span>
          <span class="nav-label">{link.label}</span>
        </a>
      {/each}
    </div>
    <a href="/" class="nav-back">← FLUX</a>
  </div>
</nav>

<style>
  .vocab-nav {
    background: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-sm);
  }
  .nav-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 24px;
    gap: 24px;
    height: 56px;
  }
  .nav-brand {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: var(--color-navy-900);
    white-space: nowrap;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
  }
  .nav-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: var(--radius-pill);
    font-size: 13px;
    font-weight: 600;
    color: rgba(13,18,37,0.55);
    text-decoration: none;
    transition: var(--transition);
  }
  .nav-tab:hover { background: rgba(0,0,0,0.04); color: var(--color-navy-900); }
  .nav-tab.active {
    background: rgba(242,106,46,0.1);
    color: var(--color-orange-500);
  }
  .nav-icon { font-size: 14px; }
  .nav-back {
    font-size: 12px;
    font-weight: 600;
    color: rgba(13,18,37,0.4);
    text-decoration: none;
    white-space: nowrap;
    transition: var(--transition);
  }
  .nav-back:hover { color: var(--color-navy-900); }

  @media (max-width: 600px) {
    .nav-brand, .nav-back { display: none; }
    .nav-label { display: none; }
    .nav-tab { padding: 8px 12px; }
    .nav-icon { font-size: 18px; }
  }
</style>
