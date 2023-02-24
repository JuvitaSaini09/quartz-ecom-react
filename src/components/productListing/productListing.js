import axios from "axios";
import React from "react";
import { useCart } from "../../context/cartContext/cartContext";
import { useFilter } from "../../context/filterContext/filterContext";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";

function ProductListing() {
  const { state } = useFilter();
  const { cartItems, setCartItems } = useCart();
  const { wishListItems, setWishListItems } = useWishlist();
  const encodedToken = localStorage.getItem("token");

  const addItemToCart = async (product) => {
    const isItemAlreadyInCart = cartItems.find((cartItem) => {
      return product._id === cartItem._id;
    });

    if (isItemAlreadyInCart === undefined) {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product: product },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        setCartItems(response.data.cart);
      } catch (error) {
        if (error.response.status === 500) {
          alert("Please login to add to cart");
        }
        console.log(error);
      }
    } else {
      alert("this item is already in the cart");
    }
  };

  const addToWishList=async(product)=>{
    const isItemAlreadyInWishlist = wishListItems.find((wishListItem) => {
      return product._id === wishListItem._id;
    });

    if (isItemAlreadyInWishlist === undefined) {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product: product },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        setWishListItems(response.data.wishlist);
      } catch (error) {
        if (error.response.status === 500) {
          alert("Please login to add to wishlist");
        }
        console.log(error);
      }
    } else {
      alert("this item is already in the wishlist");
    }
  }



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
                    <i className="fas fa-heart fa-2x"></i>
                  </span>
                </button>
                <a href="/">
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
                </a>
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
