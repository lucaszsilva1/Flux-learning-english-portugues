<script module lang="ts">
  export const prerender = true
  export const ssr = false
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { userdata, currentDay } from '$lib/store'
  import { scrollToLesson } from '$lib/utils'
  import { lessons } from '$lib/lessons'
  import Sidebar from '../components/Sidebar.svelte'
  import LessonBlock from '../components/LessonBlock.svelte'

  let available = $derived(lessons.filter(l => l.id <= $currentDay))

  onMount(() => {
    scrollToLesson($currentDay)
  })
</script>

<div class="app-layout">
  <Sidebar />

  <main class="main-content">
    <div class="lessons-container">
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
</style>
