import React from "react";
import { menuList } from "../inventory/menuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Savory() {
    // get the savory category from inventory
  function isSavory(value) {
    return value.category === "savory";
   }
  // filter for items with savory category
  const savoryItems = menuList.filter(isSavory);
  
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Savory</h1>
        {/* loop through array and automatically render each item */}
        <div className="menuList" key="uniqueId1">
          {savoryItems.map((menuItem, index) => {
            // if (menuItem === sweet) {
            return (
              <MenuItem
                key={index}
                id={menuItem.id}
                image={menuItem.image}
                title={menuItem.title}
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

export default Savory;
