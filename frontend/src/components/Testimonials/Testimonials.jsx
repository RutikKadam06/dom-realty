import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import client1 from "../../assets/images/about.jpg";
import client2 from "../../assets/images/property2.jpg";
import client3 from "../../assets/images/property3.jpg";

function Testimonials() {
  const reviews = [
    {
      image: client1,
      name: "Rahul Patil",
      place: "Boisar, Maharashtra",
      review:
        "DOM Realty helped me purchase a TP Plot with complete legal verification. The entire process was transparent and professional.",
    },
    {
      image: client2,
      name: "Sneha More",
      place: "Palghar",
      review:
        "Amazing experience! They arranged a free site visit and explained future investment opportunities in detail.",
    },
    {
      image: client3,
      name: "Amit Kadam",
      place: "Dahanu",
      review:
        "Purchased farm land through DOM Realty. Excellent service, genuine documents and great support after purchase.",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-heading">
          <span>Testimonials</span>
          <h2>Trusted By Happy Property Buyers</h2>
          <p>
            Our customers trust DOM Realty for verified properties, transparent
            documentation and investment guidance.
          </p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <FaQuoteLeft className="quote-icon" />

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p className="review-text">{item.review}</p>

              <div className="review-user">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;