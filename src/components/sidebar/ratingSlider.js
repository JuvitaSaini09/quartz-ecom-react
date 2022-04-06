import React, { useEffect, useState } from 'react'
import { useFilter } from '../../context/filterContext/filterContext';

function RatingSlider() {
  const {dispatch}=useFilter();

  const [rating,setRating]=useState(5)

  useEffect(()=>{
    dispatch({ type: "sortByRating",currentRating:rating })
  },[rating]);

   // dispatch({ type: "sortByRating",currentRating:rating })

  return (
    <div className="slider-container">
      <h2>Rating</h2>
      <p className="rating-value">{rating} ★</p>
      <span>1</span> 
      <input type="range" className="slider" id="slider-rating" min={1} max={5} onChange={e=>{
        setRating(e.target.value); 
      }} />
      <span>5</span>
    </div>
  )
}

export { RatingSlider }