import Map, { Marker } from "react-map-gl";
import { useRef } from "react";
import { useFetch } from "../../../../hooks/useFetch";

export const MapView = ({ formData, setFormData }) => {
  const mapRef = useRef();
  const url = import.meta.env.VITE_API_BASE_URL;
  const { data: cities, isLoading } = useFetch(`${url}/cities`);

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="relative w-[100vw] h-[70vh]">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
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
              {!isLoading &&
                cities &&
                cities.map((city, i) => {
                  const { latitude, longitude } = city;

                  return (
                    <Marker
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
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
          )}
        </div>
      </div>
    </div>
  );
};
