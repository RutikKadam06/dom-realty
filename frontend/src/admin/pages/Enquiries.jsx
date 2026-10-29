
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";

import API from "../../services/api";
import "./AdminPages.css";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.get("/enquiries");
      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.enquiries || res.data?.data || [];

      setEnquiries(data);
    } catch (err) {
      console.error(
        "Failed to fetch enquiries:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data?.message ||
          "Unable to load enquiries. Please check the backend."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const filtered = enquiries.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name?.toLowerCase().includes(query) ||
      item.phone?.includes(search) ||
      item.email?.toLowerCase().includes(query) ||
      item.propertyType?.toLowerCase().includes(query) ||
      item.message?.toLowerCase().includes(query)
    );
  });

  const deleteEnquiry = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await API.delete(`/enquiries/${id}`);
      setEnquiries((previous) =>
        previous.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.error("Delete enquiry error:", err);
      alert(
        "Unable to delete enquiry. The backend may not have a DELETE route."
      );
    }
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <span className="breadcrumb">Dashboard / Enquiries</span>
          <h1>Customer Enquiries</h1>
          <p>
            Manage all customer enquiries received from the website.
          </p>
        </div>
      </div>

      <div className="admin-card">
        <div className="search-input enquiry-search">
          <FaSearch />
          <input
            type="search"
            placeholder="Search by name, phone, email or property..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="empty-state">
          <p>Loading enquiries...</p>
        </div>
      ) : error ? (
        <div className="empty-state">
          <h3>Could not load enquiries</h3>
          <p>{error}</p>
          <button type="button" onClick={fetchEnquiries}>
            Try Again
          </button>
        </div>
      ) : (
        <>
          <p>
            Total enquiries: <strong>{enquiries.length}</strong>
          </p>

          <div className="enquiry-grid">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <h3>
                  {enquiries.length === 0
                    ? "No Enquiries Yet"
                    : "No Matching Enquiries"}
                </h3>
                <p>
                  {enquiries.length === 0
                    ? "New website enquiries will appear here after they are saved."
                    : "Try a different search term."}
                </p>
              </div>
            ) : (
              filtered.map((item) => (
                <div className="enquiry-box" key={item._id}>
                  <div className="enquiry-top">
                    <FaUserCircle className="user-avatar" />
                    <div>
                      <h3>{item.name || "Unnamed Customer"}</h3>
                      <span className="status-badge new">
                        {item.status || "New"}
                      </span>
                    </div>
                  </div>

                  <div className="enquiry-detail">
                    <FaPhone />
                    <span>{item.phone || "No phone provided"}</span>
                  </div>

                  <div className="enquiry-detail">
                    <FaEnvelope />
                    <span>{item.email || "No email provided"}</span>
                  </div>

                  {item.propertyType && (
                    <div className="message-box">
                      <label>Property Type</label>
                      <p>{item.propertyType}</p>
                    </div>
                  )}

                  {item.message && (
                    <div className="message-box">
                      <label>Customer Message</label>
                      <p>{item.message}</p>
                    </div>
                  )}

                  {item.createdAt && (
                    <p className="enquiry-date">
                      Received: {new Date(item.createdAt).toLocaleString()}
                    </p>
                  )}

                  <button
                    type="button"
                    className="delete-enquiry-btn"
                    onClick={() => deleteEnquiry(item._id)}
                  >
                    <FaTrash /> Delete Enquiry
                  </button>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Enquiries;
