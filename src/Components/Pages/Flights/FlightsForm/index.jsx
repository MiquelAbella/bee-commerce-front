import { Button, Input } from "../../../index";

export const Form = ({ formData, setFormData }) => {
  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-3 bg-black/40 rounded-md items-start justify-around min-h-1/2 w-2/3 p-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 col-span-2">
        <Input
          type="text"
          label="destination-form"
          labelText="Destination"
          labelColor="text-slate-300"
          placeholder="Destination city"
          value={formData.destination}
          name="destination"
          onChange={handleChangeFormData}
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 col-span-2">
        <Input
          type="date"
          label="date"
          labelText="Date"
          labelColor="text-slate-300"
          value={formData.startDate}
          name="startDate"
          onChange={handleChangeFormData}
        />

        <Input
          type="number"
          label="passengers-form"
          labelText="Passengers"
          labelColor="text-slate-300"
          value={formData.passengers}
          name="passengers"
          onChange={handleChangeFormData}
        />
      </div>
      <div className="col-span-2 w-full flex items-center justify-end gap-2 mt-4">
        <Button text="Search" onClick={handleSubmit} />
      </div>
    </div>
  );
};
