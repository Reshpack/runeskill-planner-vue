# RuneSkill Planner — Task 6.3 Reference

This is a reference copy of the pre-Vue Task 6.3 implementation. Use it to migrate content and validation ideas into Task 9.3D; do not copy the old multi-page structure literally into Vue.

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300;400;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="styles.css" />
    <title>RuneSkill Planner</title>
  </head>

  <body>
    <!-- Navigation -->
    <nav class="nav">
      <h2>RuneSkill Planner</h2>

      <div class="nav-links">
        <a class="active" href="index.html">Home</a>
        <a href="planner.html">Planner</a>
        <a href="form.html">Form</a>
        <a href="about.html">About</a>
      </div>
    </nav>

    <!-- Hero -->
    <header class="hero">
      <img
        src="resources/skillcapes.png"
        alt="RuneScape inspired skill capes"
      />

      <div class="hero-text">
        <h1>Plan Your RuneScape Grind</h1>

        <p>
          RuneSkill Planner is a simple training companion for players who want
          to organise skill goals, understand how much XP they need and keep
          useful training information in one place.
        </p>

        <p>
          Set a current level and target level, track your progress and use
          clear skill guidance to decide what to train next without constantly
          searching across different websites.
        </p>

        <a class="button" href="planner.html">Explore the Planner</a>
      </div>
    </header>

    <main>
      <!-- What the planner does -->
      <section class="section" id="features">
        <h2>What RuneSkill Planner Does</h2>

        <p class="intro">
          The planner is designed to make skill training easier to organise for
          both new and experienced players.
        </p>

        <div class="cards">
          <div class="card">
            <h3>Choose a Skill</h3>
            <p>
              Pick the skill you want to train, from gathering skills such as
              Fishing and Woodcutting to combat and support skills.
            </p>
          </div>

          <div class="card">
            <h3>Set Your Goal</h3>
            <p>
              Enter your current level and target level so the planner can show
              the goal you are working towards.
            </p>
          </div>

          <div class="card">
            <h3>Track Progress</h3>
            <p>
              Keep your goals organised so you can quickly see what you have
              completed and what still needs to be done.
            </p>
          </div>
        </div>
      </section>

      <!-- Dashboard section -->
      <section class="section row-section">
        <div class="row-text">
          <h2>A Clear Skill-Planning Dashboard</h2>

          <p>
            RuneSkill Planner uses simple cards and readable progress
            information. Instead of remembering every target, players can keep
            their training goals together and check them from desktop, tablet or
            mobile.
          </p>

          <div class="goal-box">
            <h3>Woodcutting Goal</h3>
            <p>Level 72 to Level 85</p>

            <div class="progress-bar">
              <div class="progress"></div>
            </div>

            <p>Example progress: 58% complete</p>
          </div>
        </div>

        <img
          class="section-img"
          src="resources/wcing.jpg"
          alt="RuneScape inspired woodcutting scene"
        />
      </section>

      <!-- Guides section -->
      <section class="section row-section">
        <img
          class="section-img"
          src="resources/farming.png"
          alt="RuneScape inspired farming scene"
        />

        <div class="row-text">
          <h2>Useful Training Guidance in One Place</h2>

          <p>
            The full RuneSkill Planner concept will include training guides for
            selected skills. This will help players move from setting a goal to
            finding a useful training method without having to search through
            many different websites.
          </p>

          <ul>
            <li>Skill-specific training suggestions</li>
            <li>Clear level ranges and goal information</li>
            <li>Layouts that work on mobile and desktop</li>
          </ul>
        </div>
      </section>

      <!-- Pricing section -->
      <section class="plans">
        <h2>Planner Options</h2>

        <p class="intro">
          Compare our fictional plans and choose the option that best suits the
          way you play and track your RuneScape goals.
        </p>

        <div class="table-container">
          <table class="plan-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>
                  <span class="plan-name">Free</span>
                  <span class="plan-cost">$0</span>
                </th>
                <th class="premium-heading">
                  <span class="popular">Most Popular</span>
                  <span class="plan-name">Premium</span>
                  <span class="plan-cost">$4.99/month</span>
                </th>
                <th>
                  <span class="plan-name">Family</span>
                  <span class="plan-cost">$7.99/month</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr><th>Saved Skill Goals</th><td>3</td><td>Unlimited</td><td>Unlimited</td></tr>
              <tr><th>Progress Tracking</th><td class="yes">✓</td><td class="yes">✓</td><td class="yes">✓</td></tr>
              <tr><th>Skill Guides</th><td>Basic</td><td>Full Access</td><td>Full Access</td></tr>
              <tr><th>Training Filters</th><td class="no">✕</td><td class="yes">✓</td><td class="yes">✓</td></tr>
              <tr><th>Multiple Users</th><td class="no">✕</td><td class="no">✕</td><td>Up to 4</td></tr>
              <tr class="table-buttons">
                <th></th>
                <td><a class="button" href="#">Get Started</a></td>
                <td><a class="button" href="#">Get Started</a></td>
                <td><a class="button" href="#">Get Started</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Final section -->
      <section class="section row-section">
        <img
          class="section-img"
          src="resources/boss-fight.jpg"
          alt="RuneScape inspired boss fight"
        />

        <div class="row-text">
          <h2>Build a Better Training Plan</h2>

          <p>
            Learn more about the idea behind RuneSkill Planner and why it was
            designed around simple progress tracking and easy navigation.
          </p>

          <a class="button" href="about.html">About RuneSkill Planner</a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <h3>RuneSkill Planner</h3>
      <p>
        A fictional student project for organising RuneScape inspired skill
        goals.
      </p>
      <p>
        <a href="index.html">Home</a> | <a href="planner.html">Planner</a> |
        <a href="about.html">About</a>
      </p>
      <p>&copy; 2026 RuneSkill Planner. Website by Suresh Packiry.</p>
    </footer>
  </body>
