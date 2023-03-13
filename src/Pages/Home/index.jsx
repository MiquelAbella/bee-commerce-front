import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import {
  GridImages,
  Header,
  HomeModal,
  OffersSection,
} from "../../Components/Pages";
import { Typography } from "../../Components";

import { sortCities } from "../../utils/sortCities";

export const Home = () => {
  const [allCities, setAllCities] = useState([]);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const url = import.meta.env.VITE_API_BASE_URL;
  const { data } = useFetch(`${url}/cities`);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setAllCities(data);
  }, [data]);

  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location")) || null
  );

  const [nearestCity, setNearestCity] = useState(
    localStorage.getItem("nearestCity")
      ? JSON.parse(localStorage.getItem("nearestCity"))
      : null
  );

  const getNearestCity = () => {
    const nearest = sortCities(allCities, location);
    setNearestCity(nearest[0]);
    localStorage.setItem("nearestCity", JSON.stringify(nearest[0]));
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (!location?.lat) {
      getLocation();
    }

    if (location) {
      localStorage.setItem(
        "location",
        JSON.stringify({
          location: { lat: location?.lat, lon: location?.lon },
        })
      );
    }

    if (location?.lat && allCities) {
      getNearestCity();
    }
  }, [location, allCities]);

  return (
    <div className="mt-24">
      <Header />
      <GridImages />
      {location?.lat && nearestCity ? (
        <OffersSection
          nearestCity={nearestCity}
          setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        />
      ) : (
        <div className="flex items-center justify-center m-10 bg-red-500 p-6">
          <Typography
            text="We need your location to show you special offers!"
            color="white"
          />
        </div>
      )}
      {isConfirmationModalOpen && (
        <HomeModal closeModal={() => setIsConfirmationModalOpen(false)} />
      )}
    </div>
  );
};
