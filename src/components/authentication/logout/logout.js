import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <>
    <main className="login-page-container">
  <div>
    <h1>Log out Succesful !</h1>
    <div className="login-bottom">
    <Link to="/loginPage">
      <button>Log In</button> 
      </Link>
      <Link to="/">
      <button>Home</button>
      </Link >
    </div>
  </div></main> 

    </>
  )
}

export {Logout}