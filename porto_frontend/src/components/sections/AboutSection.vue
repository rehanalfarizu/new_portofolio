<script setup>
// No interactive logic needed
</script>

<template>
  <section id="about" class="section">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">About Me</h2>
      </div>
      <div class="about__content">

        <!-- ── Text ── -->
        <div class="about__text">
          <p>
            I'm a passionate <strong>Backend & IoT Developer</strong> based in Yogyakarta, Indonesia,
            currently studying at AMIKOM Yogyakarta University. I enjoy creating elegant solutions to
            complex problems and building applications that make a real impact.
          </p>
          <p>
            With hands-on experience in modern web technologies — from crafting pixel-perfect UIs
            with <strong>Vue.js</strong> and <strong>Laravel</strong>, to building robust backends with
            <strong>Node.js</strong> and <strong>Python</strong> — I bring ideas to life from concept
            to deployment.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new frameworks, contributing to open source, and
            continuously improving my craft as a developer.
          </p>
          <div class="about__highlights">
            <div class="highlight-item">
              <span class="highlight-number">10+</span>
              <span class="highlight-label">Projects Completed</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-number">2+</span>
              <span class="highlight-label">Years Experience</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-number">5+</span>
              <span class="highlight-label">Technologies</span>
            </div>
          </div>
        </div>

        <!-- ── Visual ── -->
        <div class="about__visual">
          <div class="about__photo-wrap">
            <!-- decorative glow ring (back layer) -->
            <div class="photo__glow-ring"></div>
            <!-- decorative dashed ring -->
            <div class="photo__dash-ring"></div>
            <!-- photo -->
            <div class="photo__frame">
              <img
                src="@/assets/Rehan.png"
                alt="Rehan Alfarizi"
                class="photo__img"
                draggable="false"
              />
            </div>
            <!-- status badge -->
            <div class="photo__badge">
              <span class="badge__dot"></span>
              <span class="badge__text">Open to Work</span>
            </div>
          </div>

          <!-- Info card -->
          <div class="about__info-card">
            <div class="info-row">
              <span class="info-label">Location</span>
              <span class="info-value">Yogyakarta, Indonesia</span>
            </div>
            <div class="info-row">
              <span class="info-label">Availability</span>
              <span class="info-value available">Open to Work</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email</span>
              <span class="info-value">rehanalfarizi@students.amikom.ac.id</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section ───────────────────────────────────────────────────────────────── */
.section {
  padding: 6rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}
.section__header { margin-bottom: 3rem; }
.section__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  padding-left: 0.75rem;
  border-left: 3px solid #6366f1;
}

/* ── Grid ──────────────────────────────────────────────────────────────────── */
.about__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ── Text ──────────────────────────────────────────────────────────────────── */
.about__text p {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1rem;
}
.about__text strong { color: #cbd5e1; }

.about__highlights {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(99,102,241,0.15);
}
.highlight-item { display: flex; flex-direction: column; gap: 0.25rem; }
.highlight-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #818cf8;
  line-height: 1;
}
.highlight-label { font-size: 0.8rem; color: #64748b; font-weight: 500; }

/* ── Visual column ─────────────────────────────────────────────────────────── */
.about__visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
}

/* ── Photo wrap ────────────────────────────────────────────────────────────── */
.about__photo-wrap {
  position: relative;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Outer glow ring */
.photo__glow-ring {
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(99,102,241,0.0)  0%,
    rgba(99,102,241,0.55) 25%,
    rgba(165,180,252,0.8) 50%,
    rgba(99,102,241,0.55) 75%,
    rgba(99,102,241,0.0)  100%
  );
  filter: blur(14px);
  animation: spinGlow 6s linear infinite;
  z-index: 0;
}
@keyframes spinGlow {
  to { transform: rotate(360deg); }
}

/* Dashed decorative ring */
.photo__dash-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1.5px dashed rgba(99,102,241,0.4);
  animation: spinDash 18s linear infinite reverse;
  z-index: 1;
}
@keyframes spinDash {
  to { transform: rotate(360deg); }
}

/* Photo frame */
.photo__frame {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #4338ca 70%, #a5b4fc 100%);
  box-shadow:
    0 0 0 1px rgba(99,102,241,0.2),
    0 20px 60px rgba(0,0,0,0.55),
    0 0 40px rgba(99,102,241,0.25);
  z-index: 2;
  animation: floatPhoto 5s ease-in-out infinite;
}
@keyframes floatPhoto {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

.photo__img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
  border: 3px solid #0f0a2a;
}

/* Status badge */
.photo__badge {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  background: rgba(10, 15, 28, 0.92);
  border: 1px solid rgba(99,102,241,0.35);
  border-radius: 99px;
  backdrop-filter: blur(8px);
  white-space: nowrap;
  z-index: 3;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
}
.badge__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px #4ade80;
  animation: pulseBadge 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pulseBadge {
  0%,100% { box-shadow: 0 0 6px #4ade80; }
  50%      { box-shadow: 0 0 14px #4ade80, 0 0 24px rgba(74,222,128,0.5); }
}
.badge__text {
  font-size: 0.72rem;
  font-weight: 600;
  color: #e2e8f0;
  letter-spacing: 0.03em;
}

/* ── Info card ─────────────────────────────────────────────────────────────── */
.about__info-card {
  background: rgba(14, 21, 32, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.info-row { display: flex; flex-direction: column; gap: 0.2rem; }
.info-label {
  font-size: 0.75rem;
  color: #475569;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.info-value { font-size: 0.875rem; color: #cbd5e1; font-weight: 500; }
.info-value.available {
  color: #4ade80;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.info-value.available::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 6px #4ade80;
}

/* ── Responsive ────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .about__visual { order: -1; }
  .about__highlights { gap: 1.25rem; }
  .about__photo-wrap {
    width: 200px;
    height: 200px;
  }
  .photo__frame {
    width: 190px;
    height: 190px;
  }
}
</style>
