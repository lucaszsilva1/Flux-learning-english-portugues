<script lang="ts">
  import { userdata, streak, currentDay, sidebarCollapsed, mobileMenuOpen } from '$lib/store'
  import { TOTAL_LESSONS, scrollToLesson } from '$lib/utils'

  let days = Array.from({ length: TOTAL_LESSONS }, (_, i) => i + 1)

  let pinId = $derived(($userdata['pin_lesson_id'] as number) || 0)
  let progress = $derived(Math.round(($currentDay / TOTAL_LESSONS) * 100))

  function handleDayClick(id: number) {
    if (id > $currentDay) return
    scrollToLesson(id)
    $mobileMenuOpen = false
  }

  function resumePin() {
    if (pinId) scrollToLesson(pinId)
    $mobileMenuOpen = false
  }

  function toggleSidebar() {
    $sidebarCollapsed = !$sidebarCollapsed
    userdata.setField('sidebar_collapsed', $sidebarCollapsed)
  }
</script>

{#if $mobileMenuOpen}
  <div class="mobile-backdrop" onclick={() => ($mobileMenuOpen = false)} aria-hidden="true"></div>
{/if}

<aside class="sidebar" class:collapsed={$sidebarCollapsed} class:mobile-open={$mobileMenuOpen}>
  <div class="sidebar-top">
    {#if !$sidebarCollapsed}
      <div class="streak-block">
        <span class="streak-number">{$streak}</span>
        <span class="streak-label">dias seguidos</span>
      </div>
    {/if}
    <button class="toggle-btn" onclick={toggleSidebar} title={$sidebarCollapsed ? 'Expandir' : 'Colapsar'}>
      {$sidebarCollapsed ? '→' : '←'}
    </button>
  </div>

  {#if !$sidebarCollapsed}
    <div class="progress-block">
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width: {progress}%"></div>
      </div>
      <span class="progress-label">{progress}% completo</span>
    </div>
  {/if}

  {#if !$sidebarCollapsed && pinId > 0}
    <button class="resume-btn" onclick={resumePin} title="Voltar para onde você parou">
      <span class="resume-pin">◉</span>
      <span class="resume-label">Continuar no Dia {String(pinId).padStart(2, '0')}</span>
    </button>
  {/if}

  {#if $sidebarCollapsed && pinId > 0}
    <button class="resume-btn-collapsed" onclick={resumePin} title="Continuar no Dia {pinId}">
      ◉
    </button>
  {/if}

  {#if !$sidebarCollapsed}
    <nav class="days-list">
      {#each days as id}
        {@const isPracticed = !!$userdata[`${id}_practiced_at`]}
        {@const isActive = id === $currentDay}
        {@const isLocked = id > $currentDay}
        {@const isPinned = id === pinId}
        <button
          class="sidebar-day"
          class:active={isActive}
          class:locked={isLocked}
          class:pinned={isPinned}
          onclick={() => handleDayClick(id)}
          disabled={isLocked}
        >
          <span class="day-num">{String(id).padStart(2, '0')}</span>
          {#if isLocked}
            <span class="day-icon">🔒</span>
          {:else if isPinned}
            <span class="pin-dot" title="Você parou aqui"></span>
          {:else if isPracticed}
            <span class="day-icon done">✓</span>
          {:else}
            <span class="day-dot"></span>
          {/if}
        </button>
      {/each}
    </nav>
  {/if}
</aside>

<style>
  aside {
    position: sticky;
    top: 0;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    transition: width var(--transition);
    background: white;
    border-right: 1px solid rgba(0,0,0,0.08);
    width: 220px;
    flex-shrink: 0;
    z-index: 100;
  }
  aside.collapsed {
    width: 48px;
  }

  @media (max-width: 768px) {
    aside {
      position: fixed;
      top: var(--navbar-height);
      left: 0;
      height: calc(100vh - var(--navbar-height));
      width: 260px;
      transform: translateX(-100%);
      box-shadow: var(--shadow-md);
    }
    aside.mobile-open {
      transform: translateX(0);
    }
    aside.collapsed {
      width: 260px;
      transform: translateX(-100%);
    }
    aside.collapsed.mobile-open {
      transform: translateX(0);
    }
  }

  .mobile-backdrop {
    display: none;
  }
  @media (max-width: 768px) {
    .mobile-backdrop {
      display: block;
      position: fixed;
      inset: 0;
      top: var(--navbar-height);
      background: rgba(0,0,0,0.4);
      z-index: 99;
    }
  }

  .sidebar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    min-height: 64px;
  }
  .streak-block {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }
  .streak-number {
    font-size: 22px;
    font-weight: 800;
    color: var(--color-orange-500);
  }
  .streak-label {
    font-size: 11px;
    color: rgba(13,18,37,0.45);
    font-weight: 600;
    letter-spacing: 0.04em;
  }
  .toggle-btn {
    background: none;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: var(--radius-sm);
    width: 28px;
    height: 28px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(13,18,37,0.5);
    transition: var(--transition);
    flex-shrink: 0;
  }
  .toggle-btn:hover { background: rgba(0,0,0,0.04); }

  .progress-block {
    padding: 10px 14px 8px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .progress-bar-track {
    height: 4px;
    background: rgba(0,0,0,0.07);
    border-radius: 99px;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .progress-bar-fill {
    height: 100%;
    background: var(--color-orange-500);
    border-radius: 99px;
    transition: width 0.6s ease;
  }
  .progress-label {
    font-size: 10px;
    font-weight: 600;
    color: rgba(13,18,37,0.35);
    letter-spacing: 0.04em;
  }

  .resume-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 14px;
    background: rgba(242,106,46,0.06);
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    cursor: pointer;
    font-family: inherit;
    transition: var(--transition);
    text-align: left;
  }
  .resume-btn:hover { background: rgba(242,106,46,0.12); }
  .resume-pin {
    color: var(--color-orange-500);
    font-size: 14px;
    flex-shrink: 0;
    line-height: 1;
  }
  .resume-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-orange-500);
  }

  .resume-btn-collapsed {
    background: none;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    color: var(--color-orange-500);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .resume-btn-collapsed:hover { background: rgba(242,106,46,0.06); }

  .days-list {
    padding: 8px 0;
    overflow-y: auto;
    flex: 1;
  }
  .sidebar-day {
    width: 100%;
    background: none;
    border: none;
    border-left: 3px solid transparent;
    text-align: left;
    padding: 8px 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
    font-family: inherit;
  }
  .sidebar-day:not(.locked):hover { background: rgba(0,0,0,0.03); }
  .sidebar-day.active {
    border-left-color: var(--color-orange-500);
    background: rgba(242,106,46,0.06);
  }
  .sidebar-day.pinned {
    border-left-color: var(--color-orange-500);
  }
  .sidebar-day.locked {
    color: rgba(13,18,37,0.3);
    cursor: default;
  }
  .day-num {
    font-family: monospace;
    font-size: 13px;
    font-weight: 600;
    color: inherit;
  }
  .sidebar-day.active .day-num,
  .sidebar-day.pinned .day-num { color: var(--color-orange-500); }
  .day-icon {
    font-size: 12px;
  }
  .day-icon.done { color: var(--color-green-300); }
  .day-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0,0,0,0.15);
  }
  .pin-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-orange-500);
    box-shadow: 0 0 0 2px rgba(242,106,46,0.25);
    flex-shrink: 0;
  }
</style>
