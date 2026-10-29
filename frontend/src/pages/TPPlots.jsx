import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import CTA from "../components/CTA/CTA";
import properties from "../data/properties";

import {
  FaRoad,
  FaCity,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./TPPlots.css";

import hero from "../assets/images/tp-plot.jpg";
import image1 from "../assets/images/property1.jpg";
import image2 from "../assets/images/property2.jpg";
import image3 from "../assets/images/property3.jpg";

function TPPlots() {
  const tpPlots = properties.filter(
    (property) => property.category === "TP Plot"
  );

  const benefits = [
    {
      icon: <FaRoad />,
      title: "Town Planning Infrastructure",
      text: "Wide roads, drainage, electricity and planned civic infrastructure.",
    },
    {
      icon: <FaCity />,
      title: "Future Residential Growth",
      text: "Located in rapidly developing residential zones of Palghar district.",
    },
    {
      icon: <FaChartLine />,
      title: "Excellent Appreciation Potential",
      text: "Master-planned areas generally witness long-term infrastructure-led growth.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified Investment Opportunity",
      text: "Clear documentation and guidance from DOM Realty experts.",
    },
  ];

  return (
    <>
      <Navbar />

      <section
        className="tp-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="tp-overlay"></div>

        <div className="container tp-content">
          <span>Town Planning Investment</span>

          <h1>Premium TP Plots in Palghar</h1>

          <p>
            Secure your future with investment-ready TP plots located in
            well-planned growth corridors across Palghar, Boisar, Dahanu and
            Talasari.
          </p>

          <a href="#tp-listings" className="tp-btn">
            Explore TP Plots
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* Introduction */}

      <section className="tp-intro">
        <div className="container tp-grid">

          <div className="tp-image">
            <img src={image1} alt="TP Plot" />
          </div>

          <div className="tp-text">

            <span className="section-tag">DOM Realty Investment Collection</span>

            <h2>What Makes TP Plots a Smart Investment?</h2>

            <p>
              TP (Town Planning) plots are located within planned development
              areas where future infrastructure like roads, parks, schools and
              utilities are proposed according to the town planning scheme.
            </p>

            <div className="tp-stats">

              <div>
                <h3>30 ft+</h3>
                <span>Planned Roads</span>
              </div>

              <div>
                <h3>100%</h3>
                <span>Verified Documents</span>
              </div>

              <div>
                <h3>High ROI</h3>
                <span>Future Appreciation</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="tp-benefits">

        <div className="container">

          <div className="section-heading">

            <span>Why Choose TP Plots</span>

            <h2>Future-Ready Investment</h2>

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

      {/* Infrastructure Timeline */}

      <section className="tp-timeline">

        <div className="container">

          <div className="section-heading">

            <span>Infrastructure Growth</span>

            <h2>How TP Areas Develop Over Time</h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="circle">1</div>

              <div>
                <h3>Planning Approval</h3>

                <p>Town planning layout and zoning approval.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="circle">2</div>

              <div>
                <h3>Road & Utility Development</h3>

                <p>Roads, drainage, water and electricity infrastructure.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="circle">3</div>

              <div>
                <h3>Residential & Commercial Growth</h3>

                <p>Housing projects, schools and commercial development begin.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="circle">4</div>

              <div>
                <h3>Property Appreciation</h3>

                <p>Demand increases as infrastructure becomes operational.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Property Listings */}

      <section id="tp-listings" className="tp-properties">

        <div className="container">

          <div className="section-heading">

            <span>Verified Listings</span>

            <h2>Available TP Plots</h2>

          </div>

          <div className="property-grid">

            {tpPlots.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}

          </div>

        </div>

      </section>

      {/* Why DOM Realty */}

      <section className="tp-lifestyle">

        <div className="container tp-grid">

          <div className="tp-text">

            <span className="section-tag">Why DOM Realty</span>

            <h2>Investment Guidance You Can Trust</h2>

            <p>
              Our team helps investors identify plots with future infrastructure,
              legal clarity and strong appreciation potential across Palghar
              district.
            </p>

            <ul>

              <li><FaCheckCircle /> Verified Documentation</li>

              <li><FaCheckCircle /> Site Visit Assistance</li>

              <li><FaCheckCircle /> Investment Consultation</li>

              <li><FaCheckCircle /> Road Touch TP Plots</li>

              <li><FaCheckCircle /> End-to-End Support</li>

            </ul>

          </div>

          <div className="tp-image">

            <img src={image2} alt="Investment" />

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="tp-gallery">

        <div className="container">

          <div className="section-heading">

            <span>Project Gallery</span>

            <h2>Explore TP Plot Locations</h2>

          </div>

          <div className="gallery-grid">

            <img src={image1} alt="" />

            <img src={image2} alt="" />

            <img src={image3} alt="" />

          </div>

        </div>

      </section>

      <CTA />

      <Footer />
    </>
  );
}

export default TPPlots;