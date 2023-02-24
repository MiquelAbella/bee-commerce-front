import React from "react";
import { Button } from "../Button";
import { Typography } from "../Typography";

export const OfferCard = () => {
  return (
    <div className="w-full h-72  z-10 flex flex-col gap-4 items-center justify-center relative">
      <div className="w-5/6 h-5/6 bg-white/70 flex flex-col gap-4 items-center justify-center rounded-lg">
        <Typography text="From: Barcelona" />
        <Typography text="To: Berlin" />
        <Typography text="144 €" />
        <Button text="Book" />
        <div className="absolute left-5 top-0 bg-green-500 p-2 text-center rounded-full h-14 w-14 flex items-center justify-center">
          <Typography text="25%" color="white"/>
        </div>
      </div>
    </div>
  );
};
