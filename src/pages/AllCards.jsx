import React from "react";
import "./AllCards.css";

// Services card images
import creativeImg from "../assets/creative Interiors.avif";
import fullHomeImg from "../assets/Full Home Interiors.avif";
import moderateImg from "../assets/moderate Interiors.avif";
import luxuryImg from "../assets/luxury Interiors.avif";
import renovationImg from "../assets/renovations.avif";

// Inspiration images
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

// Extra 3 images
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

// Combined cards
const allCardsData = [
  // --- Services Section ---
  { title: "Creative Interiors", img: creativeImg },
  { title: "Full Home Interiors", img: fullHomeImg },
  { title: "Moderate Interiors", img: moderateImg },
  { title: "Luxury Interiors", img: luxuryImg },
  { title: "Renovations", img: renovationImg },

  // --- Inspiration Section ---
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

  // --- Extra new images with text ---
  { title: "Modern Living", img: slide1 },
  { title: "Luxury Spaces", img: slide2 },
  { title: "Elegant Design", img: slide3 },
];

const AllCards = () => {
  return (
    <div className="all-cards-page">
      {/* Page Hero Header */}
      <div className="all-cards-hero">
        <h1>Inspiration for Home Interior Designs</h1>
        <p>
          Explore all our design inspirations in one place.
          From cozy living rooms to elegant kitchens, get inspired for every
          corner of your home.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="all-cards-grid">
        {allCardsData.map((card, index) => (
          <div key={index} className="all-card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
