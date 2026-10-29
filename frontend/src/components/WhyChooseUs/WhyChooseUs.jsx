import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "100% Verified Properties",
      text: "Every property listed by DOM Realty is legally verified with clear documentation.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Prime Locations",
      text: "Premium TP Plots, DP Plots and Farm Lands across Palghar, Dahanu, Boisar & Talasari.",
    },
    {
      icon: <FaHandshake />,
      title: "Free Site Visit Assistance",
      text: "Our experts guide you through every property visit and investment decision.",
    },
    {
      icon: <FaChartLine />,
      title: "High Investment Growth",
      text: "Properties selected based on infrastructure development and future appreciation potential.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">

        <div className="section-heading">
          <span>Why DOM Realty</span>
          <h2>Trusted Partner For Your Next Investment</h2>
          <p>
            We help buyers discover legally verified investment opportunities
            with complete transparency and professional guidance.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;