// src/pages/CareersPage.jsx
import React, { useState } from "react";
import "./CareersPage.css";
import careerHero from "../assets/career.avif";
const CareersPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section
        className="career-hero"
        style={{ backgroundImage: `url(${careerHero})` }}
      >
        <div className="overlay">
          <div className="hero-text">
            <h1>Let’s shape the future of home interiors, together</h1>
            <button className="career-btn">View Open Positions</button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join">
        <h2>Why Join Our Team?</h2>
        <p className="subtitle">
          At Advika Creations, we believe in more than just designing spaces —
          we design careers, culture, and futures.
        </p>
        <div className="cards">
          <div className="card">
            <h3>🌿 Creative Culture</h3>
            <p>
              Work in an inspiring environment where innovation and design meet
              collaboration.
            </p>
          </div>
          <div className="card">
            <h3>🚀 Career Growth</h3>
            <p>
              Upskill with mentorship, training, and real-world projects that
              boost your expertise.
            </p>
          </div>
          <div className="card">
            <h3>🏆 Luxury Projects</h3>
            <p>
              Be part of premium interior projects that redefine modern living
              experiences.
            </p>
          </div>
          <div className="card">
            <h3>🤝 Collaborative Team</h3>
            <p>
              Join a family of creative professionals who value teamwork,
              respect, and shared success.
            </p>
          </div>
        </div>
      </section>


      {/* Perks & Benefits */}
      <section className="perks">
        <h2>Perks of Working With Us</h2>
        <p className="subtitle">
          We go beyond paychecks — we invest in people, culture, and creativity.
          Here’s what makes working with us special:
        </p>
        <div className="perk-list">
          <div className="perk-card">
            <h3>💡 Creative Studio Environment</h3>
            <p>Modern workspace designed to inspire innovation and fresh ideas.</p>
          </div>
          <div className="perk-card">
            <h3>🏖️ Flexible Work Options</h3>
            <p>Choose remote, hybrid, or on-site setups that fit your lifestyle.</p>
          </div>
          <div className="perk-card">
            <h3>📚 Ongoing Learning & Workshops</h3>
            <p>Grow with design seminars, skill-based training, and mentorship.</p>
          </div>
          <div className="perk-card">
            <h3>🌍 Work on Global Luxury Projects</h3>
            <p>Collaborate on high-end projects with international clients.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Didn’t find a role that fits?</h2>
        <p>Send us your portfolio and we’ll get in touch.</p>
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          Submit Portfolio
        </button>
      </section>

     {/* Popup Form Modal */}
{showForm && (
  <div className="modal-overlay" onClick={() => setShowForm(false)}>
    <div
      className="modal-content banner-box"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Submit Your Portfolio</h3>
     <form
  className="portfolio-form"
  action="http://localhost/advika/upload.php"  // update with your domain
  method="POST"
  encType="multipart/form-data"
>
  <div className="form-group">
    <label>Full Name <span className="required">*</span></label>
    <input type="text" name="name" placeholder="Enter your name" required />
  </div>

  <div className="form-group">
    <label>Phone Number <span className="required">*</span></label>
    <input type="tel" name="phone" placeholder="Enter your number" required />
  </div>

  <div className="form-group">
    <label>Email Address <span className="required">*</span></label>
    <input type="email" name="email" placeholder="Enter your email" required />
  </div>

  <div className="form-group">
    <label>Message <span className="required">*</span></label>
    <textarea name="message" placeholder="Write a short message..." rows="4" required />
  </div>

  <div className="form-group">
    <label>Upload CV / Portfolio <span className="required">*</span></label>
    <input type="file" name="cv" accept=".pdf,.doc,.docx" required />
  </div>

  <button type="submit" className="btn-primary">
    Submit Application
  </button>
</form>

    </div>
  </div>
)}

    </div>
  );
};

export default CareersPage;
