import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router/Router";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  <UserProvider>
    <CartProvider>
      <Router></Router>
    </CartProvider>
  </UserProvider>
  //   </React.StrictMode>
);
