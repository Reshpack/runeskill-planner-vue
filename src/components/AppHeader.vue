<script setup>
defineProps({
  activeView: {
    type: String,
    default: 'home',
  },
})

const emit = defineEmits(['change-view'])

function changeView(view) {
  emit('change-view', view)
}
</script>

<template>
    <header class="site-header">
  
      <button
        class="brand"
        @click="changeView('home')"
      >
        RuneSkill Planner
      </button>
  
      <nav aria-label="Main navigation">
        <button
          @click="changeView('home')"
          :class="{ active: activeView === 'home' }"
        >
          Home
        </button>
  
        <button
          @click="changeView('planner')"
          :class="{ active: activeView === 'planner' }"
        >
          Planner
        </button>
  
        <button
          @click="changeView('about')"
          :class="{ active: activeView === 'about' }"
        >
          About
        </button>
      </nav>
  
    </header>
  </template>

  