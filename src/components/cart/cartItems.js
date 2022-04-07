import React from 'react'
import { useCart } from '../../context/cartContext/cartContext';



function CartItems() {

 const {state,dispatch}=useCart();
  return (
    <>
      <section className="col-1"> 
 {state[0]===undefined?<h1>Cart is Empty</h1>:""}
       {
         state.map(item=>{
           return(
             <>
             <div className="cart-item"> 
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
          <button className="btn-cart" onClick={()=>{dispatch({type:"REMOVE_FROM_CART",book:item})}}>Remove from cart</button><br />
          <button className="btn-cart" >Add to wishlist</button>
        </div> 
        <div className="cart-quantity-btns">
          <button className="cart-quantity" onClick={()=>{dispatch({type:"DECREMENT_COUNT",book:item})}}>-</button>
          <span className="cart-quantity">{item.count}</span><button className="cart-quantity" onClick={()=>{dispatch({type:"INCREMENT_COUNT",book:item})}}>+</button><br />
        </div>
      </section>
    </div> </div></>
           )
         })
       }
      
  
</section>

    </>
  )
}

export { CartItems }