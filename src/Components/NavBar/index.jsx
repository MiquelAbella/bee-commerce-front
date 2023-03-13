import { NavLink } from "react-router-dom";

import cart from "../../assets/icons/cart.png";
import home from "../../assets/icons/home.png";
import flights from "../../assets/icons/flights.png";
import hotel from "../../assets/icons/hotel.png";
import dashboard from "../../assets/icons/dashboard.png";
import { useState } from "react";
import { NavItem } from "./NavItem";

export const NavBar = () => {
  const [isHovered, setisHovered] = useState("");

  return (
    <div className="fixed top-0 flex items-center justify-around p-4 w-full bg-white/80 z-40">
      <NavItem path="/" text="Home" img={home} />
      <NavItem path="flights" text="Flights" img={flights} />
      <NavItem path="hotels" text="Hotels" img={hotel} />
      <NavItem path="cart" text="Cart" img={cart} />
      <NavItem path="dashboard" text="History" img={dashboard} />
    </div>
  );
};
