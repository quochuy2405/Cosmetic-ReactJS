import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./../Login/index";
import "./styles.scss";
function Header() {
  const [open, setOpen] =useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="Header">
    
      <Login open={open} setOpen={setOpen}/>
      <div className="Header_top">
        <img
          src="https://imagizer.imageshack.com/img923/8343/Z1aWM9.png"
          alt=""
          className="Header_logo"
        />
        <div className="Header_search">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search Search_icon"></i>
        </div>
        <div className="Header_icon">
          <li>
            <i className="fas fa-shopping-cart"></i> <span>Cart</span>
          </li>
          <li>
            <i className="far fa-heart"></i> <span>Favorite</span>
          </li>
          <li onClick={handleClickOpen}>
            <i className="far fa-user"></i> <span>Login</span>
          </li>
       
         
   
         
   
        </div>
      </div>
      <div className="Header_Nav">
        <div className="Nav_left">
          <NavLink to="/"exact >home</NavLink >
          <NavLink to="/skincare" exact>Skin care</NavLink >
          <NavLink to="/haircare" exact>hair care</NavLink >
          <NavLink to="/bodycare" exact>body care</NavLink >
          <NavLink to="/makeup" exact>make up</NavLink >
        </div>
        <div className="Nav_right">
          <NavLink to="/blog" exact>blog</NavLink >
          <NavLink to="/contact" exact>contact</NavLink >
        </div>
      </div>
      <input type="checkbox" id="nav_mobile" name="nav_mobile"/>
      <div className="Header_Nav nav_Mobile">
      <div className="Nav_left">
            <label htmlFor="nav_mobile" style={{padding:"10px"}}>&#x2715;</label>
          <NavLink to="/"exact >home</NavLink >
          <NavLink to="/skincare" exact>Skin care</NavLink >
          <NavLink to="/haircare" exact>hair care</NavLink >
          <NavLink to="/bodycare" exact>body care</NavLink >
          <NavLink to="/makeup" exact>make up</NavLink >
        </div>
        <div className="Nav_right">
          <NavLink to="/blog" exact>blog</NavLink >
          <NavLink to="/contact" exact>contact</NavLink >
        </div>
      </div>
      <label htmlFor="nav_mobile"> <i class="fas fa-hamburger mobile"></i></label>
    </div>
  );
}

export default Header;
