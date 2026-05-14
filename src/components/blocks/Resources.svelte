<script lang="ts">
  import type { Lesson } from '$lib/types'
  import { userdata } from '$lib/store'

  let { lesson }: { lesson: Lesson } = $props()
  const r = lesson.daily_resources

  let ankiDone = $state(!!$userdata[`${lesson.id}_anki_exported`])
  let speakingDone = $state(!!$userdata[`${lesson.id}_speaking_done`])

  function copyAnki() {
    const text = `Q: ${r.anki_card.front}\nA: ${r.anki_card.back}`
    navigator.clipboard.writeText(text)
    ankiDone = true
    userdata.setField(`${lesson.id}_anki_exported`, true)
  }

  function markSpeaking() {
    speakingDone = true
    userdata.setField(`${lesson.id}_speaking_done`, true)
  }
</script>

<div class="block-card">
  <p class="block-label">Recursos do Dia</p>

  <div class="resources-grid">
    <!-- TED -->
    <div class="resource-item">
      <span class="resource-icon">🎬</span>
      <div>
        <p class="resource-title">TED</p>
        <a href={r.ted.url} target="_blank" rel="noreferrer" class="resource-link">{r.ted.title}</a>
        <p class="resource-tip">{r.ted.tip}</p>
      </div>
    </div>

    <!-- Podcast -->
    <div class="resource-item">
      <span class="resource-icon">🎙</span>
      <div>
        <p class="resource-title">Podcast</p>
        <a href={r.podcast.url} target="_blank" rel="noreferrer" class="resource-link">{r.podcast.title}</a>
        <p class="resource-tip">{r.podcast.tip}</p>
      </div>
    </div>

    <!-- Dicionário -->
    <div class="resource-item">
      <span class="resource-icon">📖</span>
      <div>
        <p class="resource-title">Palavra do Dia</p>
        <a href="https://www.onelook.com/?w={r.onelook_word}" target="_blank" rel="noreferrer" class="resource-link">
          {r.onelook_word}
        </a>
      </div>
    </div>

    {#if r.game}
      <div class="resource-item">
        <span class="resource-icon">🎮</span>
        <div>
          <p class="resource-title">Jogo</p>
          <a href={r.game.url} target="_blank" rel="noreferrer" class="resource-link">{r.game.label}</a>
        </div>
      </div>
    {/if}
  </div>

  <!-- Anki -->
  <div class="anki-section">
    <p class="resource-title" style="margin-bottom: 8px;">🃏 Anki Card</p>
    <div class="anki-card">
      <p class="anki-side"><strong>Q:</strong> {r.anki_card.front}</p>
      <p class="anki-side"><strong>A:</strong> {r.anki_card.back}</p>
    </div>
    {#if !ankiDone}
      <button class="btn-secondary" onclick={copyAnki} style="margin-top: 10px;">
        Copiar card
      </button>
    {:else}
      <span class="badge-done" style="display: inline-block; margin-top: 10px;">Card copiado ✓</span>
    {/if}
  </div>

  <!-- Speaking -->
  <div class="speaking-section">
    <p class="resource-title">🗣 Speaking</p>
    <p class="speaking-prompt">{r.speaking_prompt}</p>
    {#if !speakingDone}
      <button class="btn-ghost" onclick={markSpeaking} style="margin-top: 8px;">
        Marquei como feito
      </button>
    {:else}
      <span class="badge-done" style="display: inline-block; margin-top: 8px;">Speaking feito ✓</span>
    {/if}
  </div>
</div>

<style>
  .resources-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 20px;
  }
  .resource-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  .resource-icon {
    font-size: 20px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .resource-title {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(13,18,37,0.45);
    margin-bottom: 2px;
  }
  .resource-link {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue-500);
    text-decoration: none;
  }
  .resource-link:hover { text-decoration: underline; }
  .resource-tip {
    font-size: 13px;
    color: rgba(13,18,37,0.55);
    margin-top: 2px;
    line-height: 1.4;
  }
  .anki-section, .speaking-section {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .anki-card {
    background: var(--color-neutral-50);
    border-radius: var(--radius-sm);
    padding: 12px;
    font-size: 14px;
    line-height: 1.6;
  }
  .anki-side { margin-bottom: 4px; }
  .anki-side:last-child { margin-bottom: 0; }
  .speaking-prompt {
    font-size: 14px;
    color: rgba(13,18,37,0.7);
    margin-top: 6px;
    line-height: 1.5;
  }
</style>
