import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext/cartContext";
import { useFilter } from "../../context/filterContext/filterContext";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";

function ProductListing() {
  const { state } = useFilter();
  const { addItemToCart } = useCart();
  const { addToWishList,wishListItems } = useWishlist();

  return (
    <section className="product-page" style={{ marginTop: 3 + "rem" }}>
      {!state.length ? (
        <h2 style={{ marginTop: 10 + "rem", marginLeft: 10 + "rem" }}>
          No Match Found !!
        </h2>
      ) : (
        ""
      )}
      {state.map((item) => {
        return (
          <div key={item._id} className="card-featured">
            <div className="card6 card">
              <div className="card-badge">
                <button className="heart-badge ">
                  <span
                    onClick={() => {
                      addToWishList(item);
                    }}
                  >
                    <i className={ wishListItems.find(wishListItem=>  item._id === wishListItem._id ) ? 'fas fa-heart fa-2x redColor' : "fas fa-heart fa-2x"}></i>
                  </span>
                </button>
                <Link to="/">
                  <img className="card-image" alt="card" src={item.src} />
                  <div className="card-text card6-text">
                    <header>
                      <h3>{item.title}</h3>
                      <button className="rate-btn">
                        <span>★</span>
                        {item.rating}
                      </button>
                    </header>
                    <div className="card-info">
                      <p>
                        {item.categoryName},{item.author}
                      </p>
                      <div className="price">
                        ₹. {item.price}
                        <span className="price-old">₹ {item.oldPrice}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <footer>
                  <button
                    className="btn-cart"
                    onClick={() => {
                      addItemToCart(item);
                    }}
                  >
                    Add to cart
                  </button>
                </footer>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export { ProductListing };
