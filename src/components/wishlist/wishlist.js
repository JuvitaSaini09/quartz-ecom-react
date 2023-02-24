import axios from 'axios';
import React, { useEffect } from 'react'
import { useCart } from '../../context/cartContext/cartContext';
import { useWishlist } from '../../context/wishlistContext/wishlistContext'

function Wishlist() {
 const {dispatch}=useCart();
  const  {wishListItems, setWishListItems}=useWishlist();

  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;

  const removeFromWishList = async (product) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setWishListItems(response.data.wishlist);
    } catch (error) {
      alert("Item can not be deleted from wishlist", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist");
        setWishListItems(response.data.wishlist);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setWishListItems]);



  return (
  <div>
  <h1 className="heading-my-wishlist">My Wishlist ❤</h1>
  <section className="wishlist-card-container">
    <>
  {wishListItems[0] === undefined ?<h1>Wishlist is Empty</h1>:""}
  </>
      { 
        wishListItems.map(item=>{
          return(
            <div key={item._id} className="wishlist-card">
      <div className="card card5 card7">
        <section className="img-container">
          <img className="card-image" alt="card" src={item.src} />
        </section>
        <section className="text-container">
          <div className="card-text card8-text">
            <header>
              <h3>{item.title}</h3><button className="rate-btn"><span>★</span>{item.rating}</button>
            </header>
            <div className="card-info">
              <p>{item.categoryName},{item.author}</p>
              <div className="price">Rs. {item.price}
                <span className="price-old">RS. {item.oldPrice}</span>
              </div>
            </div>
          </div>
          <div className="cart-click-btns">
            <button className="btn-cart" onClick={()=>removeFromWishList(item)}>Remove from wishlist</button><br />
            <button className="btn-cart"  onClick={()=>{dispatch({type:"ADD_TO_CART",book:item})}}>Add to cart</button>
          </div>
        </section>
      </div>
    </div>
          )
        })
      }

    
  </section>
</div>

  )
}

export { Wishlist }

