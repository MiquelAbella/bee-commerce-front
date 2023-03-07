import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { Button, Modal, Reservation } from "../../components";
import { Bill, Payment, PartnersSection } from "../../Components/Pages/Cart";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Swal from "sweetalert2";
import UserContext from "../../context/UserContext";
import { calculateDays } from "../../utils/calculateDays";

export const Cart = () => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const { flight, accomodation: hotel } = cart;

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDownloadButtonEnabled, setIsDownloadButtonEnabled] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    card: "",
    expirationDate: "",
    cvv: "",
  });

  const ONE_DAY = 86400000;
  const isCouponValid = Date.now() < user?.registrationDate + ONE_DAY;

  const flightPrice = flight.price ? flight.price : 0;
  const hotelPrice = hotel.price
    ? calculateDays(hotel.startDate, hotel.endDate) * hotel.people * hotel.price
    : 0;

  const total = isCouponValid
    ? hotelPrice + flightPrice - (10 * (hotelPrice + flightPrice)) / 100
    : hotelPrice + flightPrice;

  const [totalPrice, setTotalPrice] = useState(total);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, card, expirationDate, cvv } = formData;
    const isValidForm =
      fullname.length &&
      email.length &&
      card.length &&
      expirationDate.length &&
      cvv.length;

    if (isValidForm === 0) {
      Swal.fire({
        title: "Please, fill the form",
        icon: "info",
        confirmButtonText: "Proceed",
      });
      return;
    } else {
      Swal.fire(
        "Payment successfull, you can download a PDF with the booking details",
        "Here you have a cupon to get a discount in amazen.dtpf.es : BEETRIPS20%DISCOUNT",
        "success"
      );
      setIsDownloadButtonEnabled(true);
    }
  };

  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const city = hotel.destination
    ? hotel.destination.toLowerCase()
    : flight.destination
    ? flight.destination.toLowerCase()
    : null;

  const country = hotel.country
    ? hotel.country.toLowerCase()
    : flight.country
    ? flight.country.toLowerCase()
    : null;

  return (
    <div className="mt-24">
      <div>
        <Bill
          openModal={() => setIsPaymentModalOpen(true)}
          isCouponValid={isCouponValid}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          flightPrice={flightPrice}
          hotelPrice={hotelPrice}
          total={total}
        />
      </div>
      {city || country ? (
        <PartnersSection city={city} country={country} />
      ) : null}

      {isPaymentModalOpen && (
        <Modal closeModal={() => setIsPaymentModalOpen(false)} height="h-auto">
          <Payment
            handleChangeFormData={handleChangeFormData}
            formData={formData}
            handleSubmit={handleSubmit}
            isDownloadButtonEnabled={isDownloadButtonEnabled}
          />

          <div
            className={`${!isDownloadButtonEnabled && "pointer-events-none"}`}
          >
            <PDFDownloadLink
              document={<Reservation cart={cart} totalPrice={totalPrice}/>}
              fileName="reservation.pdf"
            >
              <Button
                text="Download reservation in PDF"
                disabled={!isDownloadButtonEnabled}
              />
            </PDFDownloadLink>
          </div>
        </Modal>
      )}
    </div>
  );
};
