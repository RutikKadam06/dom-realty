import "./PropertyFilters.css";

function PropertyFilters({ filters, setFilters }) {
  return (
    <div className="filters">

      <input
        placeholder="Search location..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="">All Categories</option>
        <option value="TP Plot">TP Plot</option>
        <option value="DP Plot">DP Plot</option>
        <option value="Farm Land">Farm Land</option>
        <option value="Industrial Land">Industrial Land</option>
      </select>

      <select
        value={filters.price}
        onChange={(e) =>
          setFilters({ ...filters, price: e.target.value })
        }
      >
        <option value="">All Budget</option>
        <option value="20">Under ₹20 Lakhs</option>
        <option value="30">Under ₹30 Lakhs</option>
        <option value="50">Under ₹50 Lakhs</option>
      </select>

    </div>
  );
}

export default PropertyFilters;