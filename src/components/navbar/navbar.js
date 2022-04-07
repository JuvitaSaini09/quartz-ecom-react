import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header className="header-nav">
        <div className="navbar">
          <div className="logo">
            <h1><i className="fab fa-artstation" />Quartz</h1>
          </div>
          <nav className="nav">
            <ul className="nav-links">

              <Link to="/"><li><a href="/">HOME</a></li></Link>

              <Link to="/ProductPage"><li><a href="/" >PRODUCTS</a></li></Link>

              <Link to="/loginPage"><li><a href="/">ACCOUNT</a></li></Link>

              <Link to="/wishlistPage">  <li><a href="/"> <i className="fas fa-heart" /></a></li></Link>

              <Link to="/cartPage"> <li><a href="/"><i className="fas fa-shopping-bag" /></a></li> </Link>

            </ul>
          </nav>
        </div>
      </header>

    </>
  )
}

export { Navbar };