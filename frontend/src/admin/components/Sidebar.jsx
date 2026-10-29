
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBuilding,
  FaEnvelope,
  FaBlog,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import "./Sidebar.css";

function Sidebar({ isOpen = false, onClose = () => {} }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminLoggedIn");
    onClose();
    navigate("/admin-login", { replace: true });
  };

  const handleNavigation = () => {
    onClose();
  };

  return (
    <aside
      id="admin-sidebar"
      className={`admin-sidebar ${isOpen ? "sidebar-open" : ""}`}
      aria-label="Admin navigation"
    >
      <div className="sidebar-logo">
        <img src={logo} alt="DOM Realty" />
      </div>

      <div className="sidebar-location">Palghar, Maharashtra</div>

      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" onClick={handleNavigation}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/add-property" onClick={handleNavigation}>
          <FaPlusCircle />
          <span>Add Property</span>
        </NavLink>

        <NavLink to="/admin/properties" onClick={handleNavigation}>
          <FaBuilding />
          <span>Manage Properties</span>
        </NavLink>

        <NavLink to="/admin/enquiries" onClick={handleNavigation}>
          <FaEnvelope />
          <span>Enquiries</span>
        </NavLink>

        <NavLink to="/admin/blogs" onClick={handleNavigation}>
          <FaBlog />
          <span>Blogs</span>
        </NavLink>

        <NavLink to="/admin/settings" onClick={handleNavigation}>
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
