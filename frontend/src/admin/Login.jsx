import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      if (!formData.email || !formData.password) {
        setError("Please enter your email and password.");
        setLoading(false);
        return;
      }

      if (
        formData.email === "Sanjay@admin" &&
        formData.password === "Sanjay@123"
      ) {
        localStorage.setItem("adminToken", "demo-admin-token");
        localStorage.setItem("adminLoggedIn", "true");

        navigate("/admin/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-overlay"></div>

        <div className="login-container">
          <div className="login-card">
            <div className="login-logo">
              <img src={logo} alt="DOM Realty" />
            </div>

            <div className="login-heading">
              <span>DOM REALTY</span>
              <h1>Admin Login</h1>
              <p>Welcome back. Access your property management dashboard.</p>
            </div>

            {error && <div className="login-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="login-input-group">
                <label>Email Address</label>

                <div className="login-input">
                  <FaEnvelope />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="login-input-group">
                <label>Password</label>

                <div className="login-input">
                  <FaLock />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button type="button" className="forgot-password">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="login-footer">
              <p>DOM Realty</p>
              <span>Your Land, Our Priority.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;