import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavItem = ({ path, text, img }) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <NavLink
      to={path}
      onMouseOver={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      className="flex flex-col items-center justify-center"
    >
      <img className="h-[30px]" src={img} alt="nav-cart" />
      <p
        className={` duration-300 ${
          isHovered ? "text-gray-400" : "text-white"
        }`}
      >
        {text}
      </p>
    </NavLink>
  );
};
