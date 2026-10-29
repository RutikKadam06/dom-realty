import "./Gallery.css";

import img1 from "../../assets/images/property1.jpg";
import img2 from "../../assets/images/property2.jpg";
import img3 from "../../assets/images/property3.jpg";
import img4 from "../../assets/images/farm-land.jpg";
import img5 from "../../assets/images/dp-plot.jpg";
import img6 from "../../assets/images/tp-plot.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-heading">
          <span>Gallery</span>
          <h2>Explore Our Premium Property Collection</h2>
          <p>
            Browse verified TP Plots, DP Plots, Farm Lands and investment
            properties across Palghar district.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Property ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;