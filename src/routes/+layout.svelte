<script lang="ts">
  import '../app.css'
  import Navbar from '../components/Navbar.svelte'
  let { children } = $props()
</script>

<svelte:head>
  <title>FLUX — Imersão em Inglês</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout-root">
  <Navbar />
  <div class="layout-body">
    {@render children()}
  </div>
</div>

<style>
  .layout-root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .layout-body {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
