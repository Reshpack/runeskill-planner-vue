<script setup>
import heroImage from "../assets/images/skillcapes.png";
import woodcuttingImage from "../assets/images/wcing.jpg";
import farmingImage from "../assets/images/farming.png";
import bossImage from "../assets/images/boss-fight.jpg";

import { useRouter } from "vue-router";

const router = useRouter();

function openPlanner() {
  router.push("/planner");
}

const features = [
  {
    number: "01",
    title: "Choose a Skill",
    text: "Pick the skill you want to train, from gathering skills such as Fishing and Woodcutting to combat and support skills.",
  },
  {
    number: "02",
    title: "Set Your Goal",
    text: "Enter your current and target levels so you always know what you are working towards.",
  },
  {
    number: "03",
    title: "Track Progress",
    text: "Keep your goals organised and quickly see what you have completed and what still needs attention.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "A simple starting point for tracking a few skill goals.",
    features: [
      "3 saved skill goals",
      "Progress tracking",
      "Basic skill guides",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "$4.99 / month",
    description: "For players who want more flexibility and detailed planning.",
    features: [
      "Unlimited saved goals",
      "Full skill guides",
      "Training filters",
    ],
    featured: true,
  },
  {
    name: "Family",
    price: "$7.99 / month",
    description: "Shared planning features for multiple RuneScape players.",
    features: ["Unlimited saved goals", "Full guide access", "Up to 4 users"],
    featured: false,
  },
];
</script>

<template>
  <main class="home-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">RuneScape skill planning made simple</p>

        <h1>
          Plan the grind.<br />
          See the progress.
        </h1>

        <p class="hero-description">
          RuneSkill Planner helps players organise skill goals, track progress
          and keep useful training information together in one simple place.
        </p>

        <div class="hero-actions">
          <button class="primary-button" @click="openPlanner">
            Start Planning
          </button>

          <a href="#features" class="secondary-link"> See how it works </a>
        </div>
      </div>

      <div class="hero-visual">
        <img :src="heroImage" alt="RuneScape inspired skill capes" />
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="features-section">
      <div class="section-heading">
        <p class="eyebrow">How it works</p>

        <h2>Everything you need to plan your next skill goal.</h2>

        <p>
          Keep the important parts of your training plan together without
          constantly switching between notes, calculators and guides.
        </p>
      </div>

      <div class="feature-grid">
        <article
          v-for="feature in features"
          :key="feature.number"
          class="feature-item"
        >
          <span class="feature-number">
            {{ feature.number }}
          </span>

          <h3>{{ feature.title }}</h3>

          <p>{{ feature.text }}</p>
        </article>
      </div>
    </section>

    <!-- Dashboard preview -->
    <section class="dashboard-section">
      <div class="dashboard-image">
        <img
          :src="woodcuttingImage"
          alt="RuneScape inspired woodcutting scene"
        />
      </div>

      <div class="dashboard-content">
        <p class="eyebrow">Progress at a glance</p>

        <h2>A clearer way to keep track of your goals.</h2>

        <p class="dashboard-description">
          Save your current and target levels so you can quickly see what you
          are working towards and how much progress you have made.
        </p>

        <article class="goal-preview">
          <div class="goal-header">
            <div>
              <span class="goal-label">Current goal</span>
              <h3>Woodcutting</h3>
            </div>

            <span class="goal-percent">58%</span>
          </div>

          <div class="level-row">
            <div>
              <span>Current</span>
              <strong>72</strong>
            </div>

            <div>
              <span>Target</span>
              <strong>85</strong>
            </div>

            <div>
              <span>XP Needed</span>
              <strong>2.45M</strong>
            </div>
          </div>

          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>

          <p class="progress-text">58% of this training goal completed</p>
        </article>
      </div>
    </section>

    <!-- Guidance -->
    <section class="guidance-section">
      <div class="guidance-inner">
        <div class="guidance-content">
          <p class="eyebrow guidance-eyebrow">Training guidance</p>

          <h2>Spend less time searching and more time training.</h2>

          <p>
            RuneSkill Planner keeps useful training information close to your
            goals, helping you decide what to train next without jumping between
            multiple websites.
          </p>

          <ul class="guidance-list">
            <li>
              <strong>Skill-specific methods</strong>
              <span>
                Find suitable training options for different skills.
              </span>
            </li>

            <li>
              <strong>Clear level ranges</strong>
              <span>
                See which methods make sense for your current level.
              </span>
            </li>

            <li>
              <strong>Different play styles</strong>
              <span>
                Compare faster, cheaper and lower-effort approaches.
              </span>
            </li>
          </ul>
        </div>

        <figure class="guidance-image">
          <img :src="farmingImage" alt="RuneScape inspired farming scene" />

          <figcaption>
            Training guidance can sit alongside the goal you are working
            towards.
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Pricing -->
    <section class="pricing-section">
      <div class="pricing-heading">
        <p class="eyebrow">Planner options</p>

        <h2>Start simple, then expand your planning tools.</h2>

        <p>
          RuneSkill Planner is a fictional SaaS concept, with options designed
          around different levels of goal tracking.
        </p>
      </div>

      <div class="pricing-grid">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="plan"
          :class="{ featured: plan.featured }"
        >
          <div class="plan-top">
            <p v-if="plan.featured" class="plan-badge">Most Popular</p>

            <h3>{{ plan.name }}</h3>

            <p class="plan-price">
              {{ plan.price }}
            </p>

            <p class="plan-description">
              {{ plan.description }}
            </p>
          </div>

          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">
              {{ feature }}
            </li>
          </ul>

          <button class="plan-button" @click="openPlanner">
            Start Planning
          </button>
        </article>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
      <div class="final-cta-image">
        <img :src="bossImage" alt="RuneScape inspired boss fight" />
      </div>

      <div class="final-cta-content">
        <p class="eyebrow">Ready to begin?</p>

        <h2>Build a better training plan.</h2>

        <p>
          Set a clear skill goal, track your progress and keep the useful
          information you need in one place.
        </p>

        <button class="primary-button" @click="openPlanner">
          Open the Planner
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  width: 100%;
}