</html>
```

## planner.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <title>RuneSkill Planner</title>
</head>
<body>
  <nav class="nav">
    <h2>RuneSkill Planner</h2>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a class="active" href="planner.html">Planner</a>
      <a href="form.html">Form</a>
      <a href="about.html">About</a>
    </div>
  </nav>

  <main>
    <section class="section planner-intro">
      <h1>Skill planner Dashboard</h1>
      <p>Set a training goal and keep track of your RuneScape progress.</p>
    </section>

    <section class="plans">
      <h2>Saved Goals</h2>
      <div class="goal-container row-section">
        <div class="goal-box">
          <h3>Woodcutting</h3>
          <p>Current: 72</p>
          <p>Target: 85</p>
          <p>XP Needed: 2,450,000</p>
          <div class="progress-bar"><div class="progress woodcutting-progress"></div></div>
          <p>Progress: 58% complete</p>
        </div>

        <div class="goal-box">
          <h3>Fishing</h3>
          <p>Current: 65</p>
          <p>Target: 80</p>
          <p>XP Needed: 1,720,000</p>
          <div class="progress-bar"><div class="progress fishing-progress"></div></div>
          <p>Progress: 42% complete</p>
        </div>

        <div class="goal-box">
          <h3>Mining</h3>
          <p>Current: 81</p>
          <p>Target: 90</p>
          <p>XP Needed: 3,150,000</p>
          <div class="progress-bar"><div class="progress mining-progress"></div></div>
          <p>Progress: 73% complete</p>
        </div>
      </div>
    </section>

    <section class="section">
      <article class="guide-preview">
        <h2>Guide Preview</h2>
        <h3>Levels 58–71/99: Barbarian Fishing</h3>

        <figure class="guide-image">
          <img src="resources/3-tick-fishing.gif" alt="Player using the 3-tick Barbarian Fishing method" />
          <figcaption>3-tick Barbarian Fishing using the cut-eat method.</figcaption>
        </figure>

        <p>
          3-tick <a href="https://oldschool.runescape.wiki/w/Barbarian_Training#Heavy_rod_fishing">Barbarian Fishing</a>
          becomes one of the fastest training methods at level 58. This method offers small amounts of passive Agility and
          Strength experience, which makes it an efficient way to train Fishing for players with low Agility and Strength levels.
        </p>

        <p>
          Even though Barbarian Fishing becomes available at level 48, it is faster to do drift net fishing or 3-tick fly fishing
          until level 58, after which the player can catch leaping salmon. Without tick manipulation Barbarian Fishing is only
          recommended as a low-effort alternative that offers decent experience rates.
        </p>

        <p>
          This method is best suited to players who want faster Fishing experience and do not mind using a more click-intensive
          training method.
        </p>

        <p>
          If looking for a less intensive option, use the fishing spot at Mount Quidamortem and bank the fish at the Chambers of
          Xeric bank chest. Use the fish barrel for longer trips. Alternatively, use the spot at Otto's Grotto and simply drop the fish.
        </p>

        <p>
          The experience rates in the table below assume the player is not wearing the
          <a href="https://oldschool.runescape.wiki/w/Angler%27s_outfit">angler's outfit</a>.
        </p>
      </article>
    </section>
  </main>

  <footer class="footer">
    <h3>RuneSkill Planner</h3>
    <p>A fictional student project for organising RuneScape inspired skill goals.</p>
    <p><a href="index.html">Home</a> | <a href="planner.html">Planner</a> | <a href="about.html">About</a></p>
    <p>&copy; 2026 RuneSkill Planner. Website by Suresh Packiry.</p>
  </footer>
</body>
</html>
```

## form.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <script src="validation.js" defer></script>
  <title>RuneSkill Planner</title>
