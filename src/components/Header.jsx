import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../assets/advk_clean.png";
import modularImage from "../assets/modu interior.avif";
import fullHomeImage from "../assets/full home.avif";
import luxuryImage from "../assets/luxury interior.avif";
import { useNavigate, useLocation } from "react-router-dom";
import ConsultationForm from "./ConsultationForm";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaHandshake,
  FaFlag,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const messages = [
    <>
      <FaMapMarkerAlt style={{ marginRight: "5px" }} />
      Greater Noida All Areas
    </>,
    <>
      <FaHandshake style={{ marginRight: "5px" }} />
      Get a Free Consultation
    </>,
    <>
      <FaFlag style={{ marginRight: "5px" }} />
      Made in India
    </>,
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openDesignIdeas, setOpenDesignIdeas] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const submenuRef = useRef(null);
  const moreRef = useRef(null);

  // Auto-rotate top bar messages
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close submenus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target)
      ) {
        setOpenDesignIdeas(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setOpenMore(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/theadvikacreations/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/amal.pandey21"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="top-bar-content">
          <span
            onClick={() =>
              setIndex(index === 0 ? messages.length - 1 : index - 1)
            }
            style={{ cursor: "pointer" }}
          >
            ←
          </span>
          <p>{messages[index]}</p>
          <span
            onClick={() =>
              setIndex(index === messages.length - 1 ? 0 : index + 1)
            }
            style={{ cursor: "pointer" }}
          >
            →
          </span>
        </div>

        <div className="right-empty"></div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Advika Creations"
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </a>

          <a
  onClick={() => navigate("/about")}
  className={location.pathname === "/about" ? "active" : ""}
>
  About Us
</a>


          {/* Design Ideas Submenu */}
          <div
            className={`nav-item submenu ${
              openDesignIdeas ? "open" : ""
            } ${location.pathname.includes("/design-ideas") ? "active" : ""}`}
            onClick={() => setOpenDesignIdeas(!openDesignIdeas)}
            ref={submenuRef}
          >
            <span style={{ cursor: "pointer" }}>
            Design Ideas {openDesignIdeas ? "▴" : "▾"}
            </span>
            <div
              className={`submenu-dropdown ${openDesignIdeas ? "open" : ""}`}
            >
              <ul>
                <li>Home Design Ideas</li>
                <li>Living Room Designs</li>
                <li>Bedroom Designs</li>
                <li>Modular Kitchen Designs</li>
                <li>Bathroom Designs</li>
              </ul>
              <ul>
                <li>Dining Room Designs</li>
                <li>Study Room Designs</li>
                <li>Modular Wardrobe Designs</li>
                <li>Crockery Unit Designs</li>
                <li>Bed Designs</li>
              </ul>
              <ul>
                <li>Home Office Designs</li>
                <li>Hallway Designs</li>
                <li>TV Unit Designs</li>
              </ul>
            </div>
          </div>

          {/* Offerings Mega Menu */}
          <div
            className={`nav-item offerings ${
              location.pathname.includes("/interiors") ? "active" : ""
            }`}
          >
            <span style={{ cursor: "pointer" }}>Offerings ▾</span>
            <div className="mega-dropdown">
              {/* Column 1: Explore Offerings */}
              <div className="mega-col">
                <h4>Explore Offerings</h4>

                <div
                  className="mega-card"
                  onClick={() => navigate("/modular-interiors")}
                >
                  <img src={modularImage} alt="Modular Interiors" />
                  <div>
                    <h5>Modular Interiors</h5>
                    <p>Kitchens, wardrobes and storage</p>
                  </div>
                </div>

               <div
  className="mega-card"
  onClick={() => navigate("/full-home-interiors")}
>
  <img src={fullHomeImage} alt="Full Home Interiors" />
  <div>
    <h5>Full Home Interiors</h5>
    <p>End-to-end home interiors</p>
  </div>
</div>


                <div
                  className="mega-card"
                  onClick={() => navigate("/luxury-interiors")}
                >
                  <img src={luxuryImage} alt="Luxury Interiors" />
                  <div>
                    <h5>Luxury Interiors</h5>
                    <p>Homes that redefine elegance</p>
                  </div>
                </div>
              </div>

              {/* Column 2: Kitchen */}
              <div className="mega-col">
                <h4>Kitchen</h4>
                <p>Modular Kitchen</p>
                <p>Parallel Kitchen</p>
                <p>L-shaped Kitchen</p>
                <p>U-shaped Kitchen</p>
              </div>

              {/* Column 3: Wardrobe */}
              {/* Column 3: Wardrobe */}
<div className="mega-col">
  <h4>Wardrobe</h4>
  <p onClick={() => navigate("/wardrobes")} style={{cursor: "pointer"}}>Sliding Wardrobe</p>
  <p onClick={() => navigate("/wardrobes")} style={{cursor: "pointer"}}>Hinged Wardrobe</p>
  <p onClick={() => navigate("/wardrobes")} style={{cursor: "pointer"}}>Walk-in Wardrobe</p>
  <p onClick={() => navigate("/wardrobes")} style={{cursor: "pointer"}}>Kids Wardrobe</p>
  <p onClick={() => navigate("/wardrobes")} style={{cursor: "pointer"}}>Space-saving Wardrobe</p>
</div>

            </div>
          </div>

          {/* More Submenu */}
          <div
  className={`nav-item more-submenu ${
    openMore ? "open" : ""
  } ${location.pathname.includes("/more") ? "active" : ""}`}
  onClick={() => setOpenMore(!openMore)}
  ref={moreRef}
>
  <span style={{ cursor: "pointer" }}>
    More {openMore ? "▴" : "▾"}
  </span>
  <div className={`submenu-dropdown ${openMore ? "open" : ""}`}>
    <ul className="horizontal-menu">
    <li onClick={() => navigate("/careers")}>Careers</li>

      <li onClick={() => navigate("/policies")}>Policies</li>
      <li
  onClick={() => {
    // If user is already on homepage
    if (window.location.pathname === "/") {
      const faqSection = document.getElementById("faq");
      if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage and then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        const faqSection = document.getElementById("faq");
        if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
      }, 100); // delay to allow page to render
    }
    setOpenMore(false); // close the submenu
  }}
>
  FAQ
</li>

      <li onClick={() => navigate("/blog")}>Blog</li>
      <li onClick={() => navigate("/gallery")}>Gallery</li>
    </ul>
  </div>
</div>

          <a
            onClick={() => navigate("/contact")}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </a>
        </nav>

        {/* Actions: Consultation + Search */}
        <div className="header-actions">
          <button className="consult-btn" onClick={() => setShowForm(true)}>
            Get Free Consultation
          </button>

          <button
            className="search-drawer-button flex items-center justify-center"
            style={{
              width: "44px",
              height: "44px",
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
            }}
            aria-label="Search"
            onClick={() => navigate("/search")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </header>

      {/* Consultation Form Popup */}
      {showForm && <ConsultationForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Header;
