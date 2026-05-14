<script lang="ts">
  import type { Lesson } from '$lib/types'
  import Structure from './blocks/Structure.svelte'
  import Phonetics from './blocks/Phonetics.svelte'
  import Anatomy from './blocks/Anatomy.svelte'
  import Vocabulary from './blocks/Vocabulary.svelte'
  import Examples from './blocks/Examples.svelte'
  import Expansion from './blocks/Expansion.svelte'
  import Mistakes from './blocks/Mistakes.svelte'
  import Retrieval from './blocks/Retrieval.svelte'
  import Drills from './blocks/Drills.svelte'
  import Workspace from './blocks/Workspace.svelte'
  import Resources from './blocks/Resources.svelte'

  let { lesson }: { lesson: Lesson } = $props()
</script>

<article id="dia-{lesson.id}" class="lesson-card">
  <header class="lesson-header">
    <div class="header-top">
      <span class="day-number">DIA {String(lesson.id).padStart(2, '0')}</span>
      <span class="cefr-badge level-{lesson.level.toLowerCase()}">{lesson.level}</span>
      <span class="module-pill pill">Módulo {lesson.module} — {lesson.moduleTitle}</span>
    </div>
    <h2 class="lesson-title">{lesson.structure}</h2>
  </header>

  <Structure {lesson} />
  <Phonetics {lesson} />
  <Anatomy {lesson} />
  <Vocabulary {lesson} />
  <Examples {lesson} />
  <Expansion {lesson} />
  <Mistakes {lesson} />
  <Retrieval {lesson} />
  <Drills {lesson} />
  <Workspace {lesson} />
  <Resources {lesson} />
</article>

<style>
  .lesson-header {
    margin-bottom: 28px;
  }

  .header-top {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  .day-number {
    font-family: monospace;
    font-size: 12px;
    font-weight: 700;
    color: rgba(13,18,37,0.35);
    letter-spacing: 0.1em;
  }

  .cefr-badge {
    border-radius: var(--radius-pill);
    font-size: 10px;
    font-weight: 800;
    padding: 3px 8px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .level-a1, .level-a2 { background: var(--color-mint-100); color: #3a6b5c; }
  .level-b1, .level-b2 { background: #E8EDFF; color: var(--color-blue-500); }
  .level-c1, .level-c2 { background: #F3E8FF; color: var(--color-purple-400); }

  .lesson-title {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--color-navy-900);
    line-height: 1.2;
  }
</style>
