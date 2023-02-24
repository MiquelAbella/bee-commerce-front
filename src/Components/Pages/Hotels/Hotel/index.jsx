import React, { useContext } from "react";
import {Button} from '../../../index'


export const Hotel = ({
  accomodation,
 
}) => {

  const handleBookHotel = () => {
    console.log('booking!')
  };

  return (
    <>
      <img className="w-full max-h-[30vh] object-cover" src={image} alt="" />
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between p-4">
        <p>hotel</p>
        <p>98 € / day</p>
      </div>
      <div className="flex items-end justify-end px-4">
        <Button text="Book" onClick={handleBookHotel} />
      </div>
    </>
  );
};
