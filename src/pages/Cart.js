import React from "react";
import "../styles/Cart.css";
//import { menuList } from "../inventory/menuList";
//import MenuItem from "../components/MenuItem";
//import { totalmem } from "node:os";


function Cart() {
  const cart = [];
  const setCart = [];


  // get sum total
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

// remove item from cart
const removeItem = (MenuItem) => {
  //remove item from cart
}

//clear cart
const clearCart = () => {
  setCart([]);
}

//number of items in cart
const setQuantity = (product, amount) => {
  const newCart = [...cart];
  newCart.find(
    (item) => item.name === product.name
  ).quantity = amount;
  setCart(newCart);
};


return (

 
  <div className="cart">
    <h1>Cart</h1>
    {cart.length > 0 && (
      <button onClick={clearCart}>Clear Cart</button>
    )}
    <div className="cartItem">
      {cart.map((menuItem, id) => (
        <div className="menuItem" key={id}>
          <h3>{menuItem.name}</h3>
          <h4>${menuItem.cost}</h4>
          <input
            value={menuItem.quantity}
            onChange={(e) =>
              setQuantity(
                menuItem,
                parseInt(e.target.value)
              )
            }
          />
          <img src={menuItem.image} alt={menuItem.name} />
          <button onClick={() => removeItem(menuItem)}>
            Remove
          </button>
        </div>
      ))}
    </div>

    <div>Total Cost: ${getTotalSum()}</div>

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
            <input type="submit" value="Submit" />
          </div>
        </div>
  </div>
);
}

export default Cart;
