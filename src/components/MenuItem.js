import React from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function MenuItem({ image, item, description, price }) {

  const [cart, setCart] = [];

  const addToCart = (MenuItem) => {
    console.log("we are adding to cart");
    // destructuring to append the menuItem to the existing cart
    setCart([...cart, MenuItem]);
  }

  return (
    <div className="menuItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{item}</h1>
      <p>{description}</p>
      <p> {price}</p>
      {/* click buttom to add the menuitem to the cart */}
      <button onClick={()=> {addToCart(MenuItem)}}><AddShoppingCartIcon/></button>
    </div>
  );
}

export default MenuItem;
