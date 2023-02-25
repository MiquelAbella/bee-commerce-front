import { createContext, useState } from "react";
import { places } from "../../data/cities";
export const WishListContext = createContext(null);

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState({
    family: [],
    friends: [],
    couple: [],
    alone: [],
    discards: [],
  });

  const [countries, setCountries] = useState(places);

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
