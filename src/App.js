import { Route,Routes } from "react-router-dom";
import React from 'react'
import "./App.css";
import { Home } from "./pages/home/home";
import { ProductPage } from "./pages/productPage/productPage";
import { CartPage } from "./pages/cartPage/cartPage";

function App() {
  return (
    <div className="App">
       
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/ProductPage"  element={<ProductPage />} />
            <Route path="/cartPage"  element={<CartPage />} />
       </Routes> 

     
       
      </div>
  );
}

export default App;
