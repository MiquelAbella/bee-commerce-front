import { useContext } from "react";
import { Card } from "../Card";
import { ButtonsGroup } from "../ButtonsGroup";
import { Link } from "react-router-dom";
import WishListContext from "../../context/WishListContext/WishListContext";

export const WishListPicker = () => {
  const { countries, setCountries } = useContext(WishListContext);
  return (
    <div className="realtive h-screen w-screen flex flex-col items-center justify-end">
      <Link
        to="/cart"
        className="absolute top-[1vh] right-[1vw] text-gray-500 text-lg md:text-xl"
      >
        GO TO WISH LIST
      </Link>
      <h1 className="absolute top-[7vh] md:top-[5vh] text-center text-gray-500 text-lg p-2 md:text-4xl">
        WHO DO YOU WANT TO TRAVEL WITH?
      </h1>

      {countries.length && countries.map((place) => {
        const rand = Math.floor(Math.random() * 12);

        const rotation = `rotate-${rand}`;

        return <Card key={place.country} place={place} rotation={rotation} />;
      })|| <p className="absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center">We don't have more suggestions for you...</p>}
      <ButtonsGroup countries={countries} setCountries={setCountries} />
    </div>
  );
};
