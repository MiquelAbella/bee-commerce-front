import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    flight: {
      origin: null,
      destination: null,
      price: null,
      passengers: null,
      date: null,
    },
    accomodation: {
      city: null,
      hotel: null,
      price: null,
      image: null,
      people: null,
      startDate: null,
      endDate: null,
    },
  });
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
