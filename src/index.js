import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filterContext/filterContext";
import { CartProvider } from "./context/cartContext/cartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <FilterProvider>
       <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
