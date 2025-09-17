import React, { useState } from "react";
import "./PoliciesPage.css";
import heroImage from "../assets/policies-hero.avif"; 

// Import icons
import termsIcon from "../assets/terms-of-use_v1_2.avif";
import gettingStartedIcon from "../assets/getting_started_v1_1.avif";
import designIcon from "../assets/designing_with_lAdvika_v1_1.avif";

const policies = [
  {
    title: "Terms of use",
    icon: termsIcon,
    items: [
      "General",
      "Definitions and interpretation",
      "Eligibility To Use",
      "Account Registration",
      "Our Service",
    ],
  },
  {
    title: "Getting Started",
    icon: gettingStartedIcon,
    items: ["How to begin", "First steps with Advika"],
  },
  {
    title: "Designing with Advika",
    icon: designIcon,
    items: [
      "Designing my dream home",
      "Managing my home project",
      "Delivery and installation",
      "Paying for my home interiors",
    ],
  },
];

const moreInfoCards = [
  {
    title: "Who We Are",
    text: "Advika Creations is built on trust, creativity, and delivering your dream home interiors with excellence.",
  },
  {
    title: "Our Mission",
    text: "To design homes that reflect your personality while ensuring transparency and quality at every step.",
  },
  {
    title: "Why Choose Us",
    text: "We combine modern design, expert craftsmanship, and customer-first policies to make your journey stress-free.",
  },
];

const PoliciesPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="policies-page">
      {/* ✅ Banner Section */}
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="banner-overlay">
          <h1>Policies</h1>
        </div>
      </section>

      {/* ✅ Subtitle just below banner */}
      <div className="policies-intro">
        <p>Get all the information you need</p>
      </div>

      {/* ✅ Policies Section with icons */}
      <section className="policies-section">
        <div className="policies-container">
          {policies.map((policy, idx) => (
            <div key={idx} className="policy-card">
              <img src={policy.icon} alt={policy.title} className="policy-icon" />
              <h3>{policy.title}</h3>
              <ul>
                {policy.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Creative Professional Section */}
      <section className="creative-section">
        <div className="creative-container">
          {/* Left Side: Text */}
          <div className="creative-text">
            <h2>Your Home, Your Style</h2>
            <p>
              At Advika Creations, our policies are designed to ensure a smooth,
              transparent, and stress-free experience for you. From planning to
              designing to delivery, we’ve got your back at every step.
            </p>
            <button
              className={`creative-btn ${showMore ? "active" : ""}`}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Explore More"}
            </button>
          </div>

          {/* Right Side: Image / Illustration */}
          <div className="creative-image">
            <img src={designIcon} alt="Creative Design" />
          </div>
        </div>
      </section>

      {/* ✅ Extra Info Cards */}
      {showMore && (
        <section className="more-info-section">
          <div className="more-info-container">
            {moreInfoCards.map((card, i) => (
              <div key={i} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PoliciesPage;
