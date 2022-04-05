import React from 'react'
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
        <header className="header-nav">
  <div className="navbar">
    <div className="logo">
      <h1><i className="fab fa-artstation" />Quartz</h1>
    </div>
    <nav className="nav">
      <ul className="nav-links">

      <Link to="/"><li><a href="/index.html">HOME</a></li></Link>

    <Link to="/ProductPage"><li><a href="/components/product-page/product-page.html">PRODUCTS</a></li></Link>   

    <Link to="/loginPage"><li><a href="/components/product-page/login-page.html">ACCOUNT</a></li></Link> 

        <Link to="/wishlistPage">  <li><a href="/components/wishlist-page/wishlist-page.html"> <i className="fas fa-heart" /></a></li></Link>

        <Link to="/cartPage"> <li><a href="/components/cart-page/cart-page.html"><i className="fas fa-shopping-bag" /></a></li> </Link>

      </ul>
    </nav>
  </div>
</header>

   </>
    )
}

export {Navbar};