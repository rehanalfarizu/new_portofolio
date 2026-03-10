<script setup>
import { ref, nextTick } from 'vue'
const tagIconMap = {
  'Laravel':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Vue.js 3':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Tailwind CSS':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'MySQL':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Heroku':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg',
  'Cloudinary':     'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cloudinary.svg',
  'PHP 8.4':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'Azure IoT Hub':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'Azure Functions':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'Python ML':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Babylon.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babylonjs/babylonjs-original.svg',
  'ESP32':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-original.svg',
  'MQTT':           null,
  'React':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'REST API':       null,
  'Chart.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg',
  'Python':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'TensorFlow':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'Keras':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
  'scikit-learn':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'Jupyter':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
  'Transformer':    null,
  'LSTM':           null,
  'PySpark':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg',
  'Apache Spark':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg',
  'NLTK':           null,
  'Streamlit':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
  'Parquet':        null,
  'MLlib':          null,
}

const monoIcons = new Set(['Cloudinary', 'MQTT'])

const projects = [
  {
    title: 'Itqom Education 🎓',
    description:
      'ITQoM Platform adalah platform education bootcamp yang menyediakan pembelajaran komprehensif seputar frontend & backend development, UI/UX design, dan fullstack development. Dibangun dengan Laravel + Vue.js 3, di-deploy ke Heroku dengan custom domain, dan dilengkapi Cloudinary untuk media management serta JawsDB MySQL sebagai database.',
    tags: ['Laravel', 'Vue.js 3', 'Tailwind CSS', 'MySQL', 'Heroku', 'Cloudinary', 'PHP 8.4'],
    github: 'https://github.com/rehanalfarizu/itqom-education',
    demo: 'https://itqom-platform.tech',
    featured: true,
  },
  {
    title: 'TwinSpace - Digital Twin Dashboard 🏢',
    description:
      'Sistem Digital Twin untuk monitoring energi dan kondisi ruangan secara real-time. Menampilkan visualisasi 3D interaktif (Babylon.js), deteksi orang via YOLO + Webcam, serta rekomendasi suhu AC optimal berbasis Machine Learning (Random Forest & Gradient Boosting). Terintegrasi dengan Azure IoT Hub, Azure Functions, HiveMQ MQTT, dan Azure Storage.',
    tags: ['Vue.js 3', 'Azure IoT Hub', 'Azure Functions', 'Python ML', 'MQTT', 'Babylon.js', 'ESP32'],
    github: 'https://github.com/rehanalfarizu/dashboard_digitaltwin',
    demo: 'https://dashboard-digitaltwin.vercel.app/',
    featured: true,
  },
  {
    title: 'Stack Overflow Analytics 📊',
    description:
      'Platform Big Data analytics untuk menganalisis Stack Overflow Data Dump menggunakan Apache Spark (PySpark) dan NLP. Mencakup ETL pipeline (XML → Parquet), text preprocessing, TF-IDF, sentiment analysis, topic modeling, serta prediksi kualitas pertanyaan & deteksi duplikat dengan Spark MLlib.',
    tags: ['PySpark', 'Python', 'NLTK', 'Streamlit', 'Jupyter', 'MLlib', 'Parquet'],
    github: 'https://github.com/rehanalfarizu/stackoverflow-analytics-pyspark-nlp',
    demo: 'https://colab.research.google.com/github/rehanalfarizu/stackoverflow-analytics-pyspark-nlp/blob/main/notebooks/stackoverflow_analytics_colab.ipynb',
    featured: true,
  },
  {
    title: 'Deteksi Anomali Log Sistem 🔍',
    description:
      'Sistem deteksi anomali pada log sistem menggunakan Deep Learning berbasis sequence. Mengimplementasikan LSTM, GRU, Bi-LSTM, CNN-LSTM, Autoencoder, dan Transformer dengan multi-head self-attention. Mendukung transfer learning (GloVe, FastText, Word2Vec) dan dataset publik HDFS, BGL, Thunderbird dari LogHub.',
    tags: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Jupyter', 'Transformer', 'LSTM'],
    github: 'https://github.com/rehanalfarizu/-Deteksi-Anomali-Log-Sistem-Menggunakan-Model-Sequence-Berbasis-Deep-Learning',
    demo: 'https://colab.research.google.com/github/rehanalfarizu/-Deteksi-Anomali-Log-Sistem-Menggunakan-Model-Sequence-Berbasis-Deep-Learning/blob/main/notebooks/Anomaly_Detection_Colab.ipynb',
    featured: true,
  },
    {
    title: 'Analisis dan Prediksi Data dengan Pendekatan Big Data Mining 📈',
    description:
      'Proyek ini mengimplementasikan berbagai teknik Big Data Mining untuk menganalisis data customer dari perusahaan e-commerce. Melibatkan preprocessing data besar, clustering dengan K-Means, klasifikasi dengan Random Forest dan SVM, serta visualisasi hasil analisis menggunakan Metode Association Rules, RFM Analysis, dan Klasifikasi',
    tags: ['Python', 'scikit-learn', 'Apache Spark', 'Jupyter', 'Streamlit', 'Parquet', 'MLlib'],
    github: 'https://github.com/rehanalfarizu/big-data-mining-.git',
    demo: 'https://colab.research.google.com/github/rehanalfarizu/big-data-mining-/blob/main/Final_Project_BigData_Mining.ipynb',
    featured: true,
  },
]

