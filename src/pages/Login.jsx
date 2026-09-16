import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PasswordInput from "../components/PasswordInput";
import heroFood from "../assets/hero-food.png";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email address.";
    if (!password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const result = login({ email, password });
    if (!result.success) {
      setFormError(result.error);
      return;
    }

    navigate("/menu");
  };

  return (
    <section className="auth-page">
      <div className="auth-layout">
        <div className="auth-visual">
          <img src={heroFood} alt="Fresh campus meal" />
          <div className="auth-visual-overlay">
            <p className="small-heading">CAMPUSBITE</p>
            <h2>Good food. No waiting.</h2>
            <p>Order ahead, skip the queue, and pick up fresh food between classes.</p>
          </div>
        </div>

        <div className="auth-form-side">
          <div className="auth-form-box">
            <p className="small-heading">WELCOME BACK</p>
            <h1>Log in to CampusBite</h1>
            <p className="auth-subtext">Log in to continue ordering from CampusBite.</p>

            {formError && <p className="form-banner-error">{formError}</p>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@college.edu"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>

              <PasswordInput
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                error={errors.password}
              />

              <div className="auth-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="auth-link">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="primary-button auth-submit">
                Log In
              </button>
            </form>

            <p className="auth-switch">
              Don't have an account? <Link to="/register">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;