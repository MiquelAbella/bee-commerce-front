import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { Button, Modal, Reservation, Typography } from "../../components";
import { Bill, Payment } from "../../Components/Pages/Cart";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { flight, accomodation } = cart;
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDownloadButtonEnabled, setIsDownloadButtonEnabled] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    card: "",
    expirationDate: "",
    cvv: "",
  });
  console.log(JSON.stringify(cart));
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
        "Here you have a cupon to get a discount in amazen.dtpf.es : M2a5G7a9L2u4F1M0l2A",
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

  const city = accomodation.destination
    ? accomodation.destination.toLowerCase()
    : flight.destination
    ? flight.destination.toLowerCase()
    : null;

  const country = accomodation.country
    ? accomodation.country.toLowerCase()
    : flight.country
    ? flight.country.toLowerCase()
    : null;

  return (
    <div className="mt-24">
      <div>
        <Bill openModal={() => setIsPaymentModalOpen(true)} />
      </div>
      {city && (
        <div className="flex flex-col p-8">
          <div className="p-8">
            <Typography text="Our partners" type="big" />
          </div>
          <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-3 p-8">
            <a
              href={`https://www.europcar.com/en/car-rental/locations/${country}`}
              target="_blank"
              className="flex flex-col items-center justify-end h-full"
            >
              <img
                className="max-h-40 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Europcar-Logo.svg/1200px-Europcar-Logo.svg.png"
              />
              <Typography text={`Rent a car in ${city.toUpperCase()}`} />
            </a>
            <a
              href={`https://www.civitatis.com/en/${country}`}
              target="_blank"
              className="flex flex-col items-center justify-end h-full"
            >
              <img
                className="max-h-40 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo_de_Civitatis.png"
              />
              <Typography text={`Find activities in ${city.toUpperCase()}`} />
            </a>
            <a
              href={`https://es.foursquare.com/explore?mode=url&near=${city}%`}
              target="_blank"
              className="flex flex-col items-center justify-end h-full"
            >
              <img
                className="max-h-40 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Foursquare_logo.svg/2560px-Foursquare_logo.svg.png"
              />
              <Typography text={`Find restaurants in ${city.toUpperCase()}`} />
            </a>
          </div>
        </div>
      )}

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
              document={<Reservation cart={cart} />}
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
