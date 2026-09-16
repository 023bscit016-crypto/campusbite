import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

const ORDERS_KEY = "campusbite_orders";
const COUNTER_KEY = "campusbite_order_counter";
const LAST_ORDER_KEY = "campusbite_last_order_id";

export const STATUS_STEPS = [
  "Placed",
  "Accepted",
  "Preparing",
  "Ready for Pickup",
  "Completed",
];

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      const stored = localStorage.getItem(ORDERS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  const generateOrderId = () => {
    const current = parseInt(localStorage.getItem(COUNTER_KEY) || "100", 10);
    const next = current + 1;
    localStorage.setItem(COUNTER_KEY, String(next));
    return `CB-${next}`;
  };

  const placeOrder = ({ items, subtotal, serviceFee, total, pickupTime, note }) => {
    const id = generateOrderId();
    const newOrder = {
      id,
      items,
      subtotal,
      serviceFee,
      total,
      pickupTime,
      note: note || "",
      status: "Placed",
      date: new Date().toISOString(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    localStorage.setItem(LAST_ORDER_KEY, id);
    return id;
  };

  const getOrderById = (id) => orders.find((order) => order.id === id);

  const getLastOrderId = () => localStorage.getItem(LAST_ORDER_KEY);

  const advanceOrderStatus = (id) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== id) return order;
        const currentIndex = STATUS_STEPS.indexOf(order.status);
        const nextIndex = Math.min(currentIndex + 1, STATUS_STEPS.length - 1);
        return { ...order, status: STATUS_STEPS[nextIndex] };
      })
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        getOrderById,
        getLastOrderId,
        advanceOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}