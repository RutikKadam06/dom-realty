import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import CTA from "../components/CTA/CTA";
import properties from "../data/properties";

import {
  FaLeaf,
  FaMapMarkedAlt,
  FaSeedling,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./FarmLand.css";

import hero from "../assets/images/farm-land.jpg";
import introImage from "../assets/images/property1.jpg";
import gallery1 from "../assets/images/property2.jpg";
import gallery2 from "../assets/images/property3.jpg";
import gallery3 from "../assets/images/road-touch.jpg";

function FarmLand() {
  const farmLand = properties.filter(
    (property) => property.category === "Farm Land"
  );

  const benefits = [
    {
      icon: <FaLeaf />,
      title: "100% Verified Agricultural Land",
      text: "Clear title properties with verified ownership and legal documentation.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Prime Road Touch Locations",
      text: "Farm lands near highways, villages and upcoming infrastructure projects.",
    },
    {
      icon: <FaSeedling />,
      title: "Perfect for Weekend Homes",
      text: "Build your dream farmhouse or invest in nature surrounded by greenery.",
    },
    {
      icon: <FaShieldAlt />,
      title: "High Future Appreciation",
      text: "Selected investment locations across Palghar district with long-term growth potential.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="farm-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="farm-overlay"></div>

        <div className="container farm-hero-content">
          <span>Luxury Agricultural Investment</span>

          <h1>Farm Land in Palghar</h1>

          <p>
            Discover verified farm lands, weekend farmhouse plots and investment
            opportunities across Palghar, Dahanu, Boisar and Talasari.
          </p>

          <a href="#farm-properties" className="farm-hero-btn">
            Explore Farm Lands <FaArrowRight />
          </a>
        </div>
      </section>

      {/* Intro */}

      <section className="farm-intro">
        <div className="container intro-grid">

          <div className="intro-image">
            <img src={introImage} alt="Farm Land" />
          </div>

          <div className="intro-content">

            <span className="section-tag">DOM Realty Collection</span>

            <h2>Invest in Nature. Build Wealth for Tomorrow.</h2>

            <p>
              DOM Realty offers carefully selected agricultural properties with
              road connectivity, verified documents and exceptional investment
              opportunities across Palghar district.
            </p>

            <div className="farm-stats">

              <div>
                <h3>15+</h3>
                <span>Farm Projects</span>
              </div>

              <div>
                <h3>100%</h3>
                <span>Legal Verification</span>
              </div>

              <div>
                <h3>500+</h3>
                <span>Happy Investors</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="farm-benefits">

        <div className="container">

          <div className="section-heading">

            <span>Why Choose Farm Land</span>

            <h2>Investment Benefits</h2>

            <p>
              Agricultural land combines nature, lifestyle and long-term wealth
              creation.
            </p>

          </div>

          <div className="benefit-grid">

            {benefits.map((item, index) => (

              <div className="benefit-card" key={index}>

                <div className="benefit-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Property Listings */}

      <section id="farm-properties" className="farm-properties">

        <div className="container">

          <div className="section-heading">

            <span>Verified Listings</span>

            <h2>Available Farm Lands</h2>

          </div>

          <div className="property-grid">

            {farmLand.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}

          </div>

        </div>

      </section>

      {/* Lifestyle */}

      <section className="farm-lifestyle">

        <div className="container lifestyle-grid">

          <div className="lifestyle-content">

            <span className="section-tag">Weekend Lifestyle</span>

            <h2>Your Own Farmhouse Paradise</h2>

            <p>
              Escape busy city life and own a peaceful farmhouse surrounded by
              greenery, fresh air and nature.
            </p>

            <ul>

              <li><FaCheckCircle /> Weekend Home Investment</li>

              <li><FaCheckCircle /> Organic Farming</li>

              <li><FaCheckCircle /> Plantation Projects</li>

              <li><FaCheckCircle /> Road Touch Farm Lands</li>

              <li><FaCheckCircle /> Water & Electricity Nearby</li>

            </ul>

          </div>

          <div className="lifestyle-image">

            <img src={gallery1} alt="Farmhouse" />

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="farm-gallery">

        <div className="container">

          <div className="section-heading">

            <span>Project Gallery</span>

            <h2>Explore Beautiful Farm Land Locations</h2>

          </div>

          <div className="gallery-grid">

            <img src={gallery1} alt="Gallery" />

            <img src={gallery2} alt="Gallery" />

            <img src={gallery3} alt="Gallery" />

          </div>

        </div>

      </section>

      {/* CTA */}

      <CTA />

      <Footer />
    </>
  );
}

export default FarmLand;