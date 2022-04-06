import React from 'react'
import { useFilter } from '../../context/filterContext/filterContext';

function CategoryFilter() {
    const {dispatch,setCheckedList, categoriesChecked}=useFilter();

    const clickHandler = (e, itemName) => {
  
      const isCurrentChecked = e.target.checked;
      setCheckedList((item) => {
        const newCheckedList = item.map((obj) => {
          if (obj.name === itemName) {
            if (isCurrentChecked) return { ...obj, isTrue: true };
            else return { ...obj, isTrue: false };
          } else return { ...obj };
        });
        console.log(newCheckedList);
        return newCheckedList;
      });
     
    };
  return (
    <div className="category-container">
      <h2>Genre</h2>
      {
      categoriesChecked.map(({ name }) => {
        return (
          
          <div>
          <input type="checkbox" className="category" id={name} name={name}  onChange={(event) => {
                clickHandler(event, name);
                dispatch({ type: "checkBox" });
              }} />
          <label htmlFor={name}>{name}</label>
        </div>
     );
    })}

      </div>
  
  )
}

export { CategoryFilter }