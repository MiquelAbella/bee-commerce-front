import { cities } from "../../../../data/flightsGenerator";

import Map, { Marker } from "react-map-gl";
import { useContext, useRef } from "react";

export const MapView = () => {
  const mapRef = useRef();

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="relative w-[100vw] h-[70vh]">
          <Map
            ref={mapRef}
            initialViewState={{
              longitude: 17.11,
              latitude: 17.11,
              zoom: 1.25,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{ width: "100%", height: "100%" }}
            mapboxAccessToken="pk.eyJ1IjoibWlrZWJlZWdhciIsImEiOiJjbGVibHV6b2EwOWhjM29yeHFubDI5bGIyIn0.crrhMRpd6hHlOTmRMxGFeQ"
          >
            {cities.map((city, i) => {
              const { latitude, longitude } = city;

              return (
                <Marker
                  key={`${city}-${i}`}
                  longitude={longitude}
                  latitude={latitude}
                  anchor="bottom"
                  //   onClick={() => {
                  //     setCurrCity(city);
                  //   }}
                  color="#fa836e"
                  scale={0.7}
                />
              );
            })}
          </Map>
          {/* <div className="bg-white absolute left-10 bottom-10 rounded-md">
            {currCity && (
              <div className="p-6 w-full flex items-end justify-between gap-6">
                <p className="mb-2">
                  {currCity.capital}, {currCity.country}
                </p>
                <Button
                  text="See flights"
                  onClick={() => {
                    setCurrentFlight({ flight: currCity});
                    setIsModalOpen(true);
                  }}
                />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
