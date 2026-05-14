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

  const links = [
    { icon: '🎬', label: 'TED', title: r.ted.title, url: r.ted.url, tip: r.ted.tip },
    { icon: '🎙', label: 'Podcast', title: r.podcast.title, url: r.podcast.url, tip: r.podcast.tip },
    { icon: '📖', label: 'Palavra do Dia', title: r.onelook_word, url: `https://www.onelook.com/?w=${r.onelook_word}`, tip: '' },
    ...(r.game ? [{ icon: '🎮', label: 'Jogo', title: r.game.label, url: r.game.url, tip: '' }] : [])
  ]
</script>

<div class="block-card">
  <p class="block-label">Recursos do Dia</p>

  <div class="resources-grid">
    {#each links as item}
      <a href={item.url} target="_blank" rel="noreferrer" class="resource-card">
        <span class="resource-icon">{item.icon}</span>
        <div class="resource-body">
          <p class="resource-type">{item.label}</p>
          <p class="resource-title">{item.title}</p>
          {#if item.tip}
            <p class="resource-tip">{item.tip}</p>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="bottom-section">
    <div class="anki-block">
      <p class="section-label">🃏 Anki Card</p>
      <div class="anki-card">
        <p class="anki-side"><strong>Q:</strong> {r.anki_card.front}</p>
        <p class="anki-side"><strong>A:</strong> {r.anki_card.back}</p>
      </div>
      {#if !ankiDone}
        <button class="btn-secondary" onclick={copyAnki} style="margin-top: 10px;">Copiar card</button>
      {:else}
        <span class="badge-done" style="display: inline-block; margin-top: 10px;">Card copiado ✓</span>
      {/if}
    </div>

    <div class="speaking-block">
      <p class="section-label">🗣 Speaking</p>
      <p class="speaking-prompt">{r.speaking_prompt}</p>
      {#if !speakingDone}
        <button class="btn-ghost" onclick={markSpeaking} style="margin-top: 8px;">Marquei como feito</button>
      {:else}
        <span class="badge-done" style="display: inline-block; margin-top: 8px;">Speaking feito ✓</span>
      {/if}
    </div>
  </div>
</div>

<style>
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .resource-card {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    background: var(--color-neutral-50);
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    padding: 14px;
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
  }
  .resource-card:hover {
    background: white;
    border-color: rgba(61,124,255,0.2);
    box-shadow: var(--shadow-sm);
  }

  .resource-icon {
    font-size: 20px;
    flex-shrink: 0;
    line-height: 1;
    margin-top: 1px;
  }

  .resource-body {
    min-width: 0;
  }

  .resource-type {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: rgba(13,18,37,0.4);
    margin-bottom: 3px;
  }

  .resource-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--color-blue-500);
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .resource-tip {
    font-size: 12px;
    color: rgba(13,18,37,0.5);
    margin-top: 3px;
    line-height: 1.4;
  }

  .bottom-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }

  .section-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(13,18,37,0.45);
    margin-bottom: 8px;
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
    line-height: 1.5;
  }

  @media (max-width: 540px) {
    .resources-grid { grid-template-columns: 1fr; }
  }
</style>
