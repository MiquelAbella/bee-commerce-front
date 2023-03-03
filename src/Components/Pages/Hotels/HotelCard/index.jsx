import { useContext } from "react";
import CartContext from "../../../../context/CartContext";
import { Button, Typography } from "../../../index";

export const HotelCard = ({
  accomodation,
  formData,
  isFormValid,
  formRef,
  setIsHotelsModalOpen,
}) => {
  const { hotel, image, price, city } = accomodation;

  const { cart, setCart } = useContext(CartContext);

  const handleBookHotel = () => {
    if (!isFormValid) {
      window.scrollTo({
        top: formRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
      alert("Please, fill all the form fields");
      return;
    }
    setCart({
      ...cart,
      accomodation: {
        ...formData,
        price: price,
        name: hotel,
        country: city.country,
      },
    });
    setIsHotelsModalOpen(true);
  };

  return (
    <div className="flex flex-col border border-gray-200 rounded-sm">
      <img src={image} alt="" className="h-[20vh] object-cover rounded-t-md" />
      <div className="p-4">
        <Typography text={hotel} />
        {/* <Typography text={city.capital} /> */}
        <Typography text={`${price} € / PERSON`} />
      </div>
      <div className="flex items-end justify-end p-4">
        <Button text="Book" onClick={handleBookHotel} />
      </div>
    </div>
  );
};
