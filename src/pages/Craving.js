import React, { Component } from "react";
import { menuList } from "../inventory/menuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

export default class Craving extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <h1 className="menuTitle">Craving</h1>
          {/* loop through array and automatically render each item */}
          <div className="menuList">
            {menuList.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
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
}