const openLink = (url) => {
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

// Certificate modal
const selectedCert = ref(null)
const modalRef = ref(null)
const lastFocused = ref(null)

const openCert = async (cert, event) => {
  lastFocused.value = event?.currentTarget || document.activeElement
  selectedCert.value = cert
  await nextTick()
  modalRef.value?.focus()
}

const closeCert = () => {
  selectedCert.value = null
  nextTick(() => lastFocused.value?.focus())
}

const onKeydown = (e) => { if (e.key === 'Escape') closeCert() }

const certificates = [
  {
    title: 'Sertifikat Ignition 2025',
    issuer: 'Lomba Ignition 2025',
    date: '2025',
    logo: 'https://www.google.com/s2/favicons?domain=amikom.ac.id&sz=64',
    credential: null,
    pdf: '/certs/Sertifikat Ignition Muhammad Raihan Al Farizi.pdf',
  },
  {
    title: 'Sertifikat Course Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    logo: 'https://www.google.com/s2/favicons?domain=dicoding.com&sz=64',
    credential: 'https://www.dicoding.com/certificates/',
    pdf: '/certs/sertifikat_course_905_4648513_300126191943.pdf',
  },
  {
    title: 'Sertifikat Asisten Praktikum Multimedia',
    issuer: 'Universitas Amikom Yogyakarta',
    date: '2025',
    logo: 'https://www.google.com/s2/favicons?domain=amikom.ac.id&sz=64',
    credential: null,
    pdf: '/certs/1755775423290.pdf',
  },
  {
    title: 'Sertifikat Asisten Praktikum UI/UX',
    issuer: 'Universitas Amikom Yogyakarta',
    date: '2025',
    logo: 'https://www.google.com/s2/favicons?domain=amikom.ac.id&sz=64',
    credential: null,
    pdf: '/certs/1755775846714.pdf',
  },
  {
    title: 'Sertifikat Amikom Arena Creative Application Digital Innovation And Multimedia',
    issuer: 'Universitas Amikom Yogyakarta',
    date: '2026',
    logo: 'https://www.google.com/s2/favicons?domain=amikom.ac.id&sz=64',
    credential: null,
    pdf: '/certs/sertifikat arcadia.pdf',
  },
]
</script>

<template>
  <section id="projects" class="section">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">Featured Work</h2>
      </div>
      <div class="projects__grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
          :class="{ 'project-card--featured': project.featured }"
        >
          <div class="project-card__top">
            <div class="project-card__folder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="34" height="34">
                <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
              </svg>
            </div>
            <div class="project-card__links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                title="View Source"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                aria-label="Live Demo"
                title="Live Demo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__desc">{{ project.description }}</p>
          <div class="project-card__tags">
            <template v-for="tag in project.tags" :key="tag">
              <img
                v-if="tagIconMap[tag]"
                :src="tagIconMap[tag]"
                :alt="tag"
                :title="tag"
                class="tag-icon"
                :class="{ 'tag-icon--mono': monoIcons.has(tag) }"
                loading="lazy"
                width="22"
                height="22"
                @error="(e) => e.target.style.display = 'none'"
              />
              <span v-else :title="tag" class="tag-text">{{ tag }}</span>
            </template>
          </div>
        </article>
      </div>

      <!-- ── Certificates ── -->
      <div class="section__header certs__header">
        <h2 class="section__title">Certificates</h2>
      </div>
      <div class="certs__grid">
        <div
          v-for="cert in certificates"
          :key="cert.title"
          class="cert-card"
          @click="openCert(cert, $event)"
          tabindex="0"
          @keydown.enter="openCert(cert, $event)"
          @keydown.space.prevent="openCert(cert, $event)"
          role="button"
          :aria-label="`Lihat sertifikat ${cert.title}`"
        >
          <div class="cert-card__thumb">
            <object
              :data="cert.pdf + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'"
              type="application/pdf"
              class="cert-card__thumb-object"
              aria-label="Certificate preview"
            >
              <div class="cert-card__thumb-fallback">
                <svg viewBox="0 0 60 80" fill="none" width="48" height="64">
                  <rect x="5" y="5" width="50" height="65" rx="4" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>
                  <rect x="12" y="18" width="30" height="3" rx="1.5" fill="rgba(99,102,241,0.4)"/>
                  <rect x="12" y="26" width="36" height="2" rx="1" fill="rgba(99,102,241,0.25)"/>
                  <rect x="12" y="32" width="28" height="2" rx="1" fill="rgba(99,102,241,0.25)"/>
                  <rect x="12" y="38" width="32" height="2" rx="1" fill="rgba(99,102,241,0.25)"/>
                </svg>
                <span class="cert-card__thumb-label">PDF</span>
              </div>
            </object>
            <div class="cert-card__thumb-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="26" height="26">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span>Lihat Sertifikat</span>
            </div>
          </div>
          <div class="cert-card__body">
            <div class="cert-card__header">
              <img :src="cert.logo" :alt="cert.issuer" class="cert-card__logo" />
              <div>
                <p class="cert-card__title">{{ cert.title }}</p>
                <p class="cert-card__meta">
                  <span class="cert-card__issuer">{{ cert.issuer }}</span>
                  <span class="cert-card__date">{{ cert.date }}</span>
                </p>
              </div>
            </div>
            <a
              v-if="cert.credential"
              :href="cert.credential"
              target="_blank"
              rel="noopener"
              class="cert-card__link"
              @click.stop
            >Lihat Credential →</a>
          </div>
        </div>
      </div>

      <!-- ── Certificate Lightbox Modal ── -->
      <Teleport to="body">
        <Transition name="modal">
          <div
            v-if="selectedCert"
            class="cert-modal"
            @click.self="closeCert"
            @keydown="onKeydown"
          >
            <div
              ref="modalRef"
              class="cert-modal__box"
              tabindex="-1"
              role="dialog"
              :aria-label="`Sertifikat: ${selectedCert?.title}`"
              aria-modal="true"
            >
              <button class="cert-modal__close" @click="closeCert" aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <object
                :data="selectedCert.pdf + '#toolbar=1&navpanes=0&scrollbar=1&view=FitH'"
                type="application/pdf"
                class="cert-modal__pdf"
              >
                <div class="cert-modal__pdf-fallback">
                  <p>Browser tidak bisa menampilkan PDF.</p>
                  <a :href="selectedCert.pdf" target="_blank" class="cert-modal__cta">Buka PDF ↗</a>
                </div>
              </object>
              <div class="cert-modal__footer">
                <div class="cert-modal__info">
                  <img :src="selectedCert.logo" :alt="selectedCert.issuer" class="cert-modal__logo" />
                  <div>
                    <p class="cert-modal__title">{{ selectedCert.title }}</p>
                    <p class="cert-modal__issuer">{{ selectedCert.issuer }} · {{ selectedCert.date }}</p>
                  </div>
                </div>
                <a
                  :href="selectedCert.pdf"
                  target="_blank"
                  rel="noopener"
                  class="cert-modal__cta"
                >Buka PDF ↗</a>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 6rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 3rem;
}

