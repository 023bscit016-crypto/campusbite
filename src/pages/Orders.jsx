import { Link } from "react-router-dom";
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
      <div className="checkout-header">
        <p className="small-heading">MY ORDERS</p>
        <h1>Your order history</h1>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-row" key={order.id}>
            <div className="order-row-main">
              <strong>Order #{order.id}</strong>
              <span className="order-row-date">
                {new Date(order.date).toLocaleDateString()} · Pickup{" "}
                {order.pickupTime}
              </span>
            </div>

            <div className="order-row-status">
              <span className={`status-badge status-${order.status.replace(/\s+/g, "-").toLowerCase()}`}>
                {order.status}
              </span>
            </div>

            <div className="order-row-total">Rs. {order.total}</div>

            <Link to={`/orders/${order.id}`} className="view-button">
              View Order
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Orders;