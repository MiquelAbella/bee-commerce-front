import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components";
import { Cart, Flights, Home, Hotels } from "../Pages";

export const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
