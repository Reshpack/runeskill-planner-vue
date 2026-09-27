<script setup>
const emit = defineEmits(['change-view'])

function changeView(view) {
  emit('change-view', view)
}
</script>

<template>
  <footer>
    <h3>RuneSkill Planner</h3>

    <p>
      A RuneScape-inspired skill planning student project.
    </p>

    <nav aria-label="Footer navigation">
      <button @click="changeView('home')">Home</button>
      <button @click="changeView('planner')">Planner</button>
      <button @click="changeView('about')">About</button>
    </nav>

    <p>&copy; 2026 RuneSkill Planner.</p>
  </footer>
</template>