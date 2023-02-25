import React from "react";

export const Card = ({ place, rotation }) => {
  const finalClassName = `absolute top-0 bottom-[10vh] right-0 left-0 m-auto h-[60vh] w-[80vw] md:w-[70vw] lg:w-[40vw] bg-white rounded-lg  ${rotation}`;

  return (
    <div key={place.capital} className={finalClassName}>
      <div className={`h-full w-full`}>
        <img
          src={place.img}
          alt=""
          className={`h-full w-full object-cover rounded-lg absolute`}
        />
      </div>
      <p className="text-4xl w-full text-right text-gray-600 bg-white p-2 absolute bottom-0">
        {place.country}
      </p>
    </div>
  );
};
