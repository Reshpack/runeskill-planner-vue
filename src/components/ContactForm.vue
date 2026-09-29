<script setup>
import { ref } from "vue";

const props = defineProps({
  formTitle: {
    type: String,
    default: "Create a Skill Goal",
  },
});

const emit = defineEmits(["submit-form"]);

const skills = ["Woodcutting", "Fishing", "Mining"];

const trainingStyles = ["Fast", "AFK", "Cheap"];

const form = ref({
  goalName: "",
  skill: "",
  currentLevel: null,
  targetLevel: null,
  targetDate: "",
  trainingStyle: "",
  reminder: "",
  includeAfk: false,
});

const errors = ref({
  goalName: "",
  skill: "",
  currentLevel: "",
  targetLevel: "",
  targetDate: "",
  trainingStyle: "",
  reminder: "",
});

const showSuccess = ref(false);

function validateForm() {
  errors.value = {
    goalName: "",
    skill: "",
    currentLevel: "",
    targetLevel: "",
    targetDate: "",
    trainingStyle: "",
    reminder: "",
  };

  if (!form.value.goalName.trim()) {
    errors.value.goalName = "Please enter a goal name.";
  } else if (form.value.goalName.trim().length < 3) {
    errors.value.goalName = "Goal name must be at least 3 characters.";
  }

  if (!form.value.skill) {
    errors.value.skill = "Please select a skill.";
  }

  if (
    form.value.currentLevel === null ||
    form.value.currentLevel === "" ||
    form.value.currentLevel < 1 ||
    form.value.currentLevel > 99
  ) {
    errors.value.currentLevel = "Current level must be between 1 and 99.";
  }

  if (
    form.value.targetLevel === null ||
    form.value.targetLevel === "" ||
    form.value.targetLevel < 1 ||
    form.value.targetLevel > 99
  ) {
    errors.value.targetLevel = "Target level must be between 1 and 99.";
  } else if (
    form.value.currentLevel !== null &&
    form.value.currentLevel !== "" &&
    form.value.targetLevel <= form.value.currentLevel
  ) {
    errors.value.targetLevel =
      "Target level must be higher than your current level.";
  }

  if (!form.value.targetDate) {
    errors.value.targetDate = "Please choose a target date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(form.value.targetDate + "T00:00:00");

    if (selectedDate <= today) {
      errors.value.targetDate = "Target date must be after today.";
    }
  }

  if (!form.value.trainingStyle) {
    errors.value.trainingStyle = "Please select a training style.";
  }

  if (!form.value.reminder) {
    errors.value.reminder = "Please choose a reminder option.";
  }

  return !Object.values(errors.value).some((error) => error !== "");
}

function resetForm() {
  form.value = {
    goalName: "",
    skill: "",
    currentLevel: null,
    targetLevel: null,
    targetDate: "",
    trainingStyle: "",
    reminder: "",
    includeAfk: false,
  };

  errors.value = {
    goalName: "",
    skill: "",
    currentLevel: "",
    targetLevel: "",
    targetDate: "",
    trainingStyle: "",
    reminder: "",
  };
}

function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  emit("submit-form", { ...form.value });

  showSuccess.value = true;

  setTimeout(() => {
    resetForm();
    showSuccess.value = false;
  }, 2000);
}
</script>

