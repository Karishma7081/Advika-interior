// src/pages/KitchenPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./kitchen.css";
import kitchenHero from "../assets/modern kitchen.avif";

import PremiumConsultationForm from "../components/PremiumConsultationForm";

// Kitchen Layout Images
import ParallelKitchen from "../assets/Parallel Kitchen.avif";
import LShapedKitchen from "../assets/L-Shaped Kitchen.avif";
import UShapedKitchen from "../assets/U-Shaped Kitchen.avif";
import OpenKitchen from "../assets/Open Kitchen.avif";
import StraightKitchen from "../assets/Straight Kitchen Design.avif";
import DreamyKitchen from "../assets/Dreamy Kitchen Design.avif";
import GalleyKitchen from "../assets/Galley Kitchen Design.avif";
import CompactKitchen from "../assets/Compact Kitchen Design8.avif";
import LuxuryKitchen from "../assets/Luxury Modular Kitchen.avif";
import ModernKitchen from "../assets/modern kitchen.avif";

// Component Images (using your shared paths)
import BaseUnit from "../assets/Base Unit.avif";
import WallUnit from "../assets/Wall Unit.avif";
import SemiTallUnit from "../assets/Semi-Tall Unit.avif";
import TallUnit from "../assets/Tall Unit.avif";
import LoftUnit from "../assets/Lofts.avif";
import GasUnit from "../assets/Gas Unit.avif";
import SpicePullout from "../assets/Spice Pullout.avif";
import BottlePullout from "../assets/Bottle Pullout.avif";
import WickerBasket from "../assets/Wicker Basket.avif";
import SingleShutter from "../assets/Single Shutter Base Unit.avif";
import WallStorage from "../assets/Wall Storage Unit.avif";
import GlassPlateUnit from "../assets/Glass & Plate Unit.avif";

const kitchenLayouts = [
  { title: "Parallel Kitchen Design", description: "A practical layout with two countertops running parallel, offering maximum efficiency in compact spaces.", img: ParallelKitchen },
  { title: "L-Shaped Kitchen Design", description: "Perfect for corner spaces, this layout provides an open design with plenty of countertop area.", img: LShapedKitchen },
  { title: "U-Shaped Kitchen Design", description: "Designed for larger spaces, it offers continuous countertop and storage on three sides.", img: UShapedKitchen },
  { title: "Open Kitchen Design", description: "Seamlessly blends with your living room, creating an airy and connected atmosphere.", img: OpenKitchen },
  { title: "Straight Kitchen Design", description: "A simple one-wall layout with sleek and functional style.", img: StraightKitchen },
  { title: "Dreamy Kitchen Design", description: "A modern design that combines elegance and practicality, perfect for stylish homes.", img: DreamyKitchen },
  { title: "Galley Kitchen Design", description: "Efficient and compact with two parallel counters — great for small homes.", img: GalleyKitchen },
  { title: "Compact Kitchen Design", description: "Perfectly optimized for apartments with smart storage solutions.", img: CompactKitchen },
  { title: "Luxury Modular Kitchen", description: "Premium finishes, integrated appliances, and a touch of elegance for modern homes.", img: LuxuryKitchen },
  { title: "Modern Kitchen Design", description: "Sleek, stylish, and equipped with the latest innovations — designed for contemporary living.", img: ModernKitchen },
];

const kitchenComponents = [
  { title: "Base Unit", description: "The foundation of your kitchen storage and workspace.", img: BaseUnit },
  { title: "Wall Unit", description: "Mounted storage units that save floor space.", img: WallUnit },
  { title: "Semi-Tall Unit", description: "Ideal balance between wall and tall storage.", img: SemiTallUnit },
  { title: "Tall Unit", description: "Floor-to-ceiling cabinets with maximum storage.", img: TallUnit },
  { title: "Lofts", description: "Extra storage above cabinets for seasonal items.", img: LoftUnit },
  { title: "Gas Unit", description: "Dedicated section for hob and gas connection.", img: GasUnit },
  { title: "Spice Pullout", description: "Slim pullouts for neatly organized spices.", img: SpicePullout },
  { title: "Bottle Pullout", description: "Vertical storage for bottles and jars.", img: BottlePullout },
  { title: "Wicker Basket", description: "Natural storage baskets for veggies & fruits.", img: WickerBasket },
  { title: "Single Shutter Base Unit", description: "Compact base cabinet with single shutter door.", img: SingleShutter },
  { title: "Wall Storage Unit", description: "Smart overhead storage for everyday items.", img: WallStorage },
  { title: "Glass & Plate Unit", description: "Specialized unit for plates and glassware.", img: GlassPlateUnit },
];

const KitchenPage = () => {
  const navigate = useNavigate();
  const [showPremiumForm, setShowPremiumForm] = useState(false);
  const layoutCarouselRef = useRef(null);
  const componentCarouselRef = useRef(null);

  // Scroll Animation
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

  // Carousel scroll function
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
        className="kitchen-hero"
        style={{
          backgroundImage: `url(${kitchenHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover the Kitchen You’ve Always Dreamed Of</h1>
          <button onClick={() => setShowPremiumForm(true)}>
            TALK TO OUR DESIGNER
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
      <section className="kitchen-info scroll-animate">
        <div className="info-container">
          <h2>Find the Perfect Layout for Your Lifestyle</h2>
          <p>
            Choosing the right layout is the <b>first step</b> towards a smart
            kitchen. Whether it’s an efficient parallel design, a spacious
            U-shape, or a stylish open plan — we design kitchens that make
            cooking effortless and entertaining unforgettable.
          </p>
        </div>
      </section>

      {/* Kitchen Layouts Carousel */}
      <section className="kitchen-layouts">
        <h2 className="carousel-title">Explore Kitchen Designs</h2>
        <div className="carousel-container">
          <button
            className="carousel-btn left"
            onClick={() => scrollCarousel(layoutCarouselRef, "left")}
          >
            &#10094;
          </button>
          <div className="kitchen-cards-row" ref={layoutCarouselRef}>
            {kitchenLayouts.map((layout, index) => (
              <div key={index} className="kitchen-card">
                <img src={layout.img} alt={layout.title} className="kitchen-image" />
                <h3>{layout.title}</h3>
                <p>{layout.description}</p>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn right"
            onClick={() => scrollCarousel(layoutCarouselRef, "right")}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Kitchen Components Carousel */}
      <section className="kitchen-components">
        <h2 className="carousel-title">Components that make your kitchen</h2>
        <p className="carousel-subtitle">
          Get familiar with the components that make your kitchen, and the role
          they play in making your cooking experience easy and convenient.
        </p>
        <div className="carousel-container">
          <button
            className="carousel-btn left"
            onClick={() => scrollCarousel(componentCarouselRef, "left")}
          >
            &#10094;
          </button>
          <div className="kitchen-cards-row" ref={componentCarouselRef}>
            {kitchenComponents.map((component, index) => (
              <div key={index} className="kitchen-card">
                <img src={component.img} alt={component.title} className="kitchen-image" />
                <h3>{component.title}</h3>
                <p>{component.description}</p>
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

export default KitchenPage;
