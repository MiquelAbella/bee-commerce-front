import React, { useContext, useState } from "react";
import WishListContext from "../../context/WishListContext/WishListContext";
import { Button } from "./Button";
import Confetti from "react-confetti";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ButtonsGroup = ({ countries, setCountries }) => {
  const { wishList, setWishList } = useContext(WishListContext);
  const [pieces, setPieces] = useState(0);
  const [color, setColor] = useState("");
  const { width, height } = useWindowSize();

  const handleSaveTrip = (e) => {
    const currentCountry = countries[countries.length - 1];
    setCountries(
      countries.filter((country) => country.id !== currentCountry.id)
    );
    setWishList({
      ...wishList,
      [e.target.name]: [...wishList[e.target.name], currentCountry],
    });
    setPieces(500);
    setTimeout(() => {
      setPieces(0);
    }, 1000);
  };

  return (
    <div className="w-full p-2 md:p-0 md:w-3/4 gap-4 grid grid-cols-3 md:grid-cols-5 mb-10 md:mb-12">
      <Confetti
        colors={color}
        numberOfPieces={pieces}
        gravity={0.2}
        width={width}
        height={height}
      />
      <Button
        text="Family"
        name="family"
        onClick={(e) => {
          handleSaveTrip(e);
          setColor(["#0c4a6e", "#075985", "#0ea5e9", "#93c5fd"]);
        }}
        color="bg-blue-500"
        disabled={countries.length ? false : true}
      />
      <Button
        text="Friends"
        name="friends"
        onClick={(e) => {
          handleSaveTrip(e);
          setColor(["#4ade80", "#15803d", "#86efac", "#14532d"]);
        }}
        color="bg-green-500"
        disabled={countries.length ? false : true}
      />
      <Button
        text="Couple"
        name="couple"
        onClick={(e) => {
          handleSaveTrip(e);
          setColor(["#7e22ce", "#c084fc", "#6b21a8", "#581c87"]);
        }}
        color="bg-purple-500"
        disabled={countries.length ? false : true}
      />
      <Button
        text="Alone"
        name="alone"
        onClick={(e) => {
          handleSaveTrip(e);
          setColor(["#d1d5db", "#6b7280", "#1f2937", "#a8a29e"]);
        }}
        color="bg-gray-500"
        disabled={countries.length ? false : true}
      />
      <Button
        text="Not now"
        name="discards"
        onClick={(e) => {
          handleSaveTrip(e);
          setColor(["transparent"]);
        }}
        color="bg-red-500"
        disabled={countries.length ? false : true}
      />
    </div>
  );
};
