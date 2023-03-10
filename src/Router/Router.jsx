import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components";
import { Cart, Flights, Home, Hotels } from "../Pages";
import { Dashboard } from "../Pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
