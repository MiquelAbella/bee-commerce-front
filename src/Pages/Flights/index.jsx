import React, { useState } from "react";
import { Typography, Video } from "../../Components";
import { Form, MapView } from "../../Components/Pages/Flights";

import planeImg from "../../assets/images/planeFromGround.jpg";
import tripPreparation from "../../assets/videos/tripPreparation.mp4";

export const Flights = () => {
  const [formData, setFormData] = useState({
    origin: JSON.parse(localStorage.getItem("nearestCity"))?.capital || "",
    destination: "",
    startDate: "",
    endDate: "",
    passengers: 1,
  });

  return (
    <div className="mt-24">
      <div className="p-8">
        <Typography text="SEARCH FLIGHTS" type="important" />
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={planeImg} />
        <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
          <Form formData={formData} setFormData={setFormData} />
        </div>
      </div>
      <div className="p-8">
        <Typography text="OUR FLIGHTS" type="important" />
      </div>
      <MapView />
      <div className="m-8 mt-14 md:px-12">
        <Typography text="SPECIAL OFFERS" type="important" />
      </div>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 p-10 relative">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <div className="w-full h-full absolute opacity-80">
          <Video src={tripPreparation} />
        </div>
      </div> */}
    </div>
  );
};
