import React, { useContext } from "react";
import { Typography } from "../../components";
import { Bill } from "../../components/Pages/Cart/Bill";
import { Payment } from "../../components/Pages/Cart/Payment";
import CartContext from "../../context/CartContext";
import { useRef } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { flight, accomodation } = cart;
  const paymentRef = useRef(null);

  const city = accomodation.destination
    ? accomodation.destination.toLowerCase()
    : flight.destination
    ? flight.destination.toLowerCase()
    : null;

  const country = accomodation.country
    ? accomodation.country.toLowerCase()
    : flight.country
    ? flight.country.toLowerCase()
    : null;

  return (
    <div className="mt-24">
      <div>
        <Bill paymentRef={paymentRef}/>
      </div>
      {city && (
        <div className="flex flex-col p-8">
          <div className="p-8">
            <Typography text="Our partners" type="big" />
          </div>
          <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-3 p-8">
            <a
              href={`https://www.europcar.com/en/car-rental/locations/${country}`}
              target="_blank"
              className="flex flex-col items-center justify-end h-full"
            >
              <img
                className="max-h-40 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Europcar-Logo.svg/1200px-Europcar-Logo.svg.png"
              />
              <Typography text={`Rent a car in ${city.toUpperCase()}`} />
            </a>
            <a
              href={`https://www.civitatis.com/en/${country}`}
              target="_blank"
              className="flex flex-col items-center justify-end h-full"
            >
              <img
                className="max-h-40 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo_de_Civitatis.png"
              />
              <Typography text={`Find activities in ${city.toUpperCase()}`} />
            </a>
            <a
              href={`https://es.foursquare.com/explore?mode=url&near=${city}%`}
              target="_blank"
              className="flex flex-col items-center justify-end h-full"
            >
              <img
                className="max-h-40 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Foursquare_logo.svg/2560px-Foursquare_logo.svg.png"
              />
              <Typography text={`Find restaurants in ${city.toUpperCase()}`} />
            </a>
          </div>
        </div>
      )}
      <div>
        <Payment paymentRef={paymentRef}/>
      </div>
    </div>
  );
};
