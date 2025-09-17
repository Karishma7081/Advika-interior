import React, { useEffect, useState } from "react";
import "../styles/InteriorServices.css";


// Service images
import bedStudy from "./single bed.avif";
import kitchen from "./kichen.avif";
import bungalow from "./banglow.avif";
import livingRoom from "./Living Room.avif";
import bedroom from "./Bedroom.webp";
import smartOffice from "./Smart Home Office.avif";

// Hero images
import hero1 from "./premium_photo-1661908139883-4e1bdae2f8c1.avif";
import hero2 from "./hero2.avif";
import hero3 from "./hero3.avif";
import hero4 from "./hero4.avif";
import hero5 from "./hero5.avif";
import hero6 from "./hero6.avif";
import hero7 from "./hero7.avif";

const InteriorServices = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  const [currentHero, setCurrentHero] = useState(0);

  // Auto-slide vertically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services-grid");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="interior-services">
      {/* Hero Section */}
      <div className="hero-section">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${currentHero === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="hero-overlay">
          <h1>Transform Your Home with Our Interior Designs</h1>
          <p>We create stunning, functional spaces tailored to your lifestyle.</p>
          <button className="view-services-btn" onClick={scrollToServices}>
            View Services
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid" id="services-grid">
        <div className="service-card">
          <img src={bedStudy} alt="Single Bed with Study" />
          <a href="/study" className="green-link">
            Modular Furniture | Study unit
          </a>
          <h3>Single Bed with Study</h3>
          <p>1 Bed | 1 Study unit | 1 Wardrobe</p>
          <p>Decent Look - Royal Interior Home Decor</p>
        </div>

        <div className="service-card">
          <img src={kitchen} alt="Modular Kitchen" />
          <a href="/kitchen" className="green-link">
            Modular Kitchen
          </a>
          <h3>Kitchen with Glossy Finish</h3>
          <p>1 Modular Kitchen | 2 Nano Stone | 7 Innotech Fittings</p>
        </div>

        <div className="service-card">
          <img src={bungalow} alt="Bungalow House" />
          <a href="/bungalow" className="green-link">
            Home Interiors
          </a>
          <h3>Bungalow House</h3>
          <p>2 Beds | 1.5 Baths | 2 Cars</p>
        </div>

        {/* New Service Cards */}
        <div className="service-card">
          <img src={livingRoom} alt="Living Room" />
          <a href="/living-room" className="green-link">
            Living Room Design
          </a>
          <h3>Elegant Living Room</h3>
          <p>Luxury Sofa | Accent Lighting | Modern Decor</p>
        </div>

        <div className="service-card">
          <img src={bedroom} alt="Bedroom" />
          <a href="/bedroom" className="green-link">
            Bedroom Interiors
          </a>
          <h3>Cozy Bedroom</h3>
          <p>King Size Bed | Wardrobe | Soft Lighting</p>
        </div>

        <div className="service-card">
          <img src={smartOffice} alt="Smart Home Office" />
          <a href="/smart-office" className="green-link">
            Smart Home & Office
          </a>
          <h3>Home Setup</h3>
          <p>Ergonomic Chair | Desk | Smart Lighting</p>
        </div>
      </div>
    </div>
  );
};
{/* Services Grid (first catalog) */}
<div className="services-grid" id="services-grid">
  {/* ... your existing 6 service cards ... */}
</div>

{/* Second Catalog - Text Links */}
<div className="catalog-links">
  <h2>Explore More Designs</h2>
  <ul>
    <li><a href="/false-ceiling">False Ceiling Designs</a></li>
    <li><a href="/wall-decor">Wall Décor & Panels</a></li>
    <li><a href="/kids-room">Kids Room Interiors</a></li>
    <li><a href="/dining-room">Dining Room Ideas</a></li>
    <li><a href="/storage">Storage Solutions</a></li>
  </ul>
</div>

export default InteriorServices;
