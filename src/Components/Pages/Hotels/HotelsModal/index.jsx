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
      <div className="h-full w-full p-6 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-4">
          <Typography text="Hotel booked" type="big" />
          <Typography text={`Name: ${accomodation.name}`} />
          <Typography text={`Destination: ${accomodation.destination}`} />
          <Typography text={`Start date: ${accomodation.startDate}`} />
          <Typography text={`End date: ${accomodation.endDate}`} />
          <Typography text={`Guests: ${accomodation.people}`} />
          <Typography text={`Price ${accomodation.price} € / pp`} />
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Button text="Close" color="danger" onClick={() => closeModal()} />
            <Link to="/flights">
              <Button text="Flights" color="secondary" />
            </Link>
            <Link to="/cart">
              <Button text="Cart" />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};
