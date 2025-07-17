<div class="who-we-are-page">
  <img src="/src/assets/umbrella-handle.png" alt="Umbrella Handle" class="bg-img umbrella" />
  <img src="/src/assets/electrical-accessory.png" alt="Electrical Accessory" class="bg-img accessory" />
  <h1 class="who-heading">Who We Are</h1>
  <div class="factory-history" in:fade={{ duration: 600 }}>
    <p class="intro">Fujicraft Electrical Accessories has been a leader in manufacturing since 2000, delivering excellence and innovation in every product.</p>
    <h2>Our Journey</h2>
    <div class="details">
      <span>With over two decades of experience, our factory operates two specialized divisions:</span>
      <ul>
        <li><strong>Electrical Accessories:</strong> High-quality electrical products trusted by professionals and households alike.</li>
        <li><strong>Outsourced Rainco Umbrella Plastics:</strong> Premium plastic components for Rainco umbrellas, produced with precision and reliability.</li>
      </ul>
      <span>Our commitment to quality, innovation, and customer satisfaction drives everything we do.</span>
    </div>
  </div>

  <section class="leadership-team" in:fade={{ duration: 700 }}>
    <h2 class="team-heading">Leadership Team</h2>
    <div class="team-grid">
      <div class="team-card">
        <img src="/src/assets/ceo.jpg" alt="CEO" class="team-img" />
        <h3>Azad Muhairdreen</h3>
        <p class="role">Chief Executive Officer</p>
        <p>Visionary founder, leading Fujicraft with innovation and integrity since 1999.</p>
      </div>
      <div class="team-card">
        <img src="/src/assets/manager.jpg" alt="Manager" class="team-img" />
        <h3>Althaf Azad</h3>
        <p class="role">Operations Manager</p>
        <p>Expert in process optimization, ensuring quality and efficiency across all departments.</p>
      </div>
    </div>
  </section>
  </div>
<style>
.bg-img {
  position: absolute;
  z-index: 0;
  opacity: 0.18;
  pointer-events: none;
  animation: float-bg 6s ease-in-out infinite alternate;
}
.umbrella {
  top: 10vh;
  left: 5vw;
  width: 220px;
  height: auto;
  animation-delay: 0s;
}
.accessory {
  bottom: 8vh;
  right: 7vw;
  width: 180px;
  height: auto;
  animation-delay: 2s;
}
@keyframes float-bg {
  from { transform: translateY(0) scale(1) rotate(-8deg); }
  50% { transform: translateY(-18px) scale(1.04) rotate(8deg); }
  to { transform: translateY(0) scale(1) rotate(-8deg); }
}
.who-we-are-page {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #f8f9fa 60%, #e6f0ff 100%);
  position: relative;
}
.who-heading {
  width: 100vw;
  text-align: center;
  font-size: 2.5rem;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  color: #d90429;
  margin: 0;
  padding: 2.5rem 0 1.5rem 0;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 2;
}
.factory-history {
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2.5rem 3rem;
  text-align: left;
  animation: slide-in 0.7s cubic-bezier(.68,-0.55,.27,1.55);
  color: #222;
}
@keyframes slide-in {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.factory-history h2 {
  color: #d90429;
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
}
.factory-history .intro {
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  color: #222;
}
.factory-history .details {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.factory-history ul {
  margin: 1rem 0 0 1.2rem;
  padding: 0;
}
.factory-history li {
  margin-bottom: 0.7rem;
  font-size: 1.05rem;
}
.factory-history strong {
  color: #0070f3;
}
.leadership-team {
  width: 100vw;
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 2rem 3rem;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  position: relative;
  z-index: 1;
}
.team-heading {
  text-align: center;
  font-size: 2rem;
  color: #d90429;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 2rem;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  justify-items: center;
}
.team-card {
  background: linear-gradient(135deg, #e6f0ff 60%, #f8f9fa 100%);
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 2;
  animation: team-float 4s ease-in-out infinite alternate;
}
.team-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px rgba(217,4,41,0.12);
}
.team-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 3px solid #d90429;
}
.team-card h3 {
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
  color: #222;
}
.role {
  font-size: 0.98rem;
  color: #0070f3;
  margin-bottom: 0.7rem;
}
.team-card p {
  font-size: 0.95rem;
  color: #444;
}
@keyframes team-float {
  from { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  to { transform: translateY(0); }
}
</style>
