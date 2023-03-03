import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../../context/CartContext";
import { Button } from "../../../Button";
import { Modal } from "../../../Modal";
import { Typography } from "../../../Typography";

export const FlightsModal = ({ closeModal }) => {
  const { cart } = useContext(CartContext);
  const { origin, destination, startDate, endDate, passengers, price } =
    cart.flight;

  return (
    <Modal closeModal={closeModal} size="sm">
      <div className="h-full w-full p-12 flex flex-col items-center justify-center gap-6">
        <Typography text="Flight booked" type="big" />
        <Typography text={`Origin: ${origin}`} />
        <Typography text={`Destination: ${destination}`} />
        <Typography text={`Start date: ${startDate}`} />
        <Typography text={`End date: ${endDate}`} />
        <Typography text={`Passengers: ${passengers}`} />
        <Typography text={`Price ${price} €`} />
        <div className="flex gap-6 md:gap-12">
          <Button color="danger" text="Cancel" onClick={() => closeModal()} />
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
