import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishListGroup } from "../../components/WishListGroup";
import WishListContext from "../../context/WishListContext/WishListContext";

export const WishList = () => {
  const { wishList, setWishList } = useContext(WishListContext);
  const { family, friends, couple, alone, discards } = wishList;
  return (
    <div>
      <Link
        to="/"
        className="absolute top-[1vh] right-[1vw] text-gray-500 text-lg md:text-xl"
      >
        GO TO WISH PICKER
      </Link>
      <div className="p-8">
        <WishListGroup title="Family" type={family} tag="family"/>
        <WishListGroup title="Friends" type={friends} tag="friends"/>
        <WishListGroup title="Couple" type={couple} tag="couple"/>
        <WishListGroup title="Alone" type={alone} tag="alone"/>
        <WishListGroup title="Discards" type={discards} tag="discards"/>
      </div>
    </div>
  );
};
