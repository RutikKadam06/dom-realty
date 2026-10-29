import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  FaUserShield,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend login
    if (
      loginData.email === "Sanjay@admin" &&
      loginData.password === "Sanjay@123"
    ) {
      alert("Login Successful!");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section className="login-page">
      {/* Left Side */}
      <div className="login-left">
        <div className="overlay">
          <p className="tag">WELCOME TO</p>

          <h1>DOM REALTY</h1>

          <h3>Admin Management Portal</h3>

          <p className="subtitle">
            Manage properties, customer enquiries, blogs and website content
            from one secure dashboard.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="login-card">
          <h2>Admin Login</h2>

          <p>Sign in to access DOM Realty Dashboard.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <FaUserShield className="icon" />

              <input
                type="email"
                name="email"
                placeholder="Admin Email"
                value={loginData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="login-btn" type="submit">
              Login to Dashboard
            </button>
          </form>

          <div className="login-footer">
            <p>DOM Realty Admin Panel</p>
            <span>Only authorized users can access this dashboard.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;