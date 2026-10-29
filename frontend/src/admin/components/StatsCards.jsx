import "./StatsCards.css";
import {
  FaHome,
  FaUsers,
  FaMapMarkedAlt,
  FaRupeeSign,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Properties",
    value: "124",
    icon: <FaHome />,
  },
  {
    title: "Total Enquiries",
    value: "256",
    icon: <FaUsers />,
  },
  {
    title: "Site Visits",
    value: "38",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Property Value",
    value: "₹35 Cr+",
    icon: <FaRupeeSign />,
  },
];

function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon">{stat.icon}</div>

          <div>
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;