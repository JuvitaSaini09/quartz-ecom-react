import React, { createContext, useContext, useState } from "react";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);

  return (
    <wishlistContext.Provider value={{ wishListItems, setWishListItems }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
