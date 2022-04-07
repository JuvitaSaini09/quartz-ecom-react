import React from 'react'
import { useCart } from '../../context/cartContext/cartContext';
import { useWishlist } from '../../context/wishlistContext/wishlistContext'

function Wishlist() {
 const {dispatch}=useCart();
  const  {stateWishlist,dispatchWishList}=useWishlist();
  return (
    <>
  <div>
  <h1 className="heading-my-wishlist">My Wishlist ❤</h1>
  <section className="wishlist-card-container">
    <>
  {stateWishlist[0] === undefined ?<h1>Wishlist is Empty</h1>:""}
  </>
      { 
        stateWishlist.map(item=>{
          return(
            <div className="wishlist-card">
      <div className="card card5 card7">
        <section className="img-container">
          <img className="card-image" alt="card-image" src={item.src} />
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
            <button className="btn-cart" onClick={()=>{dispatchWishList({type:"REMOVE_FROM_WISHLIST",book:item})}}>Remove from wishlist</button><br />
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

    </>
  )
}

export { Wishlist }