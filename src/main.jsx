import React from "react";
import ReactDOM from "react-dom/client";

import { WishListProvider } from "./context/WishListContext/WishListContext";
import "./index.css";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishListProvider>
      <Router></Router>
    </WishListProvider>
  </React.StrictMode>
);
