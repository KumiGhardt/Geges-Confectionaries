import React from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useCart } from "react-use-cart";
import '../styles/Menu.css';




function MenuItem({ image, item, description, price, id }) {

  const { addItem } = useCart();

  return (
    <div key={id} className="menuItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
        
      ></div>
      <h1 key={id}>{item}</h1>
      <p>{description}</p>
      <div className="pay">
      <p>MWK {price}</p>
      {/* click buttom to add the menuitem to the cart */}
      <button className="cartIcon" onClick={() => addItem(item)}><AddShoppingCartIcon/></button>
      </div>
  
    </div>
  );
}

export default MenuItem;
