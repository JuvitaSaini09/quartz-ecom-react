import { Route,Routes } from "react-router-dom";
import React from 'react'
import "./App.css";
import { Home ,ProductPage,CartPage,WishlistPage} from "./pages/index";

function App() {
  return (
    <div className="App">
       
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/ProductPage"  element={<ProductPage />} />
            <Route path="/cartPage"  element={<CartPage />} />
            <Route path="/wishlistPage"  element={<WishlistPage />} />
       </Routes> 

     
       
      </div>
  );
}

export default App;
