import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../../context/CartContext";
import { Button } from "../../../Button";
import { Modal } from "../../../Modal";
import { Typography } from "../../../Typography";

export const HotelsModal = ({ closeModal }) => {
  const { cart } = useContext(CartContext);
  const { accomodation } = cart;
  return (
    <Modal closeModal={closeModal} size="sm">
      <div className="h-full w-full p-12 flex flex-col items-center justify-center gap-6">
        <Typography text="Hotel booked" type="big" />
        <Typography text={`Name: ${accomodation.name}`} />
        <Typography text={`Destination: ${accomodation.destination}`} />
        <Typography text={`Start date: ${accomodation.startDate}`} />
        <Typography text={`End date: ${accomodation.endDate}`} />
        <Typography text={`Guests: ${accomodation.people}`} />
        <Typography text={`Price ${accomodation.price} € / pp`} />
        <div className="flex gap-6 md:gap-12">
          <Link to="/hotels">
            <Button text="Acommodation" color="secondary" />
          </Link>
          <Link to="/cart">
            <Button text="Cart" />
          </Link>
        </div>
      </div>
    </Modal>
  );
};
