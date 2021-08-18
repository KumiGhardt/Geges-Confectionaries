import React from "react";

function MenuItem({ image, item, price }) {
  return (
    <div className="menuItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{item}</h1>
      <p>MWK {price}</p>
    </div>
  );
}

export default MenuItem;