.section__tag {
  color: #818cf8;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.5rem;
}

.section__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  padding-left: 0.75rem;
  border-left: 3px solid #f59e0b;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: rgba(8, 13, 24, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 10px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.project-card:hover {
  border-color: #6366f1;
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.15);
}

.project-card--featured {
  border-color: rgba(99, 102, 241, 0.2);
}

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.project-card__folder { color: #6366f1; }

.project-card__links {
  display: flex;
  gap: 0.75rem;
}

.project-card__links a {
  color: #64748b;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
}

.project-card__links a:hover {
  color: #818cf8;
  transform: translateY(-2px);
}

.project-card__title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #f0f6fc;
}

.project-card__desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.7;
  flex: 1;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: grayscale(20%);
  transition: filter 0.2s, transform 0.2s;
  border-radius: 3px;
}

.tag-icon:not(.tag-icon--mono):hover {
  filter: grayscale(0%) drop-shadow(0 0 4px rgba(99,102,241,0.6));
  transform: scale(1.2);
}

.tag-icon--mono {
  filter: invert(1) brightness(1.8) sepia(1) saturate(3) hue-rotate(195deg);
}

.tag-icon--mono:hover {
  filter: invert(1) brightness(2) sepia(1) saturate(5) hue-rotate(195deg) drop-shadow(0 0 4px rgba(99,102,241,0.6));
  transform: scale(1.2);
}

