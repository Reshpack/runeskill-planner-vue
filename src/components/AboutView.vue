<script setup>
import groupImage from "../assets/images/group2.webp";
import playerImage from "../assets/images/skill2.png";
import futureImage from "../assets/images/boss-fight2.webp";

const values = [
  {
    number: "01",
    title: "Save Players Time",
    text: "Keep goals and useful training information together instead of searching across multiple websites.",
  },
  {
    number: "02",
    title: "Track Goals Clearly",
    text: "Use simple progress information so players can quickly understand what they are working towards.",
  },
  {
    number: "03",
    title: "Work on Any Device",
    text: "Keep the planner readable and usable across mobile, tablet and desktop screens.",
  },
];
</script>

<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-copy">
        <p class="eyebrow">About RuneSkill Planner</p>

        <h1>
          Planning should be simpler than the grind itself.
        </h1>

        <p>
          RuneSkill Planner is a student-built concept for RuneScape players
          who want an easier way to organise training goals, understand their
          progress and find useful guidance.
        </p>
      </div>

      <div class="about-image">
        <img
          :src="groupImage"
          alt="RuneScape inspired group of players"
        >
      </div>
    </section>

    <section class="story-section">
      <div class="story-content">
        <p class="eyebrow">Why it exists</p>

        <h2>Less searching. More direction.</h2>

        <p>
          RuneScape includes many different skills, training methods and
          long-term goals. Players can spend a lot of time moving between
          calculators, guides, videos and notes just to decide what to do next.
        </p>

        <p>
          RuneSkill Planner brings the planning side of training into one
          organised place. Players can set a current level, choose a target and
          keep track of the goal they are working towards.
        </p>
      </div>
    </section>

    <section class="mission-section">
      <div class="mission-heading">
        <p class="eyebrow">Our mission</p>

        <h2>
          Useful tools without unnecessary complexity.
        </h2>
      </div>

      <div class="mission-grid">
        <article
          v-for="value in values"
          :key="value.number"
          class="mission-item"
        >
          <span>{{ value.number }}</span>

          <h3>{{ value.title }}</h3>

          <p>{{ value.text }}</p>
        </article>
      </div>
    </section>

    <section class="audience-section">
      <div class="audience-image">
        <img
          :src="playerImage"
          alt="RuneScape inspired skill training"
        >
      </div>

      <div class="audience-content">
        <p class="eyebrow">Designed for players</p>

        <h2>
          Useful whether you play every day or are just returning.
        </h2>

        <p>
          The planner is designed for players who want to check goals quickly,
          as well as casual or returning players who prefer simple navigation,
          readable information and clear progress tracking.
        </p>

        <p>
          Responsive layouts also make the same information easy to use on a
          phone, tablet or desktop computer.
        </p>
      </div>
    </section>

    <section class="future-section">
      <div class="future-content">
        <p class="eyebrow">Looking ahead</p>

        <h2>
          There is plenty of room to expand.
        </h2>

        <p>
          Future versions could include XP calculations, saved goals,
          additional training filters, more detailed skill guides and live
          item information.
        </p>
      </div>

      <div class="future-image">
        <img
          :src="futureImage"
          alt="RuneScape inspired boss encounter"
        >
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  width: 100%;
}

.about-hero {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 4rem 1.25rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2.5rem;
  align-items: center;
}

.about-copy {
  max-width: 42rem;
}

.about-copy h1 {
  margin: 0 0 1.25rem;

  color: var(--brown-900);

  font-size: clamp(2.7rem, 8vw, 4.5rem);
  line-height: 1.05;
}

.about-copy > p:last-child {
  margin: 0;

  color: var(--text-muted);
}

.about-image,
.audience-image,
.future-image {
  overflow: hidden;

  border-radius: 0.5rem;
}

.about-image img,
.audience-image img,
.future-image img {
  width: 100%;

  aspect-ratio: 4 / 3;

  object-fit: cover;
}

/* Story */

.story-section {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 5rem 1.25rem;
}

.story-content {
  max-width: 44rem;
}

.story-content h2,
.mission-heading h2,
.audience-content h2,
.future-content h2 {
  margin: 0 0 1rem;

  color: var(--brown-900);

  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
}

.story-content p:not(.eyebrow),
.audience-content p,
.future-content p {
  color: var(--text-muted);
}

/* Mission */

.mission-section {
  padding: 5rem 1.25rem;

  background-color: var(--cream-100);
}

.mission-heading,
.mission-grid {
  max-width: var(--max-width);

  margin-left: auto;
  margin-right: auto;
}

.mission-heading {
  margin-bottom: 2.5rem;
}

.mission-heading h2 {
  max-width: 40rem;

  margin-bottom: 0;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.mission-item {
  padding: 1.5rem 0;

  border-top: 1px solid var(--border);
}

.mission-item span {
  color: var(--gold-500);

  font-size: 0.8rem;
  font-weight: 700;
}

.mission-item h3 {
  margin: 0.5rem 0;

  color: var(--brown-900);
}

.mission-item p {
  margin: 0;

  color: var(--text-muted);
}

/* Audience / future */

.audience-section,
.future-section {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 5rem 1.25rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2.5rem;
  align-items: center;
}

.audience-content,
.future-content {
  max-width: 36rem;
}

@media (min-width: 768px) {
  .mission-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .mission-item {
    padding: 1.5rem;

    border-top: none;
    border-left: 1px solid var(--border);
  }

  .mission-item:first-child {
    padding-left: 0;

    border-left: none;
  }
}

@media (min-width: 900px) {
  .about-hero,
  .audience-section,
  .future-section {
    grid-template-columns: 1fr 1fr;

    gap: 4rem;
  }
}
</style>