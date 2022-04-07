import React from 'react'
import { Footer, Navbar } from '../../components/allComponents'
import { Login } from '../../components/authentication/login/login'
import "./loginPage.css"

function LoginPage() {
  return (
    <>
    <Navbar />
    <Login />
    <Footer />
    </>
  )
}

export {LoginPage}