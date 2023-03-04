import { useContext, useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import CartContext from "../../context/CartContext";
import { Typography, Video } from "../../components";
import { Form, HotelCard, HotelsModal } from "../../Components/Pages/Hotels";

import hotelVideo from "../../assets/videos/hotel.mp4";

export const Hotels = () => {
  const { cart } = useContext(CartContext);
  const [isHotelsModalOpen, setIsHotelsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [hotelsInCity, setHotelsInCity] = useState([]);

  const formRef = useRef(null);

  const { destination, startDate, endDate, passengers } = cart.flight;

  const [formData, setFormData] = useState({
    destination: destination || "",
    startDate: startDate || "",
    endDate: endDate || "",
    people: passengers || 1,
  });

  const {
    data: allHotels,
    isLoading: hotelsLoading,
    error: hotelsError,
  } = useFetch("http://localhost:3000/hotels");
  const {
    data: allCities,
    isLoading: citiesLoading,
    error: citiesError,
  } = useFetch("http://localhost:3000/cities");

  const validateForm = () => {
    const { destination, startDate, endDate, people } = formData;

    setIsFormValid(
      destination.length && endDate.length && startDate.length && people > 0
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <div className="mt-24">
      <div className="p-8 pb-3">
        <Typography text="SEARCH ACCOMODATION" type="important" />
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Video src={hotelVideo} />
        <div
          className="absolute h-full w-full top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center"
          ref={formRef}
        >
          <Form
            setHotelsInCity={setHotelsInCity}
            allHotels={allHotels}
            setFormData={setFormData}
            formData={formData}
            isLoading={hotelsLoading || citiesLoading}
            cities={allCities}
          />
        </div>
      </div>
      <div className="p-8 pb-0">
        <Typography text="HOTELS" type="important" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {hotelsInCity.length ? (
          hotelsInCity.map((hotel, i) => {
            return (
              <HotelCard
                isFormValid={isFormValid}
                formData={formData}
                key={`${hotel.hotel}-${i}`}
                accomodation={hotel}
                formRef={formRef}
                setIsHotelsModalOpen={setIsHotelsModalOpen}
              />
            );
          })
        ) : (
          <Typography text="PLEASE, FILL THE FORM" />
        )}
      </div>
      {isHotelsModalOpen && (
        <HotelsModal closeModal={() => setIsHotelsModalOpen(false)} />
      )}
    </div>
  );
};
