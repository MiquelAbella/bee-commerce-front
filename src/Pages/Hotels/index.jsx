import { useMemo, useState } from "react";
import { Typography, Video } from "../../components";
import { DatesSelector, Form, HotelCard } from "../../Components/Pages/Hotels";

import { hotels } from "../../data/hotels";

import hotelVideo from "../../assets/videos/hotel.mp4";

export const Hotels = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    people: 1,
  });

  //   const hotelsInCity = useMemo(
  //     () => hotels.filter((hotel) => hotel.city.capital === formData.destination),
  //     [formData.destination]
  //   );

  const cheapestHotels = useMemo(
    () => hotels.sort((a, b) => a.price - b.price).filter((hotel, i) => i < 8),
    []
  );

  const luxuryHotels = useMemo(
    () => hotels.sort((a, b) => b.price - a.price).filter((hotel, i) => i < 8),
    []
  );

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-24">
      <div className="p-8 pb-0">
        <Typography text="SEARCH ACCOMODATION" type="important" />
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Video src={hotelVideo} />
        <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center">
          <Form setFormData={setFormData} formData={formData} />
        </div>
      </div>
      <div className="p-8 pb-0">
        <Typography text="CHEAPEST HOTELS" type="important" />
        <DatesSelector formData={formData} changeFormData={changeFormData} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {cheapestHotels.map((hotel, i) => {
          return (
            <HotelCard
              formData={formData}
              key={`${hotel.hotel}-${i}`}
              Accomodation={hotel}
            />
          );
        })}
      </div>
      <div className="p-8 pb-0">
        <Typography text="LUXURY HOTELS" type="important" />
        <DatesSelector formData={formData} changeFormData={changeFormData} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {luxuryHotels.map((hotel, i) => {
          return (
            <HotelCard
              formData={formData}
              key={`${hotel.hotel}-${i}`}
              Accomodation={hotel}
            />
          );
        })}
      </div>
    </div>
  );
};
