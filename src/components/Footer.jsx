import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

// ✅ Import your image
import interiorImage from "../assets/interior designer.avif";

const Footer = () => {
  return (
    <>
      {/* 🔹 New Top Section (Image + Form) */}
      <section className="footer-top-section">
        {/* Left Side Image */}
        <div className="footer-top-left">
          <img
            src={interiorImage}
            alt="Interior Design"
            className="footer-top-img"
          />
        </div>

        {/* Right Side Form */}
        <div className="footer-top-right">
          <h2>Designs for Every Budget</h2>
          <p>Get your dream home today. Let our experts help you</p>
          <form className="footer-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              Send me updates on WhatsApp
            </label>
            <input type="text" placeholder="Property Name" />
            <button type="submit">GET FREE QUOTE</button>
          </form>
        </div>
      </section>

      {/* 🔹 Main Footer (your existing code remains same) */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>ADVIKA CREATIONS</h2>
          </div>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/Design Ideas"> Design Ideas </a></li>
              <li><a href="/offerings">Offerings</a></li>
               <li><a href="/More">More</a></li>
              <li><a href="/contact">Contact Us</a></li>
           
            </ul>
          </div>

          <div className="footer-col">
            <h4>GET INSPIRED</h4>
            <ul>
              <li><a href="#">Design Ideas</a></li>
              <li><a href="#">Magazine</a></li>
              <li><a href="#">Livspace TV</a></li>
             <li><a href="#"> Latest News & Updates</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">Refer a friend</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US</h4>
            <ul>
              <li><strong>Call us:</strong> 📞 +91 7835972222</li>
              <li><strong>Email:</strong> 📧 sales@oreahomes.in</li>
            </ul>
          </div>
        </div>

        {/* App Download */}
        <div className="footer-apps">
          <p>DOWNLOAD OUR APP</p>
          <div className="app-links">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </footer>

      {/* 🔹 Credit */}
      <div className="footer-credit">
        <p>
          Developed by{" "}
          <a
            href="https://nexusczar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>NexusCzar Pvt. Ltd. </span>
          </a>{" "}
          2025
        </p>
      </div>
    </>
  );
};

export default Footer;
