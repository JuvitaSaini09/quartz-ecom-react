import React, { useState } from 'react'
 import "../home/home.css";
import { Footer, Navbar } from '../../components/allComponents';
import "./productPage.css";
import { ProductListing } from '../../components/productListing/productListing';
import { Sidebar } from '../../components/sidebar/sidbar';


function ProductPage() {


  return (
    <>
    <Navbar />
 <button className="btn-sidebar" >
   <i className="fas fa-bars fa-2x" id="btn" />
   <span className="filter">Filter</span></button>

 <main className="main-body">
     <Sidebar />
     <ProductListing />

 </main>

    <Footer />
    </>
  )
}

export {ProductPage};