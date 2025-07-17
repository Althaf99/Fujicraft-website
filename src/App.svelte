<script>
import { routes } from './routes.js';
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
let currentRoute = '/';

function normalizeRoute(route) {
  if (!route.startsWith('/')) return '/' + route;
  return route;
}

function navigate(route) {
  currentRoute = normalizeRoute(route);
  window.history.pushState({}, '', currentRoute);
}

onMount(() => {
  window.onpopstate = () => {
    currentRoute = normalizeRoute(window.location.pathname);
  };
  currentRoute = normalizeRoute(window.location.pathname || '/');
});
</script>

<nav>
  <div class="logo-container">
    <img src="/src/assets/logo.png" alt="Fujicraft Electrical Accessories Logo" class="logo-img" />
    <div class="logo-title">Fujicraft Electrical Accessories</div>
  </div>
  <ul>
    <li><a href="/who-we-are" class:selected={currentRoute === '/who-we-are'} on:click|preventDefault={() => navigate('/who-we-are')}>WHO WE ARE</a></li>
    <li><a href="/what-drives-us" class:selected={currentRoute === '/what-drives-us'} on:click|preventDefault={() => navigate('/what-drives-us')}>WHAT DRIVES US</a></li>
    <li><a href="/what-we-do" class:selected={currentRoute === '/what-we-do'} on:click|preventDefault={() => navigate('/what-we-do')}>WHAT WE DO</a></li>
    <li><a href="/contact" class:selected={currentRoute === '/contact'} on:click|preventDefault={() => navigate('/contact')}>CONTACT</a></li>
   
  </ul>
  </nav>

<main>
  {#if routes[currentRoute]}
    <div transition:fade={{ duration: 350 }}>
      <svelte:component this={routes[currentRoute]} key={currentRoute} />
    </div>
  {:else}
    <h2 transition:fade={{ duration: 350 }}>Page not found</h2>
  {/if}
</main>

<style>
.logo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  margin-top: 2rem;
}
.logo-title {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #d90429;
  margin-top: 0.5rem;
  text-align: center;
}
.logo-img {
  max-width: 120px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #fff;
  padding: 0.5rem;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  z-index: 1000;
}
nav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  background: #fff;
  border-top-right-radius: 110px;
  border-bottom-right-radius: 110px;
  box-shadow: 2px 0 16px rgba(0,0,0,0.08);
  z-index: -1;
}
nav ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  padding: 0;
  width: 100%;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 6rem;
}
nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  position: relative;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
nav a.selected {
  color: #fff;
  background: #d90429;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

main {
  margin-left: 240px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
}
</style>
