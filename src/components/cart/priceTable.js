import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cartContext/cartContext";

function PriceTable() {
  const [bill, setBill] = useState({
    priceOfItems: "",
    deliveryCharge: "",
    totalPrice: "",
    qty: "",
  });

  const { cartItems } = useCart();

  useEffect(() => {
    //array of price values of all items in cart
    const arrayOfPriceOfItemsInCart = cartItems.map((item) => {
      return Number(item.price) * Number(item.qty);
    });
    // sum of all items ina cart
    const sumOfItemsInCart = arrayOfPriceOfItemsInCart.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    //array of qty of all items in cart
    const arrayOfqtyOfItemsInCart = cartItems.map((item) => {
      return Number(item.qty);
    });
    //qty of all items in cart
    const qtyOfItems = arrayOfqtyOfItemsInCart.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    //update bill
    setBill({
      priceOfItems: sumOfItemsInCart,
      deliveryCharge: 50,
      totalPrice: 50 + sumOfItemsInCart,
      qty: qtyOfItems,
    });
  }, [cartItems]);

  return (
    <>
      {cartItems[0] === undefined ? (
        ""
      ) : (
        <section className="col-2">
          <div className="price-table">
            <table>
              <tbody>
                <tr className="price-table-h">
                  <th>Price details</th>
                  <td />
                </tr>
                <tr>
                  <td>Price({bill.qty})</td>
                  <td>₹. {bill.priceOfItems}</td>
                </tr>
                <tr>
                  <td>GST </td>
                  <td>₹. 0</td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td>₹.50</td>
                </tr>
                <tr className="price-table-foot">
                  <td>Total Price</td>
                  <td>₹. {bill.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn-place-order">Place Order</button>
          </div>
        </section>
      )}
    </>
  );
}

export { PriceTable };
