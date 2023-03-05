import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";
import { types } from "../types/types";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const bookFlight = (flight) => {
    dispatch({ type: types.bookFlight, payload: { ...flight } });
  };

  const bookHotel = (hotel) => {
    dispatch({ type: types.bookHotel, payload: { ...hotel } });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        bookFlight,
        bookHotel,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
