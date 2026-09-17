 function FoodCard({
  name,
  price,
  image,
  onAddToCart,
  description,
  category,
  available = true,
  buttonLabel = "View",
  featured = false,
  background,
}) {
  return (
    <div
      className={`food-card${!available ? " food-card-unavailable" : ""}${
        featured ? " food-card-featured" : ""
      }`}
      style={background ? { background } : undefined}
    >
      <div className="food-image">
        <img src={image} alt={name} />
        {category && <span className="food-category-tag">{category}</span>}
        {description && (
          <div className="food-hover-overlay">
            <p>{description}</p>
          </div>
        )}
      </div>

      <div className="food-card-content">
        <div>
          <h3>{name}</h3>
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