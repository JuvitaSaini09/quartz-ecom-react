import { Route,Routes } from "react-router-dom";
import React from 'react'
import "./App.css";
import { Home } from "./pages/home/home";

function App() {
  return (
    <div className="App">
       
        <Routes>
            <Route path="/"  element={<Home />} />
       </Routes> 

     
       
      </div>
  );
}

export default App;
