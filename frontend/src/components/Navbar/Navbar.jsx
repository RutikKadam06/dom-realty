
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const phoneNumber = "919673044421";

const message =
  "Hello DOM Realty! I am interested in your properties. " +
  "Please share details about available plots, prices, and site visits.";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const links = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "TP Plots", path: "/tp-plots" },
  { name: "DP Plots", path: "/dp-plots" },
  { name: "Farm Land", path: "/farm-land" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">DOM REALTY</span>
          <span className="logo-tagline">Your Land, Our Priority.</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp"
            onClick={closeMenu}
          >
            <FaWhatsapp />
            <span>Enquire Now</span>
          </a>

          <Link
  to="/admin-login"
  className="admin-login-link"
  onClick={closeMenu}
>
  Admin Login
</Link>
        </nav>

        <a href="tel:+919673044421" className="navbar-call-btn">
          <FaPhoneAlt />
          <span>Call Us</span>
        </a>
      </div>
    </header>
  );
}
