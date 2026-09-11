 function FoodCard({ name, price, image, onAddToCart }) {
  return (
    <div className="food-card">
      <div className="food-image">
        <img src={image} alt={name} />
      </div>

      <div className="food-card-content">
        <div>
          <h3>{name}</h3>
          <p>Rs. {price}</p>
        </div>

        <button onClick={onAddToCart}>+</button>
      </div>
    </div>
  );
}

export default FoodCard;