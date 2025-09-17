import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>
          Let’s create something beautiful together — share your details and our design team will reach out shortly! 💜
        </p>

        <div className="contact-wrapper">
          {/* Left: Form */}
          <form className="contact-form">
            <div className="row">
              <div className="field">
                <label>Name*</label>
                <input type="text" required />
              </div>
              <div className="field">
                <label>Phone*</label>
                <input type="tel" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Email*</label>
                <input type="email" required />
              </div>
              <div className="field">
                <label>City*</label>
                <input type="text" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>What type of furniture are you looking for?*</label>
                <input type="text" required />
              </div>
              <div className="field">
                <label>What’s your ideal investment range?*</label>
                <input type="text" required />
              </div>
            </div>

            <div className="field">
              <label>How soon do you need your new furniture?*</label>
              <input type="text" required />
            </div>

            <div className="field">
              <label>Your Message*</label>
              <textarea rows="4" required></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>

          {/* Right: Contact Details at bottom */}
          <div className="contact-details">
            <div>
              <h3>Explore Premium Furniture at Our Showroom</h3>
              <p>
                📍✨TS-1417, Galaxy Blue Sapphire Plaza, Greater Noida West, Gautam
                Buddha Nagar (U.P.)
              </p>

              <h3>Phone</h3>
              <p>
                <a href="tel:+917835972222">📞 +91 78359 72222</a>
              </p>

              <h3>Email</h3>
              <p>
                <a href="mailto:sales@oreahomes.in">📧 sales@oreahomes.in</a>
              </p>
            </div>

            {/* Follow Us Inside Same Column */}
            <div className="follow-us">
              <h4>Get Inspired – Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Google Map Section */}
 <section className="map-section">
  <div className="map-wrapper">
    <iframe
      title="showroom-map"
      src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d53342.615431940794!2d77.4207304!3d28.6099307!3m2!1i1024!2i768!4f13.1!2m1!1sgalaxy%20blue%20sapphire%20plaza%20map%20share!5e1!3m2!1sen!2sin!4v1756813287296!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>



    </>
  );
};

export default Contact;
