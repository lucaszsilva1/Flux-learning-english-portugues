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
    <div class="header-meta">
      <span class="day-number">DIA {String(lesson.id).padStart(2, '0')}</span>
      <span class="module-pill pill">Módulo {lesson.module} — {lesson.moduleTitle}</span>
    </div>
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
    margin-bottom: 24px;
  }
  .header-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .day-number {
    font-family: monospace;
    font-size: 11px;
    font-weight: 600;
    color: rgba(13,18,37,0.4);
    letter-spacing: 0.08em;
  }
</style>
