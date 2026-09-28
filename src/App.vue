<script setup>
import { ref } from "vue";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import HomeView from "./components/HomeView.vue";
import PlannerView from "./components/PlannerView.vue";
import AboutView from "./components/AboutView.vue";
import ContactForm from "./components/ContactForm.vue";

const activeView = ref("home");

function changeView(view) {
  activeView.value = view;
}
</script>

<template>
  <div id="app-layout">
    <AppHeader :activeView="activeView" @change-view="changeView" />

    <HomeView v-if="activeView === 'home'" @change-view="changeView" />

    <template v-else-if="activeView === 'planner'">
      <PlannerView />

      <ContactForm
        form-title="Create Your Next Skill Goal"
        @submit-form="handleFormSubmit"
      />
      <article v-if="submittedGoal" class="acknowledgement-card">
        <p class="acknowledgement-label">Goal created</p>

        <h3>
          {{ submittedGoal.goalName }}
        </h3>

        <p>Your new training goal has been saved with the following details:</p>

        <ul>
          <li>
            <strong>Skill:</strong>
            {{ submittedGoal.skill }}
          </li>

          <li>
            <strong>Levels:</strong>
            {{ submittedGoal.currentLevel }}
            →
            {{ submittedGoal.targetLevel }}
          </li>

          <li>
            <strong>Target date:</strong>
            {{ submittedGoal.targetDate }}
          </li>

          <li>
            <strong>Training style:</strong>
            {{ submittedGoal.trainingStyle }}
          </li>

          <li>
            <strong>Reminder:</strong>
            {{ submittedGoal.reminder }}
          </li>

          <li>
            <strong>AFK alternatives:</strong>
            {{ submittedGoal.includeAfk ? "Included" : "Not included" }}
          </li>
        </ul>
      </article>
    </template>

    <AboutView v-else-if="activeView === 'about'" />

    <AppFooter @change-view="changeView" />
  </div>
</template>

<style>
#app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Acknowledgement */
.acknowledgement-card {
  width: calc(100% - 2.5rem);
  max-width: 48rem;

  margin: 0 auto 5rem;
  padding: 1.75rem;

  border: 1px solid var(--border);
  border-left: 4px solid var(--gold-500);
  border-radius: 0.5rem;

  background-color: var(--surface);
}

.acknowledgement-label {
  margin: 0 0 0.4rem;

  color: var(--gold-500);

  font-size: 0.75rem;
  font-weight: 700;

  text-transform: uppercase;
}

.acknowledgement-card h3 {
  margin: 0 0 0.75rem;

  color: var(--brown-900);

  font-size: 1.6rem;
}

.acknowledgement-card ul {
  margin-bottom: 0;
  padding-left: 1.25rem;
}
</style>
