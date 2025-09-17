import React from "react";
import "./AboutUs.css";
import bannerImage from "../assets/aboutus2.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* ================= Banner Section ================= */}
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-overlay">
          <div className="banner-text">
            <h1>About Us</h1>
            <p className="banner-description">
              <strong>Advika Creations</strong> in Greater Noida specializes in{" "}
              <strong>Home Automation, Office Automation</strong>, and{" "}
              <strong>custom home designs</strong>, delivering smart, efficient, and elegant solutions for modern living and workspaces.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Highlights Section ================= */}
      <section className="highlights">
        <div className="highlight-card">
          <h2>Reliable & Cost Efficient</h2>
          <p>
            We deliver high-quality designs that are cost-effective without compromising on creativity or functionality.
          </p>
        </div>
        <div className="highlight-card">
          <h2>Consulting Experts</h2>
          <p>
            Our team provides end-to-end consultation, helping clients make informed decisions at every step.
          </p>
        </div>
        <div className="highlight-card">
          <h2>Modern & Elegant Designs</h2>
          <p>
            Our solutions combine versatility, elegance, and modern technology tailored to each space.
          </p>
        </div>
      </section>

      {/* ================= About Details Section ================= */}
      <section className="about-details">
        <h2>Who We Are</h2>
        <p>
          At Advika Creations, we specialize in transforming properties into smart, efficient, and future-ready spaces. From homes to offices, we design and implement cutting-edge automation solutions that seamlessly integrate comfort, security, and convenience.
        </p>
        <p>
          Our expertise spans property automation, intelligent home systems, and office automation, ensuring every project reflects innovation, reliability, and elegance. We focus on creating spaces that not only look remarkable but also work smarter for the people who use them.
        </p>
        <p>
          With a commitment to precision, transparency, and customer satisfaction, Advika Creations is your trusted partner for designing, automating, and enhancing modern living and workspaces in Greater Noida and beyond.
        </p>
      </section>

      {/* ================= Call to Action ================= */}
      <section className="about-cta">
        <h2>Get In Touch</h2>
        <p>Ready to transform your space? Contact us today for a free consultation!</p>
        <button onClick={() => window.location.href="/contact"}>Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
