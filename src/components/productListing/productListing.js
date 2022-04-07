import React from 'react'
import { useCart } from '../../context/cartContext/cartContext';
import { useFilter } from '../../context/filterContext/filterContext'



function ProductListing() {
  const { state } = useFilter();
  const {dispatch}=useCart();

  return (
    <section className="product-page" style={{ marginTop: 3 + "rem" }}>

      {!state.length ? <h2 style={{ marginTop: 10 + "rem", marginLeft: 10 + "rem" }}>No Match Found !!</h2> : ""}
      {
        state.map((item) => {
          return (
            <div className="card-featured">
              <div className="card6 card">
                <div className="card-badge">
                  <button className="heart-badge "><span><i className="fas fa-heart fa-2x"></i></span></button>
                  <a href="/">
                    <img className="card-image" alt="card" src={item.src} />
                    <div className="card-text card6-text">
                      <header>
                        <h3>{item.title}</h3><button className="rate-btn"><span>★</span>{item.rating}</button>
                      </header>
                      <div className="card-info">
                        <p>{item.categoryName},{item.author}</p>
                        <div className="price">₹. {item.price}
                          <span className="price-old">₹ {item.oldPrice}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <footer>
                    <button className="btn-cart" onClick={()=>{dispatch({type:"ADD_TO_CART",book:item})}}>Add to cart</button>
                  </footer>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </section>

  )
}

export { ProductListing };