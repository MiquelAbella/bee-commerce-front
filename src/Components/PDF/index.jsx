import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { calculateDays } from "../../utils/calculateDays";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10vh",
    fontSize: "1cm",
  },
  container: {
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    paddingLeft: "5vh",
    marginTop: "5vh",
  },
  resumee: {
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
  },
});

export const Reservation = ({ cart }) => {
  const { flight, accomodation } = cart;
  const numberOfDays = calculateDays(
    accomodation.startDate,
    accomodation.endDate
  );

  return (
    <Document>
      <Page>
        <View style={styles.header}>
          <Text>Thanks for booking with BeeTrips</Text>
        </View>
        {flight.destination && (
          <View style={styles.container}>
            <View style={styles.resumee}>
              <Text style={{ marginBottom: "0.5cm" }}>Your flight:</Text>
              <Text>From: {flight.origin}</Text>
              <Text>To: {flight.destination}</Text>
              <Text>Start date: {flight.startDate}</Text>
              <Text>End date: {flight.endDate}</Text>
              <Text>Passengers: {flight.passengers}</Text>
              <Text>Price: {flight.price * flight.passengers} €</Text>
            </View>
          </View>
        )}
        {accomodation.destination && (
          <View style={styles.container}>
            <View style={styles.resumee}>
              <Text style={{ marginBottom: "0.5cm" }}>Your accomodation:</Text>
              <Text>
                City: {accomodation.destination} - {accomodation.country}
              </Text>
              <Text>Start date: {accomodation.startDate}</Text>
              <Text>End date: {accomodation.endDate}</Text>
              <Text>Guests: {accomodation.people}</Text>
              <Text>Price: {accomodation.price * numberOfDays * accomodation.people} €</Text>
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
