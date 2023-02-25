import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WishListPicker } from "../components/WishListPicker";
import { WishList } from "../pages/WishList";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WishListPicker />} />
        <Route path="/cart" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
};
