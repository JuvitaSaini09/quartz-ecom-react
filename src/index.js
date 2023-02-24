import React from "react";
import {createRoot} from 'react-dom/client' 
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filterContext/filterContext";
import { CartProvider } from "./context/cartContext/cartContext";
import { WishlistProvider } from "./context/wishlistContext/wishlistContext";
import {AuthProvider} from "./context/authContext/authContext"

const container=document.getElementById('root');
const root=createRoot(container);
// Call make Server
makeServer();

root.render(
  <React.StrictMode>
     <BrowserRouter>
     <AuthProvider>
     <WishlistProvider>
     <FilterProvider>
       <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </WishlistProvider>
    </AuthProvider>  
    </BrowserRouter>
  </React.StrictMode>,
);