/* Hero */

.hero-section {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 3.5rem 1.25rem 4rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2.5rem;
  align-items: center;
}

.hero-copy {
  max-width: 42rem;
}

.hero-copy h1 {
  margin: 0 0 1.25rem;

  color: var(--heading-color);

  font-size: clamp(2.7rem, 9vw, 4.8rem);
  line-height: 1.05;
}

.hero-description {
  max-width: 38rem;

  margin: 0;

  color: var(--text-muted);

  font-size: 1.05rem;
}

.hero-actions {
  margin-top: 1.75rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 1rem;
}

.primary-button {
  padding: 0.75rem 1.15rem;

  border: none;
  border-radius: 0.35rem;

  background-color: var(--button-bg);
  color: var(--button-text);

  font-weight: 700;

  cursor: pointer;
}

.primary-button:hover {
  filter: brightness(1.08);
}

.secondary-link {
  color: var(--link-color);

  font-weight: 700;

  text-decoration-color: var(--gold-500);
  text-underline-offset: 0.25rem;
}

.hero-visual {
  overflow: hidden;

  border-radius: 0.5rem;

  background-color: var(--cream-100);

  box-shadow: 0 0.6rem 1.8rem rgba(33, 23, 15, 0.12);
}

.hero-visual img {
  width: 100%;

  aspect-ratio: 4 / 3;

  object-fit: cover;
}

/* Features */

.features-section {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 4rem 1.25rem;
}

.section-heading {
  max-width: 42rem;

  margin-bottom: 2.5rem;
}

