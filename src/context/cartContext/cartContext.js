import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const cartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;

  const addItemToCart = async (product) => {
    const isItemAlreadyInCart = cartItems.find((cartItem) => {
      return product._id === cartItem._id;
    });

    if (isItemAlreadyInCart === undefined) {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product: product },
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        setCartItems(response.data.cart);
      } catch (error) {
        if (error.response.status === 500) {
          alert("Please login to add to cart");
        }
        console.log(error);
      }
    } else {
      alert("this item is already in the cart");
    }
  };

  return (
    <cartContext.Provider value={{ cartItems, setCartItems, addItemToCart }}>
      {children}
    </cartContext.Provider>
  );
};
const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
