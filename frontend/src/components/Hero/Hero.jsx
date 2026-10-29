import { useEffect, useState } from "react";
import "./Hero.css";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tag">Trusted Real Estate Consultants • Palghar</p>

          <h1>
            Invest Today in
            <span> TP • DP • Farm Land </span>
            Across Palghar
          </h1>

          <p className="hero-description">
            Discover premium TP Plots, DP Plots, Farm Land, NA Plots and
            Industrial Land with verified documentation and excellent investment
            opportunities.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
            <Link to="/properties" className="primary-btn">
  Explore Properties <FaArrowRight />
</Link>
            </button>

            <button className="secondary-btn">
              <FaPhoneAlt /> Call Now
            </button>

            <button className="whatsapp-btn">
              <FaWhatsapp /> WhatsApp
            </button>
          </div>

          <div className="hero-indicators">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={currentImage === index ? "active-dot" : "dot"}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;