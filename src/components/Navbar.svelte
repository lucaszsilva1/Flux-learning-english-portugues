<script lang="ts">
  import { page } from '$app/stores'
  import { streak, mobileMenuOpen } from '$lib/store'

  let isLessonsRoute = $derived($page.url.pathname === '/')
  let isVocabRoute = $derived($page.url.pathname.startsWith('/vocab'))
</script>

<nav class="navbar">
  <a href="/" class="nav-brand">FLUX</a>

  <div class="nav-links">
    <a href="/" class="nav-link" class:active={isLessonsRoute}>Lições</a>
    <a href="/vocab" class="nav-link" class:active={isVocabRoute}>Vocabulário</a>
  </div>

  <div class="nav-right">
    {#if $streak > 0}
      <span class="streak-pill">🔥 {$streak}</span>
    {/if}
    {#if isLessonsRoute}
      <button
        class="hamburger"
        onclick={() => ($mobileMenuOpen = !$mobileMenuOpen)}
        aria-label="Abrir menu de lições"
      >
        <span></span><span></span><span></span>
      </button>
    {/if}
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 200;
    height: var(--navbar-height);
    background: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    box-shadow: var(--shadow-sm);
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 8px;
    flex-shrink: 0;
  }

  .nav-brand {
    font-size: 17px;
    font-weight: 800;
    color: var(--color-navy-900);
    text-decoration: none;
    letter-spacing: -0.03em;
    flex-shrink: 0;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 16px;
    flex: 1;
  }

  .nav-link {
    padding: 6px 14px;
    border-radius: var(--radius-pill);
    font-size: 14px;
    font-weight: 600;
    color: rgba(13,18,37,0.55);
    text-decoration: none;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--color-navy-900);
    background: rgba(0,0,0,0.04);
  }
  .nav-link.active {
    color: var(--color-orange-500);
    background: rgba(242,106,46,0.08);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .streak-pill {
    font-size: 13px;
    font-weight: 700;
    color: var(--color-orange-500);
    background: rgba(242,106,46,0.08);
    padding: 4px 12px;
    border-radius: var(--radius-pill);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: var(--radius-sm);
    padding: 8px 10px;
    cursor: pointer;
  }
  .hamburger span {
    display: block;
    width: 18px;
    height: 2px;
    background: var(--color-navy-900);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
    .nav-link {
      font-size: 13px;
      padding: 5px 10px;
    }
    .streak-pill {
      font-size: 12px;
      padding: 3px 9px;
    }
  }

  @media (max-width: 400px) {
    .nav-links {
      margin-left: 8px;
      gap: 2px;
    }
    .nav-link {
      padding: 4px 8px;
      font-size: 12px;
    }
  }
</style>
