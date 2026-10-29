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

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminLoggedIn");

    navigate("/admin-login", { replace: true });
  };

  return (
    <aside className="admin-sidebar">

      <div className="sidebar-logo">
        <img src={logo} alt="DOM Realty" />
      </div>

      <div className="sidebar-location">
        Palghar, Maharashtra
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/admin/dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/add-property">
          <FaPlusCircle />
          <span>Add Property</span>
        </NavLink>

        <NavLink to="/admin/properties">
          <FaBuilding />
          <span>Manage Properties</span>
        </NavLink>

        <NavLink to="/admin/enquiries">
          <FaEnvelope />
          <span>Enquiries</span>
        </NavLink>

        <NavLink to="/admin/blogs">
          <FaBlog />
          <span>Blogs</span>
        </NavLink>

        <NavLink to="/admin/settings">
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