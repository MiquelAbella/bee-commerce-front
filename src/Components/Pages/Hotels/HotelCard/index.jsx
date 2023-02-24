import { useContext } from "react";
import { Button, Typography } from "../../../index";

export const HotelCard = ({
  Accomodation,
  formData,
}) => {
  const { hotel, image, price, city } = Accomodation;

 

  const handleBookHotel = () => {
    console.log('booking!')
  };

  return (
    <div className="flex flex-col border border-gray-200 rounded-sm">
      <img src={image} alt="" className="h-[20vh] object-cover rounded-t-md" />
      <div className="p-4">
        <Typography text={hotel} />
        <Typography text={city.capital} />
        <Typography text={`${price} € / PERSON`} />
      </div>
      <div className="flex items-end justify-end p-4">
        <Button text="Book" onClick={handleBookHotel} />
      </div>
    </div>
  );
};
