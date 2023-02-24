import { Button } from "../../../Button";
import { Input } from "../../../Input";

export const Form = ({ setFormData, formData }) => {
  const handleChangeFormData = (e) => {
    if (e.target.type === "number") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-black/50 rounded-md items-start justify-around min-h-1/2 w-2/3 p-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 col-span-2">
        <Input
          name="destination"
          type="text"
          label="destination-form"
          labelText="City"
          placeholder="City"
          value={formData.destination}
          onChange={handleChangeFormData}
          labelColor="text-slate-300"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 col-span-2">
        <Input
          name="startDate"
          type="date"
          label="start-form"
          labelText="Start"
          onChange={handleChangeFormData}
          value={formData.startDate}
          labelColor="text-slate-300"
        />
        <Input
          name="endDate"
          type="date"
          label="end-form"
          labelText="End"
          onChange={handleChangeFormData}
          value={formData.endDate}
          labelColor="text-slate-300"
        />
        <Input
          name="people"
          type="number"
          label="passengers-form"
          labelText="Guests"
          value={formData.people}
          onChange={handleChangeFormData}
          labelColor="text-slate-300"
        />
      </div>
      <div className="col-span-2 w-full flex items-center justify-end">
        <Button text="Search"/>
      </div>
    </div>
  );
};
