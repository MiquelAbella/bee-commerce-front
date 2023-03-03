import React, { useEffect, useState } from "react";
import { Typography } from "../../Components";
import { Form, MapView } from "../../Components/Pages/Flights";

import planeImg from "../../assets/images/planeFromGround.jpg";
import { FlightsModal } from "../../Components/Pages/Flights/FlightsModal";

export const Flights = () => {
  const [allCities, setAllCities] = useState([]);
  const [isFlightsModalOpen, setIsFlightsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    origin: JSON.parse(localStorage.getItem("nearestCity"))?.capital || "",
    destination: "",
    startDate: "",
    endDate: "",
    price: 0,
    passengers: 1,
  });

  useEffect(() => {
    const getAllCities = async () => {
      const res = await fetch("http://localhost:3000/cities");
      const data = await res.json();
      setAllCities(data);
    };
    getAllCities();
  }, []);

  return (
    <div className="mt-24">
      <div className="p-8">
        <Typography text="SEARCH FLIGHTS" type="important" />
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={planeImg} />
        <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
          <Form
            cities={allCities}
            formData={formData}
            setFormData={setFormData}
            setIsFlightsModalOpen={setIsFlightsModalOpen}
          />
        </div>
      </div>
      <div className="p-8">
        <Typography text="FLIGHT PICKER" type="important" />
      </div>
      <MapView formData={formData} setFormData={setFormData} />
      {isFlightsModalOpen && (
        <FlightsModal closeModal={() => setIsFlightsModalOpen(false)} />
      )}
    </div>
  );
};
