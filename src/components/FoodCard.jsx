 function FoodCard({
  name,
  price,
  image,
  onAddToCart,
  description,
  category,
  available = true,
  buttonLabel = "View",
}) {
  return (
    <div className={`food-card${!available ? " food-card-unavailable" : ""}`}>
      <div className="food-image">
        <img src={image} alt={name} />
        {category && <span className="food-category-tag">{category}</span>}
      </div>

      <div className="food-card-content">
        <div>
          <h3>{name}</h3>
          {description && <p className="food-description">{description}</p>}
          <p>Rs. {price}</p>
        </div>

        {available ? (
          <button className="view-button" onClick={onAddToCart}>
            {buttonLabel}
          </button>
        ) : (
          <span className="unavailable-tag">Unavailable</span>
        )}
      </div>
    </div>
  );
}

export default FoodCard;