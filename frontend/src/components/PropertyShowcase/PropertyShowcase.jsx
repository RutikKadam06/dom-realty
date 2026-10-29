import "./PropertyShowcase.css";

const properties = [
  {
    title: "TP Plot • Talasari",
    image: "/images/property1.jpg",
  },
  {
    title: "DP Plot • Boisar",
    image: "/images/property2.jpg",
  },
  {
    title: "Farm Land • Dahanu",
    image: "/images/property3.jpg",
  },
  {
    title: "Industrial Land • MIDC Boisar",
    image: "/images/industrial-land.jpg",
  },
  {
    title: "NA Plot • Palghar",
    image: "/images/na-plot.jpg",
  },
  {
    title: "Road Touch Plot • Vikramgad",
    image: "/images/road-touch.jpg",
  },
];

function PropertyShowcase() {
  return (
    <section className="showcase-section">
      <div className="heading">
        <p className="tag">FEATURED PROJECTS</p>

        <h2>Explore Premium Investment Properties</h2>

        <p>
          TP Plots • DP Plots • Farm Land • Industrial Land • NA Plots • Road
          Touch Properties
        </p>
      </div>

      <div className="slider-wrapper">
        <div className="slider-track">
          {[...properties, ...properties].map((property, index) => (
            <div className="property-slide" key={index}>
              <img src={property.image} alt={property.title} />

              <div className="overlay">
                <h3>{property.title}</h3>

                <button>View Property</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyShowcase;