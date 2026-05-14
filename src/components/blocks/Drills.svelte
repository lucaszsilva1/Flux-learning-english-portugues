<script lang="ts">
  import type { Lesson } from '$lib/types'
  import { userdata } from '$lib/store'

  let { lesson }: { lesson: Lesson } = $props()

  type DrillState = { text: string; revealed: boolean }

  function loadState(): DrillState[] {
    const drills = ($userdata[`${lesson.id}_drills`] as Record<number, string>) || {}
    const revealed = ($userdata[`${lesson.id}_drill_revealed`] as Record<number, boolean>) || {}
    return lesson.drills.map((_, i) => ({
      text: drills[i] || '',
      revealed: !!revealed[i]
    }))
  }

  let states = $state<DrillState[]>(loadState())

  function handleInput(i: number, e: Event) {
    const val = (e.target as HTMLTextAreaElement).value
    states[i].text = val
    const drills = ($userdata[`${lesson.id}_drills`] as Record<number, string>) || {}
    userdata.setField(`${lesson.id}_drills`, { ...drills, [i]: val })
  }

  function reveal(i: number) {
    states[i].revealed = true
    const rev = ($userdata[`${lesson.id}_drill_revealed`] as Record<number, boolean>) || {}
    userdata.setField(`${lesson.id}_drill_revealed`, { ...rev, [i]: true })
  }
</script>

<div class="block-card">
  <p class="block-label">Drills — Prática Estruturada</p>
  <div class="drills-list">
    {#each lesson.drills as drill, i}
      <div class="drill-item">
        <p class="drill-number">Drill {i + 1}</p>
        <p class="instruction">{drill.instruction}</p>
        <p class="input-prompt"><em>{drill.input}</em></p>
        <textarea
          value={states[i].text}
          oninput={(e) => handleInput(i, e)}
          placeholder="Sua resposta..."
          rows="2"
        ></textarea>
        {#if states[i].text.trim().length > 0 && !states[i].revealed}
          <button class="btn-ghost" onclick={() => reveal(i)} style="margin-top: 8px; font-size: 12px;">
            Ver resposta
          </button>
        {/if}
        {#if states[i].revealed}
          <div class="answer">
            <span class="answer-label">Resposta: </span>{drill.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .drills-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .drill-item {
    padding: 16px;
    background: var(--color-neutral-50);
    border-radius: var(--radius-md);
  }
  .drill-number {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(13,18,37,0.35);
    margin-bottom: 4px;
  }
  .instruction {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .input-prompt {
    font-size: 14px;
    color: rgba(13,18,37,0.7);
    margin-bottom: 10px;
  }
  .answer {
    margin-top: 10px;
    font-size: 14px;
    background: white;
    border-radius: var(--radius-sm);
    padding: 10px 12px;
    border-left: 3px solid var(--color-green-300);
    color: var(--color-navy-900);
  }
  .answer-label {
    font-weight: 700;
    color: var(--color-green-300);
  }
</style>
