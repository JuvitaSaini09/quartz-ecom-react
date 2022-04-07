import React, { createContext, useContext, useReducer } from 'react'

const wishlistContext=createContext(null);

const removeFromWishlist=(clickedItem,wishlistItems)=>{
    
     return wishlistItems.filter(item=>item._id!==clickedItem._id)
  
}

const addToWishlist=(clickedItem,cart)=>{
    const isItemInWishlist = cart.find((cartItem) => clickedItem._id === cartItem._id);
     if(isItemInWishlist){
      return cart.filter(item=>item._id!==clickedItem._id)
     }
     else{
      return [...cart,{...clickedItem}] 
     }
  
  }

const WishlistProvider=({children})=> {
    
 const wishlistReducer=(stateWishlist,action)=>{
 
    switch(action.type){
      case "ADD_TO_WISHLIST" :
          const newState=addToWishlist(action.book,stateWishlist)
           return newState;
      case "REMOVE_FROM_WISHLIST" :
         return removeFromWishlist(action.book,stateWishlist)
      default: return stateWishlist;
  }
  }
  const [stateWishlist,dispatchWishList]=useReducer(wishlistReducer,[])

  return (
    <wishlistContext.Provider value={{stateWishlist,dispatchWishList}} >
{children}
    </wishlistContext.Provider>
  )
}

const useWishlist=()=>useContext(wishlistContext);

export { WishlistProvider,useWishlist }