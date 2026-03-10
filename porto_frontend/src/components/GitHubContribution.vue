<script setup>
import { ref } from 'vue'

const username = 'rehanalfarizu'

// ghchart.ssh.surf — very reliable, embeds actual GitHub contribution SVG
const chartUrl = `https://ghchart.ssh.surf/${username}`

// streak-stats — working fine already
const streakUrl = `https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&ring=6366f1&fire=8b5cf6&currStreakLabel=818cf8&sideLabels=64748b&currStreakNum=f1f5f9&sideNums=94a3b8&dates=475569&stroke=1a2035&background=00000000`

// github-readme-stats — using a more reliable instance
const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=818cf8&icon_color=6366f1&text_color=94a3b8&bg_color=00000000&ring_color=6366f1&count_private=true&include_all_commits=true`

const statsLoaded = ref(true)
const onStatsError = () => { statsLoaded.value = false }
</script>

<template>
  <section class="gh-section">
    <div class="gh-inner">
      <div class="section__header">
        <h2 class="section__title">GitHub Activity</h2>
      </div>

      <!-- Streak + Stats row -->
      <div class="gh-top">
        <!-- Streak card (reliable) -->
        <div class="gh-card gh-card--streak">
          <img
            :src="streakUrl"
            alt="GitHub Streak - Muhammad Raihan Alfarizi"
            class="gh-img"
            loading="lazy"
          />
        </div>

        <!-- Stats card — fallback ke badge jika error -->
        <div class="gh-card gh-card--stats">
          <img
            v-if="statsLoaded"
            :src="statsUrl"
            alt="GitHub Stats - Muhammad Raihan Alfarizi"
            class="gh-img"
            loading="lazy"
            @error="onStatsError"
          />
          <!-- Fallback: badge manual jika stats API gagal load -->
          <div v-else class="gh-stats-fallback">
            <div class="gh-stat-item">
              <span class="gh-stat-icon">⭐</span>
              <div>
                <div class="gh-stat-val">GitHub</div>
                <div class="gh-stat-label">@rehanalfarizu</div>
              </div>
            </div>
            <a
              :href="`https://github.com/${username}`"
              target="_blank"
              rel="noopener noreferrer"
              class="gh-fallback-link"
            >Lihat profil lengkap →</a>
          </div>
        </div>
      </div>

      <!-- Contribution heatmap (ghchart.ssh.surf — highly reliable SVG) -->
      <div class="gh-card gh-card--chart">
        <div class="gh-chart-label">Contribution Graph</div>
        <img
          :src="chartUrl"
          alt="Contribution chart - rehanalfarizu"
          class="gh-chart-img"
          loading="lazy"
        />
      </div>

      <!-- Link to GitHub -->
      <div class="gh-cta">
        <a
          :href="`https://github.com/${username}`"
          target="_blank"
          rel="noopener noreferrer"
          class="gh-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          Lihat Semua Aktivitas di GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gh-section {
  padding: 5rem 1.5rem;
  border-top: 1px solid rgba(99, 102, 241, 0.12);
}

.gh-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 2.5rem;
}

.section__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  padding-left: 0.75rem;
  border-left: 3px solid #6366f1;
}

/* ── Top row: streak + stats ── */
.gh-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

/* ── Cards ── */
.gh-card {
  background: rgba(8, 13, 24, 0.85);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.gh-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.12);
}

.gh-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
  min-height: 80px;
}

/* ── Stats fallback ── */
.gh-stats-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  text-align: center;
}

.gh-stat-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.gh-stat-icon {
  font-size: 2rem;
}

.gh-stat-val {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
}

.gh-stat-label {
  font-size: 0.8rem;
  color: #818cf8;
}

.gh-fallback-link {
  font-size: 0.85rem;
  color: #818cf8;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;
}
.gh-fallback-link:hover {
  background: rgba(99, 102, 241, 0.12);
  color: #a5b4fc;
}

/* ── Contribution chart card ── */
.gh-card--chart {
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
}

.gh-chart-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.gh-chart-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
  /* Invert to match dark theme — the chart is light by default */
  filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(1.2);
}

/* ── CTA ── */
.gh-cta {
  display: flex;
  justify-content: center;
}

.gh-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  background: transparent;
  border: 1px solid rgba(99, 102, 241, 0.4);
  color: #818cf8;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.22s ease;
}

.gh-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: #6366f1;
  color: #a5b4fc;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .gh-top {
    grid-template-columns: 1fr;
  }
}
</style>
