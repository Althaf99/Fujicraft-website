<div class="what-drives-us-page">
  <h1 class="wwd-heading">What Drives Us</h1>
      <div class="wwd-card" in:fade={{ duration: 600 }}>
    <p class="wwd-intro">We manufacture and supply high-quality electrical accessories for homes and industries, and deliver innovative plastic solutions for Rainco umbrellas.</p>
  </div>

  <section class="vision-section" in:fly={{ y: 40, duration: 700 }}>
    <h2>Vision</h2>
    <p>To be Sri Lanka’s trusted name in plastic manufacturing through quality, innovation, and sustainable practices.</p>
  </section>

  <section class="mission-section" in:fly={{ y: 40, duration: 700, delay: 200 }}>
    <h2>Mission</h2>
    <p>To deliver reliable, high-quality plastic products that meet industry and household needs while promoting local employment and eco-friendly manufacturing.</p>
  </section>

  <section class="sustainability-section" in:fly={{ y: 40, duration: 700, delay: 400 }}>
    <h2>Sustainability</h2>
    <ul>
      <li><span class="icon">🌱</span> <strong>Eco-friendly Materials:</strong> We use recyclable and sustainable plastics in our products.</li>
      <li><span class="icon">🔄</span> <strong>Waste Reduction:</strong> Our manufacturing process minimizes waste and maximizes resource efficiency.</li>
      <li><span class="icon">💡</span> <strong>Energy Efficiency:</strong> We invest in energy-saving machinery and green technologies.</li>
      <li><span class="icon">🤝</span> <strong>Community Impact:</strong> We support local employment and community development initiatives.</li>
    </ul>
    <div class="sustain-anim">
      <div class="leaf"></div>
      <div class="recycle"></div>
      <div class="energy"></div>
    </div>
  </section>
</div>

<style>

.what-drives-us-page {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #f4f7fa 70%, #e9ecef 100%);
  position: relative;
}
.wwd-heading {
  text-align: center;
  font-size: 2.5rem;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  color: #3a506b;
  margin: 0;
  padding: 2.5rem 0 1.5rem 0;
  background: transparent;
}
.wwd-card {
  background: linear-gradient(90deg, #bfc9d1 10%, #f4f7fa 90%);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  color: #3a506b;
  font-size: 1.15rem;
  text-align: center;
  animation: card-pop 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
@keyframes card-pop {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.vision-section, .mission-section, .sustainability-section {
  width: 100vw;
  max-width: 900px;
  margin: 2rem auto;
  background: #f8fafc;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  padding: 2rem 2.5rem;
  text-align: left;
  position: relative;
  animation: section-float 4s ease-in-out infinite alternate;
}
.vision-section h2, .mission-section h2, .sustainability-section h2 {
  color: #5c677d;
  font-size: 1.5rem;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 1rem;
}
.vision-section p, .mission-section p {
  font-size: 1.1rem;
  color: #3a506b;
}
.sustainability-section ul {
  margin: 1rem 0 0 1.2rem;
  padding: 0;
}
.sustainability-section li {
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: #5c677d;
  display: flex;
  align-items: center;
}
.sustainability-section .icon {
  font-size: 1.3rem;
  margin-right: 0.7rem;
}
.sustain-anim {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
}
.leaf, .recycle, .energy {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  animation: icon-bounce 2s infinite alternate;
}
.leaf {
  background: linear-gradient(135deg, #b7e4c7 60%, #e9ecef 100%);
  animation-delay: 0s;
}
.recycle {
  background: linear-gradient(135deg, #a0c4ff 60%, #e9ecef 100%);
  animation-delay: 0.5s;
}
.energy {
  background: linear-gradient(135deg, #ffe066 60%, #e9ecef 100%);
  animation-delay: 1s;
}
@keyframes icon-bounce {
  from { transform: translateY(0); }
  50% { transform: translateY(-12px) scale(1.08); }
  to { transform: translateY(0); }
}
@keyframes section-float {
  from { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  to { transform: translateY(0); }
}
</style>
<h1>What Drives Us</h1>
<p>Our passion for excellence, customer satisfaction, and continuous improvement drives us forward.</p>
