import "./Services.css";

import {
  FaLeaf,
  FaMapMarkedAlt,
  FaCity,
  FaWarehouse,
  FaRoad,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf />,
    title: "Farm Land",
    desc: "Verified agricultural land investment.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "TP Plots",
    desc: "Town Planning investment opportunities.",
  },
  {
    icon: <FaCity />,
    title: "DP Plots",
    desc: "Development Plan future growth plots.",
  },
  {
    icon: <FaWarehouse />,
    title: "Industrial Land",
    desc: "Commercial & industrial investment land.",
  },
  {
    icon: <FaRoad />,
    title: "Road Touch Plots",
    desc: "Excellent highway connectivity.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Clear 7/12 Title",
    desc: "Legal documentation support available.",
  },
];

function Services() {
  return (
    <section className="services-section">
      <p className="section-subtitle">OUR SERVICES</p>

      <h2>Land Investment Solutions</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;