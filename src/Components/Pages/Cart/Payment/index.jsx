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
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51KnRFlBXC5oZe32SfBE13xG52BYqwVNyvdFpj1KAkFL5eimkDNNJarbSUekrZTpkWBDQKHZmvy0GDx937smFwmC300CI5Td52Y"
);

const CheckoutForm = ({
  isDownloadButtonEnabled,
  totalPrice,
  setIsDownloadButtonEnabled,
}) => {
  const elements = useElements();
  const stripe = useStripe();
  const [isLoading, setisLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      setisLoading(true);
      const res = await fetch("http://localhost:4242/checkout", {
        method: "POST",
        body: JSON.stringify({
          id,
          amount: totalPrice * 100,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.ok) {
        Swal.fire(
          "Payment successfull, you can download a PDF with the booking details",
          "Here you have a cupon to get a discount in amazen.dtpf.es : BEETRIPS20%DISCOUNT",
          "success"
        );
        setIsDownloadButtonEnabled(true);
        setisLoading(false);
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
