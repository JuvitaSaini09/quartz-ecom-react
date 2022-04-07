import React from 'react'
import "./cartPage.css"
import { CartItems, PriceTable,NavbarLogout } from '../../components/allComponents'

function CartPage() {
  return (
    <>
    <NavbarLogout />
    <main class="cart-page">
        <CartItems />
        <PriceTable />
    </main>
    <footer />
    </>
  )
}

export { CartPage }