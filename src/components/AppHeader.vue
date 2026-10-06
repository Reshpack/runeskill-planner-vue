<script setup>
import { ref } from "vue";
import { useThemeStore } from "../stores/theme";
import { useSavedMethodsStore } from "../stores/savedMethods";

const savedMethodsStore = useSavedMethodsStore();
const themeStore = useThemeStore();

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        RuneSkill Planner
      </RouterLink>

      <div class="header-right">
        <RouterLink to="/planner" class="saved-badge">
          Saved {{ savedMethodsStore.totalCount }}
        </RouterLink>
        <button
          class="theme-toggle"
          @click="themeStore.toggleDarkMode"
          :aria-label="
            themeStore.isDarkMode
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          "
        >
          {{ themeStore.isDarkMode ? "☀ Light" : "☾ Dark" }}
        </button>

        <button
          class="menu-toggle"
          @click="toggleMenu"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
        >
          {{ menuOpen ? "✕" : "☰" }}
        </button>

        <nav
          class="nav-links"
          :class="{ open: menuOpen }"
          aria-label="Main navigation"
        >
          <RouterLink to="/" @click="closeMenu"> Home </RouterLink>

          <RouterLink to="/planner" @click="closeMenu"> Planner </RouterLink>

          <RouterLink to="/about" @click="closeMenu"> About </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.saved-badge {
  color: var(--gold-300);

  font-size: 0.8rem;
  font-weight: 700;

  text-decoration: none;
}

.saved-badge:hover {
  color: white;
  text-decoration: underline;
}

.header-right {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.5rem;
}

.site-header {
  background-color: var(--brown-900);

  border-bottom: 3px solid var(--gold-500);
}

.header-inner {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 0.9rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.theme-toggle {
  min-height: 44px;

  padding: 0.55rem 0.75rem;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.35rem;

  background-color: transparent;
  color: white;

  font-size: 0.8rem;
  font-weight: 700;

  cursor: pointer;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.brand {
  color: var(--gold-300);

  text-decoration: none;

  font-family: "MedievalSharp", cursive;
  font-size: 1.35rem;

  letter-spacing: 0.02rem;
}

.menu-toggle {
  padding: 0.35rem 0.55rem;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.35rem;

  background-color: transparent;
  color: white;

  font-size: 1.35rem;

  cursor: pointer;
}

.nav-links {
  display: none;

  width: 100%;

  margin-top: 0.8rem;

  flex-direction: column;

  gap: 0.2rem;
}

.nav-links.open {
  display: flex;
}

.nav-links a {
  padding: 0.65rem 0.8rem;

  border-radius: 0.3rem;

  color: white;

  text-decoration: none;

  font-size: 0.95rem;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.nav-links a.router-link-active {
  background-color: var(--gold-300);
  color: var(--brown-900);
}

@media (min-width: 768px) {
  .header-right {
    flex-wrap: nowrap;
  }

  .menu-toggle {
    display: none;
  }

  .nav-links {
    display: flex;

    width: auto;

    margin-top: 0;

    flex-direction: row;
    align-items: center;

    gap: 0.25rem;
  }

  .nav-links a {
    padding: 0.45rem 0.75rem;
  }
}
</style>
