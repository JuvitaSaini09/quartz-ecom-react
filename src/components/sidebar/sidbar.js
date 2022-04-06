import React from 'react'
import {useFilter} from "../../context/filterContext/filterContext"
import { CategoryFilter } from './categoryFilter';
import { PriceFilter } from './priceFilter';
import { RatingSlider } from './ratingSlider';
import { SortLhHl } from './sort-lh-hl';



function Sidebar() {

  return (
    <>
     <section className="side-drawer"   >
  <div className="side-drawer-container" >
    <div className="heading-side-drawer">
      <h1>Filters</h1>
      <button className="btn-clear">clear</button>
    </div>
    <RatingSlider />
    <PriceFilter />
    <CategoryFilter />
    <SortLhHl />
  </div>
</section>

    </>
  )
}

export {Sidebar };