<script setup>
import { ref } from 'vue'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

import HomeView from './components/HomeView.vue'
import PlannerView from './components/PlannerView.vue'
import AboutView from './components/AboutView.vue'

const activeView = ref('home')

function changeView(view) {
  activeView.value = view
}
</script>

<template>
    <div id="app-layout">
  
      <AppHeader
        :activeView="activeView"
        @change-view="changeView"
      />
  
      <HomeView v-if="activeView === 'home'" />
  
      <PlannerView v-else-if="activeView === 'planner'" />
  
      <AboutView v-else-if="activeView === 'about'" />
  
      <AppFooter
        @change-view="changeView"
      />
  
    </div>
  </template>

<style>
#app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
