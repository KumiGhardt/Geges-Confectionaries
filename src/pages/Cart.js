import React from "react";
import "../styles/Cart.css";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <h1>Cart Items:({totalItems})</h1>

      <div className="cartItem">
        {items.map((menuItem, key) => {
          // if (menuItem === sweet) {
          return (
            <tr key={menuItem._id}>
              <td>{menuItem.image}</td>
              <td>{menuItem.item}</td>
              <td>{menuItem.description}</td>
              <td>{menuItem.price}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() =>
                    updateItemQuantity(menuItem.id, menuItem.quantity - 1)
                  }
                >
                  -
                </button>
                <button
                  className="btn btn-info"
                  onClick={() =>
                    updateItemQuantity(menuItem.id, menuItem.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    removeItem(menuItem.id, menuItem.quantity - 1)
                  }
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </div>

      <p>You have {totalItems} in your cart</p>
      <p>Total Cost: MWK {cartTotal}</p>

      <button className="btn btn-danger" onClick={() => emptyCart()}>
        Empty Cart
      </button>

      <div className="Payment">
        <p>You will pay by:</p>
        <div className="paymentSelection">
          <select>
            <option value="mo626">MO626</option>
            <option value="Mpamba">Mpamba</option>
            <option selected value="Airtel money">
              Airtel money
            </option>
          </select>
          <input type="submit" value="Submit">Submit Order</input>
        </div>
      </div>
    </div>
  );
}

export default Cart;
