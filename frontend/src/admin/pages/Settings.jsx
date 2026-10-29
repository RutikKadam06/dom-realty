import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaSave,
  FaImage,
} from "react-icons/fa";
import API from "../../services/api";
import "../styles/Settings.css";

function Settings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({
    companyName: "DOM Realty",
    tagline: "Your Land, Our Priority.",
    phone: "+91 96730 44421",
    whatsapp: "+91 96730 44421",
    email: "info@domrealty.in",
    website: "www.domrealty.in",
    address:
      "Talasari Patilpada, Tal. Talasari, Dist. Palghar, Maharashtra - 401606",
    instagram: "",
    facebook: "",
    googleMaps: "",
  });

  const [logoPreview, setLogoPreview] = useState("");
  const [logoFile, setLogoFile] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await API.get("/settings");

      const data = res.data?.settings || res.data;

      if (data && typeof data === "object") {
        setSettings((prev) => ({
          ...prev,
          ...data,
        }));
      }
    } catch (err) {
      console.log("Settings API not available yet.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);

    try {
      const formData = new FormData();

      Object.entries(settings).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (logoFile) {
        formData.append("logo", logoFile);
      }

      await API.put("/settings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Settings updated successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to update settings.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="settings-loading">
        <h3>Loading Settings...</h3>
      </div>
    );
  }

  return (
    <div className="settings-page">

      <div className="admin-page-header">
        <span>DOM REALTY ADMIN</span>
        <h1>Website Settings</h1>
        <p>
          Manage your company information and contact details displayed across
          the DOM Realty website.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Company Information */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div className="settings-heading-icon">
              <FaBuilding />
            </div>

            <div>
              <h2>Company Information</h2>
              <p>Basic information about DOM Realty.</p>
            </div>
          </div>

          <div className="settings-grid">

            <div className="settings-field">
              <label>Company Name</label>

              <div className="settings-input">
                <FaBuilding />

                <input
                  type="text"
                  name="companyName"
                  value={settings.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="settings-field">
              <label>Tagline</label>

              <input
                type="text"
                name="tagline"
                value={settings.tagline}
                onChange={handleChange}
              />
            </div>

          </div>

        </div>

        {/* Contact Information */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div className="settings-heading-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h2>Contact Information</h2>
              <p>Information customers use to contact your company.</p>
            </div>
          </div>

          <div className="settings-grid">

            <div className="settings-field">
              <label>Phone Number</label>

              <div className="settings-input">
                <FaPhoneAlt />

                <input
                  type="text"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="settings-field">
              <label>WhatsApp Number</label>

              <div className="settings-input">
                <FaWhatsapp />

                <input
                  type="text"
                  name="whatsapp"
                  value={settings.whatsapp}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="settings-field">
              <label>Email Address</label>

              <div className="settings-input">
                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="settings-field">
              <label>Website</label>

              <div className="settings-input">
                <FaGlobe />

                <input
                  type="text"
                  name="website"
                  value={settings.website}
                  onChange={handleChange}
                />
              </div>
            </div>

          </div>

        </div>

        {/* Office Address */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div className="settings-heading-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h2>Office Location</h2>
              <p>Manage your registered office address and map location.</p>
            </div>
          </div>

          <div className="settings-field">

            <label>Office Address</label>

            <div className="settings-input textarea-input">
              <FaMapMarkerAlt />

              <textarea
                name="address"
                value={settings.address}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="settings-field">

            <label>Google Maps Link</label>

            <div className="settings-input">

              <FaMapMarkerAlt />

              <input
                type="url"
                name="googleMaps"
                value={settings.googleMaps}
                onChange={handleChange}
                placeholder="https://maps.google.com/..."
              />

            </div>

          </div>

        </div>

        {/* Social Media */}

        <div className="settings-card">

          <div className="settings-card-header">

            <div className="settings-heading-icon">
              <FaGlobe />
            </div>

            <div>
              <h2>Social Media</h2>
              <p>Connect your DOM Realty social media profiles.</p>
            </div>

          </div>

          <div className="settings-grid">

            <div className="settings-field">

              <label>Instagram</label>

              <div className="settings-input">
                <FaInstagram />

                <input
                  type="url"
                  name="instagram"
                  value={settings.instagram}
                  onChange={handleChange}
                  placeholder="Instagram profile URL"
                />
              </div>

            </div>

            <div className="settings-field">

              <label>Facebook</label>

              <div className="settings-input">
                <FaFacebookF />

                <input
                  type="url"
                  name="facebook"
                  value={settings.facebook}
                  onChange={handleChange}
                  placeholder="Facebook profile URL"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Logo */}

        <div className="settings-card">

          <div className="settings-card-header">

            <div className="settings-heading-icon">
              <FaImage />
            </div>

            <div>
              <h2>Company Logo</h2>
              <p>Upload the logo displayed throughout the website.</p>
            </div>

          </div>

          <div className="logo-upload-section">

            <div className="logo-preview">

              {logoPreview ? (
                <img src={logoPreview} alt="Logo Preview" />
              ) : (
                <div className="logo-placeholder">
                  <FaBuilding />
                  <span>DOM Realty</span>
                </div>
              )}

            </div>

            <div className="logo-upload-content">

              <label className="upload-logo-btn">

                <FaImage />
                Choose Logo

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleLogoChange}
                />

              </label>

              <p>PNG, JPG or WEBP. Recommended: transparent PNG.</p>

            </div>

          </div>

        </div>

        {/* Save */}

        <div className="settings-save-section">

          <button
            type="submit"
            className="save-settings-btn"
            disabled={saving}
          >
            <FaSave />

            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default Settings;