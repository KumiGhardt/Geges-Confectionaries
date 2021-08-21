import React from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useCart } from "react-use-cart";
import '../styles/Menu.css';




function MenuItem(item) {

  const { addItem } = useCart();

  return (
    <div key={item.id} className="menuItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.image})` }}
        
      ></div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div className="pay">
      <p>MWK {item.price}</p>
      {/* click buttom to add the menuitem to the cart */}
      <button className="cartIcon" onClick={() => addItem(item)}><AddShoppingCartIcon/></button>
      </div>
  
    </div>
  );
}

export default MenuItem;
