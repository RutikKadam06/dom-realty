
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";

import {
  FaBuilding,
  FaHandshake,
  FaMapMarkedAlt,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaLeaf,
  FaFileAlt,
  FaShieldAlt,
} from "react-icons/fa";

import "./About.css";

import hero from "../assets/images/about.jpg";
import certificate from "../assets/images/maharera-certificate.png.jpeg";

function About() {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Transparency",
      text: "We aim to provide clear property information and honest guidance throughout the buying process.",
    },
    {
      icon: <FaAward />,
      title: "Trust & Reliability",
      text: "We help families and investors understand their property options and make informed decisions.",
    },
    {
      icon: <FaBuilding />,
      title: "Property Guidance",
      text: "Guidance on TP Plots, DP Plots, Farm Lands and investment properties across Palghar.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Local Market Knowledge",
      text: "Property assistance across Palghar, Boisar, Dahanu and Talasari.",
    },
  ];

  const journey = [
    {
      year: "2014",
      title: "DOM Realty Established",
      text: "A vision to provide property solutions and guidance in Palghar district.",
    },
    {
      year: "2018",
      title: "Expansion Across Palghar",
      text: "Expanded property assistance across Boisar, Dahanu, Talasari and surrounding locations.",
    },
    {
      year: "2022",
      title: "Growing Investor Relationships",
      text: "Continued helping families and investors explore land and property opportunities.",
    },
    {
      year: "2026",
      title: "Property Investment Assistance",
      text: "Supporting buyers exploring TP Plots, DP Plots and Farm Lands.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="about-overlay"></div>

        <div className="container about-hero-content">
          <span>ABOUT DOM REALTY</span>

          <h1>Creating Trust Through Every Property Investment.</h1>

          <p>
            Explore TP Plots, DP Plots, Farm Lands and investment
            opportunities across Palghar district with property
            information and documentation guidance.
          </p>

          <Link to="/properties" className="about-btn">
            Explore Properties <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="container story-grid">
          <div className="story-image">
            <img src={hero} alt="DOM Realty property consultancy" />
          </div>

          <div className="story-content">
            <span className="section-tag">OUR STORY</span>

            <h2>Your Real Estate Partner in Palghar</h2>

            <p>
              DOM Realty helps families, investors and businesses
              explore property opportunities across Palghar district.
            </p>

            <p>
              We provide information about TP Plots, DP Plots, Farm
              Lands and investment properties, along with guidance
              on relevant documents and the buying process.
            </p>

            <div className="story-stats">
              <div>
                <h3>Palghar</h3>
                <span>Our Focus Region</span>
              </div>

              <div>
                <h3>Local</h3>
                <span>Market Knowledge</span>
              </div>

              <div>
                <h3>Clear</h3>
                <span>Property Information</span>
              </div>

              <div>
                <h3>Buyer</h3>
                <span>Guidance & Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <FaBuilding className="mission-icon" />

            <h3>Our Mission</h3>

            <p>
              To simplify property exploration by providing clear
              information, responsive assistance and guidance through
              the buying process.
            </p>
          </div>

          <div className="mission-card">
            <FaLeaf className="mission-icon" />

            <h3>Our Vision</h3>

            <p>
              To build lasting relationships with buyers through
              transparent communication and responsible real estate
              assistance across Palghar district.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="values-section">
        <div className="container">
          <div className="section-heading">
            <span>WHY DOM REALTY</span>

            <h2>Property Guidance Built on Trust</h2>

            <p>
              Every property decision deserves clear information,
              local knowledge and thoughtful guidance.
            </p>
          </div>

          <div className="values-grid">
            {values.map((item, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY */}
      <section className="journey-section">
        <div className="container">
          <div className="section-heading">
            <span>OUR JOURNEY</span>
            <h2>DOM Realty Timeline</h2>
          </div>

          <div className="journey-timeline">
            {journey.map((item, index) => (
              <div className="journey-item" key={index}>
                <div className="journey-year">{item.year}</div>

                <div className="journey-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INVEST WITH US */}
      <section className="why-invest">
        <div className="container invest-grid">
          <div className="invest-content">
            <span className="section-tag">PROPERTY ASSISTANCE</span>

            <h2>Guidance Throughout Your Property Journey</h2>

            <p>
              From exploring available plots to understanding relevant
              documentation, DOM Realty helps buyers navigate the
              property search process.
            </p>

            <ul>
              <li>
                <FaCheckCircle />
                TP, DP and Farm Land Listings
              </li>

              <li>
                <FaCheckCircle />
                Property Documentation Guidance
              </li>

              <li>
                <FaCheckCircle />
                Site Visit Coordination
              </li>

              <li>
                <FaCheckCircle />
                Location and Plot Information
              </li>

              <li>
                <FaCheckCircle />
                Buyer Enquiry Assistance
              </li>

              <li>
                <FaCheckCircle />
                Guidance on the Buying Process
              </li>
            </ul>
          </div>

          <div className="invest-image">
            <img src={hero} alt="Property opportunities in Palghar" />
          </div>
        </div>
      </section>

      {/* DOCUMENTATION & PROFESSIONAL CREDENTIALS */}
      <section className="documentation-section">
        <div className="container">
          <div className="documentation-grid">
            <div className="documentation-content">
              <span className="section-tag">
                TRUST & TRANSPARENCY
              </span>

              <h2>Documentation & Professional Credentials</h2>

              <p className="documentation-intro">
                At DOM Realty, we understand the importance of property
                documentation. We help prospective buyers understand
                relevant property records, available approvals and
                documentation steps for the plot they are considering.
              </p>

              <div className="documentation-point">
                <div className="documentation-icon">
                  <FaFileAlt />
                </div>

                <div>
                  <h3>Property Documentation Assistance</h3>
                  <p>
                    Guidance on land records, ownership documents and
                    relevant approvals, subject to verification for
                    each property.
                  </p>
                </div>
              </div>

              <div className="documentation-point">
                <div className="documentation-icon gold-icon">
                  <FaAward />
                </div>

                <div>
                  <h3>Professional Training Credential</h3>
                  <p>
                    Certificate of completion of the MahaRERA Real
                    Estate Agent Training Program awarded to
                    Sanjay Babu Dadoda by ReraGuruji Realtors.
                  </p>
                </div>
              </div>

              <div className="documentation-point">
                <div className="documentation-icon">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3>Buyer Documentation Guidance</h3>
                  <p>
                    Assistance in understanding the documents and
                    verification steps to consider before proceeding
                    with a property transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="certificate-showcase">
              <div className="certificate-frame">
                <img
                  src={certificate}
                  alt="MahaRERA Real Estate Agent Training Program completion certificate awarded to Sanjay Babu Dadoda"
                />

                <div className="certificate-caption">
                  <FaAward />

                  <div>
                    <h3>Certificate of Completion</h3>
                    <p>
                      ReraGuruji Realtors · Certificate RG1706
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DOCUMENT TYPES */}
          <div className="documentation-records">
            <div className="records-heading">
              <span>PROPERTY DOCUMENTATION</span>

              <h3>Documents Buyers May Need to Review</h3>

              <p>
                The documents relevant to a property depend on its
                location, land type and applicable regulations.
              </p>
            </div>

            <div className="records-grid">
              <div className="record-item">
                <FaFileAlt />

                <h4>Land Records</h4>

                <p>
                  Guidance on relevant land records and extracts.
                </p>
              </div>

              <div className="record-item">
                <FaMapMarkedAlt />

                <h4>Property Maps</h4>

                <p>
                  Understanding available survey and layout maps.
                </p>
              </div>

              <div className="record-item">
                <FaCheckCircle />

                <h4>Applicable Approvals</h4>

                <p>
                  Guidance on relevant TP, DP or NA approvals,
                  as applicable.
                </p>
              </div>

              <div className="record-item">
                <FaHandshake />

                <h4>Ownership Documents</h4>

                <p>
                  Assistance in understanding ownership-related records.
                </p>
              </div>
            </div>

            <p className="documentation-note">
              Document availability and approval status vary by
              property. Buyers should independently verify relevant
              records before completing a transaction.
            </p>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}

export default About;
