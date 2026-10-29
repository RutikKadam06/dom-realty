import { Link } from "react-router-dom";
import "./CategorySection.css";

import tpPlot from "../../assets/images/tp-plot.jpg";
import dpPlot from "../../assets/images/dp-plot.jpg";
import farmLand from "../../assets/images/farm-land.jpg";

function CategorySection() {
  const categories = [
    {
      title: "TP Plots",
      subtitle: "Town Planning Approved",
      description:
        "Premium TP plots in Palghar, Boisar and Dahanu with excellent appreciation potential.",
      image: tpPlot,
      link: "/tp-plots",
    },
    {
      title: "DP Plots",
      subtitle: "Development Plan Investment",
      description:
        "Invest in future growth corridors with legally verified DP plots.",
      image: dpPlot,
      link: "/dp-plots",
    },
    {
      title: "Farm Land",
      subtitle: "Agricultural & Weekend Investment",
      description:
        "Beautiful farm lands near Palghar, Talasari and Dahanu with road touch options.",
      image: farmLand,
      link: "/farm-land",
    },
  ];

  return (
    <section className="category-section">
      <div className="container">

        <div className="section-heading">
          <span>Our Categories</span>
          <h2>Explore Premium Investment Opportunities</h2>
          <p>
            Discover carefully selected properties across Palghar district with
            verified documentation and future investment value.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="category-overlay">
                <span className="category-badge">{item.subtitle}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to={item.link} className="category-btn">
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

export default CategorySection;