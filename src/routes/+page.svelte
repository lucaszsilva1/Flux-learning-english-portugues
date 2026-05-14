<script lang="ts">
  import { onMount } from 'svelte'
  import { userdata, currentDay } from '$lib/store'
  import { scrollToLesson } from '$lib/utils'
  import { lessons } from '$lib/lessons'
  import Sidebar from '../components/Sidebar.svelte'
  import LessonBlock from '../components/LessonBlock.svelte'
  import WelcomeHeader from '../components/WelcomeHeader.svelte'

  let available = $derived(lessons.filter(l => l.id <= $currentDay))
  let mainEl: HTMLElement
  let sidebar: Sidebar

  function openSidebar() {
    sidebar?.openMobile()
  }

  onMount(() => {
    const pin = ($userdata['pin_lesson_id'] as number) || $currentDay
    scrollToLesson(pin)

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.replace('dia-', ''))
          if (!isNaN(id)) userdata.setField('pin_lesson_id', id)
        }
      }
    }, {
      root: mainEl,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    })

    mainEl.querySelectorAll('article[id^="dia-"]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })
</script>

<div class="app-layout">
  <Sidebar bind:this={sidebar} />

  <main class="main-content" bind:this={mainEl}>
    <button class="mobile-menu-btn" onclick={openSidebar} aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>

    <div class="lessons-container">
      <WelcomeHeader />
      {#each available as lesson, i}
        {#if i > 0}
          <div class="lesson-separator">DIA {lesson.id}</div>
        {/if}
        <LessonBlock {lesson} />
      {/each}

      {#if available.length === 0}
        <div class="empty-state">
          <p>Nenhuma lição disponível ainda.</p>
        </div>
      {/if}
    </div>
  </main>
</div>

<style>
  .app-layout {
    display: flex;
    min-height: 100vh;
  }
  .main-content {
    flex: 1;
    overflow-y: auto;
    padding: 40px 32px;
    height: 100vh;
  }
  .lessons-container {
    max-width: 760px;
    margin: 0 auto;
  }
  .empty-state {
    text-align: center;
    color: rgba(13,18,37,0.45);
    padding: 60px 0;
    font-size: 15px;
  }

  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: var(--radius-sm);
    padding: 10px 11px;
    cursor: pointer;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
  }
  .mobile-menu-btn span {
    display: block;
    width: 18px;
    height: 2px;
    background: var(--color-navy-900);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .main-content {
      padding: 16px;
    }
    .lessons-container {
      max-width: 100%;
    }
    .mobile-menu-btn {
      display: flex;
    }
  }
</style>
