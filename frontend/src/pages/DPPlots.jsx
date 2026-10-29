import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import CTA from "../components/CTA/CTA";
import properties from "../data/properties";

import {
  FaRoad,
  FaBuilding,
  FaChartLine,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./DPPlots.css";

import hero from "../assets/images/dp-plot.jpg";
import introImage from "../assets/images/property2.jpg";
import gallery1 from "../assets/images/property1.jpg";
import gallery2 from "../assets/images/property3.jpg";
import gallery3 from "../assets/images/road-touch.jpg";

function DPPlots() {
  const dpPlots = properties.filter(
    (property) => property.category === "DP Plot"
  );

  const advantages = [
    {
      icon: <FaRoad />,
      title: "Upcoming Highway Connectivity",
      text: "DP plots are strategically located near proposed highways and major roads.",
    },
    {
      icon: <FaBuilding />,
      title: "Future Residential & Commercial Zones",
      text: "Ideal locations where future housing and commercial projects are planned.",
    },
    {
      icon: <FaChartLine />,
      title: "High Appreciation Potential",
      text: "Infrastructure-led development increases the long-term value of DP plots.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Investment Corridors",
      text: "Selected locations across Palghar district with excellent future growth prospects.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section
        className="dp-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="dp-overlay"></div>

        <div className="container dp-content">
          <span>Development Plan Investment</span>

          <h1>Premium DP Plots in Palghar</h1>

          <p>
            Invest today in tomorrow's development corridors. Explore verified DP
            plots with strong infrastructure growth and long-term appreciation.
          </p>

          <a href="#dp-properties" className="dp-btn">
            Explore DP Plots
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* Introduction */}

      <section className="dp-intro">
        <div className="container dp-grid">
          <div className="dp-image">
            <img src={introImage} alt="DP Plot" />
          </div>

          <div className="dp-text">
            <span className="section-tag">Future Growth Investment</span>

            <h2>Why DP Plots Are the Next Big Opportunity</h2>

            <p>
              DP (Development Plan) plots are identified for future urban
              development under planning authorities. These plots often benefit
              from infrastructure expansion and increasing demand over time.
            </p>

            <div className="dp-stats">
              <div>
                <h3>4+</h3>
                <span>Growth Corridors</span>
              </div>

              <div>
                <h3>100%</h3>
                <span>Verified Properties</span>
              </div>

              <div>
                <h3>Excellent ROI</h3>
                <span>Future Investment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}

      <section className="dp-advantages">
        <div className="container">
          <div className="section-heading">
            <span>Why Choose DP Plots</span>

            <h2>Investment Advantages</h2>

            <p>
              Future-ready investment opportunities backed by planned
              infrastructure development.
            </p>
          </div>

          <div className="advantage-grid">
            {advantages.map((item, index) => (
              <div className="advantage-card" key={index}>
                <div className="advantage-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline */}

      <section className="growth-section">
        <div className="container">
          <div className="section-heading">
            <span>Infrastructure Timeline</span>

            <h2>Development Growth Journey</h2>
          </div>

          <div className="growth-timeline">
            <div className="growth-item">
              <div className="number">01</div>
              <div>
                <h3>DP Reservation & Planning</h3>
                <p>Development planning identifies future residential corridors.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number">02</div>
              <div>
                <h3>Road & Utility Expansion</h3>
                <p>Roads, drainage, electricity and civic infrastructure begin.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number">03</div>
              <div>
                <h3>Commercial & Housing Projects</h3>
                <p>Builders and developers enter planned locations.</p>
              </div>
            </div>

            <div className="growth-item">
              <div className="number">04</div>
              <div>
                <h3>Property Appreciation</h3>
                <p>Demand increases as infrastructure becomes operational.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}

      <section id="dp-properties" className="dp-properties">
        <div className="container">
          <div className="section-heading">
            <span>Verified Listings</span>

            <h2>Available DP Plots</h2>
          </div>

          <div className="property-grid">
            {dpPlots.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}

      <section className="investment-section">
        <div className="container investment-grid">
          <div className="investment-text">
            <span className="section-tag">Long-Term Wealth Creation</span>

            <h2>Invest Before Infrastructure Arrives</h2>

            <p>
              DP plots offer an opportunity to invest before large-scale
              infrastructure development increases land demand and value.
            </p>

            <ul>
              <li><FaCheckCircle /> Future Residential Zones</li>
              <li><FaCheckCircle /> Highway Connectivity</li>
              <li><FaCheckCircle /> Metro & Infrastructure Potential</li>
              <li><FaCheckCircle /> Verified Documentation</li>
              <li><FaCheckCircle /> Free Site Visit Assistance</li>
            </ul>
          </div>

          <div className="investment-image">
            <img src={gallery1} alt="Investment" />
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="dp-gallery">
        <div className="container">
          <div className="section-heading">
            <span>Project Gallery</span>

            <h2>Development Corridors Across Palghar</h2>
          </div>

          <div className="gallery-grid">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}

export default DPPlots;