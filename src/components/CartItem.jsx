function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const subtotal = item.price * item.qty;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        {item.description && (
          <p className="cart-item-description">{item.description}</p>
        )}
        <p className="cart-item-price">
          Rs. {item.price} × {item.qty}
        </p>
      </div>

      <div className="cart-item-actions">
        <div className="qty-control">
          <button onClick={() => onDecrease(item.id)} aria-label="Decrease quantity">
            −
          </button>
          <span>{item.qty}</span>
          <button onClick={() => onIncrease(item.id)} aria-label="Increase quantity">
            +
          </button>
        </div>

        <p className="cart-item-subtotal">Rs. {subtotal}</p>

        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;