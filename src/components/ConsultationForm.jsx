import React, { useState, useRef, useEffect } from "react";
import "./ConsultationForm.css";
import popupImage from "../pages/Modern Living Room1.avif";

const ConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    propertyLocation: "",
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const popupRef = useRef(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.propertyLocation || !formData.name || !formData.phone) {
      alert("❌ All required fields must be filled!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({ propertyLocation: "", name: "", phone: "", email: "" });
        onClose();
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <div className="popup-left">
          <img src={popupImage} alt="Modern Living Room" />
        </div>

        <div className="popup-right">
          <button className="close-btn" onClick={onClose}>✖</button>
          <h2>Get a Free Design Consultation</h2>
          <p className="popup-subtitle">Fill out the form and we will get back to you shortly.</p>

          <form onSubmit={handleSubmit}>
            <label> Locations <span>*</span></label>
            <select
              name="propertyLocation"
              value={formData.propertyLocation}
              onChange={handleChange}
              required
            >
              <option value="">--select--</option>
              <option value="Noida">Noida</option>
              <option value="Delhi">Delhi</option>
              <option value="Greater Noida">Greater Noida</option>
            </select>

            <label>Name <span>*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              required
            />

            <label>Phone No. <span>*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone No."
              required
            />

            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Book a Free Consultation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
