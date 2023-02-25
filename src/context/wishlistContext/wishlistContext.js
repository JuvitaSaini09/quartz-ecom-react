import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;
  const [wishListItems, setWishListItems] = useState([]);

  const removeFromWishList = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setWishListItems(response.data.wishlist);
    } catch (error) {
      alert("Item can not be deleted from wishlist", error);
    }
  };

  const addToWishList = async (product) => {
    const isItemAlreadyInWishlist = wishListItems.find((wishListItem) => {
      return product._id === wishListItem._id;
    });

    if (isItemAlreadyInWishlist === undefined) {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product: product },
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        setWishListItems(response.data.wishlist);
      } catch (error) {
        if (error.response.status === 500) {
          alert("Please login to add to wishlist");
        }
        console.log(error);
      }
    } else {
        removeFromWishList(product);
    }
  };

  return (
    <wishlistContext.Provider
      value={{
        wishListItems,
        setWishListItems,
        removeFromWishList,
        addToWishList,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
