<script>
  let sliderRef;
  function scrollSlider(direction) {
    if (sliderRef) {
      const cardWidth =
        sliderRef.querySelector(".slider-card")?.offsetWidth || 220;
      sliderRef.scrollBy({
        left: direction * (cardWidth + 20) * 2,
        behavior: "smooth",
      });
    }
  }
</script>

<div class="wwd-hero">
  <h1 class="wwd-title">What We Do</h1>
  <p class="wwd-desc">
    Fujicraft Electrical Accessories is dedicated to manufacturing and supplying
    high-quality electrical accessories for homes, businesses, and industries
    across Sri Lanka. Our products are designed for safety, reliability, and
    modern living.
  </p>
</div>

<section class="wwd-main-content">
  <div class="wwd-card modern-card">
    <div class="card-icon">🔌</div>
    <h2>Our Products</h2>
    <ul>
      <li>Switches & Sockets</li>
      <li>Extension Cords</li>
      <li>Plug Tops</li>
      <li>Distribution Boards</li>
      <li>Electrical Accessories for Home & Industry</li>
    </ul>
  </div>
  <div class="wwd-card modern-card">
    <div class="card-icon">⭐</div>
    <h2>Why Choose Fujicraft?</h2>
    <ul>
      <li>Certified Quality & Safety</li>
      <li>Modern, Durable Designs</li>
      <li>Trusted by Professionals</li>
      <li>Responsive Customer Support</li>
      <li>Continuous Innovation</li>
    </ul>
  </div>
  <div class="wwd-card modern-card">
    <div class="card-icon">💡</div>
    <h2>Our Values</h2>
    <ul>
      <li>Integrity & Reliability</li>
      <li>Customer Satisfaction</li>
      <li>Commitment to Safety</li>
      <li>Local Manufacturing Excellence</li>
    </ul>
  </div>
</section>

<section class="product-slider-section">
  <h2 class="slider-title">Our Products Gallery</h2>
  <div class="slider-controls">
    <button
      class="slider-btn left"
      aria-label="Scroll left"
      on:click={() => scrollSlider(-1)}>&lt;</button
    >
    <button
      class="slider-btn right"
      aria-label="Scroll right"
      on:click={() => scrollSlider(1)}>&gt;</button
    >
  </div>
  <div class="slider-container" bind:this={sliderRef}>
    <div class="slider-track">
      <!-- Replace these with your product images -->
      <div class="slider-card">
        <img src="/src/assets/product1.jpg" alt="Product 1" />
      </div>
      <div class="slider-card">
        <img src="/src/assets/product2.jpg" alt="Product 2" />
      </div>
      <div class="slider-card">
        <img src="/src/assets/product3.jpg" alt="Product 3" />
      </div>
      <div class="slider-card">
        <img src="/src/assets/product4.jpg" alt="Product 4" />
      </div>
      <div class="slider-card">
        <img src="/src/assets/product5.jpg" alt="Product 1" />
      </div>
      <div class="slider-card">
        <img src="/src/assets/product6.jpg" alt="Product 2" />
      </div>

      <div class="slider-card">
        <img src="/src/assets/product8.jpg" alt="Product 4" />
      </div>
      <!-- Add more product images as needed -->
    </div>
  </div>
</section>

