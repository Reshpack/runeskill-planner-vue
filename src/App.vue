<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div id="app-layout">
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
}

.route-content {
  flex: 1;
}
</style>