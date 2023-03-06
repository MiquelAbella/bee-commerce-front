import { useContext, useEffect, useState } from "react";
import { Typography } from "../../Components";
import { FlightsModal, Form, MapView } from "../../Components/Pages/Flights";
import { useFetch } from "../../hooks/useFetch";
import CartContext from "../../context/CartContext";

import planeImg from "../../assets/images/planeFromGround.jpg";

export const Flights = () => {
  const { cart } = useContext(CartContext);
  const { destination, startDate, endDate, people } = cart.accomodation;
  const [allCities, setAllCities] = useState(null);
  const [isFlightsModalOpen, setIsFlightsModalOpen] = useState(false);
  const { data, isLoading, error } = useFetch("http://localhost:3000/cities");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [formData, setFormData] = useState({
    origin: JSON.parse(localStorage.getItem("nearestCity"))?.capital || "",
    destination: destination || "",
    startDate: startDate || "",
    endDate: endDate || "",
    price: 0,
    passengers: people || 1,
  });

  useEffect(() => {
    if (error) return;
    setAllCities(data);
  }, [data]);

  return (
    <div className="mt-24">
      <div className="p-8">
        <Typography text="SEARCH FLIGHTS" type="important" />
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={planeImg} />
        <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
          {allCities && !isLoading ? (
            <Form
              cities={allCities}
              formData={formData}
              setFormData={setFormData}
              setIsFlightsModalOpen={setIsFlightsModalOpen}
            />
          ) : (
            <p>Loading...</p>
          )}
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
