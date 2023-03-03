import { Typography } from "../../../Typography";

export const Payment = ({paymentRef}) => {
   
  return (
    <div
      className="mt-8 w-full flex items-center justify-center"
      ref={paymentRef}
    >
      <Typography text="STRIPE HERE!" type="important" />
    </div>
  );
};
