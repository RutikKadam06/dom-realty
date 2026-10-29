
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaMountain,
} from "react-icons/fa";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const propertyId = property._id || property.id;

  const image =
    property.image ||
    (typeof property.images?.[0] === "object"
      ? property.images[0]?.url
      : property.images?.[0]) ||
    "";

  const price = Number(property.price);

  const formattedPrice =
    property.price !== undefined &&
    property.price !== null &&
    property.price !== ""
      ? `₹ ${price.toLocaleString("en-IN")}`
      : "Price on Request";

  const whatsappMessage = `Hello DOM Realty Team,

I am interested in the following property:
${property.title || "Property"}
Location: ${property.location || "Not specified"}
Category: ${property.category || "Not specified"}

Please share more details, pricing, and site visit availability.

Thank you.`;

  return (
    <article className="property-card">
      <div className={`property-image ${image ? "" : "no-property-image"}`}>
        {image ? (
          <img
            src={image}
            alt={property.title || "Available plot"}
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.parentElement.classList.add(
                "no-property-image"
              );
            }}
          />
        ) : null}

        <div className="property-placeholder">
          <div className="placeholder-icon">
            <FaMountain />
          </div>
          <span className="placeholder-brand">DOM REALTY</span>
          <h3>Land. Location. Opportunity.</h3>
          <p>Explore this available property</p>
        </div>

        <span className="verified-tag">
          <FaCheckCircle />
          Listed Property
        </span>

        <span className="price-tag">{formattedPrice}</span>
      </div>

      <div className="property-content">
        <span className="property-category">
          {property.category || "Property"}
        </span>

        <h3>{property.title || "Available Plot"}</h3>

        <p className="property-location">
          <FaMapMarkerAlt />
          {property.location || "Location available on enquiry"}
        </p>

        {property.description && (
          <p className="property-description">
            {property.description.length > 130
              ? `${property.description.slice(0, 130)}...`
              : property.description}
          </p>
        )}

        <div className="property-details">
          <div>
            <span>Area</span>
            <h4>{property.area || "On enquiry"}</h4>
          </div>

          <div>
            <span>Availability</span>
            <h4>{property.status || "Available"}</h4>
          </div>
        </div>

        <div className="property-buttons">
          {propertyId ? (
            <Link
              to={`/property/${propertyId}`}
              className="details-btn"
            >
              View Details
            </Link>
          ) : (
            <a href="/contact" className="details-btn">
              Enquire Now
            </a>
          )}

          <a
            href={`https://wa.me/919673044421?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-card-btn"
            aria-label="Enquire about this property on WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;
