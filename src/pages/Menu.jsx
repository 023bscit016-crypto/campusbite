 import { useState, useMemo } from "react";
import FoodCard from "../components/FoodCard";
import CategoryFilter from "../components/CategoryFilter";
import Reveal from "../components/Reveal";
import { useCart } from "../context/CartContext";
import foods from "../data/foods";

const categories = ["All", "Breakfast", "Momo", "Meals", "Snacks", "Drinks", "Desserts"];

function flyToCart(startRect) {
  const cartBtn = document.querySelector(".cart-button");
  if (!cartBtn || !startRect) return;

  const cartRect = cartBtn.getBoundingClientRect();
  const flyer = document.createElement("div");
  flyer.className = "fly-to-cart";
  flyer.style.left = `${startRect.left + startRect.width / 2 - 8}px`;
  flyer.style.top = `${startRect.top + startRect.height / 2 - 8}px`;
  document.body.appendChild(flyer);

  requestAnimationFrame(() => {
    const dx = cartRect.left + cartRect.width / 2 - (startRect.left + startRect.width / 2);
    const dy = cartRect.top + cartRect.height / 2 - (startRect.top + startRect.height / 2);
    flyer.style.transform = `translate(${dx}px, ${dy}px) scale(0.2)`;
    flyer.style.opacity = "0.15";
  });

  setTimeout(() => flyer.remove(), 650);
}

function Menu() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat] = cat === "All" ? foods.length : foods.filter((f) => f.category === cat).length;
      return acc;
    }, {});
  }, []);

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesCategory = activeCategory === "All" || food.category === activeCategory;
      const matchesSearch = food.name.toLowerCase().includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleAdd = (food, e) => {
    const imgEl = e.currentTarget.closest(".food-card")?.querySelector("img");
    if (imgEl) flyToCart(imgEl.getBoundingClientRect());
    addToCart(food);
  };

  return (
    <div className="menu-layout">
      <aside className="menu-sidebar">
        <p className="menu-sidebar-title">Categories</p>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          counts={counts}
        />
      </aside>

      <div className="menu-main">
        <Reveal className="menu-editorial-header">
          <span className="menu-kicker">CAMPUS MENU</span>
          <h1>
            What's on the menu <em>today?</em>
          </h1>
          <p className="menu-editorial-sub">
            Browse everything the canteen has, filter by category, and
            pre-order so it's ready the moment you arrive.
          </p>

           <div className="menu-search-editorial">
  <input
    type="text"
    placeholder="Search for something delicious..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button className="menu-search-btn" aria-label="Search">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>
</div>
        </Reveal>

        {filteredFoods.length === 0 ? (
          <p className="no-results">No food matches your search.</p>
        ) : (
          <div className="menu-food-grid-editorial">
            {filteredFoods.map((food, i) => (
  <Reveal key={food.id} delay={(i % 6) * 60}>
    <FoodCard
      name={food.name}
      description={food.description}
      category={food.category}
      price={food.price}
      image={food.image}
      available={food.available}
      buttonLabel="Add"
      onAddToCart={(e) => handleAdd(food, e)}
    />
  </Reveal>
))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;