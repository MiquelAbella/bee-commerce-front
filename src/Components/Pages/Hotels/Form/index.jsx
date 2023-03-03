import { Button } from "../../../Button";
import { Input } from "../../../Input";
import { cities } from "../../../../data/flightsGenerator";
import { Typography } from "../../../Typography";

export const Form = ({
  setFormData,
  formData,
  hotelsRef,
  setHotelsInCity,
  allHotels,
  isLoading,
}) => {
  const handleChangeFormData = (e) => {
    if (e.target.type === "number") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleScrollToHotels = () => {
    if (!formData.destination.length) {
      alert("Please, select a destination");
      return;
    }
    setHotelsInCity(
      allHotels.filter((hotel) => {
        return hotel.city.capital === formData.destination;
      })
    );
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 200);
  };

  return !isLoading ? (
    <div className="flex flex-col gap-3 bg-black/50 rounded-md items-start justify-around min-h-1/2 w-2/3 p-6 duration-200">
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 col-span-2">
          <div className="flex flex-col">
            <label htmlFor="destination-selector">
              <Typography text="Destination" labelColor="text-slate-300" />
            </label>
            <select
              id="destination-selector"
              className="p-3 rounded-md"
              value={formData.destination}
              name="destination"
              onChange={handleChangeFormData}
            >
              <option value="">Select destination</option>
              {cities.map((city, i) => {
                return (
                  <option key={`${city.capital}-${i}`} value={city.capital}>
                    {city.country} - {city.capital}
                  </option>
                );
              })}
            </select>
          </div>
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
          <Button text="Search" onClick={handleScrollToHotels} />
        </div>
      </>
    </div>
  ) : (
    <Typography text="Getting all available hotels..." color="white" />
  );
};
