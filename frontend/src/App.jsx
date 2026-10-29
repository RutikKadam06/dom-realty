import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DPPlots from "./pages/DPPlots";
import FarmLand from "./pages/FarmLand";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import TPPlots from "./pages/TPPlots";

import Login from "./admin/Login";
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/Dashboard";
import AddProperty from "./admin/pages/AddProperty";
import PropertyList from "./admin/pages/PropertyList";
import EditProperty from "./admin/pages/EditProperty";
import Enquiries from "./admin/pages/Enquiries";
import Blogs from "./admin/pages/Blogs";
import Settings from "./admin/pages/Settings";

function App() {
  return (
    <Routes>

      {/* ==================== PUBLIC WEBSITE ==================== */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/blog"
        element={<Blog />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/tp-plots"
        element={<TPPlots />}
      />

      <Route
        path="/dp-plots"
        element={<DPPlots />}
      />

      <Route
        path="/farm-land"
        element={<FarmLand />}
      />

      <Route
        path="/properties"
        element={<Properties />}
      />

      <Route
        path="/property/:id"
        element={<PropertyDetails />}
      />


      {/* ==================== ADMIN LOGIN ==================== */}

      <Route
        path="/admin-login"
        element={<Login />}
      />


      {/* ==================== ADMIN PANEL ==================== */}

      <Route
        path="/admin"
        element={<AdminLayout />}
      >

        <Route
          index
          element={
            <Navigate
              to="/admin/dashboard"
              replace
            />
          }
        />

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="add-property"
          element={<AddProperty />}
        />

        <Route
          path="properties"
          element={<PropertyList />}
        />

        <Route
          path="edit-property/:id"
          element={<EditProperty />}
        />

        <Route
          path="enquiries"
          element={<Enquiries />}
        />

        <Route
          path="blogs"
          element={<Blogs />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />

      </Route>


      {/* ==================== FALLBACK ==================== */}

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;