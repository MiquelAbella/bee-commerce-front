import { NavLink } from "react-router-dom";

import cart from "../../assets/icons/cart.png";
import home from "../../assets/icons/home.png";
import flights from "../../assets/icons/flights.png";
import hotel from "../../assets/icons/hotel.png";
import dashboard from "../../assets/icons/dashboard.png";
import { useState } from "react";

export const NavBar = () => {
  const [isHovered, setisHovered] = useState("");

  return (
    <div className="fixed top-0 flex items-center justify-around p-4 w-full bg-white/80 z-40">
      <NavLink
        to="/"
        onMouseOver={() => setisHovered("home")}
        onMouseLeave={() => setisHovered("")}
        className="flex flex-col items-center justify-center"
      >
        <img className="h-[30px]" src={home} alt="nav-cart" />
        <p
          className={`text-white duration-300 ${
            isHovered === "home" && "text-gray-400"
          }`}
        >
          Home
        </p>
      </NavLink>
      <NavLink
        to="flights"
        onMouseOver={() => setisHovered("flights")}
        onMouseLeave={() => setisHovered("")}
        className="flex flex-col items-center justify-center"
      >
        <img className="h-[30px]" src={flights} alt="nav-cart" />
        <p
          className={`text-white duration-300 ${
            isHovered === "flights" && "text-gray-400"
          }`}
        >
          Flights
        </p>
      </NavLink>
      <NavLink
        to="hotels"
        onMouseOver={() => setisHovered("hotels")}
        onMouseLeave={() => setisHovered("")}
        className="flex flex-col items-center justify-center"
      >
        <img className="h-[30px]" src={hotel} alt="nav-cart" />
        <p
          className={`text-white duration-300 ${
            isHovered === "hotels" && "text-gray-400"
          }`}
        >
          Hotels
        </p>
      </NavLink>
      <NavLink
        to="cart"
        onMouseOver={() => setisHovered("cart")}
        onMouseLeave={() => setisHovered("")}
        className="flex flex-col items-center justify-center"
      >
        <img className="h-[30px]" src={cart} alt="nav-cart" />
        <p
          className={`text-white duration-300 ${
            isHovered === "cart" && "text-gray-400"
          }`}
        >
          Cart
        </p>
      </NavLink>
      <NavLink
        to="dashboard"
        onMouseOver={() => setisHovered("dashboard")}
        onMouseLeave={() => setisHovered("")}
        className="flex flex-col items-center justify-center"
      >
        <img className="h-[25px]" src={dashboard} alt="nav-cart" />
        <p
          className={`text-white duration-300 ${
            isHovered === "dashboard" && "text-gray-400"
          }`}
        >
          History
        </p>
      </NavLink>
    </div>
  );
};
