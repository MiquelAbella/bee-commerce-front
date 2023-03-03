import React, { useMemo, useState } from "react";

import beach from "../../../../assets/videos/beach.mp4";
import { Video } from "../../../index";
import { cities } from "../../../../data/flightsGenerator";
import { OfferCard } from "../OfferCard";

export const SpecialOffers = ({ city, setIsConfirmationModalOpen }) => {
  const [destinations, setDestinations] = useState([]);

  useMemo(
    () =>
      setDestinations([
        cities[Math.floor(Math.random() * cities.length)],
        cities[Math.floor(Math.random() * cities.length)],
        cities[Math.floor(Math.random() * cities.length)],
        cities[Math.floor(Math.random() * cities.length)],
        cities[Math.floor(Math.random() * cities.length)],
        cities[Math.floor(Math.random() * cities.length)],
      ]),
    [cities]
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 p-10 relative">
      {destinations.map((destination, i) => {
        return (
          <OfferCard
          key={`destination-${i}`}
            setIsConfirmationModalOpen={setIsConfirmationModalOpen}
            city={city}
            destination={destination}
          />
        );
      })}
      <div className="w-full h-full absolute opacity-80">
        <Video src={beach} />
      </div>
    </div>
  );
};
