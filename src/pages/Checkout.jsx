 import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import Reveal from "../components/Reveal";

const SERVICE_FEE = 10;

const TIME_SLOTS = [
  "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
  "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM",
];

function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const [pickupTime, setPickupTime] = useState(null);
  const [note, setNote] = useState("");
  const [timeError, setTimeError] = useState(false);

  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <div className="cart-empty">
          <p className="small-heading">CHECKOUT</p>
          <h1>Your cart is empty.</h1>
          <p className="cart-empty-text">
            Add something from the menu before checking out.
          </p>
          <Link to="/menu" className="primary-button">
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  const total = subtotal + SERVICE_FEE;

  const handlePlaceOrder = () => {
    if (!pickupTime) {
      setTimeError(true);
      return;
    }

    const orderId = placeOrder({
      items: cart,
      subtotal,
      serviceFee: SERVICE_FEE,
      total,
      pickupTime,
      note,
    });

    clearCart();
    navigate("/order-confirmation", { state: { orderId } });
  };

  return (
    <section className="checkout-page">
      <Reveal className="checkout-header-new">
        <span className="menu-kicker">CHECKOUT</span>
        <h1>
          Confirm your <em>pickup</em>
        </h1>
        <p className="checkout-subtext">
          Review your order and choose when you'll collect it.
        </p>
      </Reveal>

      <div className="checkout-layout">
        <div className="checkout-main">
          <Reveal className="checkout-card" delay={60}>
            <h2>Pickup Information</h2>
            <div className="pickup-location">
              <span className="pickup-label">Pickup Location</span>
              <strong>Campus Canteen</strong>
            </div>

            <span className="pickup-label">Select a pickup time</span>
            <div className="time-slot-grid">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  className={`time-slot ${pickupTime === slot ? "active" : ""}`}
                  onClick={() => {
                    setPickupTime(slot);
                    setTimeError(false);
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
            {timeError && (
              <p className="field-error">Please select a pickup time to continue.</p>
            )}
          </Reveal>

          <Reveal className="checkout-card" delay={120}>
            <h2>Order Note (optional)</h2>
            <textarea
              className="order-note-input"
              placeholder="Add a note for the canteen, e.g. Less spicy please"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
            />
          </Reveal>
        </div>

        <Reveal delay={180} className="order-summary-wrapper">
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="checkout-items">
              {cart.map((item) => (
                <div className="checkout-item-row" key={item.id}>
                  <span>{item.name} × {item.qty}</span>
                  <span>Rs. {item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Service Fee</span>
              <span>Rs. {SERVICE_FEE}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>

            <button className="primary-button checkout-button" onClick={handlePlaceOrder}>
              Place Order →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Checkout;