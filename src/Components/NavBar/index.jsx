import { Link } from "react-router-dom";

import cart from "../../assets/icons/cart.png";
import home from "../../assets/icons/home.png";
import flights from "../../assets/icons/flights.png";
import hotel from "../../assets/icons/hotel.png";
import dashboard from "../../assets/icons/dashboard.png";

export const NavBar = () => {
  return (
    <div className="fixed top-0 flex items-center justify-around p-4 w-full bg-white/80 z-40">
      <Link to="/">
        <img className="h-[30px]" src={home} alt="nav-cart" />
      </Link>
      <Link to="flights">
        <img className="h-[30px]" src={flights} alt="nav-cart" />
      </Link>
      <Link to="hotels">
        <img className="h-[30px]" src={hotel} alt="nav-cart" />
      </Link>
      <Link to="cart">
        <img className="h-[30px]" src={cart} alt="nav-cart" />
      </Link>
      <Link to="dashboard">
        <img className="h-[25px]" src={dashboard} alt="nav-cart" />
      </Link>
    </div>
  );
};
