<script setup>
import fishingGuideImage from "../assets/images/3-tick-fishing.gif";

const goals = [
  {
    skill: "Woodcutting",
    current: 72,
    target: 85,
    xpNeeded: "2.45M",
    progress: 58,
  },
  {
    skill: "Fishing",
    current: 65,
    target: 80,
    xpNeeded: "1.72M",
    progress: 42,
  },
  {
    skill: "Mining",
    current: 81,
    target: 90,
    xpNeeded: "3.15M",
    progress: 73,
  },
];
</script>

<template>
  <main class="planner-page">
    <section class="planner-hero">
      <p class="eyebrow">Your training overview</p>

      <h1>Plan your next skill goal.</h1>

      <p>
        Keep your current levels, target levels and progress together so you
        always know what you are working towards.
      </p>
    </section>

    <section class="saved-goals">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Saved goals</p>

          <h2>Your current training plans.</h2>
        </div>

        <p class="goal-count">
          {{ goals.length }} active goals
        </p>
      </div>

      <div class="goal-grid">
        <article
          v-for="goal in goals"
          :key="goal.skill"
          class="goal-card"
        >
          <div class="goal-card-top">
            <div>
              <p class="goal-label">Skill</p>

              <h3>{{ goal.skill }}</h3>
            </div>

            <span class="goal-percent">
              {{ goal.progress }}%
            </span>
          </div>

          <div class="goal-stats">
            <div>
              <span>Current</span>
              <strong>{{ goal.current }}</strong>
            </div>

            <div>
              <span>Target</span>
              <strong>{{ goal.target }}</strong>
            </div>

            <div>
              <span>XP Needed</span>
              <strong>{{ goal.xpNeeded }}</strong>
            </div>
          </div>

          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: goal.progress + '%' }"
            ></div>
          </div>

          <p class="progress-text">
            {{ goal.progress }}% complete
          </p>
        </article>
      </div>
    </section>

    <section class="guide-section">
      <div class="guide-heading">
        <p class="eyebrow">Guide preview</p>

        <h2>
          Training advice without the information overload.
        </h2>

        <p>
          Keep a useful training method close to your goal so you can move from
          planning to actually training.
        </p>
      </div>

      <article class="guide-card">
        <figure class="guide-image">
          <img
            :src="fishingGuideImage"
            alt="Player using the 3-tick Barbarian Fishing method"
          >

          <figcaption>
            Example of the 3-tick Barbarian Fishing method.
          </figcaption>
        </figure>

        <div class="guide-content">
          <p class="guide-skill">Fishing</p>

          <h3>
            Levels 58–71/99: Barbarian Fishing
          </h3>

          <p>
            Barbarian Fishing is a fast training option for players who want
            strong Fishing experience and do not mind a more click-intensive
            method.
          </p>

          <div class="guide-facts">
            <div>
              <span>Recommended level</span>
              <strong>58+</strong>
            </div>

            <div>
              <span>Training style</span>
              <strong>Fast</strong>
            </div>

            <div>
              <span>Intensity</span>
              <strong>High</strong>
            </div>
          </div>

          <p>
            Players who prefer a more relaxed approach can use standard
            Barbarian Fishing without tick manipulation for a lower-effort
            alternative.
          </p>

          <a
            class="guide-link"
            href="https://oldschool.runescape.wiki/w/Barbarian_Training#Heavy_rod_fishing"
            target="_blank"
            rel="noopener"
          >
            Read the full method on the OSRS Wiki →
          </a>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.planner-page {
  width: 100%;
}

.planner-hero {
  max-width: 50rem;

  margin: 0 auto;
  padding: 4rem 1.25rem 3rem;
}

.planner-hero h1 {
  margin: 0 0 1rem;

  color: var(--brown-900);

  font-size: clamp(2.7rem, 8vw, 4.5rem);
  line-height: 1.05;
}

.planner-hero > p:last-child {
  max-width: 40rem;

  margin: 0;

  color: var(--text-muted);

  font-size: 1.05rem;
}

.saved-goals {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 2rem 1.25rem 5rem;
}

.section-heading {
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
}

.section-heading h2 {
  margin: 0;

  color: var(--brown-900);

  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.goal-count {
  margin: 0;

  color: var(--text-muted);

  font-size: 0.9rem;
}

.goal-grid {
  display: grid;
  grid-template-columns: 1fr;

  gap: 1rem;
}

.goal-card {
  padding: 1.5rem;

  border: 1px solid var(--border);
  border-radius: 0.5rem;

  background-color: var(--surface);
}

.goal-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;
}

.goal-label {
  margin: 0 0 0.2rem;

  color: var(--text-muted);

  font-size: 0.75rem;
}

.goal-card h3 {
  margin: 0;

  color: var(--brown-900);

  font-size: 1.5rem;
}

.goal-percent {
  color: var(--gold-500);

  font-size: 1.3rem;
  font-weight: 700;
}

.goal-stats {
  margin: 1.5rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0.75rem;
}

.goal-stats div,
.guide-facts div {
  display: flex;
  flex-direction: column;

  gap: 0.15rem;
}

.goal-stats span,
.guide-facts span {
  color: var(--text-muted);

  font-size: 0.7rem;
}

.goal-stats strong {
  color: var(--brown-900);
}

.progress-bar {
  width: 100%;
  height: 0.5rem;

  overflow: hidden;

  border-radius: 1rem;

  background-color: var(--cream-100);
}

.progress-fill {
  height: 100%;

  background-color: var(--gold-500);
}

.progress-text {
  margin: 0.6rem 0 0;

  color: var(--text-muted);

  font-size: 0.8rem;
}

/* Guide */

.guide-section {
  padding: 5rem 1.25rem;

  background-color: var(--cream-100);
}

.guide-heading,
.guide-card {
  max-width: var(--max-width);

  margin-left: auto;
  margin-right: auto;
}

.guide-heading {
  max-width: 42rem;

  margin-bottom: 2.5rem;
}

.guide-heading h2 {
  margin: 0 0 1rem;

  color: var(--brown-900);

  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.guide-heading > p:last-child {
  margin: 0;

  color: var(--text-muted);
}

.guide-card {
  display: grid;
  grid-template-columns: 1fr;

  gap: 2.5rem;
  align-items: center;
}

.guide-image {
  margin: 0;
}

.guide-image img {
  width: 100%;

  aspect-ratio: 4 / 3;

  object-fit: cover;

  border-radius: 0.5rem;
}

.guide-image figcaption {
  margin-top: 0.5rem;

  color: var(--text-muted);

  font-size: 0.75rem;
}

.guide-content {
  max-width: 36rem;
}

.guide-skill {
  margin: 0 0 0.5rem;

  color: var(--gold-500);

  font-size: 0.8rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.06rem;
}

.guide-content h3 {
  margin: 0 0 1rem;

  color: var(--brown-900);

  font-size: 1.8rem;
  line-height: 1.2;
}

.guide-content > p {
  color: var(--text-muted);
}

.guide-facts {
  margin: 1.5rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;
}

.guide-facts strong {
  color: var(--brown-900);
}

.guide-link {
  display: inline-block;

  margin-top: 0.75rem;

  color: var(--brown-800);

  font-weight: 700;

  text-decoration-color: var(--gold-500);
  text-underline-offset: 0.25rem;
}

@media (min-width: 768px) {
  .section-heading {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }

  .goal-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .guide-card {
    grid-template-columns: 1fr 1fr;

    gap: 4rem;
  }
}

@media (min-width: 1024px) {
  .goal-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>