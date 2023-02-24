import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useCart } from '../../context/cartContext/cartContext';
import { useWishlist } from '../../context/wishlistContext/wishlistContext';



function FeaturedCategories() {
  const [data,setData]=useState([]);
  const { addItemToCart }=useCart();
  const {addToWishList}=useWishlist();

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get("/api/products");
        setData(response.data.products)
      }
      catch(e){
        console.error(e);
      }  
    }
    fetchData();
  }, []);



  const featuredProducts=[...data].filter(item=>{
    return  (item.title==="Atomic Habits"||item.title==="The 5 Am Club"||item.title==="The House Of Strangers Stories"||item.title==="The Alchemist")
  })

  const newArrivalProducts=[...data].filter(item=>{
    return (item.title==="Unfinished"||item.title==="The Fitness Currency"||item.title==="Agni Ki Udaan"||item.title==="Mahabharata")
  })

  return (
    <>
<div>
  <section className="feature-categories">
    <div className="feat-heading"> <h2>Featured Categories</h2></div>
    <div className="feature-container">

{
 featuredProducts.map(item=>{
    return(
     <div key={item._id} className="card-featured">
   <div className="card6 card">
     <div className="card-badge">
       <button className="heart-badge "><span onClick={()=>addToWishList(item)}  ><i className="fas fa-heart fa-2x"></i></span></button>
       <a href="/">
         <img className="card-image" alt="card" src={item.src} />
         <div className="card-text card6-text">
           <header>
             <h3>{item.title}</h3><button className="rate-btn"><span>★</span>{item.rating}</button>
           </header>
           <div className="card-info">
             <p>{item.categoryName},{item.author}</p>
             <div className="price">₹. {item.price}
               <span className="price-old">₹ {item.oldPrice}</span>
             </div>
           </div>
         </div>
       </a>
       <footer>
         <button className="btn-cart" onClick={()=>addItemToCart(item)}>Add to cart</button>
       </footer>
     </div>
   </div>
 </div>
    )
  })
}

   
      
    </div>
  </section>
  <section className="feature-categories">
    <div className="feat-heading"> <h2>New arrivals</h2></div>
    <div className="feature-container">
    {
newArrivalProducts.map(item=>{
    return(
     <div key={item._id} className="card-featured">
   <div className="card6 card">
     <div className="card-badge">
       <button className="heart-badge "><span onClick={()=>addToWishList(item)} ><i className="fas fa-heart fa-2x"></i></span></button>
       <a href="/">
         <img className="card-image" alt="card" src={item.src} />
         <div className="card-text card6-text">
           <header>
             <h3>{item.title}</h3><button className="rate-btn"><span>★</span>{item.rating}</button>
           </header>
           <div className="card-info">
             <p>{item.categoryName},{item.author}</p>
             <div className="price">₹. {item.price}
               <span className="price-old">₹ {item.oldPrice}</span>
             </div>
           </div>
         </div>
       </a>
       <footer>
         <button className="btn-cart" onClick={()=>addItemToCart(item)}>Add to cart</button>
       </footer>
     </div>
   </div>
 </div>
    )
  })
}

    </div>
  </section>
</div>

    </>
  )
}

export {FeaturedCategories};