<script>
  import { routes } from "./routes.js";
  import { onMount } from "svelte";
  let currentRoute = "/";

  function normalizeRoute(route) {
    if (!route.startsWith("/")) route = "/" + route;
    return route.replace(/\/+$/, ""); // Remove trailing slashes
  }

  function getRouteFromHash() {
    // Extract only the part after #, ignoring any base path or search
    const hash = window.location.hash.split("#")[1] || "/";
    // Remove any query string
    const route = hash.split("?")[0];
    return normalizeRoute(route);
  }

  function navigate(route) {
    currentRoute = normalizeRoute(route);
    window.location.hash = currentRoute;
  }

  onMount(() => {
    function updateRouteFromHash() {
      currentRoute = getRouteFromHash();
    }
    window.addEventListener("hashchange", updateRouteFromHash);
    updateRouteFromHash();
    return () => window.removeEventListener("hashchange", updateRouteFromHash);
  });
</script>

<nav class="apple-nav">
  <div class="apple-nav-logo">
    <img src="/src/assets/logo.png" alt="Fujicraft Logo" class="apple-logo" />
  </div>
  <ul class="apple-nav-list">
    <li>
      <a
        href="#/who-we-are"
        class:selected={currentRoute === "/who-we-are"}
        on:click|preventDefault={() => navigate("/who-we-are")}>Who We Are</a
      >
    </li>
    <li>
      <a
        href="#/what-drives-us"
        class:selected={currentRoute === "/what-drives-us"}
        on:click|preventDefault={() => navigate("/what-drives-us")}
        >What Drives Us</a
      >
    </li>
    <li>
      <a
        href="#/what-we-do"
        class:selected={currentRoute === "/what-we-do"}
        on:click|preventDefault={() => navigate("/what-we-do")}>What We Do</a
      >
    </li>
    <li>
      <a
        href="#/contact"
        class:selected={currentRoute === "/contact"}
        on:click|preventDefault={() => navigate("/contact")}>Contact</a
      >
    </li>
  </ul>
</nav>

<main>
  {#if routes[currentRoute]}
    <div>
      <svelte:component this={routes[currentRoute]} key={currentRoute} />
    </div>
  {:else}
    <h2>Page not found</h2>
  {/if}
</main>

<style>
  .apple-nav {
    width: 100vw;
    height: 54px;
    background: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 0 1.2rem;
  }
  .apple-nav-logo {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }
  .apple-logo {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  .apple-nav-list {
    display: flex;
    gap: 1.2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  .apple-nav-list li {
    display: flex;
    align-items: center;
  }
  .apple-nav-list a {
    color: #f5f5f7;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.18rem 0.5rem;
    border-radius: 0.5rem;
    transition:
      background 0.2s,
      color 0.2s;
    letter-spacing: 0.01em;
  }
  .apple-nav-list a.selected {
    background: #333;
    color: #fff;
  }
  .apple-nav-list a:hover {
    background: #232323;
    color: #fff;
  }
  main {
    margin-top: 54px;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }

  @media (max-width: 430px) {
    .apple-nav {
      height: 50px;
      padding: 0 0.5rem;
    }
    .apple-nav-logo {
      margin-right: 1rem;
    }
    .apple-logo {
      width: 24px;
      height: 24px;
    }
    .apple-nav-list {
      gap: 0.7rem;
    }
    .apple-nav-list a {
      font-size: 0.95rem;
      padding: 0.15rem 0.3rem;
    }
    main {
      margin-top: 50px;
      padding: 0 0.2rem;
    }
    .responsive-container {
      padding: 1.2rem 0.5rem;
      max-width: 100vw;
    }
  }

  @media (max-width: 390px) {
    .apple-nav {
      height: 48px;
      padding: 0 0.2rem;
    }
    .apple-nav-logo {
      margin-right: 0.5rem;
    }
    .apple-logo {
      width: 20px;
      height: 20px;
    }
    .apple-nav-list {
      gap: 0.4rem;
    }
    .apple-nav-list a {
      font-size: 0.9rem;
      padding: 0.12rem 0.18rem;
    }
    main {
      margin-top: 48px;
      padding: 0 0.1rem;
    }
    .responsive-container {
      padding: 0.7rem 0.1rem;
      max-width: 100vw;
    }
  }
</style>
