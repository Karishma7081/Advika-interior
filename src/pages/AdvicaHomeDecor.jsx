// src/pages/AdvicaHomeDecor.jsx
import "../styles/advica.css";

import heroImg from "../assets/photo-1732044141424-243a26aa0fe7.avif";
import kitchenImage from "../assets/istockphoto-1456467041-612x612.webp";
import livingRoomImg from "../assets/premium_photo-1676823571650-bae964e7010f.avif";

export default function AdvicaHomeDecor() {
  return (
    <main className="advica-page">
      {/* Hero */}
      <section 
        className="hero" 
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Advica Home Decor</h1>
          <p>
            Stylish, functional, and timeless interiors by Advika Creations.
            From concept to completion, we turn your ideas into beautifully
            crafted spaces.
          </p>
          {/* Home button added here */}
    
        </div>
      </section>

      {/* About (text + image) */}
<section className="split">
  <div className="text">
    <h2>Who We Are</h2>
    <p>
      At Advika, our team of over 100 interior designers understands the importance 
      of creating beautiful, functional spaces that meet our clients’ needs.
    </p>
    <p>
      Our collaborative approach ensures that every project benefits from shared ideas, 
      innovative solutions, and thorough feedback. This process guarantees the highest 
      standards of design excellence while staying on time and within budget.
    </p>
    <p>
      Whether it’s a complete home transformation or a luxury kitchen makeover, 
      we design every detail around your lifestyle and taste.
    </p>
  </div>
  <div className="image">
    <img src={livingRoomImg} alt="Advika living room design" />
  </div>
</section>

{/* Services (image + text) */}
<section className="split reverse">
  <div className="image">
    <img src={kitchenImage} alt="Advika kitchen design" />
  </div>
  <div className="text">
    <h2>What We Offer</h2>
    <p>
      Looking for a luxurious and high-end interior designer in Noida or Delhi NCR? 
      Royal Interior Home Decor — powered by Advika Creations — brings unique style 
      to every space.
    </p>
    <p>
      We specialize in luxury interior design that is stunning, functional, and tailored 
      to your personal taste. From perfect color palettes to custom furniture, 
      every element is handled with care.
    </p>
    <p>
      Our team also delivers premium office interiors in Gaur City, offering elegant 
      and practical solutions that stand out.
    </p>
    <a href="#contact" className="btn">List Your Home</a>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Let’s Work Together</h2>
        <p>Tell us about your space and we’ll design something beautiful.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="Your message" />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
