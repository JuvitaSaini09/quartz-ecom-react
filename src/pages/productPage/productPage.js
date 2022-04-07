import React from 'react'
import "../home/home.css";
import { Footer, Navbar } from '../../components/allComponents';
import "./productPage.css";
import { ProductListing } from '../../components/productListing/productListing';
import { Sidebar } from '../../components/sidebar/sidbar';


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