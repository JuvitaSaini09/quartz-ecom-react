import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const user= JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <header className="header-nav">
        <div className="navbar">
          <div className="logo">
            <h1><i className="fab fa-artstation" />Quartz</h1>
          </div>
          <nav className="nav">
            <ul className="nav-links">

              <Link to="/"><li><div>HOME</div></li></Link>

              <Link to="/ProductPage"><li><div  >PRODUCTS</div></li></Link>

             

              <Link to="/wishlistPage" style={{color:"transparent"}}>  <li><div > <i className="fas fa-heart" /></div></li></Link>

              <Link to="/cartPage" style={{color:"transparent"}}> <li><div><i className="fas fa-shopping-bag" /></div></li> </Link>

              {
                localStorage.getItem("token") 
                ? <Link to="/logoutPage" onClick={()=>{
                  localStorage.clear();
                  
                }}><li><div >{user.firstName}  <i className="fas fa-sign-in-alt"></i></div></li></Link>
                : <Link to="/loginPage"><li><div >ACCOUNT</div></li></Link>
                 
              }
            </ul>
          </nav>
        </div>
      </header>

    </>
  )
}

export { Navbar };