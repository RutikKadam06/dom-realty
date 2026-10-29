import { Link } from "react-router-dom";
import "./Locations.css";

import palghar from "../../assets/images/property1.jpg";
import boisar from "../../assets/images/industrial-land.jpg";
import dahanu from "../../assets/images/farm-land.jpg";
import talasari from "../../assets/images/road-touch.jpg";

function Locations() {
  const locations = [
    {
      image: palghar,
      title: "Palghar",
      text: "Premium TP Plots and residential investment opportunities in fast-growing Palghar.",
    },
    {
      image: boisar,
      title: "Boisar",
      text: "Industrial and commercial plots near MIDC with excellent appreciation potential.",
    },
    {
      image: dahanu,
      title: "Dahanu",
      text: "Beautiful farm lands and weekend investment properties surrounded by nature.",
    },
    {
      image: talasari,
      title: "Talasari",
      text: "Road-touch farm lands with highway connectivity and long-term investment value.",
    },
  ];

  return (
    <section className="location-section">
      <div className="container">
        <div className="section-heading">
          <span>Prime Locations</span>
          <h2>Explore Investment Destinations</h2>
          <p>
            Discover verified investment opportunities across Palghar district's
            fastest-growing locations.
          </p>
        </div>

        <div className="location-grid">
          {locations.map((item, index) => (
            <div className="location-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="location-overlay">
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <Link to="/properties" className="location-btn">
                  Explore Properties
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;