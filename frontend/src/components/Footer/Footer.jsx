
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./Footer.css";

const WHATSAPP_NUMBER = "919673044421";

const whatsappMessage =
  "Hello DOM Realty Team! I would like to enquire about your available " +
  "properties. Please share more information.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              DOM REALTY
            </Link>

            <p className="footer-tagline">Your Land, Our Priority.</p>

            <p className="footer-description">
              Explore property opportunities in Talasari and the Palghar
              region with DOM Realty. Contact our team for property
              availability, pricing information and documentation enquiries.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn"
            >
              <FaWhatsapp />
              Enquire on WhatsApp
              <FaArrowRight />
            </a>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">All Properties</Link></li>
              <li><Link to="/tp-plots">TP Plots</Link></li>
              <li><Link to="/dp-plots">DP Plots</Link></li>
              <li><Link to="/farm-land">Farm Land</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Information</h3>

            <p>
              <FaMapMarkerAlt />
              <span>
                Office No. 1, Talasari Patilpada,
                Tal. Talasari, Dist. Palghar,
                Maharashtra – 401606
              </span>
            </p>

            <p>
              <FaPhoneAlt />
              <a href="tel:+919673044421">+91 96730 44421</a>
            </p>

            <p>
              <FaEnvelope />
              <a href="mailto:domreality72@gmail.com">
                domreality72@gmail.com
              </a>
            </p>
            <p>
              <FaWhatsapp />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </p>

            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Office+No.+1%2C+Talasari+Patilpada%2C+Talasari%2C+Palghar%2C+Maharashtra+401606"
              target="_blank"
              rel="noopener noreferrer"
            >
              View location on Google Maps
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} DOM Realty. All rights reserved.
          </p>

          <p>Your Land, Our Priority.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
