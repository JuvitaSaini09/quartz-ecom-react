import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filterContext/filterContext";
import { CartProvider } from "./context/cartContext/cartContext";
import { WishlistProvider } from "./context/wishlistContext/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <WishlistProvider>
     <FilterProvider>
       <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