<style>
  .wwd-hero {
    width: 100vw;
    min-height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f4f7fa 70%, #e9ecef 100%);
    padding: 2.5rem 0 1.5rem 0;
  }
  .wwd-title {
    font-size: 2.5rem;
    color: #3a506b;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 1rem;
  }
  .wwd-desc {
    font-size: 1.15rem;
    color: #5c677d;
    text-align: center;
    max-width: 700px;
  }
  .wwd-main-content {
    width: 100vw;
    min-height: 40vh;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: flex-start;
    justify-content: center;
    background: linear-gradient(120deg, #f8fafc 70%, #e9ecef 100%);
    padding: 3rem 0;
  }
  .wwd-card {
    background: #e9ecef;
    border-radius: 1rem;
    padding: 2rem;
    color: #5c677d;
    font-size: 1.1rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    max-width: 350px;
    min-width: 280px;
    transition:
      box-shadow 0.3s,
      transform 0.3s;
    outline: none;
  }
  .modern-card {
    background: linear-gradient(135deg, #f4f7fa 80%, #e9ecef 100%);
    border-radius: 1.2rem;
    padding: 2.2rem 2rem 2rem 2rem;
    color: #3a506b;
    font-size: 1.13rem;
    box-shadow: 0 6px 32px rgba(58, 80, 107, 0.1);
    max-width: 340px;
    min-width: 260px;
    transition:
      box-shadow 0.3s,
      transform 0.3s,
      background 0.3s;
    outline: none;
    position: relative;
    overflow: hidden;
    animation: card-fade-in 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .wwd-card:focus,
  .wwd-card:hover {
    box-shadow: 0 6px 24px rgba(58, 80, 107, 0.12);
    transform: translateY(-4px) scale(1.03);
  }
  .modern-card:focus,
  .modern-card:hover {
    box-shadow: 0 12px 36px rgba(58, 80, 107, 0.18);
    transform: translateY(-6px) scale(1.04);
    background: linear-gradient(135deg, #e9ecef 80%, #f4f7fa 100%);
  }
  .card-icon {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: icon-pop 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .wwd-card h2 {
    color: #3a506b;
    font-size: 1.25rem;
    margin-bottom: 0.7rem;
  }
  .wwd-card ul,
  .modern-card ul {
    list-style: none;
    margin: 0.5rem 0 0 1.2rem;
    padding: 0;
  }
  .wwd-card li {
    margin-bottom: 0.5rem;
  }
  .product-slider-section {
    width: 100vw;
    padding: 2rem 0 3rem 0;
    background: linear-gradient(120deg, #f8fafc 70%, #e9ecef 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slider-title {
    font-size: 1.5rem;
    color: #3a506b;
    margin-bottom: 1.5rem;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
  }
  .slider-controls {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    width: 90vw;
    max-width: 1200px;
    margin-bottom: 1rem;
  }
  .slider-btn {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(10px);
    color: #4282cfff;
    border: none;
    border-radius: 20%;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    box-shadow:
      0 4px 10px rgba(58, 80, 107, 0.1),
      0 1.5px 6px rgba(58, 80, 107, 0.08),
      inset 0 1.5px 8px rgba(255, 255, 255, 0.18);
    transition:
      background 0.2s,
      color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
  }
  .slider-btn:focus {
    outline: 2px solid #3a506b;
  }
  .slider-btn:hover {
    background: rgba(255, 255, 255, 0.55);
    color: #d90429;
    box-shadow:
      0 8px 32px rgba(58, 80, 107, 0.18),
      0 1.5px 12px rgba(255, 255, 255, 0.22),
      inset 0 1.5px 12px rgba(255, 255, 255, 0.22);
    transform: scale(1.12);
    border-color: #d90429;
  }
  .slider-container {
    scroll-behavior: smooth;
    width: 90vw;
    max-width: 1200px;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
  .slider-track {
    display: flex;
    gap: 2rem;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .slider-card {
    min-width: 220px;
    max-width: 220px;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 12px rgba(58, 80, 107, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      box-shadow 0.3s,
      transform 0.3s;
    cursor: pointer;
  }
  .slider-card img {
    width: 240px;
    height: 140px;
    object-fit: cover;
    border-radius: 0.7rem;
    box-shadow: 0 2px 8px rgba(58, 80, 107, 0.08);
  }
  .slider-card:hover {
    box-shadow: 0 8px 24px rgba(58, 80, 107, 0.18);
    transform: scale(1.04);
  }
  @keyframes card-fade-in {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes icon-pop {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    .slider-card {
      min-width: 140px;
      max-width: 140px;
      padding: 0.5rem;
    }
    .slider-card img {
      width: 110px;
      height: 80px;
    }
  }
</style>
