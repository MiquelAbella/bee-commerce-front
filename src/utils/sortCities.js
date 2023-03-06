import { getDistanceFromLatLonInKm } from "./calculateDistance";

export const sortCities = (cities, location) => {
  const nearest = cities.sort((a, b) => {
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
  return nearest;
};
