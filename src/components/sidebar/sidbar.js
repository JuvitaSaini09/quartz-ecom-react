import React, { useState, useEffect } from 'react'
import { useFilter } from "../../context/filterContext/filterContext"
import { CategoryFilter } from './categoryFilter';
import { PriceFilter } from './priceFilter';
import { SortLhHl } from './sort-lh-hl';



function Sidebar() {
  const { dispatch } = useFilter();
  const [rating, setRating] = useState(5)

  const btnClearClickHandler = () => {

    //setting filter input checked false
    const elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].checked = false;
    }
    //setting slider initial value
    const element = document.getElementsByClassName("slider");
    element[0].value = 5;
    setRating(5);

    dispatch({ type: "clearFilters", currentRating: 5 })
  }


  return (
    <>
      <section className="side-drawer"   >
        <div className="side-drawer-container" >
          <div className="heading-side-drawer">
            <h1>Filters</h1>
            <button className="btn-clear" onClick={() => {
              btnClearClickHandler()
            }}>clear</button>
          </div>
          <div className="slider-container">
            <h2>Rating</h2>
            <p className="rating-value">{rating} ★</p>
            <span>1</span>
            <input defaultValue="5" type="range" className="slider" id="slider-rating" min={1} max={5} onChange={e => {
              setRating(e.target.value);
            }} onClick={() => dispatch({ type: "sortByRating", currentRating: rating })} />
            <span>5</span>
          </div>
          <PriceFilter />
          <CategoryFilter />
          <SortLhHl />
        </div>
      </section>

    </>
  )
}

export { Sidebar };