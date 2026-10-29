import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaCloudUploadAlt,
  FaHome,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaSave,
} from "react-icons/fa";
import AdminLayout from "../components/AdminLayout";
import "./AdminPages.css";
import API from "../../services/api";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [property, setProperty] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    village: "",
    taluka: "",
    district: "",
    price: "",
    area: "",
    featured: false,
    readyToMove: false,
    gatedCommunity: false,
    electricity: false,
    waterSupply: false,
    roadTouch: false,
    clearTitle: false,
  });

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await API.get(`/properties/${id}`);
      setProperty(res.data);
      setPreview(res.data.images || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProperty({
      ...property,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...urls]);
  };

  const removeImage = (index) => {
    const updated = preview.filter((_, i) => i !== index);
    setPreview(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(property).forEach((key) => {
      formData.append(key, property[key]);
    });

    images.forEach((img) => {
      formData.append("images", img);
    });

    try {
      await API.put(`/properties/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property Updated Successfully");
      navigate("/admin/properties");
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">

        <div className="page-header">
          <div>
            <span className="breadcrumb">Dashboard / Properties</span>
            <h1>Edit Property</h1>
            <p>Update property information and images.</p>
          </div>

          <button className="save-btn" onClick={handleSubmit}>
            <FaSave />
            Update Property
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="admin-card">
            <h2 className="section-title">
              <FaCloudUploadAlt />
              Property Images
            </h2>

            <label className="upload-box">
              <FaCloudUploadAlt className="upload-icon" />
              <h3>Upload More Images</h3>
              <p>Select additional property images.</p>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImages}
              />
            </label>

            <div className="preview-grid">
              {preview.map((img, index) => (
                <div className="preview-item" key={index}>
                  <img src={img} alt="" />

                  <button
                    type="button"
                    className="remove-image"
                    onClick={() => removeImage(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <h2 className="section-title">
              <FaHome />
              Property Details
            </h2>

            <div className="admin-form">

              <div className="form-group">
                <label>Property Title</label>
                <input
                  name="title"
                  value={property.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={property.category}
                  onChange={handleChange}
                >
                  <option>TP Plot</option>
                  <option>DP Plot</option>
                  <option>Farm Land</option>
                  <option>Residential Plot</option>
                  <option>Commercial Plot</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  rows="5"
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          <div className="admin-card">
            <h2 className="section-title">
              <FaMapMarkerAlt />
              Location
            </h2>

            <div className="admin-form">

              <div className="form-group">
                <label>Location</label>
                <input
                  name="location"
                  value={property.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Village</label>
                <input
                  name="village"
                  value={property.village}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Taluka</label>
                <input
                  name="taluka"
                  value={property.taluka}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>District</label>
                <input
                  name="district"
                  value={property.district}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          <div className="admin-card">
            <h2 className="section-title">
              <FaRupeeSign />
              Price & Area
            </h2>

            <div className="admin-form">

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={property.price}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Area (Sq.ft)</label>
                <input
                  type="number"
                  name="area"
                  value={property.area}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          <div className="admin-card">
            <h2 className="section-title">
              <FaCheckCircle />
              Property Features
            </h2>

            <div className="features-grid">

              {[
                ["featured", "Featured Property"],
                ["readyToMove", "Ready To Move"],
                ["gatedCommunity", "Gated Community"],
                ["electricity", "Electricity Available"],
                ["waterSupply", "Water Supply"],
                ["roadTouch", "Road Touch Plot"],
                ["clearTitle", "Clear Title Property"],
              ].map(([key, label]) => (
                <label key={key} className="feature-item">
                  <input
                    type="checkbox"
                    name={key}
                    checked={property[key]}
                    onChange={handleChange}
                  />
                  {label}
                </label>
              ))}

            </div>
          </div>

          <button type="submit" className="submit-btn">
            Update Property
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditProperty;