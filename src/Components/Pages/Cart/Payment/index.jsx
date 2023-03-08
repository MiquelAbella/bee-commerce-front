import { Button } from "../../../Button";
import { Input } from "../../../Input";

export const Payment = ({ handleChangeFormData, formData, handleSubmit, isDownloadButtonEnabled }) => {
  const { fullname, email, card, expirationDate, cvv } = formData;
  
  return (
    <div className=" w-full p-6 flex items-center justify-center flex-1 overflow-auto">
      <form className="grid gap-4 grid-cols-3 rounded-lg" onSubmit={handleSubmit}>
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            name="email"
            onChange={handleChangeFormData}
          />
        </div>
        <div className="col-span-3 flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="tel"
            label="creditCard"
            labelText="Credit card"
            value={card}
            name="card"
            onChange={handleChangeFormData}
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
          />
        </div>
        <div className=" flex flex-col gap-3 border-b border-blue-400">
          <Input
            type="month"
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
            pattern="[0-9\s]{3}"
          />
        </div>
        <div className="col-span-3 flex items-end justify-end">
          <Button text="Proceed" disabled={isDownloadButtonEnabled}/>
        </div>
      </form>
    </div>
  );
};
