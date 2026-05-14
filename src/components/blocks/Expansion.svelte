<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()
</script>

<div class="block-card">
  <p class="block-label">Expansão</p>

  <div class="section">
    <p class="section-title">Variações</p>
    {#each lesson.variations as v}
      <div class="variation-row">
        <code class="form">{v.form}</code>
        <span class="note">{v.note}</span>
      </div>
    {/each}
  </div>

  <div class="section">
    <p class="section-title">Combinações</p>
    {#each lesson.combinations as c}
      <div class="combination-row">
        <code class="form">{c.phrase}</code>
        <span class="note">{c.meaning}</span>
      </div>
    {/each}
  </div>

  <div class="section">
    <p class="section-title">Collocations</p>
    <div class="collocations">
      {#each lesson.collocations as col}
        <span class="pill">{col}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  .section {
    margin-bottom: 20px;
  }
  .section:last-child { margin-bottom: 0; }
  .section-title {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(13,18,37,0.45);
    margin-bottom: 10px;
  }
  .variation-row, .combination-row {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .form {
    font-family: monospace;
    font-size: 13px;
    background: var(--color-neutral-50);
    border-radius: 4px;
    padding: 2px 8px;
    min-width: 160px;
    flex-shrink: 0;
    color: var(--color-purple-400);
    font-weight: 600;
  }
  .note {
    color: rgba(13,18,37,0.6);
    font-size: 13px;
    line-height: 1.5;
  }
  .collocations {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>
