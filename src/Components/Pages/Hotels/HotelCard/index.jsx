import { useContext } from "react";
import CartContext from "../../../../context/CartContext";
import { Button, Typography } from "../../../index";

export const HotelCard = ({
  accomodation,
  formData,
  isFormValid,
}) => {
  const { hotel, image, price, city } = accomodation;

  const { cart, setCart } = useContext(CartContext);

  const handleBookHotel = () => {
    setCart({ ...cart, accomodation: { ...formData, price: price } });
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
        <Button disabled={!isFormValid} text="Book" onClick={handleBookHotel} />
      </div>
    </div>
  );
};