<template>
  <section class="form-section">
    <div class="form-heading">
      <p class="eyebrow">Create a goal</p>

      <h2>{{ props.formTitle }}</h2>

      <p>
        Add a new training goal and choose how you would like to approach it.
      </p>
    </div>

    <form class="planner-form" @submit.prevent="handleSubmit" novalidate>
      <fieldset>
        <legend>Goal details</legend>

        <div class="field field-full">
          <label for="goal-name"> Goal name </label>

          <input
            id="goal-name"
            v-model="form.goalName"
            type="text"
            placeholder="e.g. Reach 85 Woodcutting"
          />

          <p v-if="errors.goalName" class="error-message">
            {{ errors.goalName }}
          </p>
        </div>

        <div class="field field-full">
          <label for="skill"> Skill </label>

          <select id="skill" v-model="form.skill">
            <option value="">Select a skill</option>

            <option v-for="skill in skills" :key="skill" :value="skill">
              {{ skill }}
            </option>
          </select>

          <p v-if="errors.skill" class="error-message">
            {{ errors.skill }}
          </p>
        </div>

        <div class="field">
          <label for="current-level"> Current level </label>

          <input
            id="current-level"
            v-model.number="form.currentLevel"
            type="number"
            min="1"
            max="99"
          />

          <p v-if="errors.currentLevel" class="error-message">
            {{ errors.currentLevel }}
          </p>
        </div>

        <div class="field">
          <label for="target-level"> Target level </label>

          <input
            id="target-level"
            v-model.number="form.targetLevel"
            type="number"
            min="1"
            max="99"
          />

          <p v-if="errors.targetLevel" class="error-message">
            {{ errors.targetLevel }}
          </p>
        </div>

        <div class="field field-full">
          <label for="target-date"> Target date </label>

          <input id="target-date" v-model="form.targetDate" type="date" />

          <p v-if="errors.targetDate" class="error-message">
            {{ errors.targetDate }}
          </p>
        </div>
      </fieldset>

      <fieldset>
        <legend>Preferences</legend>

        <div class="field">
          <label for="training-style"> Training style </label>

          <select id="training-style" v-model="form.trainingStyle">
            <option value="">Select a style</option>

            <option v-for="style in trainingStyles" :key="style" :value="style">
              {{ style }}
            </option>
          </select>

          <p v-if="errors.trainingStyle" class="error-message">
            {{ errors.trainingStyle }}
          </p>
        </div>

        <div class="field">
          <span class="field-label"> Reminder frequency </span>

          <div class="radio-options">
            <label>
              <input v-model="form.reminder" type="radio" value="daily" />
              Daily
            </label>

            <label>
              <input v-model="form.reminder" type="radio" value="weekly" />
              Weekly
            </label>

            <label>
              <input v-model="form.reminder" type="radio" value="none" />
              None
            </label>
          </div>

          <p v-if="errors.reminder" class="error-message">
            {{ errors.reminder }}
          </p>
        </div>

        <label class="checkbox-field">
          <input v-model="form.includeAfk" type="checkbox" />

          Include lower-effort AFK alternatives in my training plan
        </label>
      </fieldset>

      <button class="submit-button" type="submit">Create Goal</button>

      <p v-if="showSuccess" class="success-message">
        Goal created successfully.
      </p>
    </form>
  </section>
</template>

<style scoped>
.form-section {
  width: 100%;
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 5rem 1.25rem;
}

.form-heading {
  max-width: 42rem;

  margin-bottom: 2.5rem;
}

.form-heading h2 {
  margin: 0 0 1rem;

  color: var(--heading-color);

  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.form-heading > p:last-child {
  margin: 0;

  color: var(--text-muted);
}

.planner-form {
  width: 100%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;
}

fieldset {
  margin: 0;
  padding: 1.5rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 1rem;

  border: 1px solid var(--border);
  border-radius: 0.5rem;

  background-color: var(--surface);
}

legend {
  padding: 0 0.4rem;

  color: var(--heading-color);

  font-family: "MedievalSharp", cursive;
  font-size: 1.2rem;
}

.field {
  display: flex;
  flex-direction: column;

  gap: 0.35rem;
}

.field label,
.field-label {
  color: var(--text);

  font-size: 0.85rem;
  font-weight: 700;
}

.field input,
.field select {
  width: 100%;

  padding: 0.75rem;

  border: 1px solid var(--border);
  border-radius: 0.35rem;

  background-color: var(--surface);
  color: var(--text);
}

.field input:focus,
.field select:focus {
  outline: 2px solid var(--gold-500);
  outline-offset: 2px;
}

.radio-options {
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
}

.radio-options label {
  display: flex;
  align-items: center;

  gap: 0.4rem;

  font-weight: normal;
}

.radio-options input {
  width: auto;
}

.checkbox-field {
  display: flex;
  align-items: flex-start;

  gap: 0.6rem;

  color: var(--text);

  font-size: 0.9rem;
}

.checkbox-field input {
  width: auto;

  margin-top: 0.3rem;
}

.submit-button {
  align-self: flex-start;

  padding: 0.75rem 1.2rem;

  border: none;
  border-radius: 0.35rem;

  background-color: var(--button-bg);
  color: var(--button-text);

  font-weight: 700;

  cursor: pointer;
}

.submit-button:hover {
  filter: brightness(1.08);
}

.error-message {
  margin: 0.2rem 0 0;

  color: #c6534a;

  font-size: 0.8rem;
}

.success-message {
  margin: 0;

  color: #2d8a4c;

  font-weight: 700;
}

@media (min-width: 768px) {
  fieldset {
    grid-template-columns: repeat(2, 1fr);
  }

  .field-full,
  .checkbox-field {
    grid-column: 1 / -1;
  }
}
</style>
