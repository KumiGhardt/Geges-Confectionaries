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
        {items.map((menuItem, index) => {
          // if (menuItem === sweet) {
          return (
           
              <table key={index} className="cartList">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={menuItem.id}>
                    <td><img src={menuItem.image} alt="item_image" width="50px" height="50px" /></td>
                    <td>{menuItem.item}</td>
                    <td>{menuItem.description}</td>
                    <td>{menuItem.price}</td>
                    <td>
                      <button
                        className="btn-remove"
                        onClick={() =>
                          updateItemQuantity(menuItem.id, menuItem.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn-add"
                        onClick={() =>
                          updateItemQuantity(menuItem.id, menuItem.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() =>
                          removeItem(menuItem.id, menuItem.quantity - 1)
                        }
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              );
        })}
         <button className="btn-empty" onClick={() => emptyCart()}>
        Empty Cart
      </button>
            </div>

      <p>You have {totalItems} items in your cart</p>
      <p>Total Cost: MWK {cartTotal}</p>


      <div className="Payment">
        <p>You will pay by:</p>
        <div className="paymentSelection">
          <select defaultValue="mo626">
            <option value="mo626">MO626</option>
            <option value="Mpamba">Mpamba</option>
            <option value="Airtel money">
              Airtel money
            </option>
          </select>
          <button type="submit" value="Submit" className="submit">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
