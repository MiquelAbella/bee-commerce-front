import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    //     {
    //     flight: {
    //       origin: null,
    //       destination: null,
    //       price: null,
    //       passengers: null,
    //       date: null,
    //     },
    //     accomodation: {
    //       city: null,
    //       hotel: null,
    //       price: null,
    //       image: null,
    //       people: null,
    //       startDate: null,
    //       endDate: null,
    //     },
    //   }
    {
      flight: {
        origin: "Andorra la Vella",
        destination: "Algiers",
        startDate: "2023-02-02",
        endDate: "2023-02-03",
        price: 650,
        passengers: "5",
        country: "Algeria",
      },
      accomodation: {
        destination: "Algiers",
        startDate: "2023-01-01",
        endDate: "2024-02-02",
        people: 4,
        price: 23,
        name: "Wilderness Vanguard",
        country: "Algeria",
      },
    }
  );
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
