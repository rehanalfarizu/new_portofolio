<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import profilImg from '@/assets/profil3_opt.jpeg'

const fullName = 'Muhammad Raihan Alfarizi'

// Typing animation
const typedText = ref('')
const showCursor = ref(true)
let typingIndex = 0
let typingTimer = null
let cursorTimer = null
let phase = 'typing'

function typeStep() {
  if (phase === 'typing') {
    typedText.value = fullName.substring(0, typingIndex + 1)
    typingIndex++
    if (typingIndex >= fullName.length) {
      phase = 'pausing'
      typingTimer = setTimeout(typeStep, 3200)
      return
    }
    typingTimer = setTimeout(typeStep, 70)
  } else if (phase === 'pausing') {
    phase = 'deleting'
    typingTimer = setTimeout(typeStep, 60)
  } else if (phase === 'deleting') {
    typedText.value = fullName.substring(0, typingIndex - 1)
    typingIndex--
    if (typingIndex <= 0) {
      typingIndex = 0
      phase = 'typing'
      typingTimer = setTimeout(typeStep, 500)
      return
    }
    typingTimer = setTimeout(typeStep, 35)
  }
}

function blinkCursor() {
  showCursor.value = !showCursor.value
  cursorTimer = setTimeout(blinkCursor, 530)
}

// ── Code window typing ──
const codeLines = [
  { tokens: [{ t: 'keyword', v: 'const' }, { t: 'plain', v: ' identity ' }, { t: 'op', v: '=' }, { t: 'plain', v: ' {' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'key', v: 'name' }, { t: 'op', v: ':' }, { t: 'string', v: ' "Raihan",' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'key', v: 'role' }, { t: 'op', v: ':' }, { t: 'string', v: ' "FullStack Dev",' }] },
  { tokens: [{ t: 'plain', v: '  ' }, { t: 'key', v: 'stack' }, { t: 'op', v: ':' }, { t: 'plain', v: ' [' }, { t: 'string', v: '"Vue"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Python"' }, { t: 'plain', v: '],' }] },
  { tokens: [{ t: 'plain', v: '}' }] },
]

const codeVisible = ref([])   // array of fully-typed line indices
const codeCurrent = ref('')   // currently typing line text
const codeLineIdx = ref(0)
const codeCharIdx = ref(0)
const codeShowCursor = ref(true)
let codeTimer = null
let codeCursorTimer = null

function flatLine(idx) {
  return codeLines[idx].tokens.map(t => t.v).join('')
}

function codeTypeStep() {
  const line = flatLine(codeLineIdx.value)
  if (codeCharIdx.value < line.length) {
    codeCurrent.value = line.substring(0, codeCharIdx.value + 1)
    codeCharIdx.value++
    codeTimer = setTimeout(codeTypeStep, 55)
  } else {
    codeVisible.value.push(codeLineIdx.value)
    codeCurrent.value = ''
    codeCharIdx.value = 0
    codeLineIdx.value++
    if (codeLineIdx.value >= codeLines.length) {
      codeTimer = setTimeout(() => {
        codeVisible.value = []
        codeLineIdx.value = 0
        codeTimer = setTimeout(codeTypeStep, 400)
      }, 2800)
    } else {
      codeTimer = setTimeout(codeTypeStep, 120)
    }
  }
}

function blinkCodeCursor() {
  codeShowCursor.value = !codeShowCursor.value
  codeCursorTimer = setTimeout(blinkCodeCursor, 530)
}

function tokenClass(type) {
  return `ct-${type}`
}

onMounted(() => { typeStep(); blinkCursor(); codeTypeStep(); blinkCodeCursor() })
onUnmounted(() => { clearTimeout(typingTimer); clearTimeout(cursorTimer); clearTimeout(codeTimer); clearTimeout(codeCursorTimer) })

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

const avatarError = (e) => {
  e.target.style.display = 'none'
  e.target.nextElementSibling?.classList.remove('hidden')
}

// 3D card tilt
const cardStyle = ref({})
const glareStyle = ref({ opacity: 0 })

function onCardMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const rotX = ((y - cy) / cy) * -14
  const rotY = ((x - cx) / cx) * 14
  const gx = (x / rect.width) * 100
  const gy = (y / rect.height) * 100
  cardStyle.value = {
    transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.045,1.045,1.045)`,
    transition: 'transform 0.08s linear',
  }
  glareStyle.value = {
    opacity: 1,
    background: `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22) 0%, transparent 65%)`,
  }
}

function onCardMouseLeave() {
  cardStyle.value = {
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
    transition: 'transform 0.55s cubic-bezier(.23,1,.32,1)',
  }
  glareStyle.value = { opacity: 0, transition: 'opacity 0.4s' }
}
</script>

<template>
  <section id="hero" class="hero">
    <!-- Background decorations -->
    <div class="hero__bg-blob hero__bg-blob--1"></div>
    <div class="hero__bg-blob hero__bg-blob--2"></div>
    <div class="hero__bg-grid"></div>

    <div class="hero__container">
      <!-- ── LEFT: Content ── -->
      <div class="hero__content">
        <div class="hero__available-badge">
          <span class="hero__available-dot"></span>
          Available for Work
        </div>

        <h1 class="hero__heading">
          <span class="hero__heading-hi">Hi, I'm</span>
          <span class="hero__heading-name">
            <span class="hero__typing">{{ typedText }}</span><span
              class="hero__cursor"
              :class="{ 'hero__cursor--off': !showCursor }"
            >|</span>
          </span>
        </h1>

        <p class="hero__role">
          Students of Bachelor Computer Science
          <span class="hero__role-dot">•</span>
          AMIKOM Yogyakarta University
        </p>

        <p class="hero__bio">
          Building scalable, performant web applications with modern technologies —
          from pixel-perfect UIs to robust backend systems. Turning ideas into
          impactful digital experiences.
        </p>

        <div class="hero__actions">
          <button class="hero__btn hero__btn--primary" @click="scrollTo('#contact')">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Hire Me
          </button>
          <button class="hero__btn hero__btn--outline" @click="scrollTo('#projects')">
            View Projects
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div class="hero__socials">
          <a
            href="https://github.com/rehanalfarizu"
            target="_blank" rel="noopener"
            class="hero__social" aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/muhammad-raihan-alfarizi-0396b2321"
            target="_blank" rel="noopener"
            class="hero__social" aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:muhammadraihanalfarizi799@gmail.com"
            class="hero__social" aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="19" height="19">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- ── RIGHT: Photo ── -->
      <div
        class="hero__photo-wrap"
        @mousemove="onCardMouseMove"
        @mouseleave="onCardMouseLeave"
      >
        <div class="hero__photo-frame" :style="cardStyle">
          <div class="hero__photo-glow"></div>
          <img
            :src="profilImg"
            alt="Muhammad Raihan Alfarizi"
            class="hero__photo"
            width="380"
            height="420"
            @error="avatarError"
          />
          <div class="hero__photo-fallback hidden">RA</div>

          <!-- Code editor — inside frame, sticks out bottom-left, tilts with 3D card -->
          <div class="code-win">
            <div class="code-win__bar">
              <span class="code-win__dot code-win__dot--r"></span>
              <span class="code-win__dot code-win__dot--y"></span>
              <span class="code-win__dot code-win__dot--g"></span>
              <span class="code-win__title">app.js</span>
            </div>
            <div class="code-win__body">
              <div v-for="(lineIdx, i) in codeVisible" :key="'done-'+i" class="code-win__line">
                <span class="code-win__ln">{{ lineIdx + 1 }}</span>
                <span v-for="(tok, ti) in codeLines[lineIdx].tokens" :key="ti" :class="tokenClass(tok.t)">{{ tok.v }}</span>
              </div>
              <div v-if="codeLineIdx < codeLines.length" class="code-win__line">
                <span class="code-win__ln">{{ codeLineIdx + 1 }}</span>
                <span class="ct-plain">{{ codeCurrent }}</span><span
                  class="code-win__caret"
                  :class="{ 'code-win__caret--off': !codeShowCursor }"
                >▊</span>
              </div>
            </div>
          </div>

          <!-- Glare overlay -->
          <div class="hero__card-glare" :style="glareStyle"></div>
          <!-- Card edge shine -->
          <div class="hero__card-edge"></div>
        </div>


      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll-indicator">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
/* ═══════════════════════════════
   HERO — Professional Dark Theme
   ═══════════════════════════════ */

/* ── Section ── */
.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #080d18;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 1.5rem 5rem;
}

/* ── Background Blobs ── */
.hero__bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
  pointer-events: none;
  z-index: 2;
}

.hero__bg-blob--1 {
  width: 600px;
  height: 600px;
  top: -120px;
  right: -100px;
  background: radial-gradient(circle, #6366f1 0%, transparent 70%);
}

.hero__bg-blob--2 {
  width: 500px;
  height: 500px;
  bottom: -100px;
  left: -80px;
  background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
}

/* ── Dot Grid ── */
.hero__bg-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 2;
}

/* ── Container ── */
.hero__container {
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 3;
}

/* ════════════
   LEFT COLUMN
   ════════════ */
.hero__content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ── Available badge ── */
.hero__available-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.3);
  color: #4ade80;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  margin-bottom: 1.8rem;
  letter-spacing: 0.04em;
  width: fit-content;
}

.hero__available-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: availPulse 2s ease-in-out infinite;
}

@keyframes availPulse {
  0%, 100% { box-shadow: 0 0 4px #22c55e; }
  50%       { box-shadow: 0 0 12px #22c55e, 0 0 22px rgba(34,197,94,0.35); }
}

/* ── Heading ── */
.hero__heading {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero__heading-hi {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 0.02em;
}

.hero__heading-name {
  font-size: clamp(2.2rem, 5.5vw, 3.8rem);
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -1.5px;
  line-height: 1.1;
  min-height: 1.2em;
}

.hero__typing {
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__cursor {
  color: #818cf8;
  font-weight: 300;
  margin-left: 2px;
  transition: opacity 0.1s;
}

.hero__cursor--off {
  opacity: 0;
}

/* ── Role ── */
.hero__role {
  font-size: 1.05rem;
  font-weight: 500;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
}

.hero__role-dot {
  color: #6366f1;
}

/* ── Bio ── */
.hero__bio {
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 2.25rem;
}

/* ── Buttons ── */
.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.25rem;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 2px solid transparent;
  letter-spacing: 0.01em;
}

.hero__btn--primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 20px rgba(99,102,241,0.4);
}

.hero__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(99,102,241,0.55);
}

.hero__btn--outline {
  background: transparent;
  color: #818cf8;
  border-color: rgba(99,102,241,0.5);
}

.hero__btn--outline:hover {
  background: rgba(99,102,241,0.08);
  border-color: #6366f1;
  transform: translateY(-2px);
}

/* ── Socials ── */
.hero__socials {
  display: flex;
  gap: 1rem;
}

.hero__social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #64748b;
  transition: all 0.22s ease;
  text-decoration: none;
}

.hero__social:hover {
  background: rgba(99,102,241,0.12);
  border-color: rgba(99,102,241,0.4);
  color: #818cf8;
  transform: translateY(-3px);
}

/* ═════════════
   RIGHT COLUMN
   ═════════════ */
.hero__photo-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px; /* room for code-win bottom that hangs below frame */
  /* perspective is applied via JS per-card for accuracy */
}

.hero__photo-frame {
  position: relative;
  width: 380px;
  height: 420px;
  border-radius: 24px;
  flex-shrink: 0;
  transform-style: preserve-3d;
  will-change: transform;
  cursor: pointer;
  overflow: visible; /* allow code-win to hang outside the frame */
  /* default perspective so it looks right before hover */
  transform: perspective(900px) rotateX(0deg) rotateY(0deg);
}

.hero__photo-glow {
  position: absolute;
  inset: -18px;
  border-radius: 32px;
  background: conic-gradient(
    from 0deg,
    #6366f1, #8b5cf6, #c084fc, #818cf8, #6366f1
  );
  filter: blur(22px);
  opacity: 0.55;
  animation: rotateConic 6s linear infinite;
  z-index: 0;
}

@keyframes rotateConic {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.hero__photo {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  object-position: center 100%;
  border: 2px solid rgba(99,102,241,0.4);
  position: relative;
  z-index: 1;
  display: block;
  box-shadow:
    0 20px 60px rgba(0,0,0,0.6),
    0 0 0 1px rgba(255,255,255,0.04) inset;
}

.hero__photo-fallback {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 800;
  color: white;
  position: relative;
  z-index: 1;
}

.hero__photo-fallback.hidden {
  display: none;
}

/* Glare / specular highlight */
.hero__card-glare {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  z-index: 2;
  pointer-events: none;
  transition: opacity 0.4s;
}

/* Subtle inner edge highlight */
.hero__card-edge {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  z-index: 3;
  pointer-events: none;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.25);
}

/* ── Floating Chips ── */
.hero__chip {
  position: absolute;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(99,102,241,0.4);
  color: #818cf8;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.8rem;
  border-radius: 50px;
  letter-spacing: 0.03em;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.35);
  white-space: nowrap;
  z-index: 2;
  animation: chipFloat 4s ease-in-out infinite;
}

.hero__chip--tl {
  top: 16px;
  left: -40px;
  animation-delay: 0s;
}

.hero__chip--tr {
  top: 64px;
  right: -40px;
  animation-delay: 1s;
}

.hero__chip--bl {
  bottom: 64px;
  left: -40px;
  animation-delay: 2s;
}

.hero__chip--br {
  bottom: 16px;
  right: -40px;
  animation-delay: 1.5s;
}

@keyframes chipFloat {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

/* ══════════════════════════════
   Code Window Overlay
═══════════════════════════════ */
.code-win {
  position: absolute;
  bottom: -48px;   /* hangs ~half out of the frame — looks attached */
  left: -14px;
  width: 220px;
  background: rgba(18, 22, 40, 0.95);
  border: 1px solid rgba(99,102,241,0.45);
  border-radius: 10px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 12px 40px rgba(0,0,0,0.65),
    0 0 0 1px rgba(255,255,255,0.05) inset,
    0 -1px 0 rgba(99,102,241,0.3);   /* top border fade into photo */
  z-index: 10;
  overflow: hidden;
  animation: codeWinFloat 4s ease-in-out infinite;
}

@keyframes codeWinFloat {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
}

.code-win__bar {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 10px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.code-win__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.code-win__dot--r { background: #ff5f57; }
.code-win__dot--y { background: #febc2e; }
.code-win__dot--g { background: #28c840; }

.code-win__title {
  font-size: 0.65rem;
  color: #64748b;
  font-family: 'SF Mono', 'Fira Code', monospace;
  margin-left: 4px;
  letter-spacing: 0.02em;
}

.code-win__body {
  padding: 8px 6px;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.68rem;
  line-height: 1.7;
  min-height: 80px;
}

.code-win__line {
  display: flex;
  align-items: baseline;
  white-space: pre;
}

.code-win__ln {
  color: #334155;
  width: 14px;
  text-align: right;
  margin-right: 10px;
  flex-shrink: 0;
  font-size: 0.6rem;
  user-select: none;
}

.ct-keyword { color: #c084fc; }
.ct-key     { color: #93c5fd; }
.ct-string  { color: #86efac; }
.ct-op      { color: #94a3b8; }
.ct-plain   { color: #e2e8f0; }

.code-win__caret {
  color: #818cf8;
  transition: opacity 0.1s;
  margin-left: 1px;
}

.code-win__caret--off {
  opacity: 0;
}

/* ── Scroll indicator ── */
.hero__scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #334155;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  z-index: 3;
}

.hero__scroll-mouse {
  width: 22px;
  height: 34px;
  border: 2px solid #334155;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5px;
}

.hero__scroll-wheel {
  width: 3px;
  height: 7px;
  background: #6366f1;
  border-radius: 3px;
  animation: scrollWheel 1.6s ease-in-out infinite;
}

@keyframes scrollWheel {
  0%   { transform: translateY(0); opacity: 1; }
  80%  { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}

/* ══════════════
   RESPONSIVE
   ══════════════ */
@media (max-width: 900px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero__content {
    align-items: center;
  }

  .hero__available-badge {
    margin-bottom: 1.4rem;
  }

  .hero__heading {
    align-items: center;
  }

  .hero__role {
    justify-content: center;
  }

  .hero__bio {
    text-align: center;
    max-width: 500px;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__socials {
    justify-content: center;
  }

  .hero__photo-wrap {
    order: -1;
  }

  .hero__photo-frame {
    width: 260px;
    height: 290px;
  }

  .hero__chip--tl { top: 8px;  left: -10px; }
  .hero__chip--tr { top: 40px; right: -10px; }
  .hero__chip--bl { bottom: 40px; left: -10px; }
  .hero__chip--br { bottom: 8px;  right: -10px; }
}

@media (max-width: 480px) {
  .hero {
    padding: 6rem 1rem 4rem;
  }

  .hero__photo-frame {
    width: 200px;
    height: 225px;
  }

  .hero__chip {
    font-size: 0.68rem;
    padding: 0.28rem 0.6rem;
  }

  .hero__chip--tl { left: 0; }
  .hero__chip--tr { right: 0; }
  .hero__chip--bl { left: 0; }
  .hero__chip--br { right: 0; }

  .hero__scroll-indicator {
    display: none;
  }
}
</style>
