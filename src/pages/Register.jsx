import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PasswordInput from "../components/PasswordInput";
import heroFood from "../assets/hero-food.png";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!email.trim()) newErrors.email = "Student email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email address.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    if (!agreed) newErrors.agreed = "You must agree to the Terms & Conditions.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const result = register({ name, email, password });
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
            <h2>Order ahead. Skip the queue.</h2>
            <p>Join CampusBite and get your favorite canteen food ready the moment you arrive.</p>
          </div>
        </div>

        <div className="auth-form-side">
          <div className="auth-form-box">
            <p className="small-heading">JOIN CAMPUSBITE</p>
            <h1>Create your account</h1>
            <p className="auth-subtext">Order ahead. Skip the queue.</p>

            {formError && <p className="form-banner-error">{formError}</p>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <p className="field-error">{errors.name}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="reg-email">Student Email</label>
                <input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@college.edu"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>

              <PasswordInput
                id="reg-password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                error={errors.password}
              />

              <PasswordInput
                id="confirm-password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                error={errors.confirmPassword}
              />

              <div className="form-field">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  I agree to the Terms &amp; Conditions
                </label>
                {errors.agreed && <p className="field-error">{errors.agreed}</p>}
              </div>

              <button type="submit" className="primary-button auth-submit">
                Create Account
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;