</head>
<body>
  <nav class="nav">
    <h2>RuneSkill Planner</h2>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="planner.html">Planner</a>
      <a class="active" href="form.html">Form</a>
      <a href="about.html">About</a>
    </div>
  </nav>

  <header class="hero">
    <img src="resources/boss-fight3.png" alt="RuneScape inspired skill capes" />
  </header>

  <main class="page">
    <section class="card">
      <h1>Skill Goal Form</h1>

      <form class="planner-form" id="goal-form" action="" novalidate>
        <fieldset class="form-group">
          <legend>Goal Details</legend>

          <div class="field field-full">
            <label for="goal-name">Goal Name:</label>
            <input type="text" id="goal-name" name="goal-name" aria-required="true" />
            <span class="field-msg" id="goal-name-msg"></span>
          </div>

          <div class="field field-full">
            <label for="skill">Skill Type:</label>
            <select name="skill" id="skill" aria-required="true">
              <option value="">- Select Skill -</option>
              <option value="woodcutting">Woodcutting</option>
              <option value="fishing">Fishing</option>
              <option value="mining">Mining</option>
            </select>
            <span class="field-msg" id="skill-msg"></span>
          </div>

          <div class="field">
            <label for="cr-lvl">Current Level:</label>
            <input type="number" id="cr-lvl" name="cr-lvl" aria-required="true" />
            <span class="field-msg" id="cr-lvl-msg"></span>
          </div>

          <div class="field">
            <label for="tgt-lvl">Target Level:</label>
            <input type="number" id="tgt-lvl" name="tgt-lvl" aria-required="true" />
            <span class="field-msg" id="tgt-lvl-msg"></span>
          </div>

          <div class="field field-full">
            <label for="target-date">Target Date:</label>
            <input type="date" id="target-date" name="target-date" aria-required="true" />
            <span class="field-msg" id="target-date-msg"></span>
          </div>
        </fieldset>

        <fieldset class="form-group">
          <legend>Preferences</legend>

          <div class="field">
            <label for="t-style">Training Style:</label>
            <select name="t-style" id="t-style" aria-required="true">
              <option value="">- Select -</option>
              <option value="fast">Fast</option>
              <option value="afk">AFK</option>
              <option value="cheap">Cheap</option>
            </select>
            <span class="field-msg" id="t-style-msg"></span>
          </div>

          <div class="radio-group" role="radiogroup" aria-labelledby="reminder-label" aria-required="true">
            <span class="radio-label" id="reminder-label">Reminder Frequency:</span>
            <label class="radio-option"><input type="radio" name="reminder" value="daily" /> Daily</label>
            <label class="radio-option"><input type="radio" name="reminder" value="weekly" /> Weekly</label>
            <label class="radio-option"><input type="radio" name="reminder" value="none" checked /> None</label>
            <span class="field-msg" id="reminder-msg"></span>
          </div>
        </fieldset>

        <div class="form-actions">
          <input type="button" value="Clear Form" class="btn-reset" id="clear-btn" />
          <input type="submit" value="Create Goal" class="btn-submit" />
        </div>

        <p class="form-status" id="form-status" aria-live="polite"></p>
      </form>

      <div class="goal-box goal-summary" id="goal-summary" hidden>
        <h3 id="summary-name"></h3>
        <p><strong>Skill:</strong> <span id="summary-skill"></span></p>
        <p><strong>Level:</strong> <span id="summary-levels"></span></p>
        <div class="progress-bar"><div class="progress" id="summary-progress"></div></div>
        <p><strong>Target Date:</strong> <span id="summary-date"></span></p>
        <p><strong>Training Style:</strong> <span id="summary-style"></span></p>
        <p><strong>Reminders:</strong> <span id="summary-reminder"></span></p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <h3>RuneSkill Planner</h3>
    <p>A fictional student project for organising RuneScape inspired skill goals.</p>
    <p><a href="index.html">Home</a> | <a href="planner.html">Planner</a> | <a href="about.html">About</a></p>
    <p>&copy; 2026 RuneSkill Planner. Website by Suresh Packiry.</p>
  </footer>
