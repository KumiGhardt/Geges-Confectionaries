import React from "react";
import { CravingMenuList } from "../inventory/CravingMenuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Craving() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Craving</h1>
        {/* loop through array and automatically render each item */}
        <div className="menuList">
          {CravingMenuList.map((menuItem, key) => {
            return (
              <MenuItem
              key={key}
                image={menuItem.image}
                item={menuItem.item}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Craving;
