<script lang="ts">
  import { userdata, streak, currentDay, sidebarCollapsed } from '$lib/store'
  import { TOTAL_LESSONS, scrollToLesson } from '$lib/utils'

  let days = Array.from({ length: TOTAL_LESSONS }, (_, i) => i + 1)

  function handleDayClick(id: number) {
    if (id > $currentDay) return
    scrollToLesson(id)
  }

  function toggleSidebar() {
    $sidebarCollapsed = !$sidebarCollapsed
    userdata.setField('sidebar_collapsed', $sidebarCollapsed)
  }
</script>

<aside class="sidebar" class:collapsed={$sidebarCollapsed}>
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
    <nav class="days-list">
      {#each days as id}
        {@const isPracticed = !!$userdata[`${id}_practiced_at`]}
        {@const isActive = id === $currentDay}
        {@const isLocked = id > $currentDay}
        <button
          class="sidebar-day"
          class:active={isActive}
          class:locked={isLocked}
          onclick={() => handleDayClick(id)}
          disabled={isLocked}
        >
          <span class="day-num">{String(id).padStart(2, '0')}</span>
          {#if isLocked}
            <span class="day-icon">🔒</span>
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
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    transition: width var(--transition);
    background: white;
    border-right: 1px solid rgba(0,0,0,0.08);
    width: 220px;
    flex-shrink: 0;
  }
  aside.collapsed {
    width: 48px;
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
  .sidebar-day.active .day-num { color: var(--color-orange-500); }
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
</style>
