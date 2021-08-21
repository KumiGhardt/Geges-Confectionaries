import React from "react";
import { menuList } from "../inventory/menuList";
import MenuItem from "../components/MenuItem";

function Sweet() {
  // get the sweet category from inventory
  function isSweet(value) {
   return value.category === "sweet";
  }
  // filter for items with sweet category
  const sweetItems = menuList.filter(isSweet);

  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Sweet</h1>
        {/* loop through array and automatically render each item */}
        <div className="menuList" key="uniqueId1">
          {sweetItems.map((menuItem, index) => {
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

export default Sweet;
