import "./styles/Dashboard.css";
import StatsCards from "./components/StatsCards";
import {
  FaHome,
  FaUsers,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const enquiryData = [
  { month: "Jan", enquiries: 12 },
  { month: "Feb", enquiries: 18 },
  { month: "Mar", enquiries: 25 },
  { month: "Apr", enquiries: 22 },
  { month: "May", enquiries: 30 },
  { month: "Jun", enquiries: 38 },
];

const propertyData = [
  { name: "TP Plots", value: 40 },
  { name: "DP Plots", value: 25 },
  { name: "Farm Land", value: 20 },
  { name: "Industrial", value: 15 },
];

const colors = ["#D4AF37", "#047857", "#16A34A", "#0F766E"];

const recentEnquiries = [
  {
    name: "Rahul Patil",
    property: "TP Plot",
    phone: "9876543210",
    status: "New",
  },
  {
    name: "Sneha Joshi",
    property: "Farm Land",
    phone: "9988776655",
    status: "Contacted",
  },
  {
    name: "Amit Shinde",
    property: "DP Plot",
    phone: "9765432109",
    status: "New",
  },
  {
    name: "Kiran More",
    property: "Industrial Land",
    phone: "9123456789",
    status: "Site Visit",
  },
];

const recentProperties = [
  {
    title: "Premium TP Plot - Talasari",
    location: "Talasari",
    price: "₹18 Lakhs",
  },
  {
    title: "Farm Land Near Highway",
    location: "Dahanu",
    price: "₹32 Lakhs",
  },
  {
    title: "DP Plot - Boisar",
    location: "Boisar",
    price: "₹25 Lakhs",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="admin-page-header">
        <span>DOM REALTY ADMIN</span>
        <h1>Dashboard Overview</h1>
      </div>

      <StatsCards />

      <div className="dashboard-grid">
        <div className="dashboard-card chart-card">
          <div className="card-title">
            <FaArrowUp />
            Monthly Property Enquiries
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={enquiryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="enquiries"
                stroke="#D4AF37"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card chart-card">
          <div className="card-title">
            <FaHome />
            Property Categories
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={propertyData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {propertyData.map((item, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-grid second-grid">
        <div className="dashboard-card">
          <div className="card-title">
            <FaUsers />
            Recent Enquiries
          </div>

          <table className="enquiry-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Property</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentEnquiries.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.property}</td>
                  <td>
                    <span
                      className={`status ${item.status
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-card">
          <div className="card-title">
            <FaMapMarkedAlt />
            Recently Added Properties
          </div>

          <div className="property-list">
            {recentProperties.map((property, index) => (
              <div className="property-item" key={index}>
                <div>
                  <h4>{property.title}</h4>
                  <p>{property.location}</p>
                </div>

                <span>{property.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-grid third-grid">
        <div className="dashboard-card quick-card">
          <FaPhoneAlt className="quick-icon" />

          <h3>Today's Site Visits</h3>

          <h2>08</h2>

          <p>Scheduled visits for Talasari & Boisar.</p>
        </div>

        <div className="dashboard-card quick-card">
          <FaUsers className="quick-icon" />

          <h3>New Leads This Week</h3>

          <h2>56</h2>

          <p>Potential buyers interested in TP & DP plots.</p>
        </div>

        <div className="dashboard-card quick-card">
          <FaHome className="quick-icon" />

          <h3>Total Active Listings</h3>

          <h2>124</h2>

          <p>Verified investment properties available.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;