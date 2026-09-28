<script setup>
const emit = defineEmits(["change-view"]);

function changeView(view) {
  emit("change-view", view);
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-about">
        <h3>RuneSkill Planner</h3>

        <p>
          A RuneScape-inspired planning tool for organising
          skill goals and training progress.
        </p>

        <p class="project-note">
          SIT120 student project.
        </p>
      </div>

      <nav
        class="footer-nav"
        aria-label="Footer navigation"
      >
        <h4>Navigate</h4>

        <a
          href="#home"
          @click.prevent="changeView('home')"
        >
          Home
        </a>

        <a
          href="#planner"
          @click.prevent="changeView('planner')"
        >
          Planner
        </a>

        <a
          href="#about"
          @click.prevent="changeView('about')"
        >
          About
        </a>
      </nav>

      <div class="footer-contact">
        <h4>Contact</h4>

        <a href="mailto:your-email@deakin.edu.au">
          your-email@deakin.edu.au
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        &copy; 2026 RuneSkill Planner. Website by Suresh Packiry.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;

  background-color: var(--brown-900);
  color: white;
}

.footer-inner {
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 2.5rem 1.25rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2rem;
}

.footer-about {
  max-width: 32rem;
}

.footer-about h3,
.footer-nav h4,
.footer-contact h4 {
  margin-top: 0;
  margin-bottom: 0.6rem;

  color: var(--gold-300);
}

.footer-about p {
  margin: 0 0 0.6rem;

  color: #ddd4c8;
}

.project-note {
  color: #a99b8a !important;

  font-size: 0.85rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.35rem;
}

.footer-nav a,
.footer-contact a {
  color: #ddd4c8;

  text-decoration: none;
}

.footer-nav a:hover,
.footer-contact a:hover {
  color: var(--gold-300);

  text-decoration: underline;
}

.footer-bottom {
  padding: 1rem 1.25rem;

  border-top: 1px solid rgba(255, 255, 255, 0.1);

  color: #a99b8a;

  text-align: center;
  font-size: 0.85rem;
}

.footer-bottom p {
  margin: 0;
}

@media (min-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr auto auto;
    align-items: start;

    gap: 4rem;
  }

  .footer-nav {
    min-width: 8rem;
  }
}
</style>