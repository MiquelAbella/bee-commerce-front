import { useContext } from "react";
import { Typography } from "../../Components/Typography";
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  if (!user) return;
console.log(user)
  return (
    <div className="mt-24 min-h-screen p-8 flex">
      <div className="w-full">
        <Typography text={`Hello ${user.fullName}`} type="big" />
        <Typography text="Here you can see all the reservations you made" />
        <div className="flex flex-wrap gap-6 items-start justify-start w-full">
          {user.history?.length ? (
            user.history.map((purchase, i) => {
              const { date, cart } = purchase;
              const { accomodation, flight } = cart;
              return (
                <div
                  key={`${date}-${i}`}
                  className="mt-6 border border-gray-300 p-6 shadow-lg"
                >
                  <Typography text={date} type="subtitle" />
                  <div className="flex flex-wrap items-center gap-12">
                    {accomodation.destination && (
                      <div className="mt-4">
                        <Typography text="Accomodation" />
                        <Typography
                          color="sky"
                          type="paragraph_sm"
                          text={`${accomodation.name} - ${accomodation.destination}`}
                        />
                        <Typography
                          color="sky"
                          type="paragraph_sm"
                          text={`${accomodation.startDate} - ${accomodation.endDate}`}
                        />
                        <Typography
                          color="sky"
                          type="paragraph_sm"
                          text={`${accomodation.people} guest/s`}
                        />
                      </div>
                    )}
                    {flight.destination && (
                      <div className="mt-4">
                        <Typography text="Flight" />
                        <Typography
                          color="sky"
                          type="paragraph_sm"
                          text={`${flight.origin} - ${flight.destination}`}
                        />
                        <Typography
                          color="sky"
                          type="paragraph_sm"
                          text={`${flight.startDate} - ${
                            flight.endDate && flight.endDate
                          }`}
                        />
                        <Typography
                          color="sky"
                          type="paragraph_sm"
                          text={`${flight.passengers} passenger/s`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <Typography text="You have not already booked with us" />
          )}
        </div>
      </div>
    </div>
  );
};
