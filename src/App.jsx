 import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderTracking from "./pages/OrderTracking";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <div className="app">
              <CustomCursor />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/orders/:id" element={<OrderTracking />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;