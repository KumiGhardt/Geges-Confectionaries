import React from "react";
import { menuList } from "../inventory/menuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Sweet() {
  
  // const [menuItem] = useState();

  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Sweet</h1>
        {/* loop through array and automatically render each item */}
        <div className="menuList">
          {menuList.map((menuItem, key) => {
            return (
              <MenuItem
              key={menuItem._id}
                image={menuItem.image}
                item={menuItem.item}
                description={menuItem.description}
                price={menuItem.price}
              />
            );
          })}
          
        </div>
        
      </div>
    </div>
  );
}

export default Sweet;