.tag-text {
  font-size: 0.65rem;
  color: #818cf8;
  font-weight: 600;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.25);
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
  .certs__grid {
    grid-template-columns: 1fr;
  }
}

/* ── Certificates ── */
.certs__header {
  margin-top: 4rem;
}

.certs__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.cert-card {
  background: rgba(8, 13, 24, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s, transform 0.22s, box-shadow 0.25s;
}

.cert-card:hover {
  border-color: #6366f1;
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(99, 102, 241, 0.18);
}

/* Thumbnail */
.cert-card__thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid rgba(99,102,241,0.15);
}

.cert-card__thumb-object {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  border: none;
}

.cert-card__thumb-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(10,12,28,0.95), rgba(30,25,60,0.8));
}

.cert-card__thumb-label {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #6366f1;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.25);
  border-radius: 4px;
  padding: 1px 6px;
}

.cert-card__thumb-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 30, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  opacity: 0;
  transition: opacity 0.25s;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
}

/* On touch devices always show the overlay hint */
@media (hover: none) {
  .cert-card__thumb-overlay {
    opacity: 1;
    background: rgba(10, 10, 30, 0.5);
  }
}

/* Body */
.cert-card__body {
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cert-card__header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.cert-card__logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
  margin-top: 2px;
}

.cert-card__title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e2e8f0;
  line-height: 1.4;
}

.cert-card__meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.2rem;
}

.cert-card__issuer {
  font-size: 0.72rem;
  color: #818cf8;
  font-weight: 500;
}

.cert-card__date {
  font-size: 0.68rem;
  color: #475569;
}

.cert-card__date::before {
  content: '·';
  margin-right: 0.4rem;
}

.cert-card__link {
  font-size: 0.72rem;
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  align-self: flex-start;
}

.cert-card__link:hover {
  color: #a5b4fc;
}

/* ── Lightbox Modal ── */
.cert-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(5, 8, 18, 0.92);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.cert-modal__box {
  position: relative;
  background: #0d1117;
  border: 1px solid rgba(99,102,241,0.3);
  border-radius: 16px;
  overflow: hidden;
  width: min(900px, 96vw);
  height: min(90vh, 900px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 64px rgba(0,0,0,0.8);
}

.cert-modal__close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
  background: rgba(15, 20, 40, 0.9);
  border: 1px solid rgba(99,102,241,0.25);
  border-radius: 8px;
  color: #94a3b8;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.cert-modal__close:hover {
  background: rgba(99,102,241,0.2);
  color: #f1f5f9;
}

.cert-modal__pdf {
  flex: 1;
  width: 100%;
  min-height: 0;
  display: block;
  background: #fff;
}

.cert-modal__pdf-fallback {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #94a3b8;
  font-size: 0.9rem;
  padding: 2rem;
}

.cert-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  border-top: 1px solid rgba(99,102,241,0.12);
  flex-shrink: 0;
}

.cert-modal__info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cert-modal__logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.cert-modal__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
}

.cert-modal__issuer {
  font-size: 0.75rem;
  color: #818cf8;
  margin-top: 0.15rem;
}

.cert-modal__cta {
  flex-shrink: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}

.cert-modal__cta:hover {
  background: #818cf8;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.22s ease;
}

.modal-enter-active .cert-modal__box,
.modal-leave-active .cert-modal__box {
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .cert-modal__box,
.modal-leave-to .cert-modal__box {
  transform: scale(0.94);
  opacity: 0;
}
</style>
