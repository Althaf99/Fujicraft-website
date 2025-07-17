<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="contact-hero" in:fade={{ duration: 700 }}>
  <h1 class="contact-title" in:fly={{ y: -30, duration: 600 }}>Contact</h1>
  <div class="contact-card" in:fly={{ y: 30, duration: 700, delay: 200 }}>
    <div class="contact-row">
      <span class="contact-icon email">📧</span>
      <span class="contact-label">Email:</span>
      <a href="mailto:fujicraft12@gmail.com" class="contact-link">fujicraft12@gmail.com</a>
    </div>
    <div class="contact-row">
      <span class="contact-icon phone">📞</span>
      <span class="contact-label">Phone:</span>
      <a href="tel:+94777132121" class="contact-link">+94 777132121</a>
    </div>
    <div class="contact-row">
      <span class="contact-icon address">🏠</span>
      <span class="contact-label">Address:</span>
      <span class="contact-link">125/1, Housing Scheme, Panagamuwa, Rideegama, Kurunegala</span>
    </div>
  </div>
</div>

<style>
.contact-hero {
  width: 100vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f4f7fa 70%, #e9ecef 100%);
  padding: 3rem 0 2rem 0;
  animation: hero-float 5s ease-in-out infinite alternate;
}
@keyframes hero-float {
  from { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  to { transform: translateY(0); }
}
.contact-title {
  font-size: 2.3rem;
  color: #3a506b;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(58,80,107,0.08);
}
.contact-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  border-radius: 1.2rem;
  box-shadow: 0 6px 32px rgba(58,80,107,0.10);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  color: #3a506b;
  font-size: 1.15rem;
  min-width: 320px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: card-pop 1.2s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes card-pop {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.contact-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid #e9ecef;
  animation: row-float 3s ease-in-out infinite alternate;
}
@keyframes row-float {
  from { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  to { transform: translateY(0); }
}
.contact-icon {
  font-size: 1.7rem;
  animation: icon-bounce 2.2s infinite alternate;
}
.contact-icon.email { animation-delay: 0s; }
.contact-icon.phone { animation-delay: 0.5s; }
.contact-icon.address { animation-delay: 1s; }
@keyframes icon-bounce {
  from { transform: translateY(0); }
  50% { transform: translateY(-10px) scale(1.08); }
  to { transform: translateY(0); }
}
.contact-label {
  font-weight: 600;
  color: #5c677d;
  min-width: 70px;
}
.contact-link {
  color: #d90429;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.contact-link:hover {
  color: #3a506b;
  text-decoration: underline;
}
</style>
