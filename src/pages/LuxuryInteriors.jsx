import React, { useState } from "react";
import "./LuxuryInteriors.css";
import bannerImg from "../assets/luxury bannr3.avif";
import sectionImg from "../assets/luxury2222.avif";

const LuxuryInteriors = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or further handling here
    setShowForm(false); // Close form on submit
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="luxury-container">
        <div className="luxury-image">
          <img src={bannerImg} alt="Luxury Interiors" />
        </div>

        <div className="luxury-content">
          <h1>Experience the majesty of bespoke homes</h1>
          <p>
            Transform your living spaces with our curated luxury interiors,
            designed with elegance, functionality, and timeless appeal.
          </p>
          <button className="luxury-btn" onClick={() => setShowForm(true)}>
            Begin your journey
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="luxury-bottom-section">
        <div className="bottom-text">
          <h2>
            An aura of grandeur, a touch of opulence and a symphony of thoughtful
            designs
          </h2>
          <p>
            At <b>Advika Creations</b>, we create stunning interiors for your
            entire home, integrating aesthetics, functionality, and automation.
            From living rooms and bedrooms to kitchens and bathrooms, we
            transform your spaces with premium design, modern technology, and
            smart solutions tailored to your lifestyle.
          </p>
          <button className="luxury-btn" onClick={() => setShowForm(true)}>
            Get in touch
          </button>
        </div>

        <div className="bottom-image">
          <div className="gold-arch">
            <img src={sectionImg} alt="Luxury Bedroom" />
          </div>
        </div>
      </div>

      {/* NEW Form Overlay */}
      {showForm && (
        <div
          className="luxury-form-overlay"
          onClick={() => setShowForm(false)} // close on outside click
        >
          <div
            className="luxury-form-container"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Single cross button */}
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ×
            </button>

            {/* New Inline Form */}
            <form className="new-luxury-form" onSubmit={handleSubmit}>
  <h3>Start Your Consultation</h3>

  <label>
    Name <span className="required-asterisk">*</span>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </label>

  <label>
    Email <span className="required-asterisk">*</span>
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </label>

  <label>
    Phone <span className="required-asterisk">*</span>
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </label>

  <label>
    Message
    <textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
    />
  </label>

  <button type="submit" className="luxury-btn">
    Submit
  </button>
</form>

          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryInteriors;
