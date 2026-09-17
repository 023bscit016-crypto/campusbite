 import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useOrders } from "../context/OrderContext";

function Orders() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <section className="orders-page">
        <div className="cart-empty">
          <p className="small-heading">MY ORDERS</p>
          <h1>You haven't placed any orders yet.</h1>
          <p className="cart-empty-text">
            Browse the menu and place your first order.
          </p>
          <Link to="/menu" className="primary-button">
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="orders-page">
      <Reveal className="orders-header">
        <span className="menu-kicker">ORDER HISTORY</span>
        <h1>
          Your <em>orders</em>
        </h1>
        <p className="orders-header-sub">
          Track your past and current pickups from CampusBite.
        </p>
      </Reveal>

      <div className="orders-list-new">
        {orders.map((order, i) => (
          <Reveal key={order.id} delay={i * 60}>
            <Link to={`/orders/${order.id}`} className="order-card">
              <div className="order-card-thumbs">
                {order.items.slice(0, 3).map((item, idx) => (
                  <img
                    key={idx}
                    src={item.image}
                    alt={item.name}
                    className="order-card-thumb"
                    style={{ zIndex: 3 - idx }}
                  />
                ))}
                {order.items.length > 3 && (
                  <span className="order-card-more">
                    +{order.items.length - 3}
                  </span>
                )}
              </div>

              <div className="order-card-info">
                <div className="order-card-top">
                  <strong>Order #{order.id}</strong>
                  <span
                    className={`status-badge status-${order.status
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="order-card-items">
                  {order.items.map((item) => item.name).join(", ")}
                </p>

                <div className="order-card-meta">
                  <span>{new Date(order.date).toLocaleDateString()}</span>
                  <span className="order-card-dot">•</span>
                  <span>Pickup {order.pickupTime}</span>
                  <span className="order-card-dot">•</span>
                  <span className="order-card-total">Rs. {order.total}</span>
                </div>
              </div>

              <span className="order-card-arrow">→</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Orders;