.section-heading h2,
.dashboard-content h2,
.pricing-heading h2,
.final-cta-content h2 {
  margin: 0 0 1rem;

  color: var(--heading-color);

  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.section-heading p:last-child,
.pricing-heading p:last-child {
  margin: 0;

  color: var(--text-muted);
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.feature-item {
  padding: 1.5rem 0;

  border-top: 1px solid var(--border);
}

.feature-number {
  display: block;

  margin-bottom: 0.75rem;

  color: var(--gold-500);

  font-size: 0.8rem;
  font-weight: 700;
}

.feature-item h3 {
  margin: 0 0 0.6rem;

  color: var(--heading-color);

  font-size: 1.35rem;
}

.feature-item p {
  margin: 0;

  color: var(--text-muted);
}

/* Dashboard */

.dashboard-section {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 4rem 1.25rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2.5rem;
  align-items: center;
}

.dashboard-image {
  overflow: hidden;

  border-radius: 0.5rem;
}

.dashboard-image img {
  width: 100%;

  aspect-ratio: 4 / 3;

  object-fit: cover;
}

.dashboard-content {
  max-width: 36rem;
}

.dashboard-description {
  margin: 0 0 2rem;

  color: var(--text-muted);
}

.goal-preview {
  padding-top: 1.5rem;

  border-top: 1px solid var(--border);
}

.goal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 1rem;
}

.goal-label {
  color: var(--text-muted);

  font-size: 0.8rem;
}

.goal-header h3 {
  margin: 0.25rem 0 0;

  color: var(--heading-color);

  font-size: 1.5rem;
}

.goal-percent {
  color: var(--gold-500);

  font-size: 1.4rem;
  font-weight: 700;
}

.level-row {
  margin: 1.5rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;
}

.level-row div {
  display: flex;
  flex-direction: column;

  gap: 0.15rem;
}

.level-row span {
  color: var(--text-muted);

  font-size: 0.75rem;
}

.level-row strong {
  color: var(--heading-color);
}

.progress-bar {
  width: 100%;
  height: 0.55rem;

  overflow: hidden;

  background-color: var(--cream-100);

  border-radius: 1rem;
}

.progress-fill {
  width: 58%;
  height: 100%;

  background-color: var(--gold-500);
}

.progress-text {
  margin: 0.6rem 0 0;

  color: var(--text-muted);

  font-size: 0.8rem;
}

/* Guidance */

.guidance-section {
  background-color: var(--brown-900);

  color: white;
}

.guidance-inner {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 4rem 1.25rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 3rem;
  align-items: center;
}

.guidance-content {
  max-width: 38rem;
}

.guidance-eyebrow {
  color: var(--gold-300);
}

.guidance-content h2 {
  margin: 0 0 1rem;

  color: white;

  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.guidance-content > p {
  margin: 0;

  color: #d8cec1;
}

.guidance-list {
  margin: 2rem 0 0;
  padding: 0;

  list-style: none;
}

.guidance-list li {
  padding: 1rem 0;

  border-top: 1px solid rgba(255, 255, 255, 0.12);

  display: flex;
  flex-direction: column;

  gap: 0.25rem;
}

.guidance-list strong {
  color: var(--gold-300);
}

.guidance-list span {
  color: #d8cec1;

  font-size: 0.9rem;
}

.guidance-image {
  margin: 0;
}

.guidance-image img {
  width: 100%;

  aspect-ratio: 4 / 3;

  object-fit: cover;

  border-radius: 0.5rem;
}

.guidance-image figcaption {
  margin-top: 0.6rem;

  color: #aa9d8e;

  font-size: 0.75rem;
}

/* Pricing */

.pricing-section {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 5rem 1.25rem;
}

.pricing-heading {
  max-width: 42rem;

  margin-bottom: 3rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;

  gap: 1rem;
}

.plan {
  padding: 1.75rem;

  border: 1px solid var(--border);
  border-radius: 0.5rem;

  background-color: var(--surface);

  display: flex;
  flex-direction: column;
}

.plan.featured {
  border-color: var(--brown-900);

  background-color: var(--brown-900);
  color: white;
}

.plan h3 {
  margin: 0 0 0.4rem;

  color: var(--heading-color);

  font-size: 1.5rem;
}

.plan.featured h3 {
  color: white;
}

.plan-price {
  margin: 0 0 1rem;

  color: var(--gold-500);

  font-size: 1.2rem;
  font-weight: 700;
}

.plan-description {
  margin: 0;

  color: var(--text-muted);

  font-size: 0.9rem;
}

.plan.featured .plan-description {
  color: #d8cec1;
}

.plan-badge {
  width: fit-content;

  margin: 0 0 1rem;
  padding: 0;

  background-color: transparent;
  color: var(--gold-500);

  font-size: 0.7rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.08rem;
}

.plan-features {
  margin: 1.5rem 0;
  padding: 0;

  list-style: none;

  flex-grow: 1;
}

.plan-features li {
  padding: 0.6rem 0;

  border-top: 1px solid var(--border);

  font-size: 0.9rem;
}

.plan.featured .plan-features li {
  border-color: rgba(255, 255, 255, 0.12);
}

.plan-button {
  width: 100%;

  padding: 0.7rem 1rem;

  border: 1px solid var(--gold-500);
  border-radius: 0.35rem;

  background-color: transparent;
  color: var(--link-color);

  font-weight: 700;

  cursor: pointer;
}

.plan-button:hover {
  background-color: var(--gold-300);
  color: var(--brown-900);
}

.plan.featured .plan-button {
  border-color: var(--gold-300);

  background-color: var(--gold-300);
  color: var(--brown-900);
}

/* Final CTA */

.final-cta {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 4rem 1.25rem 5rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2.5rem;
  align-items: center;
}

.final-cta-image {
  overflow: hidden;

  border-radius: 0.5rem;
}

.final-cta-image img {
  width: 100%;

  aspect-ratio: 16 / 10;

  object-fit: cover;
}

.final-cta-content {
  max-width: 34rem;
}

.final-cta-content > p:not(.eyebrow) {
  margin: 0 0 1.5rem;

  color: var(--text-muted);
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);

    border-top: 1px solid var(--border);
  }

  .feature-item {
    padding: 1.75rem;

    border-top: none;
    border-left: 1px solid var(--border);
  }

  .feature-item:first-child {
    padding-left: 0;

    border-left: none;
  }

  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 900px) {
  .hero-section,
  .dashboard-section,
  .guidance-inner,
  .final-cta {
    grid-template-columns: 1fr 1fr;

    gap: 4rem;
  }

  .hero-section {
    min-height: 38rem;

    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  .dashboard-section,
  .guidance-inner {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>
