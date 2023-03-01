import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button } from "../../../Button";
import { Typography } from "../../../Typography";
import { getDistanceFromLatLonInKm } from "../../../../utils/calculateDistance";
import CartContext from "../../../../context/CartContext";

export const OfferCard = ({ city, destination }) => {
  const [price, setPrice] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  const getPrice = () => {
    const price = Math.floor(
      getDistanceFromLatLonInKm(
        city.latitude,
        city.longitude,
        destination.latitude,
        destination.longitude
      ) /
        10 -
        25 *
          (getDistanceFromLatLonInKm(
            city.latitude,
            city.longitude,
            destination.latitude,
            destination.longitude
          ) /
            1000)
    );
    setPrice(price);
  };

  useEffect(() => {
    getPrice();
  }, [city, destination]);

  const oneDayInMilliseconds = 86400000;
  const today = new Date(Date.now() + oneDayInMilliseconds * 2)
    .toISOString()
    .split("T")[0];
  const nextWeek = new Date(Date.now() + oneDayInMilliseconds * 10)
    .toISOString()
    .split("T")[0];

  const handleBook = () => {
    setCart({
      ...cart,
      flight: {
        origin: city.capital,
        destination: destination.capital,
        price: price * 2,
        startDate: today,
        endDate: nextWeek,
        passengers: 2
      },
    });
  };

  return (
    <div className="w-full h-[50vh]  z-10 flex flex-col gap-4 items-center justify-center relative">
      <div className="w-5/6 h-5/6 bg-white/70 flex flex-col gap-4 items-center justify-center rounded-lg">
        <Typography text={`2 passengers`} />
        <Typography text={`From: ${city?.capital}`} />
        <Typography text={`To: ${destination?.capital}`} />
        <Typography text={`${price} € / passenger`} />
        <Typography text={`${today} - ${nextWeek}`} />
        <Button text="Book" onClick={handleBook} />
        <div className="absolute left-5 top-0 bg-green-500 p-2 text-center rounded-full h-14 w-14 flex items-center justify-center">
          <Typography text="25%" color="white" />
        </div>
      </div>
    </div>
  );
};
