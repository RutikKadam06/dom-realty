import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import API from "../services/api";

import { FaSearch, FaFilter } from "react-icons/fa";
import "./Properties.css";

function Properties() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await API.get("/properties");

        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.properties || [];

        setProperties(data);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setError("Unable to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const normalizedProperties = useMemo(() => {
    return properties.map((property) => ({
      ...property,
      id: property._id,
      image:
        property.images?.[0]?.url ||
        (typeof property.images?.[0] === "string"
          ? property.images[0]
          : ""),
      images: property.images || [],
      location: property.location || "",
      category: property.category || "",
      title: property.title || "Untitled Property",
      price: property.price || 0,
      area: property.area || "",
      description: property.description || "",
    }));
  }, [properties]);

  const locations = useMemo(() => {
    const uniqueLocations = normalizedProperties
      .map((property) => property.location)
      .filter(Boolean);

    return [...new Set(uniqueLocations)];
  }, [normalizedProperties]);

  const filteredProperties = normalizedProperties.filter((property) => {
    const searchText = search.toLowerCase().trim();

    const matchSearch =
      !searchText ||
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.category.toLowerCase().includes(searchText);

    const matchCategory =
      category === "All" || property.category === category;

    const matchLocation =
      location === "All" ||
      property.location.toLowerCase().includes(location.toLowerCase());

    return matchSearch && matchCategory && matchLocation;
  });

  return (
    <>
      <Navbar />

      <section className="properties-banner">
        <div className="banner-overlay"></div>

        <div className="container banner-content">
          <span>DOM Realty Collection</span>

          <h1>Premium Properties in Palghar District</h1>

          <p>
            Explore verified TP Plots, DP Plots, Farm Lands and investment
            properties with clear documentation and future appreciation.
          </p>
        </div>
      </section>

      <section className="filter-section">
        <div className="container filter-box">
          <div className="search-input">
            <FaSearch />

            <input
              type="text"
              placeholder="Search Property or Location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-select">
            <FaFilter />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="TP Plot">TP Plot</option>
              <option value="DP Plot">DP Plot</option>
              <option value="Farm Land">Farm Land</option>
              <option value="NA Plot">NA Plot</option>
              <option value="Industrial Land">Industrial Land</option>
            </select>
          </div>

          <div className="filter-select">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="All">All Locations</option>

              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="properties-page">
        <div className="container">
          <div className="property-heading">
            <h2>
              {loading
                ? "Loading Properties..."
                : `${filteredProperties.length} Premium Properties Found`}
            </h2>
          </div>

          {loading ? (
            <div className="empty-properties">
              <h3>Loading Properties...</h3>
              <p>Please wait while we fetch the latest properties.</p>
            </div>
          ) : error ? (
            <div className="empty-properties">
              <h3>Unable to Load Properties</h3>
              <p>{error}</p>
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property._id || property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div className="empty-properties">
              <h3>No Properties Found</h3>
              <p>Try changing filters or search keywords.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Properties;