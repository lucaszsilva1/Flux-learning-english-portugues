<script lang="ts">
  import type { Lesson } from '$lib/types'
  import { userdata } from '$lib/store'

  let { lesson }: { lesson: Lesson } = $props()

  let text = $state(($userdata[`${lesson.id}_retrieval`] as string) || '')
  let revealed = $state(!!$userdata[`${lesson.id}_retrieval_revealed`])

  function handleInput(e: Event) {
    text = (e.target as HTMLTextAreaElement).value
    userdata.setField(`${lesson.id}_retrieval`, text)
  }

  function reveal() {
    revealed = true
    userdata.setField(`${lesson.id}_retrieval_revealed`, true)
  }
</script>

<div class="workspace-card">
  <p class="block-label">Retrieval — Recuperação Ativa</p>
  <p class="context">{lesson.retrieval_context}</p>
  <p class="prompt">{lesson.retrieval_prompt}</p>

  <textarea
    value={text}
    oninput={handleInput}
    placeholder="Escreva em inglês..."
    rows="4"
  ></textarea>

  {#if text.trim().length > 0 && !revealed}
    <button class="btn-ghost" onclick={reveal} style="margin-top: 12px;">
      Ver referência
    </button>
  {/if}

  {#if revealed}
    <div class="reference">
      <p class="reference-label">Referência</p>
      <p>{lesson.retrieval_reference}</p>
    </div>
  {/if}
</div>

<style>
  .context {
    font-size: 14px;
    color: rgba(13,18,37,0.55);
    margin-bottom: 8px;
    font-style: italic;
  }
  .prompt {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 14px;
  }
  .reference {
    margin-top: 14px;
    background: white;
    border-radius: var(--radius-md);
    padding: 14px;
    border-left: 3px solid var(--color-green-300);
  }
  .reference-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-green-300);
    margin-bottom: 6px;
  }
</style>
