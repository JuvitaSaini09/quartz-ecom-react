import React from 'react'
import { Footer, Logout, Navbar } from '../../components/allComponents'
import "./logoutPage.css"

function LogoutPage() {
  return (
    <>
    <Navbar />
    <Logout />
    <Footer />
    </>
  )
}

export { LogoutPage }