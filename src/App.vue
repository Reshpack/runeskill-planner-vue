<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import { useThemeStore } from "./stores/theme";

const themeStore = useThemeStore();
</script>

<template>
  <div id="app-layout" :class="themeStore.currentThemeClass">
    <AppHeader />

    <main class="route-content">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style>
#app-layout {
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: var(--cream-50);
  color: var(--text);
}

.route-content {
  flex: 1;
}

.theme-dark input,
.theme-dark select,
.theme-dark textarea {
  color-scheme: dark;
}
</style>