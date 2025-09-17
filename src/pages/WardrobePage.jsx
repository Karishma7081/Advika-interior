// src/pages/WardrobePage.jsx
import React, { useEffect, useState, useRef } from "react";
import "./WardrobePage.css";
import heroImage from "../assets/wardrobes121.avif";
import PremiumConsultationForm from "../components/PremiumConsultationForm";

// Wardrobe designs
import slidingWardrobe from "../assets/Sliding Wardrobe.avif";
import hingedWardrobe from "../assets/Hinged Wardrobe.avif";
import walkInWardrobe from "../assets/WalkIn Wardrobe.avif";
import smartStorageWardrobe from "../assets/Wardrobe smart storage .avif";

// Wardrobe components
import shelfUnit from "../assets/Shelf Unit.avif";
import drawerUnit from "../assets/Drawer Unit.avif";
import hangingUnit from "../assets/Hanging unit.avif";
import shoeRackUnit from "../assets/Shoe Rack Unit.avif";

const wardrobeDesigns = [
  {
    title: "Sliding Wardrobe",
    description: "Elegant sliding wardrobes to save space and add style.",
    image: slidingWardrobe,
  },
  {
    title: "Hinged Wardrobe",
    description: "Classic hinged door wardrobes for timeless elegance.",
    image: hingedWardrobe,
  },
  {
    title: "Walk-in Wardrobe",
    description: "Spacious walk-in wardrobes for luxury and convenience.",
    image: walkInWardrobe,
  },
  {
    title: "Smart Storage",
    description: "Integrated storage solutions for a clutter-free home.",
    image: smartStorageWardrobe,
  },
];

const wardrobeComponents = [
  { title: "Shelf Unit", image: shelfUnit },
  { title: "Drawer Unit", image: drawerUnit },
  { title: "Hanging Unit", image: hangingUnit },
  { title: "Shoe Rack Unit", image: shoeRackUnit },
];

const WardrobePage = () => {
  const [showPremiumForm, setShowPremiumForm] = useState(false);
  const designCarouselRef = useRef(null);
  const componentCarouselRef = useRef(null);

  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-animate");
    const elementInView = (el, dividend = 1) =>
      el.getBoundingClientRect().top <= window.innerHeight / dividend;
    const displayScrollElement = (element) => element.classList.add("scrolled");
    const handleScrollAnimation = () =>
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) displayScrollElement(el);
      });

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth / 3;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="wardrobe-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Elegant Wardrobes for Every Home</h1>
          <button onClick={() => setShowPremiumForm(true)}>
            BOOK ONLINE CONSULTATION
          </button>
        </div>
      </section>

      {/* Premium Form */}
      {showPremiumForm && (
        <PremiumConsultationForm
          onClose={() => setShowPremiumForm(false)}
          isAdmin={false}
        />
      )}

      {/* Info Section */}
      <section className="wardrobe-info scroll-animate">
        <div className="info-container">
          <h2>Custom Wardrobes Tailored to Your Lifestyle</h2>
          <p>
            At <b>Advika Creations</b>, we design wardrobes that combine elegance,
            smart storage, and functionality. From sliding doors to walk-ins,
            we optimize space while elevating your home's style.
          </p>
        </div>
      </section>

      {/* Wardrobe Designs Carousel */}
      <section className="wardrobe-layouts scroll-animate">
        <h2 className="carousel-title">Wardrobe Designs</h2>
        <div className="carousel-container">
          <button
            className="carousel-btn left"
            onClick={() => scrollCarousel(designCarouselRef, "left")}
          >
            &#10094;
          </button>
          <div className="cards-row" ref={designCarouselRef}>
            {wardrobeDesigns.map((design, index) => (
              <div key={index} className="wardrobe-card">
                <img src={design.image} alt={design.title} />
                <h3>{design.title}</h3>
                <p>{design.description}</p>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn right"
            onClick={() => scrollCarousel(designCarouselRef, "right")}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Wardrobe Components Carousel */}
      <section className="wardrobe-components scroll-animate">
        <h2 className="carousel-title">Wardrobe Components</h2>
        <div className="carousel-container">
          <button
            className="carousel-btn left"
            onClick={() => scrollCarousel(componentCarouselRef, "left")}
          >
            &#10094;
          </button>
          <div className="cards-row" ref={componentCarouselRef}>
            {wardrobeComponents.map((comp, index) => (
              <div key={index} className="wardrobe-card">
                <img src={comp.image} alt={comp.title} />
                <h3>{comp.title}</h3>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn right"
            onClick={() => scrollCarousel(componentCarouselRef, "right")}
          >
            &#10095;
          </button>
        </div>
      </section>
    </>
  );
};

export default WardrobePage;
