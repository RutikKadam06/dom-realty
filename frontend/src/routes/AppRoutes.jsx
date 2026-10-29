import { Routes, Route } from "react-router-dom";

// Website Pages
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import TPPlots from "../pages/TPPlots";
import DPPlots from "../pages/DPPlots";
import FarmLand from "../pages/FarmLand";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

// Admin Pages
import AdminLogin from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import PropertyList from "../admin/pages/PropertyList";
import AddProperty from "../admin/pages/AddProperty";
import EditProperty from "../admin/pages/EditProperty";
import Enquiries from "../admin/pages/Enquiries";
import Blogs from "../admin/pages/Blogs";
import Settings from "../admin/pages/Settings";

function AppRoutes() {
  return (
    <Routes>

      {/* Website Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/tp-plots" element={<TPPlots />} />
      <Route path="/dp-plots" element={<DPPlots />} />
      <Route path="/farm-land" element={<FarmLand />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Dashboard */}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />

      {/* Property Management */}
      <Route path="/admin/properties" element={<PropertyList />} />
      <Route path="/admin/add-property" element={<AddProperty />} />
      <Route path="/admin/edit-property/:id" element={<EditProperty />} />

      {/* Customer Enquiries */}
      <Route path="/admin/enquiries" element={<Enquiries />} />

      {/* Blog Management */}
      <Route path="/admin/blogs" element={<Blogs />} />

      {/* Website Settings */}
      <Route path="/admin/settings" element={<Settings />} />

    </Routes>
  );
}

export default AppRoutes;