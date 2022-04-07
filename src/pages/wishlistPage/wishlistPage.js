import React from 'react'
import { Footer, NavbarLogout, Wishlist } from '../../components/allComponents'
import "./wishlistPage.css"
function WishlistPage() {
  return (
    <>
    <NavbarLogout />
    <Wishlist />
    <Footer />
    </>
  )
}

export { WishlistPage }