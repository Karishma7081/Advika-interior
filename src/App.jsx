import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";

import SearchPage from "./pages/SearchPage";
import Contact from "./pages/Contact";
import ConsultationForm from "./components/ConsultationForm";
import Submissions from "./pages/Submissions";
import ModularInteriors from "./pages/ModularInteriors"; 
import KitchenPage from "./pages/KitchenPage";
import AllCards from "./pages/AllCards";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import FullHomeInteriors from "./pages/FullHomeInteriors";
import WardrobePage from "./pages/WardrobePage";
import PoliciesPage from "./pages/PoliciesPage";
import CareersPage from "./pages/CareersPage"; // <-- import CareersPage



// ✅ Import your new page
import LuxuryInteriors from "./pages/LuxuryInteriors";  

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Common Header */}

        <main className="content">
          <Routes>
            {/* Homepage */}
           <Route
  path="/"
  element={
    <>
      <Hero />
    </>
  }
/>


            {/* Other Pages */}
            <Route path="/all-cards" element={<AllCards />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation" element={<ConsultationForm />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/modular-interiors" element={<ModularInteriors />} />
            <Route path="/kitchens" element={<KitchenPage />} />
            <Route path="/full-home-interiors" element={<FullHomeInteriors />} />

            {/* ✅ Luxury Interiors Page */}
            <Route path="/luxury-interiors" element={<LuxuryInteriors />} />

            {/* About Us Page */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/wardrobes" element={<WardrobePage />} />
<Route path="/policies" element={<PoliciesPage />} />

<Route path="/careers" element={<CareersPage />} /> {/* <-- add this */}
          </Routes>
        </main>

        <Footer /> {/* Common Footer */}
      </div>
    </Router>
  );
}

export default App;
