import React from 'react'
import "../home/home.css";
import { Footer, Navbar,ProductListing,Sidebar } from '../../components/allComponents';
import "./productPage.css";


function ProductPage() {


  return (
    <>
      <Navbar />

      <main className="main-body">
        <Sidebar />
        <ProductListing />

      </main>

      <Footer />
    </>
  )
}

export { ProductPage };