</body>
</html>
```

## about.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <title>About | RuneSkill Planner</title>
</head>
<body>
  <nav class="nav">
    <h2>RuneSkill Planner</h2>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="planner.html">Planner</a>
      <a href="form.html">Form</a>
      <a class="active" href="about.html">About</a>
    </div>
  </nav>

  <header class="hero">
    <img src="resources/group.png" alt="RuneScape inspired group of players" />
    <div class="hero-text">
      <h1>About RuneSkill Planner</h1>
      <p>
        RuneSkill Planner is a SaaS-style website concept for RuneScape players who want an easier way to organise training goals,
        understand their progress and find useful guidance.
      </p>
    </div>
  </header>

  <main>
    <section class="section row-section">
      <div class="row-text">
        <h2>Why RuneSkill Planner Exists</h2>
        <p>
          RuneScape includes many different skills, training methods and long-term goals. Players can spend a lot of time moving
          between calculators, guides, videos and notes just to decide what they should do next.
        </p>
        <p>
          RuneSkill Planner brings the planning side of training into one organised hub. Players can set a current level, choose a
          target level and keep track of what they are working towards.
        </p>
      </div>
      <img class="section-img" src="resources/group2.webp" alt="RuneScape inspired players standing together" />
    </section>

    <section class="values">
      <h2>Our Mission</h2>
      <div class="cards">
        <div class="card">
          <h3>Save Players Time</h3>
          <p>Keep goals and training information together instead of searching across many different websites.</p>
        </div>
        <div class="card">
          <h3>Track Goals Clearly</h3>
          <p>Use simple progress information so players can understand where they are and what they are working towards.</p>
        </div>
        <div class="card">
          <h3>Work on Any Device</h3>
          <p>Keep the website readable and usable on desktop, tablet and mobile.</p>
        </div>
      </div>
    </section>

    <section class="section row-section">
      <img class="section-img" src="resources/skill2.png" alt="RuneScape inspired skill training" />
      <div class="row-text">
        <h2>Designed for Different Players</h2>
        <p>
          The website is designed for players who want to check goals quickly, as well as casual or returning players who prefer
          simple navigation, readable text and clear progress information.
        </p>
        <p>
          On smaller screens the content stacks vertically. On larger screens the images and text can sit next to each other to
          make better use of the available space.
        </p>
      </div>
    </section>

    <section class="section row-section">
      <div class="row-text">
        <h2>Future Ideas</h2>
        <p>
          Future versions could include an XP calculator, saved skill cards, progress bars, training filters, guide previews and
          item pricing.
        </p>
        <a class="button" href="index.html">Back to Home</a>
      </div>
      <img class="section-img" src="resources/boss-fight2.webp" alt="RuneScape inspired boss encounter" />
    </section>
  </main>

  <footer class="footer">
    <h3>RuneSkill Planner</h3>
    <p>A fictional student project for organising RuneScape inspired skill goals.</p>
    <p><a href="index.html">Home</a> | <a href="planner.html">Planner</a> | <a href="about.html">About</a></p>
    <p>&copy; 2026 RuneSkill Planner. Website by Suresh Packiry.</p>
  </footer>
</body>
</html>
```

## styles.css

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fffaf0;
  color: #21180f;
  font-family: "Merriweather", serif;
  line-height: 1.6;
}

h1,
h2,
h3 {
  font-family: "MedievalSharp", cursive;
}

img {
  max-width: 100%;
}

/* navigation */
.nav {
  background-color: #3b2a1a;
  color: white;
  padding: 1rem 1.5rem;
  text-align: center;

  border-bottom: 0.3rem solid #8b5a2b;
}

.nav h2 {
  color: #d2b48c;
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;

  padding: 0.5rem 0.9rem;
  border-radius: 0.4rem;

  transition: 0.2s;
}

.nav-links a:hover {
  background-color: #8b5a2b;
  transform: translateY(-0.1rem);
}

.nav-links .active {
  background-color: #d2b48c;
  color: #3b2a1a;
}

/* hero */
.hero {
  background-color: #3b2a1a;
  color: white;
  text-align: center;
}

.hero img {
  width: 100%;
  height: 18rem;
  object-fit: cover;
}

.hero-text {
  max-width: 50rem;
  margin: auto;
  padding: 2rem 1.5rem 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  margin-bottom: 1rem;
}

/* button */
.button {
  display: inline-block;
  background-color: #8b5a2b;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  margin-top: 0.75rem;
  border-radius: 0.4rem;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.button:hover {
  background-color: #d2b48c;
  color: #3b2a1a;
  transform: translateY(-0.1rem);
}

/* main sections */
.section {
  max-width: 65rem;
  margin: auto;
  padding: 3rem 1.5rem;
}

.section h2,
.plans h2,
.values h2 {
  color: #3b2a1a;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.intro {
  max-width: 45rem;
  margin: 0 auto 2rem;
  text-align: center;
}

/* cards */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.card {
  background-color: #f5ead6;
  border: 0.1rem solid #d2b48c;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.card h3 {
  color: #8b5a2b;
  margin-bottom: 0.5rem;
}

/* Planner options table */

.table-container {
  max-width: 65rem;
  margin: 2rem auto 0;
  overflow-x: auto;

  border-radius: 0.7rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.12);
}

.plan-table {
  width: 100%;
  min-width: 45rem;

  border-collapse: separate;
  border-spacing: 0;

  background-color: white;
}

.plan-table th,
.plan-table td {
  padding: 1rem;
  text-align: center;

  border-bottom: 1px solid #e4d8c7;
}

/* first column */

.plan-table tbody th {
  text-align: left;
  color: #3b2a1a;

  background-color: #fffaf0;
}

/* top headings */

.plan-table thead th {
  background-color: #3b2a1a;
  color: white;

  padding: 1.3rem 1rem;
}

/* plan heading text */

.plan-name {
  display: block;

  font-family: "MedievalSharp", cursive;
  font-size: 1.3rem;

  margin-bottom: 0.3rem;
}

.plan-cost {
  display: block;

  font-family: "Merriweather", serif;
  font-size: 0.85rem;
  font-weight: normal;

  color: #f5ead6;
}

/* Premium heading */

.plan-table thead .premium-heading {
  background-color: #8b5a2b;
}

