 import chickenMomo from "../assets/chickenmomo.png";
import vegMomo from "../assets/vegmomo.jpg";
import chowmein from "../assets/chowmein.png";
import chickenBurger from "../assets/chickenburger.jpg";
import vegBurger from "../assets/vegburger.jpg";
import friedRice from "../assets/fried-rice.png";
import pizza from "../assets/pizza.png";
import sandwich from "../assets/sandwich.png";
import samosa from "../assets/samosa.jpg";
import frenchFries from "../assets/frenchfries.jpg";
import thukpa from "../assets/thukpa.jpg";
import eggToast from "../assets/eggtoast.jpg";
import coldCoffee from "../assets/coldcoffee.jpg";
import milkTea from "../assets/milktea.jpg";
import brownie from "../assets/brownie.jpg";

const foods = [
  {
    id: 101,
    name: "Chicken Momo",
    description: "Steamed dumplings with chicken filling, served with tomato achar.",
    category: "Momo",
    price: 150,
    image: chickenMomo,
    available: true,
  },
  {
    id: 102,
    name: "Veg Momo",
    description: "Steamed dumplings with mixed vegetable filling.",
    category: "Momo",
    price: 130,
    image: vegMomo,
    available: true,
  },
  {
    id: 103,
    name: "Chicken Chowmein",
    description: "Stir-fried noodles tossed with chicken and vegetables.",
    category: "Meals",
    price: 180,
    image: chowmein,
    available: true,
  },
  {
    id: 104,
    name: "Chicken Burger",
    description: "Grilled chicken patty with lettuce, cheese, and house sauce.",
    category: "Meals",
    price: 210,
    image: chickenBurger,
    available: true,
  },
  {
    id: 105,
    name: "Veg Burger",
    description: "Crispy vegetable patty with lettuce and mayo.",
    category: "Meals",
    price: 170,
    image: vegBurger,
    available: true,
  },
  {
    id: 106,
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with chicken, egg, and spring onion.",
    category: "Meals",
    price: 190,
    image: friedRice,
    available: true,
  },
  {
    id: 107,
    name: "Cheese Pizza Slice",
    description: "Oven-baked slice topped with melted mozzarella.",
    category: "Meals",
    price: 190,
    image: pizza,
    available: true,
  },
  {
    id: 108,
    name: "Club Sandwich",
    description: "Triple-layer sandwich with chicken, egg, and vegetables.",
    category: "Snacks",
    price: 170,
    image: sandwich,
    available: true,
  },
  {
    id: 109,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potato and peas.",
    category: "Snacks",
    price: 40,
    image: samosa,
    available: true,
  },
  {
    id: 110,
    name: "French Fries",
    description: "Golden fries salted and served hot.",
    category: "Snacks",
    price: 120,
    image: frenchFries,
    available: true,
  },
  {
    id: 111,
    name: "Thukpa",
    description: "Warm Tibetan noodle soup with vegetables and chicken.",
    category: "Meals",
    price: 160,
    image: thukpa,
    available: false,
  },
  {
    id: 112,
    name: "Egg Toast",
    description: "Buttered toast with a fried egg, served with ketchup.",
    category: "Breakfast",
    price: 80,
    image: eggToast,
    available: true,
  },
  {
    id: 113,
    name: "Cold Coffee",
    description: "Chilled blended coffee topped with cream.",
    category: "Drinks",
    price: 110,
    image: coldCoffee,
    available: true,
  },
  {
    id: 114,
    name: "Milk Tea",
    description: "Classic spiced milk tea, brewed fresh.",
    category: "Drinks",
    price: 40,
    image: milkTea,
    available: true,
  },
  {
    id: 115,
    name: "Brownie",
    description: "Fudgy chocolate brownie, baked daily.",
    category: "Desserts",
    price: 90,
    image: brownie,
    available: true,
  },
];

export default foods;