import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../Button";

export const GridItem = ({ img, city, text, span }) => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <NavLink
      to="/flights"
      className={`relative ${span} h-full`}
      onMouseEnter={() => setIsHovered(0)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <img src={img} alt="" className="absolute h-full w-full object-cover" />
      <div
        className={`absolute h-full w-full transition duration-300 p-6 overflow-hidden ${
          isHovered === 0
            ? "bg-black/60 text-white"
            : "bg-transparent text-transparent"
        } `}
      >
        <p className="overflow-hidden text-4xl md:text-6xl">{city}</p>
        <p className="overflow-hidden text-xl md:text-3xl ml-12">{text}</p>
      </div>
    </NavLink>
  );
};
