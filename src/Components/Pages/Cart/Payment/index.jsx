import { Button } from "../../../Button";
import { Input } from "../../../Input";

export const Payment = ({ handleChangeFormData, formData, handleSubmit, isDownloadButtonEnabled }) => {
  const { fullname, email, card, expirationDate, cvv } = formData;
  return (
    <div className="mt-8 w-full flex items-center justify-center flex-1">
      <form className="grid gap-4 grid-cols-3  rounded-lg" onSubmit={handleSubmit}>
        <div className="col-span-3 flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="text"
            label="name"
            labelText="Fullname"
            value={fullname}
            name="fullname"
            onChange={handleChangeFormData}
          />
        </div>
        <div className="col-span-3 flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="text"
            label="email"
            labelText="Email"
            value={email}
            name="email"
            onChange={handleChangeFormData}
          />
        </div>
        <div className="col-span-3 flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="text"
            label="creditCard"
            labelText="Credit card"
            value={card}
            name="card"
            onChange={handleChangeFormData}
          />
        </div>
        <div className=" flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="text"
            label="expiration"
            labelText="E.D"
            value={expirationDate}
            name="expirationDate"
            onChange={handleChangeFormData}
          />
        </div>
        <div className="flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="text"
            label="CVV"
            labelText="CVV"
            value={cvv}
            name="cvv"
            onChange={handleChangeFormData}
          />
        </div>
        <div></div>
        <div className="col-span-3 flex items-end justify-end">
          <Button text="Proceed" disabled={isDownloadButtonEnabled}/>
        </div>
      </form>
    </div>
  );
};
