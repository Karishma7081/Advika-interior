import React, { useRef, useEffect, useState } from "react";
import "./Hero.css";
import heroVideo from "../assets/Godrej2.MP4";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

// Services card images
import creativeImg from "../assets/creative Interiors.avif";
import fullHomeImg from "../assets/Full Home Interiors.avif";
import moderateImg from "../assets/moderate Interiors.avif";
import luxuryImg from "../assets/luxury Interiors.avif";
import renovationImg from "../assets/renovations.avif";

// Inspiration cards images
import livingRoom from "../assets/living Room.avif";
import masterBedroom from "../assets/master Bedroom.avif";
import falseCeiling from "../assets/false Ceiling.avif";
import foyer from "../assets/foyer.avif";
import homesByAdvika from "../assets/homes By Advika Creations.avif";
import kitchen from "../assets/kitchen213.avif";
import wardrobe from "../assets/wardrobe121.avif";
import kidsRoom from "../assets/kids Room.avif";
import homeOffice from "../assets/home Office.avif";
import guestRoom from "../assets/guest Room.avif";
import diningRoom from "../assets/dining Room.avif";
import bathroom from "../assets/bathroom12134.avif";

// News logos
import bloombergLogo from "../assets/bloombergLogo1.jpeg";
import businessTodayLogo from "../assets/businessTodayLogo2.png";
import cnbcLogo from "../assets/cnbc_logo.svg.png";
import entrepreneurLogo from "../assets/1413842518-entrepreneur-logo.jpg";
import economicTimesLogo from "../assets/economictimes_logo.jpeg";
import hindustanTimesLogo from "../assets/hindustan-Times-Logo-PNG-03118.png";
import timesOfIndiaLogo from "../assets/Times-of-India-logo-01.png";
import moneyControlLogo from "../assets/pro money control.avif";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const cardsRef = useRef(null);
  const inspirationRef = useRef(null);

  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [page, setPage] = useState(0);

  const slides = [
    { type: "video", src: heroVideo },
    { type: "image", src: slide1 },
    { type: "image", src: slide2 },
    { type: "image", src: slide3 },
  ];

  const inspirationData = [
    { title: "Living Room", img: livingRoom },
    { title: "Master Bedroom", img: masterBedroom },
    { title: "False Ceiling", img: falseCeiling },
    { title: "Homes By Advika Creations", img: homesByAdvika },
    { title: "Kitchen", img: kitchen },
    { title: "Wardrobe", img: wardrobe },
    { title: "Kids Room", img: kidsRoom },
    { title: "Home Office", img: homeOffice },
    { title: "Guest Room", img: guestRoom },
    { title: "Foyer", img: foyer },
    { title: "Dining Room", img: diningRoom },
    { title: "Bathroom", img: bathroom },
  ];

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const scrollCards = (direction) => {
    if (cardsRef.current) {
      const cardWidth =
        cardsRef.current.querySelector(".service-card").offsetWidth + 20;
      cardsRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  // Detect screen size → set cards per page
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 600) setCardsPerPage(2);
      else if (window.innerWidth <= 1024) setCardsPerPage(4);
      else setCardsPerPage(6);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const scrollInspiration = (direction) => {
    const totalPages = Math.ceil(inspirationData.length / cardsPerPage);
    let newPage = page + direction;

    if (newPage < 0) newPage = 0;
    if (newPage >= totalPages) newPage = totalPages - 1;

    if (inspirationRef.current) {
      inspirationRef.current.style.transform = `translateX(-${newPage * 100}%)`;
    }

    setPage(newPage);
  };

  // Independent news slider state
const [newsSlide, setNewsSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setNewsSlide((prev) => (prev + 1) % 8); // total 8 logos
  }, 5000); // was 2500 → now 5000 (0.5x slower)
  return () => clearInterval(interval);
}, []);
const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {question} <span className="faq-icon">{open ? "−" : "+"}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};


  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <div className="slider">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                {slide.type === "video" ? (
                  <video
                    ref={videoRef}
                    className="hero-bg"
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img src={slide.src} alt={`Slide ${index}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-row">
          <h1 className="hero-title">
            Advika  Creations— Interior Designed for the Life You Deserve
          </h1>
          <button className="connect-button" onClick={() => navigate("/contact")}>
            Let’s Connect →
          </button>
        </div>

        <div className="nav-bottom">
          <button className="arrow left" onClick={prevSlide}>←</button>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="arrow right" onClick={nextSlide}>→</button>
        </div>

        <a href="tel:+917835972222" className="call-now">CALL NOW</a>
      </section>

      {/* ===== Services Section ===== */}
      <section className="services-section">
        <h2 className="services-heading">One-stop shop for all things interiors</h2>
        <p className="services-tagline">
          Your dream home, designed your way.
        </p>
        <p className="services-subtext">
          From creative and full-home interiors to moderate, luxury, and renovation services —  
          we craft spaces that blend elegance, comfort, and functionality.  
          Every detail is tailored to reflect your unique lifestyle.
        </p>

        <div className="services-wrapper">
          <button className="scroll-btn left" onClick={() => scrollCards(-1)}>❮</button>
          <div className="services-row" ref={cardsRef}>
            {[ 
              { img: creativeImg, title: "Creative Interiors", desc: "Innovative designs for a modern lifestyle" },
              { img: fullHomeImg, title: "Full Home Interiors", desc: "Complete solutions for every corner of your home" },
              { img: moderateImg, title: "Moderate Interiors", desc: "Balanced style with comfort and utility" },
              { img: luxuryImg, title: "Luxury Interiors", desc: "Tailored interiors that redefine elegance" },
              { img: renovationImg, title: "Renovations", desc: "Expert solutions to upgrade your home" },
            ].map((service, idx) => (
              <div key={idx} className="service-card">
                <img src={service.img} alt={service.title} className="service-image"/>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scrollCards(1)}>❯</button>
        </div>
      </section>

      {/* ===== Inspiration Section ===== */}
      <section className="hero-cards-section">
        <div className="section-header">
          <h2>Inspiration for home interior designs</h2>
          <button className="view-all-btn" onClick={() => navigate("/all-cards")}>
            View All →
          </button>
        </div>

        <p className="section-subtext">
          Explore stunning interiors crafted with elegance and functionality. 
          From cozy living rooms to modern kitchens,<br /> find ideas that inspire. 
          Transform your house into a dream home with our <br /> creative designs.
        </p>

        <div className="cards-wrapper">
          <button className="scroll-btn left" onClick={() => scrollInspiration(-1)}>❮</button>

          <div className="cards-pages" ref={inspirationRef}>
            {Array.from({ length: Math.ceil(inspirationData.length / cardsPerPage) }).map((_, pageIndex) => (
              <div key={pageIndex} className="cards-page">
                {inspirationData
                  .slice(pageIndex * cardsPerPage, pageIndex * cardsPerPage + cardsPerPage)
                  .map((card, index) => (
                    <div key={index} className="card">
                      <img src={card.img} alt={card.title} />
                      <span className="card-title">{card.title}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scrollInspiration(1)}>❯</button>
        </div>
      </section>

      {/* ===== News & Logos Section ===== */}
      <section className="news-logos">
        <h2>Latest News & Updates</h2>
        <div className="news-grid">
          <div className="news-card">
            <img src={timesOfIndiaLogo} alt="Times of India Logo" />
            <div className="news-text">
              <h3>Greater Noida Development Boom</h3>
              <p>New metro extension planned connecting Noida Extension to Delhi.</p>
            </div>
          </div>

          <div className="news-card">
            <img src={hindustanTimesLogo} alt="Hindustan Times Logo" />
            <div className="news-text">
              <h3>Noida Extension Rising</h3>
              <p>IT companies are setting up major offices across Noida Extension.</p>
            </div>
          </div>

          <div className="news-card">
            <img src={economicTimesLogo} alt="Economic Times Logo" />
            <div className="news-text">
              <h3>Property Market in India</h3>
              <p>Greater Noida housing prices expected to grow 12% by 2026.</p>
            </div>
          </div>
        </div>
      </section>

           {/* ===== Greater Noida / Noida Extension News Section ===== */}
      <section className="news-logos-slider">
        <h2 className="news-heading">Greater Noida & Noida Extension In the News</h2>
        <div className="logos-slider">
          <div className="logos-track">
            {[
              bloombergLogo,
              businessTodayLogo,
              cnbcLogo,
              entrepreneurLogo,
              economicTimesLogo,
              hindustanTimesLogo,
              timesOfIndiaLogo,
              moneyControlLogo,
            ]
              .concat([
                bloombergLogo,
                businessTodayLogo,
                cnbcLogo,
                entrepreneurLogo,
                economicTimesLogo,
                hindustanTimesLogo,
                timesOfIndiaLogo,
                moneyControlLogo,
              ])
              .map((img, idx) => (
                <div className="logo-box" key={idx}>
                  <img src={img} alt={`Greater Noida News ${idx}`} />
                </div>
              ))}
          </div>
        </div>
      </section>
<section id="faq" className="bottom-section">
  <h2>FAQs About Home Interior Design</h2>
  <div className="faq-list">
    {[
      {
        question: "Why do I need an interior designer?",
        answer: `An interior designer ensures that your vision is transformed into reality with meticulous attention to detail, aesthetics, and functionality. They plan every element of your home, including furniture placement, lighting, colors, materials, and textures. 
        By guiding you through the design process, they ensure that your home not only looks beautiful but also functions efficiently for your lifestyle.`
      },
      {
        question: "Why choose Advika for interiors?",
        answer: `Advika customizes designs according to your preferences, leveraging advanced technology to ensure precision and flawless execution. 
        Their team coordinates with contractors, suppliers, and craftsmen to deliver quality interiors efficiently. 
        From concept to completion, Advika simplifies the interior design process so you can enjoy a stress-free experience.`
      },
      {
        question: "What services are included under home interior design?",
        answer: `We offer a comprehensive range of services, including modular interiors, false ceilings, civil work, painting, electrical work, plumbing, flooring, and tiling. 
        Every service is handled by skilled professionals to ensure high-quality results. 
        We aim to provide a one-stop solution for all your home interior needs, saving you time and effort.`
      },
      {
        question: "How much does home interiors cost?",
        answer: `The cost depends on the scope of work, style preferences, materials used, and customization requirements. 
        We provide a detailed quote after understanding your project specifications. 
        Our goal is to offer transparent pricing and value-for-money solutions tailored to your budget.`
      },
      {
        question: "What are the timelines for project completion?",
        answer: `We deliver our promise of a 45-day Move-in Guarantee for modular solutions. This implies that all modular installations are completed so you can move in within 45 days. 
        For full home interiors, the typical completion timeline is 90 days. 
        However, timelines may vary depending on factors like material availability, customer feedback, design approvals, site readiness, and project complexity. 
        Our team provides a detailed schedule after consultation to keep you informed throughout the process.`
      },
      {
        question: "What are the trending interior design styles?",
        answer: `Some of the top interior design styles currently trending in India include: 
        1. Bohemian Style – eclectic and vibrant designs with a relaxed feel.
        2. Modern Style – clean lines, minimalistic furniture, and neutral colors.
        3. Colonial Style – traditional elegance with classic furniture and textures.
        4. Indian Traditional – incorporating ethnic art, woodwork, and rich fabrics.
        5. Art Deco Style – glamorous interiors with geometric patterns and bold colors.
        6. Industrial Interior Design – raw textures, exposed beams, and metal accents. 
        These styles can be customized to suit your personal taste and lifestyle.`
      }
    ].map((faq, idx) => (
      <FaqItem key={idx} question={faq.question} answer={faq.answer} />
    ))}
  </div>
</section>


    </>
  );
};

export default Hero;
