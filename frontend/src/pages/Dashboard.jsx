import { Link } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaPlusCircle,
  FaClipboardList,
  FaEnvelope,
  FaCog,
  FaArrowLeft,
} from "react-icons/fa";
import "../admin/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>DOM Realty Dashboard</h1>
          <p>Welcome to DOM Realty Admin Panel</p>
        </div>

        <Link to="/" className="visit-site-btn">
          <FaArrowLeft /> Visit Website
        </Link>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaBuilding className="stat-icon" />
          <div>
            <h2>120+</h2>
            <p>Total Properties</p>
          </div>
        </div>

        <div className="stat-card">
          <FaHome className="stat-icon" />
          <div>
            <h2>35</h2>
            <p>Featured Properties</p>
          </div>
        </div>

        <div className="stat-card">
          <FaEnvelope className="stat-icon" />
          <div>
            <h2>18</h2>
            <p>New Enquiries</p>
          </div>
        </div>

        <div className="stat-card">
          <FaClipboardList className="stat-icon" />
          <div>
            <h2>6</h2>
            <p>Property Categories</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="action-grid">
          <Link to="/admin/add-property" className="action-card">
            <FaPlusCircle />
            <span>Add Property</span>
          </Link>

          <Link to="/admin/properties" className="action-card">
            <FaClipboardList />
            <span>Manage Properties</span>
          </Link>

          <Link to="/admin/enquiries" className="action-card">
            <FaEnvelope />
            <span>Customer Enquiries</span>
          </Link>

          <Link to="/admin/settings" className="action-card">
            <FaCog />
            <span>Website Settings</span>
          </Link>
        </div>
      </section>

      {/* Recent Properties */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Recently Added Properties</h2>
          <Link to="/admin/properties">View All</Link>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Premium TP Plot</td>
                <td>TP Plot</td>
                <td>Talasari</td>
                <td className="status active">Featured</td>
              </tr>

              <tr>
                <td>DP Plot Boisar</td>
                <td>DP Plot</td>
                <td>Boisar</td>
                <td className="status pending">Available</td>
              </tr>

              <tr>
                <td>Farm Land Dahanu</td>
                <td>Farm Land</td>
                <td>Dahanu</td>
                <td className="status active">Featured</td>
              </tr>

              <tr>
                <td>Industrial Land MIDC</td>
                <td>Industrial Land</td>
                <td>Palghar</td>
                <td className="status pending">Available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Enquiries */}
      <div className="dashboard-card" style={{ marginTop: "25px" }}>
        <div className="card-header">
          <h2>Recent Enquiries</h2>
          <Link to="/admin/enquiries">View All</Link>
        </div>

        <div className="enquiry-list">
          <div className="enquiry-item">
            <div>
              <h4>Rahul Sharma</h4>
              <p>Interested in TP Plot - Talasari</p>
            </div>
            <span>Today</span>
          </div>

          <div className="enquiry-item">
            <div>
              <h4>Priya Patel</h4>
              <p>Looking for Farm Land in Dahanu.</p>
            </div>
            <span>Yesterday</span>
          </div>

          <div className="enquiry-item">
            <div>
              <h4>Mahesh Patil</h4>
              <p>Industrial Land enquiry in MIDC Boisar.</p>
            </div>
            <span>2 Days Ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;