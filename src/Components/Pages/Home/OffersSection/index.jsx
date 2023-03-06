import React from "react";
import { Typography } from "../../../Typography";
import { SpecialOffers } from "../SpecialOffers";

export const OffersSection = ({ nearestCity, setIsConfirmationModalOpen }) => {
  return (
    <>
      <div className="m-8 mt-14 md:px-12">
        <Typography text="SPECIAL OFFERS" type="important" />
      </div>
      <SpecialOffers
        city={nearestCity}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
      />
    </>
  );
};
