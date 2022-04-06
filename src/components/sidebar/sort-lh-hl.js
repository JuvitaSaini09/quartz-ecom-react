import React from 'react'
import { useFilter } from '../../context/filterContext/filterContext';

function SortLhHl() {

    const {dispatch}=useFilter();
  return (
    <div className="Price-range-container">
      <h2>Sort by</h2>
      <div>
        <input type="radio" className="price-range" id="low-to-high" name="price-radio-button" onClick={() => {
          dispatch({ type: "LOW_TO_HIGH" });
        }}
         /><label htmlFor="low-to-high">Low to high</label><br />
        <input type="radio" className="price-range" id="high-to-low" name="price-radio-button"
        onClick={() => {
          dispatch({ type: "HIGH_TO_LOW" });
        }} />
        <label htmlFor="high-to-low">High to low</label>
      </div>
    </div>
  )
}

export  { SortLhHl }