
import { useState } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import "./Contact.css";

import hero from "../assets/images/contact-banner.jpg";
import office from "../assets/images/about.jpg";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_2belxxi";
const EMAILJS_TEMPLATE_ID = "template_oflefsp";
const EMAILJS_PUBLIC_KEY = "1p5DMiywYuWV3lliK";
const RECIPIENT_EMAIL = "domreality72@gmail.com";

function Contact() {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    property_type: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) setStatus("");
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setSending(true);
    setStatus("");
  
    try {
      // First, save the enquiry in MongoDB through the backend.
      const response = await fetch(
        "http://localhost:5001/api/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.customer_name.trim(),
            phone: formData.customer_phone.trim(),
            email: formData.customer_email.trim(),
            propertyType: formData.property_type,
            message: formData.message.trim(),
          }),
        }
      );
  
      const result = await response.json();
  
      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Could not save the enquiry."
        );
      }
  
      // The enquiry is now saved. Try sending the email notification.
      let emailFailed = false;
  
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            customer_name: formData.customer_name.trim(),
            customer_phone: formData.customer_phone.trim(),
            customer_email: formData.customer_email.trim(),
            property_type: formData.property_type,
            message: formData.message.trim(),
            to_email: RECIPIENT_EMAIL,
          },
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );
      } catch (emailError) {
        console.error("EmailJS error:", emailError);
        emailFailed = true;
      }
  
      setFormData({
        customer_name: "",
        customer_phone: "",
        customer_email: "",
        property_type: "",
        message: "",
      });
  
      setStatus(emailFailed ? "email-warning" : "success");
    } catch (error) {
      console.error("Enquiry submission error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };
  

  const whatsappMessage =
    "Hello DOM Realty! I would like to enquire about your properties.";

  const whatsappLink = `https://wa.me/919673044421?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="contact-overlay"></div>

        <div className="container contact-hero-content">
          <span>CONTACT DOM REALTY</span>

          <h1>Let's Find Your Perfect Property Together.</h1>

          <p>
            Looking for TP Plots, DP Plots or Farm Land in Palghar?
            Our experts are ready to guide you through every step of
            your investment journey.
          </p>

          <button
            type="button"
            className="contact-btn"
            onClick={() =>
              document
                .getElementById("site-visit-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Free Site Visit <FaArrowRight />
          </button>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-info-section">
        <div className="container info-grid">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Office Address</h3>
            <p>
              Office No. 1, Talasari Patilpada, Tal. Talasari,
              Dist. Palghar, Maharashtra – 401606
              <br />
              India
            </p>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h3>Call Us</h3>
            <p>
              <a href="tel:+919673044421">+91 96730 44421</a>
            </p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>
              <a href="mailto:domreality72@gmail.com">
                domreality72@gmail.com
              </a>
            </p>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <h3>Working Hours</h3>
            <p>Monday – Saturday</p>
            <p>9:30 AM – 7:30 PM</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        className="contact-form-section"
        id="site-visit-form"
      >
        <div className="container contact-grid">
          <div className="contact-image">
            <img src={office} alt="DOM Realty Office" />
          </div>

          <div className="contact-form-box">
            <span className="section-tag">GET IN TOUCH</span>

            <h2>Book Your Free Site Visit</h2>

            <p>
              Fill in your details and our property consultant will
              contact you shortly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="customer_name"
                placeholder="Full Name"
                autoComplete="name"
                value={formData.customer_name}
                onChange={handleChange}
                maxLength={100}
                required
              />

<input
  type="tel"
  name="customer_phone"
  placeholder="Mobile Number"
  autoComplete="tel"
  value={formData.customer_phone}
  onChange={handleChange}
  pattern="[0-9+() -]{7,20}"
  title="Enter a valid phone number"
  maxLength={20}
  required
/>

              <input
                type="email"
                name="customer_email"
                placeholder="Email Address"
                autoComplete="email"
                value={formData.customer_email}
                onChange={handleChange}
                maxLength={254}
                required
              />

              <select
                name="property_type"
                value={formData.property_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Property Type</option>
                <option value="TP Plot">TP Plot</option>
                <option value="DP Plot">DP Plot</option>
                <option value="Farm Land">Farm Land</option>
                <option value="Investment Property">
                  Investment Property
                </option>
              </select>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us your requirement..."
                value={formData.message}
                onChange={handleChange}
                maxLength={3000}
                required
              />

              <button type="submit" disabled={sending}>
                {sending ? "Sending Enquiry..." : "Send Enquiry"}
                {!sending && <FaArrowRight />}
              </button>

              {status === "success" && (
                <p role="status" className="form-success">
                  Thank you! Your enquiry has been sent successfully.
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="form-error">
                  We couldn't send your enquiry. Please try again or
                  contact us through WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="why-contact">
        <div className="container">
          <div className="section-heading">
            <span>WHY DOM REALTY</span>
            <h2>Why Choose DOM Realty?</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Property Guidance</h3>
              <p>
                Explore available TP Plots, DP Plots and Farm Lands
                with guidance from our team.
              </p>
            </div>

            <div className="why-card">
              <h3>Free Site Visits</h3>
              <p>Visit shortlisted properties with our team.</p>
            </div>

            <div className="why-card">
              <h3>Investment Consultation</h3>
              <p>
                Discuss your requirements and property investment
                goals.
              </p>
            </div>

            <div className="why-card">
              <h3>Documentation Support</h3>
              <p>
                Get assistance understanding the documents available
                for a property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="container">
          <div className="section-heading">
            <span>OUR LOCATION</span>
            <h2>Visit DOM Realty Office</h2>
          </div>

          <div className="map-container">
            <iframe
              title="DOM Realty Office Location"
              src="https://maps.google.com/maps?q=Office%20No.%201%2C%20Talasari%20Patilpada%2C%20Talasari%2C%20Palghar%2C%20Maharashtra%20401606&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="social-section">
        <div className="container social-grid">
          <div>
            <span className="section-tag">CONNECT WITH US</span>
            <h2>Follow DOM Realty</h2>
            <p>
              Stay updated with property availability, investment
              opportunities and site visit updates.
            </p>
          </div>

          <div className="social-icons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp DOM Realty"
            >
              <FaWhatsapp />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}

export default Contact;
