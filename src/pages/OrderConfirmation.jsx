import { useLocation, useNavigate, Link } from "react-router-dom";
import { useOrders, STATUS_STEPS } from "../context/OrderContext";

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { getOrderById, getLastOrderId } = useOrders();

  const orderId = location.state?.orderId || getLastOrderId();
  const order = orderId ? getOrderById(orderId) : null;

  if (!order) {
    return (
      <section className="confirmation-page">
        <div className="cart-empty">
          <p className="small-heading">ORDER CONFIRMATION</p>
          <h1>No recent order found.</h1>
          <p className="cart-empty-text">
            Place an order from the menu to see your confirmation here.
          </p>
          <Link to="/menu" className="primary-button">
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-check">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="confirmation-subtext">
          Your order has been placed successfully.
        </p>

        <div className="confirmation-order-id">Order #{order.id}</div>

        <div className="confirmation-pickup">
          <div>
            <span className="pickup-label">Pickup at</span>
            <strong>{order.pickupTime}</strong>
          </div>
          <div>
            <span className="pickup-label">Location</span>
            <strong>Campus Canteen</strong>
          </div>
        </div>

        <div className="confirmation-summary">
          <h2>Order Summary</h2>
          {order.items.map((item) => (
            <div className="checkout-item-row" key={item.id}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>Rs. {item.price * item.qty}</span>
            </div>
          ))}

          <div className="summary-divider"></div>

          <div className="summary-row summary-total">
            <span>Total</span>
            <span>Rs. {order.total}</span>
          </div>
        </div>

        <div className="confirmation-status">
          <h2>Order Status</h2>
          <ul className="status-list">
            {STATUS_STEPS.map((step) => (
              <li
                key={step}
                className={step === order.status ? "status-active" : ""}
              >
                <span className="status-dot"></span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="confirmation-buttons">
          <button
            className="primary-button"
            onClick={() => navigate(`/orders/${order.id}`)}
          >
            Track Order
          </button>
          <Link to="/menu" className="secondary-button">
            Back to Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderConfirmation;