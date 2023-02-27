import React from "react";

import beach from "../../../../assets/videos/beach.mp4";
import { OfferCard, Video } from "../../../index";

export const SpecialOffers = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 p-10 relative">
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <div className="w-full h-full absolute opacity-80">
        <Video src={beach} />
      </div>
    </div>
  );
};
