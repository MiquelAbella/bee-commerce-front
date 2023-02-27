import React, { useEffect, useState } from "react";
import { GridItem, SpecialOffers } from "../../Components/Pages";
import { Carousel, GridContainer, Typography } from "../../Components";

import { bannerCities } from "../../data/bannerCities";
import { cities } from "../../data/flightsGenerator";
import { getDistanceFromLatLonInKm } from "../../utils/calculateDistance";

import img1 from "../../assets/images/countries/helsinki.jpg";
import img2 from "../../assets/images/countries/athens.jpg";
import img3 from "../../assets/images/countries/berlin.jpg";
import img4 from "../../assets/images/countries/lofoten.jpg";
import img5 from "../../assets/images/countries/kenia.jpg";
import img6 from "../../assets/images/countries/varsow.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export const Home = () => {
  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location")) || null
  );
  const [nearestCity, setNearestCity] = useState(
    JSON.parse(localStorage.getItem("nearestCity")) || null
  );

  const getNearestCity = () => {
    cities.sort((a, b) => {
      return (
        getDistanceFromLatLonInKm(
          a.latitude,
          a.longitude,
          location.lat,
          location.lon
        ) -
        getDistanceFromLatLonInKm(
          b.latitude,
          b.longitude,
          location.lat,
          location.lon
        )
      );
    });
    setNearestCity(cities[0]);
    localStorage.setItem("nearestCity", JSON.stringify(cities[0]));
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

    if (location?.lat && !nearestCity) {
      getNearestCity();
    }
  }, [location]);

  return (
    <div className="mt-24">
      <div className="relative w-full overflow-hidden">
        <Carousel images={images} />
        <h1 className="absolute mb-2 top-0 bottom-0 right-0 left-0 m-auto flex items-center justify-center bg-black/20 text-white/80 text-[23vw]">
          BeeTrips
        </h1>
      </div>
      <div className="m-8 mt-14 md:px-12">
        <Typography text="DISCOVER THE WORLD" type="important" />
      </div>
      <GridContainer
        cols="grid-cols-1 sm:grid-cols-4 md:grid-cols-6"
        maxHeight="max-h-[90vh]"
        maxWidth="max-w-[100vw]"
      >
        {bannerCities.map((offer, i) => {
          const { img, city, text, price, span } = offer;
          return (
            <GridItem
              key={`special-offer-${i}`}
              img={img}
              city={city}
              text={text}
              price={price}
              span={span}
            />
          );
        })}
      </GridContainer>
      {location?.lat ? (
        <>
          <div className="m-8 mt-14 md:px-12">
            <Typography text="SPECIAL OFFERS" type="important" />
          </div>
          <SpecialOffers city={nearestCity} />
        </>
      ) : (
        <div className="flex items-center justify-center m-10 bg-red-500 p-6">
          <Typography
            text="We need your location to show you special offers!"
            color="white"
          />
        </div>
      )}
    </div>
  );
};
