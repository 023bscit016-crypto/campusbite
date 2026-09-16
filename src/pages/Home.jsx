 import { Link } from "react-router-dom";
import { useEffect } from "react";
import FoodCard from "../components/FoodCard";
import Reveal from "../components/Reveal";
import { useCart } from "../context/CartContext";

import chickenMomo from "../assets/chickenmomo.png";
import chowmein from "../assets/chowmein.png";
import chickenBurger from "../assets/chickenburger.jpg";
import friedRice from "../assets/fried-rice.png";
import pizza from "../assets/pizza.png";
import sandwich from "../assets/sandwich.png";
import coldCoffee from "../assets/coldcoffee.jpg";
import snacks from "../assets/snacks.png";
import heroFood from "../assets/hero-food.png";

function Home() {
  const { addToCart } = useCart();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  const foods = [
    { id: 1, name: "Chicken Momo", price: 150, image: chickenMomo },
    { id: 2, name: "Chicken Chowmein", price: 180, image: chowmein },
    { id: 3, name: "Campus Burger", price: 200, image: chickenBurger },
    { id: 4, name: "Veg Fried Rice", price: 160, image: friedRice },
    { id: 5, name: "Cheese Pizza Slice", price: 190, image: pizza },
    { id: 6, name: "Club Sandwich", price: 170, image: sandwich },
  ];

  const categories = [
    { name: "Momo", image: chickenMomo },
    { name: "Noodles", image: chowmein },
    { name: "Burgers", image: chickenBurger },
    { name: "Rice bowls", image: friedRice },
    { name: "Snacks", image: snacks },
    { name: "Drinks", image: coldCoffee },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-heading fade-in-up">YOUR CAMPUS, YOUR FOOD</p>

          <h1 className="fade-in-up delay-1">
            Good food.
            <br />
            <span>No waiting.</span>
          </h1>

          <p className="hero-description fade-in-up delay-2">
            Order your favorite canteen food before you reach the counter.
            Pick it up when it's ready and skip the queue.
          </p>

          <div className="hero-buttons fade-in-up delay-3">
            <Link to="/menu" className="primary-button">
              Order Now →
            </Link>
            <Link to="/menu" className="secondary-button">
              Explore Menu
            </Link>
          </div>

          <div className="hero-info fade-in-up delay-4">
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

        <div className="hero-visual fade-in-scale delay-2">
          <div className="green-shape grain-texture"></div>

          <div className="hero-food">
            <img src={heroFood} alt="Fresh campus meal" />
          </div>

          <div className="floating-card float-anim">
            <div className="check-icon">✓</div>
            <div>
              <strong>Ready for pickup</strong>
              <small>Order #104</small>
            </div>
          </div>

          <div className="decor decor-one spin-slow">✦</div>
          <div className="decor decor-two pulse-anim">•</div>
        </div>
      </section>

      {/* POPULAR FOOD */}
      <section className="menu-section" id="menu">
        <Reveal className="menu-heading">
          <div>
            <p>STUDENT FAVORITES</p>
            <h2>Popular on campus</h2>
          </div>

          <a href="#categories" className="view-menu">
            Browse categories →
          </a>
        </Reveal>

        <div className="food-grid">
          {foods.map((food, i) => (
            <Reveal key={food.id} delay={i * 80}>
              <FoodCard
                name={food.name}
                price={food.price}
                image={food.image}
                onAddToCart={() => addToCart(food)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section" id="categories">
        <Reveal className="section-heading">
          <p>CAMPUS MENU</p>
          <h2>Food categories</h2>
        </Reveal>

        <div className="categories-grid">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60}>
              <div className="category-card">
                <img src={cat.image} alt={cat.name} />
                <span>{cat.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CAMPUSBITE */}
      <section className="why-section" id="why">
        <div className="why-grid">
          <Reveal className="why-content">
            <p>WHY CAMPUSBITE</p>
            <h2>Built for hungry students between classes.</h2>
            <p className="why-description">
              CampusBite is the faster way to eat on campus — order ahead,
              skip the line, and pick up a hot meal without wasting your
              break.
            </p>
            <button className="primary-button">Start ordering</button>
          </Reveal>

          <Reveal className="why-image" delay={150}>
            <img src={friedRice} alt="Fresh campus bowl" />
          </Reveal>
        </div>
        <div className="why-features">
          {[
            { num: "01", title: "Skip the queue", text: "Place your order on the way and walk straight to pickup." },
            { num: "02", title: "Made for campus", text: "Student-friendly portions, prices, and canteen timings." },
            { num: "03", title: "Fresh, not leftover", text: "Meals are prepared when you order, not sitting on a tray." },
            { num: "04", title: "Ready when you are", text: "Grab it between classes with a clear pickup status." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="why-feature">
                <span className="why-feature-num">{f.num}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer grain-texture">
        <div className="footer-grid">
          <div>
            <div className="logo footer-logo">
              Campus<span>Bite</span>
            </div>
            <p>
              Fresh campus meals, ordered ahead and ready at the counter.
              Skip the queue and get back to your day.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="#menu">Popular food</a>
            <a href="#categories">Categories</a>
            <a href="#why">Why CampusBite</a>
          </div>

          <div>
            <h4>Campus hours</h4>
            <p>Mon – Fri · 8:00 AM – 6:00 PM</p>
            <p>Sat · 9:00 AM – 3:00 PM</p>
            <p>Pickup at the main canteen counter</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 CampusBite. Made for campus life.
        </div>
      </footer>
    </>
  );
}

export default Home;