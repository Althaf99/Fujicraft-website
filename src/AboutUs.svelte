<script>
  // Add any interactive logic or imports here
</script>

<div class="aboutus-hero">
  <h1 class="aboutus-title">About Us</h1>
  <p class="aboutus-desc">Fujicraft Electrical Accessories and Seytech Plastics Pvt Ltd are two innovative companies, both led by Azad Muhairdeena and Althaf Azad. Together, they deliver excellence in electrical accessories and plastic manufacturing for Sri Lanka and beyond.</p>
</div>

<section class="aboutus-main-content">
  <div class="aboutus-card" tabindex="0">
    <h2>Fujicraft Electrical Accessories</h2>
    <p>Specializing in high-quality electrical accessories for homes and industries, Fujicraft is known for reliability, safety, and modern design. Our products are trusted by professionals and households across the country.</p>
  </div>
  <div class="aboutus-card" tabindex="0">
    <h2>Seytech Plastics Pvt Ltd</h2>
    <p>Seytech Plastics manufactures innovative plastic solutions for household, industrial, and custom needs. Our commitment to sustainability and technology drives every product we create.</p>
  </div>
  <div class="aboutus-card" tabindex="0">
    <h2>Leadership</h2>
    <p>Azad Muhairdeena and Althaf Azad bring vision, expertise, and dedication to both companies, ensuring growth, quality, and customer satisfaction.</p>
  </div>
</section>

<style>
.aboutus-hero {
  width: 100vw;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f4f7fa 70%, #e9ecef 100%);
  padding: 2.5rem 0 1.5rem 0;
}
.aboutus-title {
  font-size: 2.5rem;
  color: #3a506b;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 1rem;
}
.aboutus-desc {
  font-size: 1.15rem;
  color: #5c677d;
  text-align: center;
  max-width: 700px;
}
.aboutus-main-content {
  width: 100vw;
  min-height: 40vh;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  background: #f8fafc;
  padding: 2rem 0;
}
.aboutus-card {
  background: #e9ecef;
  border-radius: 1rem;
  padding: 2rem;
  color: #5c677d;
  font-size: 1.1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  max-width: 350px;
  min-width: 280px;
  transition: box-shadow 0.3s, transform 0.3s;
  outline: none;
}
.aboutus-card:focus, .aboutus-card:hover {
  box-shadow: 0 6px 24px rgba(58,80,107,0.12);
  transform: translateY(-4px) scale(1.03);
}
.aboutus-card h2 {
  color: #3a506b;
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
}
</style>
