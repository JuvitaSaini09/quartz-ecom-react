import { Route,Routes } from "react-router-dom";
import React from 'react'
import "./App.css";
import { Home ,ProductPage,CartPage,WishlistPage, LoginPage, SingupPage, LogoutPage} from "./pages/index";

function App() {
  return (
    <div className="App">
       
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/ProductPage"  element={<ProductPage />} />
            <Route path="/cartPage"  element={<CartPage />} />
            <Route path="/wishlistPage"  element={<WishlistPage />} />
            <Route path="/loginPage"  element={<LoginPage />} />
            <Route path="/signupPage"  element={<SingupPage />} />
            <Route path="/logoutPage"  element={<LogoutPage />} />
       </Routes> 

     
       
      </div>
  );
}

export default App;
