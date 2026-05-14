<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()
</script>

<div class="block-card">
  <p class="block-label">Estrutura do Dia</p>
  <h2 class="structure-text">
    <span class="highlight">{lesson.structure}</span>
  </h2>
  <p class="translation">"{lesson.translation}"</p>
</div>

<div class="block-card">
  <p class="block-label">O que é e quando usar</p>
  <p>{lesson.explanation}</p>
</div>

<div class="block-card why-card">
  <p class="block-label">Por que isso importa</p>
  <p>{lesson.why_it_matters}</p>
</div>

<style>
  .structure-text {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  .translation {
    font-size: 15px;
    color: rgba(13,18,37,0.55);
    font-style: italic;
    margin-top: 4px;
  }
  .why-card {
    border-left: 3px solid var(--color-orange-500);
  }
  .highlight {
    position: relative;
    display: inline;
  }
</style>
