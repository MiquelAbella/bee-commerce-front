import { useContext, useEffect, useMemo, useState } from "react";
import { Typography, Video } from "../../components";
import {  Form, HotelCard } from "../../Components/Pages/Hotels";

import { hotels } from "../../data/hotels";

import hotelVideo from "../../assets/videos/hotel.mp4";
import CartContext from "../../context/CartContext";

export const Hotels = () => {
  const { cart } = useContext(CartContext);
  const [isFormValid, setIsFormValid] = useState(false);

  const { destination, startDate, endDate, passengers } = cart.flight;

  const [formData, setFormData] = useState({
    destination: destination || "",
    startDate: startDate || "",
    endDate: endDate || "",
    people: passengers || 1,
  });

  const hotelsInCity = useMemo(
    () => hotels.filter((hotel) => hotel.city.capital === formData.destination),
    [formData.destination]
  );

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { destination, startDate, endDate, people } = formData;

    setIsFormValid(
      destination.length && endDate.length && startDate.length && people > 0
    );
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <div className="mt-24">
      <div className="p-8 pb-3">
        <Typography text="SEARCH ACCOMODATION" type="important" />
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Video src={hotelVideo} />
        <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
          <Form setFormData={setFormData} formData={formData} />
        </div>
      </div>
      <div className="p-8 pb-0">
        <Typography text="HOTELS" type="important" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {hotelsInCity.length ? (
          hotelsInCity.map((hotel, i) => {
            return (
              <HotelCard
                isFormValid={isFormValid}
                formData={formData}
                setFormData={setFormData}
                key={`${hotel.hotel}-${i}`}
                accomodation={hotel}
              />
            );
          })
        ) : (
          <Typography text="PLEASE, SELECT A CITY" />
        )}
      </div>
    </div>
  );
};
