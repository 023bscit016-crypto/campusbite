 function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const subtotal = item.price * item.qty;

  return (
    <div className="cart-item-new">
      <div className="cart-item-image-new">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-details-new">
        <h3>{item.name}</h3>
        {item.description && (
          <p className="cart-item-description-new">{item.description}</p>
        )}
        <button className="remove-button-new" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>

      <div className="cart-item-right">
        <div className="qty-control-new">
          <button onClick={() => onDecrease(item.id)} aria-label="Decrease quantity">
            −
          </button>
          <span>{item.qty}</span>
          <button onClick={() => onIncrease(item.id)} aria-label="Increase quantity">
            +
          </button>
        </div>
        <p className="cart-item-subtotal-new">Rs. {subtotal}</p>
      </div>
    </div>
  );
}

export default CartItem;