import { createContext, useEffect, useState } from "react";
import { places } from "../../data/cities";
export const WishListContext = createContext(null);

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || {
      family: [],
      friends: [],
      couple: [],
      alone: [],
      discards: [],
    }
  );

  const [countries, setCountries] = useState(JSON.parse(localStorage.getItem("countries")) || places);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
    localStorage.setItem("countries", JSON.stringify(countries))
  }, [wishList]);

  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList,
        countries,
        setCountries,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContext;