.popular {
  display: block;

  width: fit-content;

  margin: 0 auto 0.5rem;
  padding: 0.2rem 0.6rem;

  background-color: #f5ead6;
  color: #8b5a2b;

  border-radius: 1rem;

  font-size: 0.7rem;
  font-family: "Merriweather", serif;
  text-transform: uppercase;
}

/* alternating rows */

.plan-table tbody tr:nth-child(even) td {
  background-color: #faf6ef;
}

/* faded Premium column */

.plan-table tbody td:nth-child(3) {
  background-color: #f1dfc6;
}

.plan-table tbody tr:nth-child(even) td:nth-child(3) {
  background-color: #ead2af;
}

/* ticks and crosses */

.yes {
  color: #2d7a3e;

  font-size: 1.3rem;
  font-weight: bold;
}

.no {
  color: #b7473e;

  font-size: 1.2rem;
  font-weight: bold;
}

/* bottom buttons */

.table-buttons th,
.table-buttons td {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  border-bottom: none;
}

.table-container .button {
  margin: 0;

  background-color: #3b2a1a;
  color: white;

  border-radius: 2rem;
}

.table-container .button:hover {
  background-color: #8b5a2b;
  color: white;

  transform: translateY(-0.1rem);
}

/* image and text sections */
.row-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.row-text p {
  margin-bottom: 1rem;
}

.row-text ul {
  margin-left: 1.5rem;
  margin-top: 1rem;
}

.section-img {
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem;
}

/* skill goal */
.goal-box {
  background-color: #f5ead6;
  border: 0.1rem solid #d2b48c;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1.5rem;
}

.goal-box h3 {
  color: #8b5a2b;
}

.progress-bar {
  width: 100%;
  height: 1rem;
  background-color: #d2b48c;
  margin: 0.75rem 0;
  border-radius: 1rem;
  overflow: hidden;
}

.progress {
  width: 58%;
  height: 100%;
  background-color: #8b5a2b;
}

/* pricing and values */
.plans,
.values {
  background-color: #f5ead6;
  padding: 3rem 1.5rem;
}

.plans .cards,
.values .cards {
  max-width: 65rem;
  margin: auto;
}

.plans .card,
.values .card {
  background-color: white;
}

.price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #3b2a1a;
  margin-bottom: 0.5rem;
}

/* Planner section */

/* Planner intro */
.planner-intro {
  text-align: center;
}

