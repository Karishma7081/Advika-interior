import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fullhome.css";
import heroImage from "../assets/fullhomedesign.avif";
import PremiumConsultationForm from "../components/PremiumConsultationForm";

// Product images
import livingRoomImg from "../assets/Living Room Interiors1.avif";
import bedroomImg from "../assets/Bedroom Interiors2.avif";
import kitchenImg from "../assets/Kitchens3.avif";
import bathroomImg from "../assets/Bathrooms4.avif";
import completeHomeImg from "../assets/complete Home Decor.avif";
import luxuryHomeImg from "../assets/luxuryhome decor.avif";

const fullHomeProducts = [
  {
    title: "Living Room Interiors",
    description:
      "Elegant and modern living room designs tailored for comfort and style, with smart space utilization and premium finishes.",
    image: livingRoomImg,
  },
  {
    title: "Bedroom Interiors",
    description:
      "Relaxing and functional bedroom designs, combining aesthetic appeal with optimal storage and comfort.",
    image: bedroomImg,
  },
  {
    title: "Kitchens",
    description:
      "Modern kitchens with smart layouts, durable finishes, and efficient storage solutions for daily convenience.",
    image: kitchenImg,
  },
  {
    title: "Bathrooms",
    description:
      "Luxury bathroom interiors with contemporary designs, premium fixtures, and space optimization.",
    image: bathroomImg,
  },
  {
    title: "Complete Home Decor",
    description:
      "End-to-end home interiors including kitchens, bathrooms, and study rooms. A seamless blend of aesthetics and usability.",
    image: completeHomeImg,
  },
  {
    title: "Luxury Home Decor",
    description:
      "Stylish bedrooms that combine luxury and functionality. Modular wardrobes, smart storage, and ambient lighting included.",
    image: luxuryHomeImg,
  },
];

const FullHomeInteriors = () => {
  const navigate = useNavigate();
  const productsRef = useRef(null);
  const [showPremiumForm, setShowPremiumForm] = useState(false);

  // Scroll animation for product cards
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-animate");
    const elementInView = (el, dividend = 1) =>
      el.getBoundingClientRect().top <= window.innerHeight / dividend;
    const displayScrollElement = (element) =>
      element.classList.add("scrolled");
    const handleScrollAnimation = () =>
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) displayScrollElement(el);
      });

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  const handleCTA = () => setShowPremiumForm(true);

  return (
    <>
      {/* Hero Section */}
      <section
        className="fullhome-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Transform Your Entire Home with Expert Interiors</h1>
          <button onClick={handleCTA}>BOOK ONLINE CONSULTATION</button>
        </div>
      </section>

      {/* Premium Form Popup */}
      {showPremiumForm && (
        <PremiumConsultationForm onClose={() => setShowPremiumForm(false)} />
      )}

      {/* Info Section */}
      <section className="fullhome-info scroll-animate">
        <div className="info-container">
          <h2>Crafting Complete Home Interiors</h2>
          <p>
            At <b>Advika Creations</b>, we create stunning interiors for your
            entire home, integrating aesthetics, functionality, and automation.
            From living rooms and bedrooms to kitchens and bathrooms, we
            transform your spaces with premium design, modern technology, and
            smart solutions tailored to your lifestyle.
          </p>
        </div>
      </section>

      {/* Automation Section */}
      <section className="automation-section scroll-animate">
        <div className="automation-container">
          <h2>Home & Office Automation</h2>
          <p>
            We integrate advanced automation solutions into your interiors.
            Control lighting, climate, security systems, and appliances with
            ease while enhancing comfort, energy efficiency, and productivity.
          </p>

          <div className="automation-cards">
            <div className="automation-card">
              <h3>Home Automation</h3>
              <p>
                Smart lighting, security, entertainment, and climate control
                designed for convenience and luxury.
              </p>
            </div>
            <div className="automation-card">
              <h3>Office Automation</h3>
              <p>
                Integrated solutions for modern offices: smart meeting rooms,
                lighting, HVAC, and productivity-enhancing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Home Products Section */}
      <section className="fullhome-products scroll-animate" ref={productsRef}>
        <h2>Our Services</h2>
        <p>Elegant interiors for every room in your home.</p>
        <div className="products-grid">
          {fullHomeProducts.map((product, index) => (
            <div key={index} className="product-card scroll-animate">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="services-note">
          At <b>Advika Creations</b>, we offer end-to-end interior solutions,
          from design to execution, ensuring every corner of your home reflects
          style, comfort, and quality.
        </p>
      </section>
    </>
  );
};

export default FullHomeInteriors;
