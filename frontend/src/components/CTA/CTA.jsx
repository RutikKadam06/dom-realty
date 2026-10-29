
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import "./CTA.css";

const WHATSAPP_NUMBER = "919673044421";

const whatsappMessage =
  "Hello DOM Realty Team! I would like to enquire about available plots " +
  "in Talasari, Palghar. Please share availability, prices, documentation " +
  "details and information about arranging a site visit.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <p className="cta-eyebrow">LET'S FIND YOUR PERFECT PROPERTY</p>

          <h2>Looking for the Right Plot or Land?</h2>

          <p className="cta-description">
            Tell us what you are looking for. Our team can help you explore
            available properties around Talasari and Palghar and discuss
            pricing, documentation and site visits.
          </p>

          <div className="cta-buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp-btn"
            >
              <FaWhatsapp />
              Enquire on WhatsApp
              <FaArrowRight />
            </a>

            <a href="tel:+919673044421" className="cta-call-btn">
              <FaPhoneAlt />
              Call Us
            </a>

            <Link to="/contact" className="cta-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
