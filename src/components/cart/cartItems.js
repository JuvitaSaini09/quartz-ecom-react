import axios from "axios";
import React, { useEffect } from "react";
import { useCart } from "../../context/cartContext/cartContext";
import { useWishlist } from "../../context/wishlistContext/wishlistContext";

function CartItems() {
  const { cartItems, setCartItems } = useCart();
  const { dispatchWishList } = useWishlist();
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;

  const removeItemFromCart = async (product) => {
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setCartItems(response.data.cart);
      // saving the encodedToken in the localStorage
    } catch (error) {
      alert("Item can not be deleted", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart");
        setCartItems(response.data.cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const incrementQty = async (product) => {
    if (product.qty < 10) {
      try {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: {
              type: "increment",
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        setCartItems(response.data.cart);

        // saving the encodedToken in the localStorage
      } catch (error) {
        alert("error in incre", error);
      }
    } else alert("10 is the limit");
  };

  const decrementQty = async (product) => {
    if (product.qty > 1) {
      try {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: {
              type: "decrement",
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        setCartItems(response.data.cart);

        // saving the encodedToken in the localStorage
      } catch (error) {
        alert("error in incre", error);
      }
    } else alert("1 is the minimum limit");
  };

  return (
    <>
      <section className="col-1">
        {cartItems[0] === undefined ? <h1>Cart is Empty</h1> : ""}
        {cartItems.map((item) => {
          return (
            <>
              <div key={item._id} className="cart-item">
                <div className="card card5 card7">
                  <section className="img-container">
                    <img className="card-image" alt="card" src={item.src} />
                  </section>
                  <section className="text-container">
                    <div className="card-text card8-text">
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
                          Rs. {item.price}
                          <span className="price-old">RS. {item.oldPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-click-btns">
                      <button
                        className="btn-cart"
                        onClick={() => removeItemFromCart(item)}
                      >
                        Remove from cart
                      </button>
                      <br />
                      <button
                        className="btn-cart"
                        onClick={() => {
                          dispatchWishList({
                            type: "ADD_TO_WISHLIST",
                            book: item,
                          });
                        }}
                      >
                        Add to wishlist
                      </button>
                    </div>
                    <div className="cart-quantity-btns">
                      <button
                        className="cart-quantity"
                        onClick={() => decrementQty(item)}
                      >
                        -
                      </button>
                      <span className="cart-quantity">{item.qty}</span>
                      <button
                        className="cart-quantity"
                        onClick={() => incrementQty(item)}
                      >
                        +
                      </button>
                      <br />
                    </div>
                  </section>
                </div>{" "}
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export { CartItems };
