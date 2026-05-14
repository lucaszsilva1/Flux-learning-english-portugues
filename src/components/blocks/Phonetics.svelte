<script lang="ts">
  import type { Lesson } from '$lib/types'
  let { lesson }: { lesson: Lesson } = $props()
</script>

<div class="block-card">
  <p class="block-label">Pronúncia</p>
  <div class="phonetics-row">
    <div class="phonetics-item">
      <span class="phonetics-icon">🎙</span>
      <p>{lesson.pronunciation}</p>
    </div>
    <div class="phonetics-item tip">
      <span class="phonetics-icon">💡</span>
      <p><strong>Stress tip:</strong> {lesson.stress_tip}</p>
    </div>
  </div>
</div>

<style>
  .phonetics-row {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .phonetics-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15px;
  }
  .phonetics-icon {
    font-size: 18px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .tip {
    background: #FFF8EC;
    border-radius: var(--radius-sm);
    padding: 12px;
  }
</style>
