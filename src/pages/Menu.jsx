 import { useState, useMemo } from "react";
import FoodCard from "../components/FoodCard";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import foods from "../data/foods";

const categories = ["All", "Breakfast", "Momo", "Meals", "Snacks", "Drinks", "Desserts"];

function Menu() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesCategory =
        activeCategory === "All" || food.category === activeCategory;
      const matchesSearch = food.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="menu-page">
      <div className="menu-page-header">
        <p className="small-heading">CAMPUS MENU</p>
        <h1>What's on the menu?</h1>
        <p className="menu-page-subtext">
          Browse everything the canteen has today, filter by category, and
          pre-order so it's ready the moment you arrive.
        </p>

        <input
          type="text"
          className="search-input"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      {filteredFoods.length === 0 ? (
        <p className="no-results">No food matches your search.</p>
      ) : (
        <div className="food-grid menu-food-grid">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              description={food.description}
              category={food.category}
              price={food.price}
              image={food.image}
              available={food.available}
              buttonLabel="Add"
              onAddToCart={() => addToCart(food)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;