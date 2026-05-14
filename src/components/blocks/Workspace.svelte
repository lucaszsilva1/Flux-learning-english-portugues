<script lang="ts">
  import type { Lesson } from '$lib/types'
  import { userdata } from '$lib/store'

  let { lesson }: { lesson: Lesson } = $props()

  let production = $state(($userdata[`${lesson.id}_production`] as string) || '')
  let notes = $state(($userdata[`${lesson.id}_notes`] as string) || '')
  let practiced = $state(!!$userdata[`${lesson.id}_practiced_at`])

  function handleProduction(e: Event) {
    production = (e.target as HTMLTextAreaElement).value
    userdata.setField(`${lesson.id}_production`, production)
  }

  function handleNotes(e: Event) {
    notes = (e.target as HTMLTextAreaElement).value
    userdata.setField(`${lesson.id}_notes`, notes)
  }

  function markPracticed() {
    practiced = true
    userdata.setField(`${lesson.id}_practiced_at`, new Date().toISOString())
  }
</script>

<div class="workspace-card">
  <p class="block-label">Workspace — Produção Livre</p>

  <div class="workspace-section">
    <p class="ws-label">Produção</p>
    <p class="ws-hint">Escreva livremente usando a estrutura do dia. Sem correção automática — foque em produzir.</p>
    <textarea
      value={production}
      oninput={handleProduction}
      placeholder="Escreva em inglês usando a estrutura de hoje..."
      rows="5"
    ></textarea>
  </div>

  <div class="workspace-section">
    <p class="ws-label">Notas pessoais</p>
    <textarea
      value={notes}
      oninput={handleNotes}
      placeholder="Anotações, dúvidas, observações..."
      rows="3"
    ></textarea>
  </div>

  {#if !practiced}
    <button class="btn-primary" onclick={markPracticed} style="margin-top: 8px;">
      Marcar como praticado ✓
    </button>
  {:else}
    <div class="practiced-badge">
      <span class="badge-done">✓ Praticado</span>
    </div>
  {/if}
</div>

<style>
  .workspace-section {
    margin-bottom: 16px;
  }
  .ws-label {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--color-navy-900);
  }
  .ws-hint {
    font-size: 13px;
    color: rgba(13,18,37,0.55);
    margin-bottom: 8px;
    line-height: 1.5;
  }
  .practiced-badge {
    margin-top: 8px;
  }
</style>
