import React, { useState } from "react";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCart } from "react-use-cart";
import "../styles/Navbar.css";


function Navbar() {
  // useState hook to show/hide navbar links
  const [openLinks, setOpenLinks] = useState(false);
  // function to toggle the navbar depending on its state
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // cart count
  const {
    totalItems
  } = useCart();


  return (

    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="logo" />
        {/* hiddenlinks when the navbar is shrank */}
        <div className="hiddenLinks">
          <Link to="/"> Home</Link>
          <Link to="/sweet">Sweet</Link>
          <Link to="/savory">Savory</Link>
          <Link to="/craving">Craving</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">{totalItems}<ShoppingCartIcon /></Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/Sweet"> Sweet</Link>
        <Link to="/Savory"> Savory</Link>
        <Link to="/Craving"> Craving</Link>
        <Link to="/Contact"> Contact</Link>
        <Link to="/Cart"><ShoppingCartIcon /></Link>
        {/* toggles the hanburger on the navbar when it appears on click */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

