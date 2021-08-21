import React from "react";
import { menuList } from "../inventory/menuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Craving() {
  // get the savory category from inventory
function isCraving(value) {
  return value.category === "craving";
 }
// filter for items with savory category
const cravingItems = menuList.filter(isCraving);

return (
  <div>
    <div className="menu">
      <h1 className="menuTitle">Craving</h1>
      {/* loop through array and automatically render each item */}
      <div className="menuList" key="uniqueId1">
        {cravingItems.map((menuItem, index) => {
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

export default Craving;
