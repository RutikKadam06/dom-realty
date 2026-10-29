import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import CategorySection from "../components/CategorySection/CategorySection";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Locations from "../components/Locations/Locations";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import CTA from "../components/CTA/CTA";

import "./Home.css";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";

import {
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Home() {
  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="hero">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${
              currentSlide === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        <div className="hero-overlay"></div>

        <button className="hero-arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button className="hero-arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="hero-content container">
          <span className="hero-tag">
            Luxury Real Estate • Palghar
          </span>

          <h1>
            Find Your <span>Perfect Plot</span>,
            <br />
            Build Your Future.
          </h1>

          <p>
            Premium TP Plots, DP Plots, Farm Lands and Investment Properties
            across Palghar, Dahanu, Boisar and Talasari. Discover legally
            verified properties with exceptional appreciation potential.
          </p>

          <div className="hero-buttons">
            <Link to="/properties" className="gold-btn">
              Explore Properties
              <FaArrowRight />
            </Link>

            <Link to="/contact" className="glass-btn">
              Book Site Visit
            </Link>

            <Link to="/contact" className="glass-btn">
              Contact Us
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h2>500+</h2>
              <span>Happy Families</span>
            </div>

            <div className="stat">
              <h2>12+</h2>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <h2>₹350Cr+</h2>
              <span>Property Value Sold</span>
            </div>

            <div className="stat">
              <h2>4+</h2>
              <span>Prime Locations</span>
            </div>
          </div>

          <div className="slider-dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  currentSlide === index ? "active-dot" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="floating-buttons">
          <a
            href="https://wa.me/919673044421"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a href="tel:+919673044421">
            <FaPhoneAlt />
          </a>
        </div>

        <div className="hero-scroll">
          <span>Scroll Down</span>
        </div>
      </section>

      {/* ================= SEARCH BAR ================= */}

      <SearchBar />

      {/* ================= PROPERTY CATEGORIES ================= */}

      <CategorySection />

      {/* ================= FEATURED PROPERTIES ================= */}

      <FeaturedProperties />

      {/* ================= WHY CHOOSE DOM REALTY ================= */}

      <WhyChooseUs />

      {/* ================= PRIME LOCATIONS ================= */}

      <Locations />

      {/* ================= TESTIMONIALS ================= */}

      <Testimonials />

      {/* ================= PROPERTY GALLERY ================= */}

      <Gallery />

      {/* ================= BOOK SITE VISIT CTA ================= */}

      <CTA />

      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
}

export default Home;