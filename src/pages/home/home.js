import React from 'react'
import { Footer, HeroSection, Navbar } from '../../components/allComponents';
import { FeaturedCategories } from '../../components/featuredCategories/featuredCategories';
import "./home.css";

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeaturedCategories/>
    <Footer />
    </>
  )
}

export {Home};