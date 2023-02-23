import React, { createContext, useContext, useState } from "react";

const cartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
};
const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
