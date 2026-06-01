<script lang="ts">
  let { value, label, color = 'var(--color-orange-500)' }: {
    value: number
    label: string
    color?: string
  } = $props()

  const pct = $derived(Math.min(100, Math.max(0, Math.round(value))))
</script>

<div class="progress-wrap">
  <div class="progress-header">
    <span class="progress-label">{label}</span>
    <span class="progress-pct">{pct}%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill" style="width: {pct}%; background: {color};"></div>
  </div>
</div>

<style>
  .progress-wrap { display: flex; flex-direction: column; gap: 6px; }
  .progress-header { display: flex; justify-content: space-between; align-items: center; }
  .progress-label { font-size: 13px; font-weight: 600; color: var(--color-navy-900); }
  .progress-pct { font-size: 12px; color: rgba(13,18,37,0.5); font-weight: 600; }
  .progress-track {
    height: 8px;
    background: rgba(0,0,0,0.08);
    border-radius: var(--radius-pill);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: var(--radius-pill);
    transition: width var(--transition);
  }
</style>
