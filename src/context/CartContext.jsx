import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cart: state,
        bookFlight: (flight) => {
          dispatch({ type: "BOOK_FLIGHT", payload: { ...flight } });
        },
        bookHotel: (hotel) => {
            console.log(hotel)
          dispatch({ type: "BOOK_HOTEL", payload: { ...hotel } });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