.planner-intro h1 {
  color: #3b2a1a;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

/* Form card container */
.card {
  padding: 1.5rem 1rem;
}

.card h1 {
  font-family: "MedievalSharp", cursive;
  color: #3b2a1a;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Form base - mobile first, single column by default */
.planner-form {
  width: 100%;
  max-width: 35rem;
  margin: auto;

  background-color: #f5ead6;
  border: 1px solid #d2b48c;
  border-radius: 0.5rem;

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* FORM */

/* Fieldsets act as grouped sections, stacked on mobile */
.form-group {
  border: 1px solid #d2b48c;
  border-radius: 0.4rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr; /* single column on mobile - improves readability on small screens */
  gap: 0.9rem;
}

.form-group legend {
  font-family: "MedievalSharp", cursive;
  color: #8b5a2b;
  padding: 0 0.4rem;
  font-size: 1.1rem;
}

.planner-form label,
.radio-label {
  display: block;
  color: #3b2a1a;
  font-weight: bold;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
}

.planner-form input,
.planner-form select {
  width: 100%;
  padding: 0.7rem;

  border: 1px solid #d2b48c;
  border-radius: 0.3rem;

  font-family: "Merriweather", serif;
  font-size: 1rem;
  background-color: #fff;
  color: #3b2a1a;
}

.planner-form input:focus,
.planner-form select:focus {
  outline: 2px solid #8b5a2b;
  outline-offset: 1px;
}

/* Radio group - grid keeps options aligned and tap-friendly on mobile */
.radio-group {
  display: grid;
  gap: 0.5rem;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  color: #3b2a1a;
}

.radio-option input {
  width: auto;
}

/* Action buttons - stacked full-width on mobile for easy tapping */
.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.planner-form input[type="submit"],
.planner-form input[type="reset"] {
  padding: 0.85rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
}

.btn-submit {
  background-color: #8b5a2b;
  color: white;
}

.btn-submit:hover {
  background-color: #3b2a1a;
  transform: translateY(-0.1rem);
  color: #ffffff;
}

.btn-reset {
  background-color: transparent;
  color: #8b5a2b;
  border: 1px solid #8b5a2b !important;
}

.btn-reset:hover {
  background-color: #efe0c8;
}

/* Additional form */
/* Wraps label, input and message so they stay together in the grid */
.field {
  display: flex;
  flex-direction: column;
}

/* Inline message under each field - hidden until JS fills it */
.field-msg {
  display: block;
  font-size: 0.85rem;
  margin-top: 0.3rem;
}

.field-msg:empty,
.form-status:empty {
  display: none;
}

/* Darker than the table's tick/cross colours so small text
   stays readable on the beige form background */
.msg-invalid {
  color: #a13a32;
}

.msg-valid {
  color: #25662f;
}

.form-status {
  text-align: center;
  font-weight: bold;
}

.goal-summary {
  max-width: 35rem;
  margin: 1.5rem auto 0;
}


/* Saved goal cards */

.goal-container {
  max-width: 65rem;
  margin: 2rem auto 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.goal-box {
  background-color: white;

  border: 1px solid #d2b48c;
  border-top: 0.3rem solid #8b5a2b;

  border-radius: 0.5rem;

  padding: 1.5rem;
}

.goal-box h3 {
  color: #8b5a2b;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.goal-box p {
  margin-bottom: 0.4rem;
}

/* Progress bars */

.progress-bar {
  width: 100%;
  height: 1rem;

  background-color: #d2b48c;

  border-radius: 1rem;
  overflow: hidden;

  margin: 1rem 0;
}

.progress {
  height: 100%;
  background-color: #8b5a2b;
}

.woodcutting-progress {
  width: 58%;
}

.fishing-progress {
  width: 42%;
}

.mining-progress {
  width: 73%;
}

/* Guide preview */

.guide-preview {
  max-width: 65rem;
  margin: auto;
}

.guide-preview h2 {
  text-align: center;
  color: #3b2a1a;

  margin-bottom: 2rem;
}

.guide-preview h3 {
  color: #8b5a2b;
  margin-bottom: 1rem;
}

.guide-preview p {
  margin-bottom: 1rem;
}

.guide-preview a {
  color: #8b5a2b;
}

.guide-image {
  width: 100%;

  margin-bottom: 1.5rem;

  background-color: #d2b48c;
  border-radius: 0.4rem;

  padding: 0.5rem;
}

.guide-image img {
  width: 100%;
  display: block;

  border-radius: 0.2rem;
}

.guide-image figcaption {
  font-size: 0.8rem;

  margin-top: 0.4rem;
  padding: 0.2rem;
}

/* footer */
.footer {
  background-color: #21180f;
  color: white;
  text-align: center;
  padding: 2rem 1.5rem;
}

.footer h3 {
  color: #d2b48c;
  margin-bottom: 0.5rem;
}

.footer p {
  margin-bottom: 0.75rem;
}

.footer a {
  color: #d2b48c;
}

/* tablet */
@media (min-width: 40rem) {
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
  }

  .nav h2 {
    margin-bottom: 0;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .plan-table th,
  .plan-table td {
    padding: 0.8rem;
  }

  /* Two cards fit next to each other on tablets. */
  .goal-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .guide-image {
    width: 60%;
    margin: 0 auto 1.5rem;
  }
}

/* desktop */
@media (min-width: 64rem) {
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
  }

  .nav h2 {
    margin-bottom: 0;
  }

  .hero img {
    height: 30rem;
  }

  .hero h1 {
    font-size: 4rem;
  }

  .cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .row-section {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  .row-text {
    width: 50%;
  }

  .section-img {
    width: 50%;
  }

  /* Desktop has enough room to display all three saved goals together. */
  .goal-container {
    grid-template-columns: repeat(3, 1fr);
  }

  /* On desktop the guide image moves to the right so the text can wrap
     around it. */
  .guide-image {
    float: right;

    width: 18rem;

    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

    .planner-form {
    padding: 2.5rem;
  }

  .form-group {
    grid-template-columns: 1fr 1fr; /* two-column layout on desktop - form fields grouped logically */
  }

  .form-group legend {
    font-size: 1.2rem;
  }

  /* Goal Name and Skill Type span full width, levels/date sit side by side */
  #goal-name,
  label[for="goal-name"] {
    grid-column: 1 / -1;
  }

  /* Actions row switches to side-by-side buttons, submit takes priority width */
  .form-actions {
    flex-direction: row;
    justify-content: flex-end;
  }

  .planner-form input[type="submit"],
  .planner-form input[type="reset"] {
    width: auto;
    min-width: 8rem;
  }
}

```

## validation.js

```js
// --------- REGEX ---------

// Goal name: 3-40 characters, letters, numbers and spaces only
// ^ and $ = whole string must match, {3,40} = length
const goalNamePattern = /^[A-Za-z0-9 ]{3,40}$/;

// Level: digits only
const levelPattern = /^\d+$/;

// --------- Validation Rules ----------
// These only check values - they never touch the page.
// Each returns an error message, or "" if it passes.

function checkGoalName(name) {
  const trimmed = name.trim();

  if (trimmed === "") {
    return "Please enter a goal name.";
  }
  if (!goalNamePattern.test(trimmed)) {
    return "Goal name must be 3–40 characters: letters, numbers and spaces only.";
  }
  return "";
}

// Used for both dropdowns
function checkSelection(value, fieldName) {
  if (value === "") {
    return "Please select a " + fieldName + ".";
  }
  return "";
}

// Checks run in order and stop at the first failure,
// so the message always describes the actual problem
function checkLevel(level, fieldName) {
  if (level === "") {
    return "Please enter your " + fieldName + ".";
  }
  if (!levelPattern.test(level)) {
    return "Level must be a whole number with no decimals or symbols.";
  }

  // .value is always a string, so convert before comparing as numbers
  const levelNumber = Number(level);

  if (levelNumber < 1 || levelNumber > 99) {
    return "Level must be between 1 and 99.";
  }
  return "";
}

function checkTargetLevel(targetLevel, currentLevel) {
  // Run the normal level rules first
  const levelError = checkLevel(targetLevel, "target level");
  if (levelError !== "") {
    return levelError;
  }

  // Only compare against the current level if that one is valid itself
  const currentIsValid = checkLevel(currentLevel, "current level") === "";

  if (currentIsValid && Number(targetLevel) <= Number(currentLevel)) {
    return (
      "Target level must be higher than your current level (" +
      Number(currentLevel) +
      ")."
    );
  }
  return "";
}

// Returns today's date as "YYYY-MM-DD"
function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();

  // getMonth() counts from 0 (January = 0), so add 1
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function checkTargetDate(dateValue) {
  if (dateValue === "") {
    return "Please choose a target date.";
  }

  // Both are "YYYY-MM-DD" so they compare correctly as text
  if (dateValue <= getTodayString()) {
    return "Target date must be after today.";
  }
  return "";
}

function checkReminder(reminder) {
  if (reminder === "") {
    return "Please choose how often you want reminders.";
  }
  return "";
}

// --------- Page Updates --------

// Writes a message under a field and sets its colour class
function setMessage(msgId, text, isValid) {
  const msg = document.getElementById(msgId);
  msg.textContent = text;

  // Remove both first so repeat submits don't stack conflicting classes
  msg.classList.remove("msg-valid", "msg-invalid");
  msg.classList.add(isValid ? "msg-valid" : "msg-invalid");
}

// Shows the result of one check beside its field.
// Returns true if the field passed, false if it failed.
function showResult(msgId, errorText, successText) {
  if (errorText === "") {
    setMessage(msgId, successText, true);
    return true;
  }
  setMessage(msgId, errorText, false);
  return false;
}

// Every message element on the form
const messageIds = [
  "goal-name-msg",
  "skill-msg",
  "cr-lvl-msg",
  "tgt-lvl-msg",
  "target-date-msg",
  "t-style-msg",
  "reminder-msg",
  "form-status",
];

// Clears every message - used when the form is reset
function clearMessages() {
  for (let i = 0; i < messageIds.length; i++) {
    const msg = document.getElementById(messageIds[i]);
    msg.textContent = "";
    msg.classList.remove("msg-valid", "msg-invalid");
  }
}

// --------- Single Field Validation ---------
// Each one reads a field, shows its message and returns true/false.
// Used on submit AND by the live listeners (Enhancement B)

function validateGoalName() {
  const goalName = document.getElementById("goal-name").value;
  return showResult(
    "goal-name-msg",
    checkGoalName(goalName),
    "Goal name looks good.",
  );
}

function validateSkill() {
  const skill = document.getElementById("skill").value;
  return showResult(
    "skill-msg",
    checkSelection(skill, "skill"),
    "Skill selected.",
  );
}

function validateCurrentLevel() {
  const currentLevel = document.getElementById("cr-lvl").value;
  return showResult(
    "cr-lvl-msg",
    checkLevel(currentLevel, "current level"),
    "Valid level.",
  );
}

function validateTargetLevel() {
  const currentLevel = document.getElementById("cr-lvl").value;
  const targetLevel = document.getElementById("tgt-lvl").value;
  return showResult(
    "tgt-lvl-msg",
    checkTargetLevel(targetLevel, currentLevel),
    "Valid target.",
  );
}

function validateTargetDate() {
  const targetDate = document.getElementById("target-date").value;
  return showResult(
    "target-date-msg",
    checkTargetDate(targetDate),
    "Date set.",
  );
}

function validateTrainingStyle() {
  const trainingStyle = document.getElementById("t-style").value;
  return showResult(
    "t-style-msg",
    checkSelection(trainingStyle, "training style"),
    "Style selected.",
  );
}

// querySelector gives null if no radio is checked,
// so only read .value when a checked radio actually exists
function getReminderValue() {
  const checkedReminder = document.querySelector(
    'input[name="reminder"]:checked',
  );
  return checkedReminder ? checkedReminder.value : "";
}

function validateReminder() {
  return showResult(
    "reminder-msg",
    checkReminder(getReminderValue()),
    "Reminder set.",
  );
}

// --------- Enhancement D - Submission Summary ---------

// Gets the text the user sees, e.g. "AFK" instead of "afk"
function getSelectedText(selectId) {
  const select = document.getElementById(selectId);
  return select.options[select.selectedIndex].text;
}

// "2026-12-01" -> "1 Dec 2026"
function formatDate(dateValue) {
  // "T00:00" makes JS read it as local time, not UTC
  const date = new Date(dateValue + "T00:00");
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Collects the form values into one object for the summary
function getGoalData() {
  const reminder = getReminderValue();

  return {
    name: document.getElementById("goal-name").value.trim(),
    skill: getSelectedText("skill"),
    currentLevel: Number(document.getElementById("cr-lvl").value),
    targetLevel: Number(document.getElementById("tgt-lvl").value),
    date: formatDate(document.getElementById("target-date").value),
    style: getSelectedText("t-style"),
    // "daily" -> "Daily"
    reminder: reminder.charAt(0).toUpperCase() + reminder.slice(1),
  };
}

// Fills in the summary card and shows it
function showSummary(goal) {
  // How far current level is towards the target, as a %
  const progressPercent = Math.round(
    (goal.currentLevel / goal.targetLevel) * 100,
  );
  const levelsToGo = goal.targetLevel - goal.currentLevel;

  // textContent (not innerHTML) so typed text can't add HTML to the page
  document.getElementById("summary-name").textContent = goal.name;
  document.getElementById("summary-skill").textContent = goal.skill;
  document.getElementById("summary-levels").textContent =
    goal.currentLevel +
    " → " +
    goal.targetLevel +
    " (" +
    levelsToGo +
    " to go)";
  document.getElementById("summary-progress").style.width =
    progressPercent + "%";
  document.getElementById("summary-date").textContent = goal.date;
  document.getElementById("summary-style").textContent = goal.style;
  document.getElementById("summary-reminder").textContent = goal.reminder;

  const summary = document.getElementById("goal-summary");
  summary.hidden = false;

  // Summary is below the form, so scroll to it (mainly for mobile)
  summary.scrollIntoView({ behavior: "smooth" });
}

function hideSummary() {
  document.getElementById("goal-summary").hidden = true;
}

// --------- Submit ---------

function validate(event) {
  // Stop the form actually submitting so the page doesn't reload
  event.preventDefault();

  // Boolean flag - starts true, and any failed field switches it to false
  let isFormValid = true;

  // Every field is checked (no early stop) so all messages show at once
  if (!validateGoalName()) {
    isFormValid = false;
  }
  if (!validateSkill()) {
    isFormValid = false;
  }
  if (!validateCurrentLevel()) {
    isFormValid = false;
  }
  if (!validateTargetLevel()) {
    isFormValid = false;
  }
  if (!validateTargetDate()) {
    isFormValid = false;
  }
  if (!validateTrainingStyle()) {
    isFormValid = false;
  }
  if (!validateReminder()) {
    isFormValid = false;
  }

  // Only finish if every field passed
  if (isFormValid) {
    setMessage("form-status", "Goal created. See the summary below.", true);
    showSummary(getGoalData());
  } else {
    setMessage("form-status", "Please fix the fields marked in red.", false);
    hideSummary();
  }
}

// --------- Enhancement F - Reset with Confirmation ---------

function confirmReset() {
  const userConfirmed = confirm(
    "Clear the whole form? Everything you've entered will be lost.",
  );

  // User press ok or cancel
  if (userConfirmed) {
    goalForm.reset();
    clearMessages();
    hideSummary();
  }
}

// --------- Enhancement B - Real-time Validation ---------

// While typing, only recheck a field that's already red,
// so the error clears as soon as it's fixed (no error on the first key)
function recheckIfInvalid(msgId, validateField) {
  const msg = document.getElementById(msgId);
  if (msg.classList.contains("msg-invalid")) {
    validateField();
  }
}

// Target depends on current level, so recheck it too once it has a value
function validateLevels() {
  validateCurrentLevel();
  if (document.getElementById("tgt-lvl").value !== "") {
    validateTargetLevel();
  }
}

// --------- Event listeners ---------
const goalForm = document.getElementById("goal-form");
const goalNameInput = document.getElementById("goal-name");
const currentLevelInput = document.getElementById("cr-lvl");
const targetLevelInput = document.getElementById("tgt-lvl");

goalForm.addEventListener("submit", validate);

// Enhancement F
document.getElementById("clear-btn").addEventListener("click", confirmReset);

// Enhancement B - text/number fields check when the user leaves the field
goalNameInput.addEventListener("blur", validateGoalName);
currentLevelInput.addEventListener("blur", validateLevels);
targetLevelInput.addEventListener("blur", validateTargetLevel);

// Enhancement B - and recheck while typing if they're currently red
goalNameInput.addEventListener("input", function () {
  recheckIfInvalid("goal-name-msg", validateGoalName);
});
currentLevelInput.addEventListener("input", function () {
  recheckIfInvalid("cr-lvl-msg", validateCurrentLevel);
});
targetLevelInput.addEventListener("input", function () {
  recheckIfInvalid("tgt-lvl-msg", validateTargetLevel);
});

// Enhancement B - dropdowns, date and radios check as soon as they change
document.getElementById("skill").addEventListener("change", validateSkill);
document
  .getElementById("t-style")
  .addEventListener("change", validateTrainingStyle);
document
  .getElementById("target-date")
  .addEventListener("change", validateTargetDate);

const reminderRadios = document.querySelectorAll('input[name="reminder"]');
for (let i = 0; i < reminderRadios.length; i++) {
  reminderRadios[i].addEventListener("change", validateReminder);
}

```
