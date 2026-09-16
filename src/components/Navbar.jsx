 import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartCount } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Campus<span>Bite</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/#why">Why CampusBite</Link>
      </div>

      <div className="nav-actions">
        <Link to="/cart" className="cart-button" aria-label="View cart">
          🛒 <span>{cartCount}</span>
        </Link>

        {isLoggedIn ? (
          <div className="nav-account" onClick={() => setMenuOpen((v) => !v)}>
            <div className="profile-button" aria-label="Account menu">
              {user.name.charAt(0).toUpperCase()}
            </div>
            {menuOpen && (
              <div className="account-dropdown">
                <p className="account-greeting">Hi, {user.name.split(" ")[0]}</p>
                <Link to="/orders" onClick={() => setMenuOpen(false)}>
                  My Orders
                </Link>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="secondary-button nav-auth-btn">
              Log In
            </Link>
            <Link to="/register" className="primary-button nav-order-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;