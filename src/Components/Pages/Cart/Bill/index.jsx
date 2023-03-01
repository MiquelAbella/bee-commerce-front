import React, { useContext } from "react";
import CartContext from "../../../../context/CartContext";
import { Typography } from "../../../index";

export const Bill = () => {
  const { cart, setCart } = useContext(CartContext);
  const { flight, accomodation: hotel } = cart;

  const calculateDays = (startDate, endDate) => {
    let difference =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  };

  const hotelPrice = hotel.price
    ? calculateDays(hotel.startDate, hotel.endDate) * hotel.people * hotel.price
    : 0;

  const flightPrice = flight.price ? flight.price : 0;
console.log(hotelPrice, flightPrice)
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
        <div className="z-10 bg-white/80 grid grid-cols-1 md:grid-cols-3 py-12 w-full m-4 p-6 md:w-3/4 flex-wrap gap-3 place-items-center text-center">
          {flight.destination && (
            <div className="flex flex-col items-start justify-start h-full">
              <Typography text="FLIGHT" type="subtitle" />
              <Typography text={`From: ${flight.origin}`} />
              <Typography text={`To: ${flight.destination}`} />
              <Typography text={`Dep. ${flight.startDate}`} />
              {flight.endDate && <Typography text={`To: ${flight.endDate}`} />}
              <Typography text={`Passengers: ${flight.passengers}`} />
            </div>
          )}
          {/* //voy por aqui */}
          {hotel.destination && (
            <div className="flex flex-col items-start justify-start h-full">
              <Typography text="HOTEL" type="subtitle" />
              <Typography text={`${hotel.name}`} />
              <Typography text={`City: ${hotel.destination}`} />
              <Typography text={`From: ${hotel.startDate}`} />
              <Typography text={`To: ${hotel.endDate}`} />
              <Typography text={`Guests: ${hotel.people}`} />
            </div>
          )}
          {hotel.destination || flight.destination ? (
            <div className="flex flex-col items-start justify-start h-full">
              <Typography text="BILL" type="subtitle" />
              {flight.destination && (
                <Typography text={`Flight: ${flightPrice} €`} />
              )}
              {hotel.destination && (
                <Typography text={`Hotel: ${hotelPrice} €`} />
              )}
              <Typography text={`Total: ${hotelPrice + flightPrice} €`} />
            </div>
          ) : (
            <Typography text="Nothing added to cart" type="big" />
          )}
        </div>
      </div>
    </div>
  );
};
