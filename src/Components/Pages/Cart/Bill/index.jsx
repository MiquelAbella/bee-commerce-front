import React, { useContext } from "react";
import { Typography } from "../../../index";

export const Bill = () => {
  const luggage = "";

  //   const calculateDays = () => {
  //     let difference =
  //       new Date(endDate).getTime() - new Date(startDate).getTime();
  //     let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  //     return totalDays;
  //   };

  return (
    <div className="flex flex-col items-center">
      <div className="p-8 text-center">
        <Typography
          text="JUST ONE MORE STEP TO ENJOY YOUR TRIP"
          type="important"
        />
      </div>
      <div className="relative h-[70vh] w-full flex items-center justify-around">
        <img
          className="absolute top-0 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
        />
        <div className="z-10 bg-white/80 grid grid-cols-1 md:grid-cols-3 gap-8 py-12 w-full m-4 p-6 md:w-3/4 text-center items-start">
          <div>
            <Typography text="FLIGHT" type="subtitle" />
            <Typography text={`From: Barcelona`} />
            <Typography text={`To: Berlin`} />
            <Typography text={`Date: 22 / 03 / 2023`} />
            <Typography text={`Passengers 2`} />
          </div>

          <div>
            <Typography text="HOTEL" type="subtitle" />
            <Typography text="Beach Avenue" />
            <Typography text={`City: Berlin`} />
            <Typography text={`Departure: 22 / 03 / 2023`} />
            <Typography text={`Arrival: 29 / 03 / 2023`} />
            <Typography text={`Guests: 2`} />
          </div>

          <div>
            <Typography text="BILL" type="subtitle" />
            <Typography text={`Flight: 255 €`} />
            <Typography text={`Hotel: 340 €`} />
            <Typography text={`Total: 695 €`} />
          </div>
        </div>
      </div>
    </div>
  );
};
