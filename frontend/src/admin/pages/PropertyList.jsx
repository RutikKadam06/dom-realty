import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaMapMarkerAlt,
  FaStar,
  FaPlus,
} from "react-icons/fa";

import API from "../../services/api";
import "../styles/PropertyList.css";

import property1 from "../../assets/images/property1.jpg";
import property2 from "../../assets/images/property2.jpg";
import property3 from "../../assets/images/property3.jpg";
import industrialLand from "../../assets/images/industrial-land.jpg";

const fallbackImages = [
  property1,
  property2,
  property3,
  industrialLand,
];

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await API.get("/properties");

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.properties || [];

      setProperties(data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    } finally {
      setLoading(false);
    }
  };

  const getPropertyImage = (property, index) => {
    const firstImage = property?.images?.[0];

    if (
      firstImage &&
      typeof firstImage === "object" &&
      firstImage.url
    ) {
      return firstImage.url;
    }

    if (
      typeof firstImage === "string" &&
      firstImage.trim()
    ) {
      return firstImage;
    }

    return fallbackImages[
      index % fallbackImages.length
    ];
  };

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await API.delete(`/properties/${id}`);

      setProperties((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete property.");
    }
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      const title =
        item.title?.toLowerCase() || "";

      const location =
        item.location?.toLowerCase() || "";

      const searchText =
        search.toLowerCase();

      const searchMatch =
        title.includes(searchText) ||
        location.includes(searchText);

      const categoryMatch =
        category === "All" ||
        item.category === category;

      return searchMatch && categoryMatch;
    });
  }, [properties, search, category]);

  return (
    <div className="property-page">

      <div className="property-header">

        <div>
          <span>DOM REALTY ADMIN</span>

          <h1>Manage Properties</h1>

          <p>
            View, edit and manage all TP Plots,
            DP Plots and Farm Land listings.
          </p>
        </div>

        <Link
          to="/admin/add-property"
          className="add-btn"
        >
          <FaPlus />
          Add Property
        </Link>

      </div>

      <div className="filter-bar">

        <div className="search-box-property">

          <FaSearch />

          <input
            type="text"
            placeholder="Search property or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">
            All Categories
          </option>

          <option value="TP Plot">
            TP Plot
          </option>

          <option value="DP Plot">
            DP Plot
          </option>

          <option value="Farm Land">
            Farm Land
          </option>

          <option value="Commercial Plot">
            Commercial Plot
          </option>

          <option value="Industrial Land">
            Industrial Land
          </option>

          <option value="NA Plot">
            NA Plot
          </option>
        </select>

      </div>

      {loading ? (

        <div className="loading-box">
          <h3>Loading Properties...</h3>
        </div>

      ) : (

        <>

          <div className="property-grid">

            {filteredProperties.map(
              (property, index) => (

                <div
                  className="property-card"
                  key={
                    property._id || index
                  }
                >

                  <div className="property-image-wrapper">

                    <img
                      src={getPropertyImage(
                        property,
                        index
                      )}
                      alt={
                        property.title ||
                        "Property"
                      }
                      onError={(e) => {
                        e.currentTarget.onerror =
                          null;

                        e.currentTarget.src =
                          fallbackImages[
                            index %
                              fallbackImages.length
                          ];
                      }}
                    />

                    {property.featured && (
                      <span className="featured-badge">
                        <FaStar />
                        Featured
                      </span>
                    )}

                  </div>

                  <div className="property-content">

                    <span className="category">
                      {property.category ||
                        "Property"}
                    </span>

                    <h3>
                      {property.title ||
                        "Untitled Property"}
                    </h3>

                    <p className="location">

                      <FaMapMarkerAlt />

                      {property.location ||
                        "Palghar, Maharashtra"}

                    </p>

                    <div className="property-details">

                      <span>
                        {property.area ||
                          "Area not specified"}
                      </span>

                      <span>
                        {property.status ||
                          "Available"}
                      </span>

                    </div>

                    <h2>
                      ₹{" "}
                      {property.price
                        ? Number(
                            property.price
                          ).toLocaleString(
                            "en-IN"
                          )
                        : "Price on Request"}
                    </h2>

                    <div className="property-footer">

                      <Link
                        to={`/property/${property._id}`}
                        className="view-btn"
                        title="View Property"
                      >
                        <FaEye />
                      </Link>

                      <Link
                        to={`/admin/edit-property/${property._id}`}
                        className="edit-btn"
                        title="Edit Property"
                      >
                        <FaEdit />
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteProperty(
                            property._id
                          )
                        }
                        title="Delete Property"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

          {filteredProperties.length === 0 && (

            <div className="empty-box">

              <h3>
                No Properties Found
              </h3>

              <p>
                No property matches your
                search or selected category.
              </p>

              <Link
                to="/admin/add-property"
                className="empty-add-btn"
              >
                <FaPlus />
                Add Your First Property
              </Link>

            </div>

          )}

        </>

      )}

    </div>
  );
}

export default PropertyList;