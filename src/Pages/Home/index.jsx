import React from "react";
import { GridItem } from "../../Components/Pages";
import {
  Carousel,
  GridContainer,
  OfferCard,
  Typography,
  Video,
} from "../../Components";
import { specialOffers } from "../../data/specialOffers";

import img1 from "../../assets/images/countries/helsinki.jpg";
import img2 from "../../assets/images/countries/athens.jpg";
import img3 from "../../assets/images/countries/berlin.jpg";
import img4 from "../../assets/images/countries/lofoten.jpg";
import img5 from "../../assets/images/countries/kenia.jpg";
import img6 from "../../assets/images/countries/varsow.jpg";

import beach from "../../assets/videos/beach.mp4";

const images = [img1, img2, img3, img4, img5, img6];

export const Home = () => {
  return (
    <div className="mt-24">
      <div className="relative w-full overflow-hidden">
        <Carousel images={images} />
        <h1 className="absolute mb-2 top-0 bottom-0 right-0 left-0 m-auto flex items-center justify-center bg-black/20 text-white/80 text-[23vw]">
          BeeTrips
        </h1>
      </div>
      <div className="m-8 mt-14 md:px-12">
        <Typography text="DISCOVER THE WORLD" type="important" />
      </div>
      <GridContainer
        cols="grid-cols-1 sm:grid-cols-4 md:grid-cols-6"
        maxHeight="max-h-[90vh]"
        maxWidth="max-w-[100vw]"
      >
        {specialOffers.map((offer, i) => {
          const { img, city, text, price, span } = offer;
          return (
            <GridItem
              key={`special-offer-${i}`}
              img={img}
              city={city}
              text={text}
              price={price}
              span={span}
            />
          );
        })}
      </GridContainer>
      <div className="m-8 mt-14 md:px-12">
        <Typography text="SPECIAL OFFERS" type="important" />
      </div>
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
    </div>
  );
};
