import Map, { Marker } from "react-map-gl";
import { useEffect, useRef, useState } from "react";

export const MapView = ({ formData, setFormData }) => {
  const mapRef = useRef();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getAllCities = async () => {
      const res = await fetch("http://localhost:3000/cities");
      const data = await res.json();
      setCities(data);
    };

    getAllCities();
  }, []);

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
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setFormData({ ...formData, destination: city.capital });
                  }}
                  key={`${city}-${i}`}
                  longitude={longitude}
                  latitude={latitude}
                  anchor="bottom"
                  color="#fa836e"
                  scale={0.7}
                />
              );
            })}
          </Map>
        </div>
      </div>
    </div>
  );
};
