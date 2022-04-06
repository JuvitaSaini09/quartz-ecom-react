import React from 'react'
import { useFilter,priceRangeData } from '../../context/filterContext/filterContext';

function PriceFilter() {

    const {
        dispatch,
        setpriceRangeCheckedList,
        priceRangeCheckedList
      } = useFilter();

    const priceRangeClickHandler = (e, itemName) => {
        const isCurrentChecked = e.target.checked;
        setpriceRangeCheckedList((item) => {
          const newCheckedList = item.map((obj) => {
            if (obj.name === itemName) {
              if (isCurrentChecked) return { ...obj, isTrue: true };
              else return { ...obj, isTrue: false };
            } else return { ...obj };
          });
          return newCheckedList;
        });
      };
  return (
    <div className="category-container">
      <h2>Price Range</h2>
      {
      priceRangeData.map(({ name }) => {
        return (
          
          <div>
          <input type="checkbox" className="category" id={name} name={name}  onChange={(event) => {
                priceRangeClickHandler(event, name);
                dispatch({ type: "priceRange" });
              }} />
          <label htmlFor={name}>{name}</label>
        </div>
     );
    })}

      </div>
  )
}

export  {PriceFilter}