<script setup>
import { ref } from 'vue'

const email = 'muhammadraihanalfarizi799@gmail.com'
const github = 'https://github.com/rehanalfarizu'
const linkedin = 'https://linkedin.com/in/muhammad-raihan-alfarizi-0396b2321'

// ── ⚠️  GANTI dengan access key kamu dari https://web3forms.com/create ──
// Caranya: buka link itu → masukkan emailmu → cek inbox → copy access key
const WEB3FORMS_KEY = '081cb18a-bba4-4aec-926b-d828165675e7'

// Form state
const form = ref({ name: '', email: '', message: '' })
const formStatus = ref('idle') // 'idle' | 'sending' | 'success' | 'error'
const errorMsg = ref('')

async function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMsg.value = 'Semua field harus diisi.'
    formStatus.value = 'error'
    return
  }

  if (WEB3FORMS_KEY === 'YOUR_ACCESS_KEY_HERE' || WEB3FORMS_KEY === '') {
    errorMsg.value = 'Form belum dikonfigurasi. Masukkan access key Web3Forms terlebih dahulu.'
    formStatus.value = 'error'
    return
  }

  formStatus.value = 'sending'
  errorMsg.value = ''

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio Contact: Pesan dari ${form.value.name}`,
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        from_name: 'Portfolio - Muhammad Raihan Alfarizi',
      }),
    })

    const data = await res.json()

    if (data.success) {
      formStatus.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      formStatus.value = 'error'
      errorMsg.value = data.message || 'Gagal mengirim pesan. Coba lagi nanti.'
    }
  } catch {
    formStatus.value = 'error'
    errorMsg.value = 'Terjadi kesalahan jaringan. Periksa koneksi Anda.'
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">Get In Touch</h2>
      </div>

      <div class="contact__layout">
        <!-- Left: info -->
        <div class="contact__info">
          <p class="contact__tagline">
            Punya project menarik atau ingin berkolaborasi? Kirim pesan dan saya
            akan merespons secepat mungkin!
          </p>

          <div class="contact__details">
            <a :href="`mailto:${email}`" class="contact__detail-item">
              <span class="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span class="detail-text">{{ email }}</span>
            </a>
            <a :href="github" target="_blank" rel="noopener noreferrer" class="contact__detail-item">
              <span class="detail-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
              <span class="detail-text">github.com/rehanalfarizu</span>
            </a>
            <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="contact__detail-item">
              <span class="detail-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span class="detail-text">Muhammad Raihan Alfarizi</span>
            </a>
          </div>

          <div class="contact__availability">
            <span class="avail-dot"></span>
            Open to Work — Tersedia untuk proyek freelance & full-time
          </div>
        </div>

        <!-- Right: contact form -->
        <form class="contact__form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-group">
            <label for="contact-name" class="form-label">Nama</label>
            <input id="contact-name" v-model="form.name" type="text" class="form-input" placeholder="Muhammad Raihan"
              autocomplete="name" required />
          </div>
          <div class="form-group">
            <label for="contact-email" class="form-label">Email</label>
            <input id="contact-email" v-model="form.email" type="email" class="form-input"
              placeholder="email@example.com" autocomplete="email" required />
          </div>
          <div class="form-group">
            <label for="contact-message" class="form-label">Pesan</label>
            <textarea id="contact-message" v-model="form.message" class="form-input form-textarea"
              placeholder="Halo Raihan, saya ingin berdiskusi tentang..." rows="5" required></textarea>
          </div>

          <!-- Status messages -->
          <div v-if="formStatus === 'error'" class="form-message form-message--error" role="alert">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
            </svg>
            {{ errorMsg }}
          </div>
          <div v-if="formStatus === 'success'" class="form-message form-message--success" role="status">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            ✅ Pesan terkirim! Saya akan merespons dalam 1–2 hari kerja.
          </div>

          <button type="submit" class="form-btn" :disabled="formStatus === 'sending'">
            <svg v-if="formStatus !== 'sending'" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span v-if="formStatus === 'sending'" class="btn-spinner"></span>
            {{ formStatus === 'sending' ? 'Mengirim...' : 'Kirim Pesan' }}
          </button>
        </form>
      </div>

      <footer class="site-footer">
        <p>Designed & Built by <strong>Muhammad Raihan Alfarizi</strong></p>
        <p class="footer-tech">Built with Vue 3 + Vite + Tailwind CSS</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 6rem 1.5rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 3rem;
}

.section__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  padding-left: 0.75rem;
  border-left: 3px solid #818cf8;
}

/* ── Layout ── */
.contact__layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;
}

/* ── Left: info ── */
.contact__tagline {
  color: #94a3b8;
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 2rem;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 2rem;
}

.contact__detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.contact__detail-item:hover {
  color: #818cf8;
}

.detail-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  color: #818cf8;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}

.contact__detail-item:hover .detail-icon {
  background: rgba(99, 102, 241, 0.18);
  border-color: rgba(99, 102, 241, 0.5);
}

.detail-text {
  word-break: break-all;
}

.contact__availability {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #4ade80;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 50px;
}

.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  flex-shrink: 0;
  animation: availPulse 2s ease-in-out infinite;
}

@keyframes availPulse {

  0%,
  100% {
    box-shadow: 0 0 4px #22c55e;
  }

  50% {
    box-shadow: 0 0 12px #22c55e, 0 0 22px rgba(34, 197, 94, 0.4);
  }
}

/* ── Right: Form ── */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: rgba(14, 21, 32, 0.85);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 16px;
  padding: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-input {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  padding: 0.72rem 1rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  width: 100%;
}

.form-input::placeholder {
  color: #334155;
}

.form-input:focus {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.05);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

/* Status messages */
.form-message {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  padding: 0.7rem 0.9rem;
  border-radius: 8px;
  font-weight: 500;
}

.form-message--error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.form-message--success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
}

/* Submit button */
.form-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
  letter-spacing: 0.01em;
}

.form-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.5);
}

.form-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.btn-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Footer */
.site-footer {
  border-top: 1px solid rgba(99, 102, 241, 0.12);
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.site-footer p {
  color: #475569;
  font-size: 0.8rem;
}

.site-footer strong {
  color: #64748b;
}

.footer-tech {
  color: #334155;
  font-size: 0.75rem;
  font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
}

/* Responsive */
@media (max-width: 768px) {
  .contact__layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
