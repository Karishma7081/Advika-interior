import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./modular.css";
import heroImage from "../pages/Modern Living Room2.avif";
import PremiumConsultationForm from "../components/PremiumConsultationForm";

// ✅ Import product images
import kitchenImg from "../assets/kichenmod.avif";
import wardrobeImg from "../assets/wordrops2.avif";
import storageImg from "../assets/smartstorage.avif";

const modularProducts = [
  {
    title: "Kitchens",
    description:
      "Modern kitchens designed for convenience and style. Sleek layouts, smart storage, and durable finishes bring both beauty and functionality to your cooking space.",
    image: kitchenImg,
    link: "/kitchens",
  },
  {
    title: "Wardrobes",
    description:
      "Custom wardrobes to maximize space and elegance. From sliding doors to walk-in designs, we craft storage that blends sophistication with everyday utility.",
    image: wardrobeImg,
    link: "/wardrobes",
  },
  {
    title: "Storage Solutions",
    description:
      "Smart storage ideas for every corner of your home. Hidden compartments, multipurpose units, and modular setups that keep your home clutter-free and stylish.",
    image: storageImg,
    link: "/storage",
  },
];

const ModularInteriors = () => {
  const navigate = useNavigate();
  const productsRef = useRef(null);
  const [showPremiumForm, setShowPremiumForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Detect admin from JWT stored in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setIsAdmin(payload.role === "admin");
      } catch (err) {
        console.warn("Invalid token");
      }
    }
  }, []);

  // ✅ Scroll animation for product cards
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
        className="modular-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Smart Solutions for Every Corner of Your Home</h1>
          <button onClick={handleCTA}>BOOK ONLINE CONSULTATION</button>
        </div>
      </section>

      {/* Premium Form Popup */}
      {showPremiumForm && (
        <PremiumConsultationForm
          onClose={() => setShowPremiumForm(false)}
          isAdmin={isAdmin}
        />
      )}

      {/* Info Section */}
      <section className="modular-info scroll-animate">
        <div className="info-container">
          <h2>Crafting Spaces that Inspire, Lasting a Lifetime</h2>
          <p>
            At <b>Advika Creations</b>, we believe your home deserves more than
            just furniture – it deserves timeless design. From modular kitchens
            and wardrobes to elegant TV units, bookshelves, and smart storage
            solutions, we bring you budget-friendly, high-quality woodwork
            tailored to your lifestyle.
          </p>
        </div>
      </section>

      {/* Modular Products Section */}
      <section className="modular-products scroll-animate" ref={productsRef}>
        <h2>What we offer</h2>
        <p>
          Kitchens, wardrobes, and storage solutions designed for modern living.
        </p>
        <div className="products-grid">
          {modularProducts.map((product, index) => (
            <div key={index} className="product-card scroll-animate">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button
                className="learn-more"
                onClick={() => navigate(product.link)}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>

        {/* ✅ Styled bottom paragraph */}
        <p className="services-note">
          At <b>Advika Creations</b>, we don’t just stop at interiors – we
          deliver complete solutions. From electricals to plumbing, our trusted
          experts ensure every detail of your home is handled with care.
        </p>
      </section>
    </>
  );
};

export default ModularInteriors;
