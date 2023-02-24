import React from 'react'
import "./cartPage.css"
import { CartItems, PriceTable, Navbar } from '../../components/allComponents'

function CartPage() {
  return (
    <>
    <Navbar />
    <main className="cart-page">
        <CartItems />
        <PriceTable />
    </main>
    <footer />
    </>
  )
}

export { CartPage }