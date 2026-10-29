
import { useState } from "react";
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
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  return (
    <>
      {/* Main Navigation */}
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">DOM REALTY</span>
            <span className="logo-tagline">
              Your Land, Our Priority.
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="public-navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <button
              type="button"
              className="navbar-menu-overlay"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            />
          )}

          {/* Navigation Links */}
          <nav
            id="public-navigation"
            className={`navbar-menu ${menuOpen ? "active" : ""}`}
          >
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

            {/* WhatsApp Enquiry */}
            <a
              href={whatsappLink}
              className="navbar-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <FaWhatsapp />
              <span>Enquire Now</span>
            </a>

            {/* Call Us inside mobile menu */}
            <a
              href="tel:+919673044421"
              className="mobile-call-link"
              onClick={closeMenu}
            >
              <FaPhoneAlt />
              <span>Call Us</span>
            </a>

            {/* Admin Login */}
            <Link
              to="/admin-login"
              className="admin-login-link"
              onClick={closeMenu}
            >
              Admin Login
            </Link>
          </nav>

          {/* Desktop Call Button */}
          <a
            href="tel:+919673044421"
            className="navbar-call-btn"
          >
            <FaPhoneAlt />
            <span>Call Us</span>
          </a>
        </div>
      </header>

      {/* Floating Contact Buttons — visible while scrolling */}
      <div className="floating-contact-buttons">
        {/* Floating WhatsApp */}
        <a
          href={whatsappLink}
          className="floating-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with DOM Realty on WhatsApp"
          title="WhatsApp Us"
        >
          <FaWhatsapp />
        </a>

        {/* Floating Call */}
        <a
          href="tel:+919673044421"
          className="floating-call"
          aria-label="Call DOM Realty"
          title="Call DOM Realty"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </>
  );
}
