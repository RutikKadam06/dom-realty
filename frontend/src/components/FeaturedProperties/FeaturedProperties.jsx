import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

import API from "../../services/api";

import property1 from "../../assets/images/property1.jpg";
import property2 from "../../assets/images/property2.jpg";
import property3 from "../../assets/images/property3.jpg";

import "./FeaturedProperties.css";

const fallbackImages = [
  property1,
  property2,
  property3,
];

function FeaturedProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      const response = await API.get(
        "/properties?featured=true"
      );

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.properties || [];

      setProperties(data.slice(0, 6));
    } catch (error) {
      console.error(
        "Featured property error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const getImage = (property, index) => {
    const firstImage = property?.images?.[0];

    if (typeof firstImage === "string" && firstImage.trim()) {
      return firstImage;
    }

    if (
      firstImage &&
      typeof firstImage === "object" &&
      firstImage.url
    ) {
      return firstImage.url;
    }

    return fallbackImages[
      index % fallbackImages.length
    ];
  };

  const whatsappMessage = (property) => {
    return encodeURIComponent(
      `Hello DOM Realty Team,

I am interested in the following property:

Property: ${property.title}
Category: ${property.category}
Location: ${property.location || "Palghar"}
Area: ${property.area || "Not specified"}
Price: ₹${Number(
        property.price || 0
      ).toLocaleString("en-IN")}

Please share more details and availability.

Thank you.`
    );
  };

  if (loading) {
    return (
      <section className="featured-properties">
        <div className="featured-heading">
          <span>FEATURED PROPERTIES</span>

          <h2>
            Verified Premium Properties in Palghar
          </h2>

          <p>
            Carefully selected investment opportunities
            with verified documentation and prime
            locations.
          </p>
        </div>

        <div className="featured-loading">
          Loading properties...
        </div>
      </section>
    );
  }

  return (
    <section className="featured-properties">

      <div className="featured-heading">

        <span>
          FEATURED PROPERTIES
        </span>

        <h2>
          Verified Premium Properties in Palghar
        </h2>

        <p>
          Carefully selected investment opportunities
          with verified documentation and prime
          locations.
        </p>

      </div>

      <div className="featured-count">
        {properties.length} Premium Properties Found
      </div>

      {properties.length === 0 ? (

        <div className="featured-empty">

          <h3>
            Premium Properties Coming Soon
          </h3>

          <p>
            Our latest verified investment opportunities
            will appear here.
          </p>

          <Link
            to="/properties"
            className="featured-view-all"
          >
            Explore Properties
          </Link>

        </div>

      ) : (

        <div className="featured-grid">

          {properties.map((property, index) => {

            const image = getImage(
              property,
              index
            );

            return (
              <div
                className="featured-card"
                key={property._id}
              >

                <div className="featured-image">

                  <img
                    src={image}
                    alt={property.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        fallbackImages[
                          index %
                            fallbackImages.length
                        ];
                    }}
                  />

                  <div className="verified-badge">

                    <FaCheckCircle />

                    Verified

                  </div>

                  <div className="featured-price">

                    ₹
                    {Number(
                      property.price || 0
                    ).toLocaleString("en-IN")}

                  </div>

                </div>

                <div className="featured-content">

                  <span className="featured-category">
                    {property.category}
                  </span>

                  <h3>
                    {property.title}
                  </h3>

                  <p className="featured-location">

                    <FaMapMarkerAlt />

                    {property.location ||
                      "Palghar, Maharashtra"}

                  </p>

                  <div className="featured-details">

                    <div>

                      <span>
                        Area
                      </span>

                      <strong>
                        {property.area ||
                          "Not specified"}
                      </strong>

                    </div>

                    <div>

                      <span>
                        Status
                      </span>

                      <strong>
                        {property.status ||
                          "Available"}
                      </strong>

                    </div>

                  </div>

                  <div className="featured-actions">

                    <Link
                      to={`/property/${property._id}`}
                      className="featured-view-btn"
                    >
                      View Details
                    </Link>

                    <a
                      href={`https://wa.me/919673044421?text=${whatsappMessage(
                        property
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-whatsapp"
                    >
                      <FaWhatsapp />
                    </a>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      )}

    </section>
  );
}

export default FeaturedProperties;