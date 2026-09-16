import { useParams, Link } from "react-router-dom";
import { useOrders, STATUS_STEPS } from "../context/OrderContext";

function OrderTracking() {
  const { id } = useParams();
  const { getOrderById, advanceOrderStatus } = useOrders();
  const order = getOrderById(id);

  if (!order) {
    return (
      <section className="tracking-page">
        <div className="cart-empty">
          <p className="small-heading">ORDER TRACKING</p>
          <h1>Order not found.</h1>
          <p className="cart-empty-text">
            Check your Order history to find a valid order.
          </p>
          <Link to="/orders" className="primary-button">
            My Orders
          </Link>
        </div>
      </section>
    );
  }

  const currentIndex = STATUS_STEPS.indexOf(order.status);
  const isCompleted = order.status === "Completed";

  return (
    <section className="tracking-page">
      <div className="checkout-header">
        <p className="small-heading">ORDER TRACKING</p>
        <h1>Order #{order.id}</h1>
        <p className="checkout-subtext">
          Pickup at {order.pickupTime} · Campus Canteen
        </p>
      </div>

      <div className="tracking-card">
        <div className="progress-tracker">
          {STATUS_STEPS.map((step, index) => (
            <div
              key={step}
              className={`progress-step ${index <= currentIndex ? "completed" : ""} ${
                index === currentIndex ? "current" : ""
              }`}
            >
              <span className="progress-dot"></span>
              <span className="progress-label">{step}</span>
              {index < STATUS_STEPS.length - 1 && (
                <span className="progress-line"></span>
              )}
            </div>
          ))}
        </div>

        {!isCompleted && (
          <div className="tracking-simulate">
            <p className="tracking-note">
              No canteen staff system yet — use this to simulate status
              updates for testing.
            </p>
            <button
              className="secondary-button"
              onClick={() => advanceOrderStatus(order.id)}
            >
              Simulate: Mark as {STATUS_STEPS[currentIndex + 1]}
            </button>
          </div>
        )}

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

        <Link to="/orders" className="secondary-button">
          Back to My Orders
        </Link>
      </div>
    </section>
  );
}

export default OrderTracking;