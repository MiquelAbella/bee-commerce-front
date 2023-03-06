import React from "react";
import { GridContainer } from "../../../GridContainer";
import { Typography } from "../../../Typography";
import { GridItem } from "../GridItem";

import { bannerCities } from "../../../../data/bannerCities";

export const GridImages = () => {
  return (
    <>
      <div className="m-8 mt-14 md:px-12">
        <Typography text="DISCOVER THE WORLD" type="important" />
      </div>
      <GridContainer
        cols="grid-cols-1 sm:grid-cols-4 md:grid-cols-6"
        maxHeight="max-h-[90vh]"
        maxWidth="max-w-[100vw]"
      >
        {bannerCities.map((offer, i) => {
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
    </>
  );
};
