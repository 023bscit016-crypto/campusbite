 import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const SERVICE_FEE = 10;

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-empty">
          <p className="small-heading">YOUR CART</p>
          <h1>Your cart is empty.</h1>
          <p className="cart-empty-text">
            Browse the menu and add something delicious.
          </p>
          <Link to="/menu" className="primary-button">
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  const total = subtotal + SERVICE_FEE;

  return (
    <section className="cart-page">
      <Reveal className="cart-page-header-new">
        <span className="menu-kicker">YOUR CART</span>
        <h1>
          Review your <em>order</em>
        </h1>
        <p className="cart-page-subtext">
          Check your items before you head to checkout.
        </p>
      </Reveal>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <CartItem
                item={item}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
                onRemove={removeFromCart}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="order-summary-wrapper">
          <div className="order-summary">
            <h2>Order Summary</h2>

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

            <Link to="/checkout" className="primary-button checkout-button">
              Proceed to Checkout →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Cart;