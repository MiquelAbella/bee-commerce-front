import { useEffect, useState } from "react";
import { Button, Input, Typography } from "../../../index";
import { getDistanceFromLatLonInKm } from "../../../../utils/calculateDistance";
import { cities } from "../../../../data/flightsGenerator";

export const Form = ({ formData, setFormData }) => {
  const [price, setPrice] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { origin, destination, startDate, passengers } = formData;

    setIsFormValid(
      origin.length && destination.length && startDate.length && passengers > 0
    );
  };

  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  useEffect(() => {
    setFormData({ ...formData, price: price });
  }, [price]);

  useEffect(() => {
    if (formData.origin && formData.destination) {
      const originCity = cities.filter(
        (city) => city.capital === formData.origin
      )[0];
      const destinationCity = cities.filter(
        (city) => city.capital === formData.destination
      )[0];

      if (originCity && destinationCity && formData.passengers > 0) {
        if (formData.endDate) {
          setPrice(
            Math.floor(
              getDistanceFromLatLonInKm(
                originCity.latitude,
                originCity.longitude,
                destinationCity.latitude,
                destinationCity.longitude
              ) / 10
            ) *
              formData.passengers *
              2
          );
        } else {
          setPrice(
            Math.floor(
              getDistanceFromLatLonInKm(
                originCity.latitude,
                originCity.longitude,
                destinationCity.latitude,
                destinationCity.longitude
              ) / 10
            ) * formData.passengers
          );
        }
      } else {
        setPrice(null);
      }
    }
    validateForm();
  }, [formData]);

  return (
    <div className="flex flex-col gap-3 bg-black/40 rounded-md items-start justify-around min-h-1/2 w-2/3 p-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 col-span-2">
        <div className="flex flex-col">
          <label htmlFor="origin-selector">
            <Typography text="Origin" labelColor="text-slate-300" />
          </label>
          <select
            id="origin-selector"
            className="p-3 rounded-md"
            value={formData.origin}
            name="origin"
            onChange={handleChangeFormData}
          >
            <option value="">Select origin</option>
            {cities
              .sort((a, b) => {
                a.capital - b.capital;
              })
              .map((city) => {
                return (
                  <option value={city.capital}>
                    {city.country} - {city.capital}
                  </option>
                );
              })}
          </select>
        </div>
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
            {cities
              .sort((a, b) => {
                a.capital - b.capital;
              })
              .map((city) => {
                return (
                  <option value={city.capital}>
                    {city.country} - {city.capital}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 col-span-2">
        <Input
          type="date"
          label="startDate"
          labelText="From"
          labelColor="text-slate-300"
          value={formData.startDate}
          name="startDate"
          onChange={handleChangeFormData}
        />
        <Input
          type="date"
          label="endDate"
          labelText="To"
          labelColor="text-slate-300"
          value={formData.endDate}
          name="endDate"
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
      <div className="col-span-1 w-full flex items-center justify-between gap-2 mt-4">
        <Button text="Book" onClick={handleSubmit} disabled={!isFormValid} />
        {price && (
          <Typography text={`total: ${price} €`} type="big" color="white" />
        )}
      </div>
    </div>
  );
};
