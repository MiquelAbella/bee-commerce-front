import React, { useEffect, useMemo, useState } from "react";

import beach from "../../../../assets/videos/beach.mp4";
import { Video } from "../../../index";
import { cities } from "../../../../data/flightsGenerator";
import { OfferCard } from "../OfferCard";

export const SpecialOffers = ({ city, setIsConfirmationModalOpen }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getAllCities = async () => {
      const res = await fetch("http://localhost:3000/cities");
      const data = await res.json();

      setDestinations([
        data[Math.floor(Math.random() * data.length)],
        data[Math.floor(Math.random() * data.length)],
        data[Math.floor(Math.random() * data.length)],
        data[Math.floor(Math.random() * data.length)],
        data[Math.floor(Math.random() * data.length)],
        data[Math.floor(Math.random() * data.length)],
      ]);
    };

    getAllCities();
  }, []);

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
