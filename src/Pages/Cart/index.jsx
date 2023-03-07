import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { Button, Modal, Reservation, Typography } from "../../components";
import { Bill, PartnersSection, Payment } from "../../Components/Pages/Cart";
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
