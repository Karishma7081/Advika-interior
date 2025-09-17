// src/pages/SearchPage.jsx
import React, { useState, useRef, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./SearchPage.css";

// Import product images
import Table1 from "../assets/modern-glass-center-table.webp";
import Table2 from "../assets/Contemporary Wooden Center Table Design.webp";
import Table3 from "../assets/Modern Concrete Finish Console Table for Entryway.webp";
import Table4 from "../assets/Minimalist Wooden Coffee Table.avif";
import Table5 from "../assets/Luxury Marble Center Table for Hall.webp";
import Table6 from "../assets/Premium Center Table with Storage.avif";
import Table7 from "../assets/Italian Marble Coffee Table for Living Room.avif";
import Table8 from "../assets/antique-designer-console.avif";
import Table9 from "../assets/Round Coffee Table with Metal Base.avif";
import Table10 from "../assets/Glossy Finish Designer Center Table.avif";
import Table11 from "../assets/Luxury Wooden Coffee Table with Marble Top.avif";
import Table12 from "../assets/Compact Coffee Table for Small Living Room.avif";
import Table13 from "../assets/Modern Dining Chair with Cushion.webp";
import Table14 from "../assets/Contemporary Dining Table for Stylish Homes.avif";
import Table15 from "../assets/Classic Wooden Dining Chair for Home.avif";
import Table16 from "../assets/Premium Luxury Dining Table Set.avif";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const itemsPerPage = 12;

  const searchRef = useRef(null);

  // Product Data
  const results = [
    { id: 1, title: "Modern Glass Center Table for Living Room", img: Table1, category: "Table" },
    { id: 2, title: "Contemporary Wooden Center Table Design", img: Table2, category: "Table" },
    { id: 3, title: "Modern Concrete Finish Console Table for Entryway", img: Table3, category: "Console Table" },
    { id: 4, title: "Minimalist Wooden Coffee Table", img: Table4, category: "Table" },
    { id: 5, title: "Luxury Marble Center Table for Hall", img: Table5, category: "Table" },
    { id: 6, title: "Premium Center Table with Storage", img: Table6, category: "Table" },
    { id: 7, title: "Italian Marble Coffee Table for Living Room", img: Table7, category: "Table" },
    { id: 8, title: "Antique Designer Console Table with Storage", img: Table8, category: "Console Table" },
    { id: 9, title: "Round Coffee Table with Metal Base", img: Table9, category: "Table" },
    { id: 10, title: "Glossy Finish Designer Center Table", img: Table10, category: "Table" },
    { id: 11, title: "Luxury Wooden Coffee Table with Marble Top", img: Table11, category: "Table" },
    { id: 12, title: "Compact Coffee Table for Small Living Room", img: Table12, category: "Table" },
    { id: 13, title: "Modern Dining Chair with Cushion", img: Table13, category: "Chair" },
    { id: 14, title: "Contemporary Dining Table for Stylish Homes", img: Table14, category: "Dining" },
    { id: 15, title: "Classic Wooden Dining Chair for Home", img: Table15, category: "Chair" },
    { id: 16, title: "Premium Luxury Dining Table Set", img: Table16, category: "Dining" },
  ];

  // 🔎 Filtering for live search (multi-word strict match)
  const filteredResults = results.filter((item) => {
    if (!query) return true;
    const searchWords = query.toLowerCase().split(" ");
    const text = (item.title + " " + item.category).toLowerCase();
    return searchWords.every((word) => text.includes(word));
  });

  // 🔹 Suggestions (titles + categories)
  const suggestions = query
    ? results.filter((item) =>
        (item.title + " " + item.category)
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : [];

  // Pagination setup
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResults = filteredResults.slice(startIndex, startIndex + itemsPerPage);

  // Close search if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load recently viewed from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentlyViewed");
    if (saved) setRecentlyViewed(JSON.parse(saved));
  }, []);

  // Save recently viewed to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // Handle viewing a product
  const handleViewProduct = (product, idx) => {
    setIndex(idx);
    setRecentlyViewed((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev;
      return [product, ...prev].slice(0, 8); // max 8 recent items
    });
  };

  return (
    <div className="search-page">
      <h1 className="search-title">Search Products</h1>

      {/* Input + Suggestions */}
      <div className="search-input-wrapper" ref={searchRef}>
        <input
          type="text"
          placeholder="Search sofas, tables, chairs, marble..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery("")}>
            Clear
          </button>
        )}

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.slice(0, 6).map((s) => (
              <li
                key={s.id}
                onClick={() => {
                  setQuery(s.title); // auto-fill
                  setCurrentPage(1);
                }}
              >
                {s.title} <span className="cat">({s.category})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Controls */}
      <div className="search-controls">
        <button className="filter-btn">Show filters</button>
        <span>{filteredResults.length} results</span>
        <div className="sort-wrapper">
          <label>Sort by:</label>
          <select>
            <option value="relevance">Relevance</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      <div className="results-grid">
        {currentResults.map((item, i) => (
          <div
  key={item.id}
  className="result-card"
  onClick={() => handleViewProduct(item, i + startIndex)}
>

            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>← Previous</button>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next →</button>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={filteredResults.map((p) => ({ src: p.img, title: p.title }))}
        plugins={[Thumbnails, Zoom]}
      />

      {/* Recently Viewed Section */}
      {recentlyViewed.length > 0 && (
        <div className="recently-viewed">
          <h2>Recently viewed</h2>
          <div className="results-grid">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="result-card">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p className="category">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
