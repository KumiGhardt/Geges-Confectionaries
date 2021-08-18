import React from "react";
import { SweetMenuList } from "../inventory/SweetMenuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Sweet() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Sweet</h1>
        {/* loop through array and automatically render each item */}
        <div className="menuList">
          {SweetMenuList.map((menuItem, key) => {
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

export default Sweet;
