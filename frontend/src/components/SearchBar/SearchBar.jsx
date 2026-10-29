import "./SearchBar.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function SearchBar() {
  return (
    <section className="search-section">
      <div className="search-card">
        <div className="search-item">
          <label>Location</label>
          <div className="input-box">
            <FaMapMarkerAlt />
            <select>
              <option>Choose Location</option>
              <option>Palghar</option>
              <option>Boisar</option>
              <option>Dahanu</option>
              <option>Talasari</option>
            </select>
          </div>
        </div>

        <div className="search-item">
          <label>Property Type</label>
          <div className="input-box">
            <select>
              <option>Select Property</option>
              <option>TP Plot</option>
              <option>DP Plot</option>
              <option>Farm Land</option>
              <option>Industrial Land</option>
            </select>
          </div>
        </div>

        <div className="search-item">
          <label>Budget</label>
          <div className="input-box">
            <select>
              <option>Select Budget</option>
              <option>Below ₹10 Lakhs</option>
              <option>₹10–25 Lakhs</option>
              <option>₹25–50 Lakhs</option>
              <option>₹50 Lakhs+</option>
            </select>
          </div>
        </div>

        <button className="search-btn">
          <FaSearch />
          Search Property
        </button>
      </div>
    </section>
  );
}

export default SearchBar;