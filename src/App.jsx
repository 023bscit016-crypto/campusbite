 import { useState } from "react";
import FoodCard from "./components/FoodCard";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };
 const foods = [
  {
    id: 1,
    name: "Chicken Momo",
    price: 150,
    image: "/images/momo.jpg",
  },
  {
    id: 2,
    name: "Chicken Chowmein",
    price: 180,
    image: "/images/chowmein.jpg",
  },
  {
    id: 3,
    name: "Burger",
    price: 200,
    image: "/images/burger.jpg",
  },
];
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Campus<span>Bite</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#orders">My Orders</a>
        </div>

        <div className="nav-actions">
          <div className="cart-button">
            🛒 <span>{cart.length}</span>
          </div>

          <div className="profile-button">
            👤
          </div>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-heading">
            YOUR CAMPUS, YOUR FOOD
          </p>

          <h1>
            Good food.
            <br />
            <span>No waiting.</span>
          </h1>

          <p className="hero-description">
            Order your favorite canteen food before you reach the counter.
            Pick it up when it's ready and skip the queue.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Order Now →
            </button>

            <button className="secondary-button">
              Explore Menu
            </button>
          </div>

          <div className="hero-info">
            <div>
              <strong>10 min</strong>
              <small>Average pickup</small>
            </div>

            <div className="info-divider"></div>

            <div>
              <strong>Fresh</strong>
              <small>Made to order</small>
            </div>
          </div>

        </div>


        {/* FOOD IMAGE AREA */}
        <div className="hero-visual">

          <div className="green-shape"></div>

           
           
           <div className="hero-food">
  <img
    src="/images/hero-food.jpg"
    alt="Fresh campus meal"
  />
</div>

          <div className="floating-card">
            <div className="check-icon">✓</div>

            <div>
              <strong>Ready for pickup</strong>
              <small>Order #104</small>
            </div>
          </div>

          <div className="decor decor-one">✦</div>
          <div className="decor decor-two">•</div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>Skip the queue in 3 simple steps.</h2>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">🍜</div>
            <h3>Choose your food</h3>
            <p>
              Browse the campus menu and select what you're craving.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">⏰</div>
            <h3>Pick a time</h3>
            <p>
              Select when you want to collect your order from the canteen.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">🎫</div>
            <h3>Grab your order</h3>
            <p>
              Get your token and collect your food when it's ready.
            </p>
          </div>

        </div>

      </section>


      {/* POPULAR FOOD */}
      <section className="menu-section" id="menu">

        <div className="menu-heading">
          <div>
            <p>STUDENT FAVORITES</p>
            <h2>Popular on campus</h2>
          </div>

          <button className="view-menu">
            View full menu →
          </button>
        </div>

        <div className="food-grid">

          {foods.map((food) => (
            <FoodCard
  key={food.id}
  name={food.name}
  price={food.price}
  image={food.image}
  onAddToCart={() => addToCart(food)}
/>
          ))}

        </div>

      </section>

    </div>
  );
}

export default App;