import React from "react";

import beach from "../../../../assets/videos/beach.mp4";
import { Video } from "../../../index";
import { cities } from "../../../../data/flightsGenerator";
import { OfferCard } from "../OfferCard";

export const SpecialOffers = ({ city }) => {
    
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 p-10 relative">
      <OfferCard
        city={city}
        destination={cities[Math.floor(Math.random() * cities.length)]}
      />
      <OfferCard
        city={city}
        destination={cities[Math.floor(Math.random() * cities.length)]}
      />
      <OfferCard
        city={city}
        destination={cities[Math.floor(Math.random() * cities.length)]}
      />
      <OfferCard
        city={city}
        destination={cities[Math.floor(Math.random() * cities.length)]}
      />
      <OfferCard
        city={city}
        destination={cities[Math.floor(Math.random() * cities.length)]}
      />
      <OfferCard
        city={city}
        destination={cities[Math.floor(Math.random() * cities.length)]}
      />
      <div className="w-full h-full absolute opacity-80">
        <Video src={beach} />
      </div>
    </div>
  );
};
