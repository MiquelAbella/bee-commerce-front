import { Button } from "../../../Button";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Typography } from "../../../Typography";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import UserContext from "../../../../context/UserContext";
import CartContext from "../../../../context/CartContext";

const stripeKey = import.meta.env.VITE_STRIPE_KEY;
const stripePromise = loadStripe(stripeKey);

const CheckoutForm = ({
  isDownloadButtonEnabled,
  totalPrice,
  setIsDownloadButtonEnabled,
}) => {
  const elements = useElements();
  const stripe = useStripe();
  const [isLoading, setisLoading] = useState(false);
  const { user, addToHistory } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const handleSubmit = async (e) => {
    const url = import.meta.env.VITE_API_BASE_URL;
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      setisLoading(true);
      const res = await fetch(
        "http://bee-commerce-back-production.up.railway.app/checkout",
        {
          method: "POST",
          body: JSON.stringify({
            id,
            amount: totalPrice * 100,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.ok) {
        Swal.fire(
          "Payment successfull, you can download a PDF with the booking details",
          "Here you have a cupon to get a discount in amazen.dtpf.es : BEETRIPS20%DISCOUNT",
          "success"
        );
        setIsDownloadButtonEnabled(true);
        setisLoading(false);
        if (user) {
          addToHistory({ cart, date: new Date().toLocaleDateString() });
        }
      }
    }
  };
  return (
    <form
      className="w-full m-4 flex flex-col gap-6 border border-slate-400 p-6 rounded-lg"
      onSubmit={handleSubmit}
    >
      <Typography text="BeeTrips" type="big" />
      <div className="bg-slate-300 p-2 rounded">
        <CardElement />
      </div>
      <div className="col-span-3 flex items-end justify-end">
        {!isLoading ? (
          <Button text="Proceed" disabled={isDownloadButtonEnabled} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </form>
  );
};

export const Payment = ({
  isDownloadButtonEnabled,
  totalPrice,
  setIsDownloadButtonEnabled,
}) => {
  return (
    <div className=" w-full flex items-center justify-center flex-1 overflow-auto">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          isDownloadButtonEnabled={isDownloadButtonEnabled}
          totalPrice={totalPrice}
          setIsDownloadButtonEnabled={setIsDownloadButtonEnabled}
        />
      </Elements>
    </div>
  );
};
