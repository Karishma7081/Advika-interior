import React, { useState, useEffect } from "react";
import "./PremiumConsultationForm.css";

const PremiumConsultationForm = ({ onClose, isAdmin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", requirements: "" });
        onClose();
      } else {
        const data = await res.json();
        alert("❌ Error: " + data.message);
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  // Export Excel (hidden, only admin)
  const handleExportExcel = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/consultation/export");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "consultations.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
      alert("✅ Excel exported successfully!");
    } catch (err) {
      alert("❌ Error exporting Excel: " + err.message);
    }
  };

  // Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("premium-overlay")) onClose();
  };

  // Admin shortcut: Ctrl + E to export Excel
  useEffect(() => {
    if (!isAdmin) return;

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "e") {
        e.preventDefault();
        handleExportExcel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAdmin]);

  return (
    <div className="premium-overlay" onClick={handleOverlayClick}>
      <div className="premium-form">
        <span className="close-tip" onClick={onClose}>&times;</span>

        <h2>Book a Free Consultation</h2>
        <p>Our experts will help design your dream interiors.</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="requirements" placeholder="Your Requirements" rows="4" value={formData.requirements} onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PremiumConsultationForm;
