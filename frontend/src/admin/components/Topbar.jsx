import {
  FaSearch,
  FaBell,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";
import "./Topbar.css";

function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="topbar">

      <div className="topbar-left">

        <button className="menu-btn">
          <FaBars />
        </button>

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search properties, enquiries..."
          />
        </div>

      </div>

      <div className="topbar-right">

        <div className="date-box">
          <span>Today</span>
          <h4>{today}</h4>
        </div>

        <div className="notification-box">
          <FaBell />

          <span className="notification-count">3</span>
        </div>

        <div className="admin-profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h5>Admin</h5>
            <span>DOM Realty</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;