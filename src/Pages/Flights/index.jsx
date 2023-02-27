import React, { useState } from "react";
import { Typography } from "../../Components";
import { Form, MapView } from "../../Components/Pages/Flights";

import planeImg from "../../assets/images/planeFromGround.jpg";

export const Flights = () => {
  const [formData, setFormData] = useState({
    origin: JSON.parse(localStorage.getItem("nearestCity"))?.capital || "",
    destination: "",
    startDate: "",
    endDate: "",
    price: 0,
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
        <Typography text="FLIGHT PICKER" type="important" />
      </div>
      <MapView formData={formData} setFormData={setFormData} />
    </div>
  );
};
