
import {
  FaSearch,
  FaBell,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";
import "./Topbar.css";

function Topbar({ onMenuClick, sidebarOpen = false }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="menu-btn"
          onClick={onMenuClick}
          aria-label={
            sidebarOpen ? "Close admin menu" : "Open admin menu"
          }
          aria-expanded={sidebarOpen}
          aria-controls="admin-sidebar"
        >
          <FaBars />
        </button>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search properties..."
            aria-label="Search properties and enquiries"
          />
        </div>

        <div
          className="notification-box"
          role="img"
          aria-label="3 notifications"
          title="3 notifications"
        >
          <FaBell />
          <span className="notification-count">3</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="date-box">
          <span>Today</span>
          <h4>{today}</h4>
        </div>

        <div className="admin-profile">
          <FaUserCircle className="profile-icon" />
          <div className="profile-details">
            <h5>Admin</h5>
            <span>DOM Realty</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
