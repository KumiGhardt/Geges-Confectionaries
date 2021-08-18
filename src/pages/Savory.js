import React from "react";
import { SavoryMenuList } from "../inventory/SavoryMenuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Savory() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Savory</h1>
        {/* loop through array and automatically render each item */}
        <div className="menuList">
          {SavoryMenuList.map((menuItem, key) => {
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

export default Savory;
