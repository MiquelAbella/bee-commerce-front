import React, { useContext, useState } from "react";
import CartContext from "../../../../context/CartContext";
import { calculateDays } from "../../../../utils/calculateDays";
import { Button, Input, Typography } from "../../../index";

export const Bill = ({ openModal }) => {
  const { cart } = useContext(CartContext);
  const { flight, accomodation: hotel } = cart;
  const [inputColor, setInputColor] = useState("text-red-500");

  const hotelPrice = hotel.price
    ? calculateDays(hotel.startDate, hotel.endDate) * hotel.people * hotel.price
    : 0;

  const flightPrice = flight.price ? flight.price : 0;

  const [totalPrice, setTotalPrice] = useState(hotelPrice + flightPrice);

  const handleCheckCupon = (e) => {
    if (e.target.value === "M2a5G7a9L2u4F1M0l2A") {
      setInputColor("text-green-500");
      setTotalPrice(totalPrice - (10 * totalPrice) / 100);
    } else {
      setInputColor("text-red-500");
      setTotalPrice(flightPrice + hotelPrice);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-8 text-center">
        <Typography
          text="JUST ONE MORE STEP TO ENJOY YOUR TRIP"
          type="important"
        />
      </div>
      <div className="relative min-h-[70vh] w-full flex items-center justify-around">
        <img
          className="absolute top-0 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
        />
        <div className="z-10 relative h-full bg-white/80 flex flex-col md:flex-row gap-8 items-start justify-start py-12 m-4 px-12 sm:px-48 flex-wrap text-center">
          {flight.destination && (
            <div className="flex flex-col items-start justify-start h-full md:w-auto text-start">
              <Typography text="FLIGHT" type="subtitle" />
              <Typography text={`From: ${flight.origin}`} />
              <Typography text={`To: ${flight.destination}`} />
              <Typography text={`Dep. ${flight.startDate}`} />
              {flight.endDate && <Typography text={`To: ${flight.endDate}`} />}
              <Typography text={`Passengers: ${flight.passengers}`} />
            </div>
          )}

          {hotel.destination && (
            <div className="flex flex-col items-start justify-start h-full md:w-auto text-start">
              <Typography text="HOTEL" type="subtitle" />
              <Typography text={`${hotel.name}`} />
              <Typography text={`City: ${hotel.destination}`} />
              <Typography text={`From: ${hotel.startDate}`} />
              <Typography text={`To: ${hotel.endDate}`} />
              <Typography text={`Guests: ${hotel.people}`} />
            </div>
          )}
          {hotel.destination || flight.destination ? (
            <div>
              <div className="flex flex-col items-start justify-start h-full md:w-auto text-start">
                <Typography text="BILL" type="subtitle" />
                {flight.destination && (
                  <Typography text={`Flight: ${flightPrice} €`} />
                )}
                {hotel.destination && (
                  <Typography text={`Hotel: ${hotelPrice} €`} />
                )}
                <Typography text={`Total: ${totalPrice} €`} />
              </div>
            </div>
          ) : (
            <div className="m-8">
              <Typography text="Nothing added to cart" />
            </div>
          )}
          <div className="mt-4 absolute right-2 bottom-2 flex gap-2">
            <Input
              type="text"
              placeholder="Do you have a cupon?"
              color={inputColor}
              onChange={handleCheckCupon}
            />
            <Button text="Payment" onClick={openModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
