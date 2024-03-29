import React, { useEffect, useState } from "react";

import beach from "../../../../assets/videos/beach.mp4";
import { Video } from "../../../index";
import { useFetch } from "../../../../hooks/useFetch";
import { OfferCard } from "../OfferCard";

export const SpecialOffers = ({ city, setIsConfirmationModalOpen }) => {
  const [destinations, setDestinations] = useState(null);
  const url = import.meta.env.VITE_API_BASE_URL;

  const { data: cities, isLoading } = useFetch(`${url}/cities`);
  useEffect(() => {
    if (!cities) return;

    setDestinations([
      cities.cities[Math.floor(Math.random() * cities.cities.length)],
      cities.cities[Math.floor(Math.random() * cities.cities.length)],
      cities.cities[Math.floor(Math.random() * cities.cities.length)],
      cities.cities[Math.floor(Math.random() * cities.cities.length)],
      cities.cities[Math.floor(Math.random() * cities.cities.length)],
      cities.cities[Math.floor(Math.random() * cities.cities.length)],
    ]);
  }, [cities]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 p-10 relative">
      {!isLoading && destinations ? (
        destinations.map((destination, i) => {
          return (
            <OfferCard
              key={`destination-${i}`}
              setIsConfirmationModalOpen={setIsConfirmationModalOpen}
              city={city}
              destination={destination}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      <div className="w-full h-full absolute opacity-80">
        <Video src={beach} />
      </div>
    </div>
  );
};
