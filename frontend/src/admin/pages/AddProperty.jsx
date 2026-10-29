
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaArrowRight,
  FaStar,
  FaSave,
} from "react-icons/fa";

import API from "../../services/api";
import "./AddProperty.css";

function AddProperty() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    area: "",
    location: "",
    status: "Available",
    village: "",
    taluka: "",
    district: "Palghar",
    pinCode: "",
    mapsLink: "",
    description: "",
    featured: false,
    roadTouch: false,
    features: [],
  });

  const featureList = [
    "Road Touch",
    "Electricity Available",
    "Water Connection",
    "NA Approved",
    "TP Approved",
    "DP Approved",
    "Clear Title",
    "Boundary Fencing",
    "Near Highway",
    "Investment Zone",
    "Agricultural Land",
  ];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFeatureChange = (feature) => {
    setFormData((previous) => ({
      ...previous,
      features: previous.features.includes(feature)
        ? previous.features.filter((item) => item !== feature)
        : [...previous.features, feature],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter the property title.");
      return;
    }

    if (!formData.category) {
      alert("Please select a property category.");
      return;
    }

    if (!formData.location.trim()) {
      alert("Please enter the property location.");
      return;
    }

    if (formData.price !== "" && Number(formData.price) < 0) {
      alert("Price cannot be negative.");
      return;
    }

    try {
      setLoading(true);

      // Send property details only. No images are required.
      const payload = {
        ...formData,
        title: formData.title.trim(),
        location: formData.location.trim(),
        price: formData.price === "" ? null : Number(formData.price),
      };

      const response = await API.post("/properties", payload);

      if (
        response.status >= 200 &&
        response.status < 300 &&
        response.data?.success !== false
      ) {
        alert("Property added successfully!");
        navigate("/admin/properties");
      } else {
        alert(response.data?.message || "Unable to add property.");
      }
    } catch (error) {
      console.error("Property creation error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to add property. Please check the backend and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-property-page">
      <div className="admin-page-header">
        <span>DOM REALTY ADMIN</span>
        <h1>Add New Property</h1>
        <p>
          Add plot details and location. No property photographs are needed.
        </p>
      </div>

      <form className="property-form" onSubmit={handleSubmit}>
        <div className="form-card">
          <h2>Property Information</h2>

          <div className="form-grid">
            <div>
              <label htmlFor="title">Property Title *</label>
              <input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Plot available in Talasari"
                required
              />
            </div>

            <div>
              <label htmlFor="category">Property Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="TP Plot">TP Plot</option>
                <option value="DP Plot">DP Plot</option>
                <option value="Farm Land">Farm Land</option>
                <option value="Industrial Land">Industrial Land</option>
                <option value="NA Plot">NA Plot</option>
              </select>
            </div>

            <div>
              <label htmlFor="price">Price (₹)</label>
              <div className="input-icon">
                <FaRupeeSign />
                <input
                  id="price"
                  type="number"
                  name="price"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Leave blank if price is on enquiry"
                />
              </div>
            </div>

            <div>
              <label htmlFor="area">Plot Area</label>
              <input
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g. 5,000 sq. ft. or 2 acres"
              />
            </div>

            <div>
              <label htmlFor="location">Location *</label>
              <div className="input-icon">
                <FaMapMarkerAlt />
                <input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Talasari, Palghar"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="status">Availability</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
                <option value="Sold">Sold</option>
              </select>
            </div>
          </div>

          <div className="featured-property-option">
            <label className="featured-checkbox">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              <span>
                <FaStar /> Featured Property
              </span>
            </label>
            <p>
              Select this to mark the property as featured on the home page.
            </p>
          </div>
        </div>

        <div className="form-card">
          <h2>Location Details</h2>

          <div className="form-grid">
            <div>
              <label htmlFor="village">Village / Area</label>
              <input
                id="village"
                name="village"
                value={formData.village}
                onChange={handleChange}
                placeholder="Village or area"
              />
            </div>

            <div>
              <label htmlFor="taluka">Taluka</label>
              <input
                id="taluka"
                name="taluka"
                value={formData.taluka}
                onChange={handleChange}
                placeholder="Talasari"
              />
            </div>

            <div>
              <label htmlFor="district">District</label>
              <input
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Palghar"
              />
            </div>

            <div>
              <label htmlFor="pinCode">PIN Code</label>
              <input
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="401606"
              />
            </div>
          </div>

          <div className="form-field-full">
            <label htmlFor="mapsLink">Google Maps Link</label>
            <input
              id="mapsLink"
              type="url"
              name="mapsLink"
              value={formData.mapsLink}
              onChange={handleChange}
              placeholder="Paste the Google Maps link (optional)"
            />
          </div>
        </div>

        <div className="form-card">
          <h2>Plot Features</h2>

          <div className="feature-grid">
            {featureList.map((feature) => (
              <label className="checkbox-item" key={feature}>
                <input
                  type="checkbox"
                  checked={formData.features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                />
                {feature}
              </label>
            ))}
          </div>

          <div className="form-field-full">
            <label htmlFor="roadTouch">Road Access</label>
            <label className="checkbox-item">
              <input
                id="roadTouch"
                type="checkbox"
                name="roadTouch"
                checked={formData.roadTouch}
                onChange={handleChange}
              />
              This plot is road-touch
            </label>
          </div>
        </div>

        <div className="form-card">
          <h2>Plot Description</h2>

          <div className="form-field-full">
            <label htmlFor="description">Details about the plot</label>
            <textarea
              id="description"
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the plot, its surroundings, access roads and other relevant information..."
            />
          </div>
        </div>

        <div className="submit-section">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/admin/properties")}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? (
              "Saving Property..."
            ) : (
              <>
                <FaSave /> Save Property <FaArrowRight />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;
