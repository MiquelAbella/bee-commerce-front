import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "../Typography";

export const NavBar = () => {
  return (
    <div className="fixed top-0 flex items-center justify-around p-4 w-full bg-white/80">
      <Link to="/">
        <Typography text="HOME" isLink />
      </Link>
      <Link to="flights">
        <Typography text="FLIGHTS" isLink />
      </Link>
      <Link to="hotels">
        <Typography text="ACCOMODATIONS" isLink />
      </Link>
      <Link to="cart">
        <Typography text="CART" isLink />
      </Link>
    </div>
  );
};
