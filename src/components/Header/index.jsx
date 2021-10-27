import React from "react";
import "./styles.scss";
function Header() {
  return (
    <div className="Header">
      <div className="Header_top">
        <img
          src="https://imagizer.imageshack.com/img923/8343/Z1aWM9.png"
          alt=""
          className="Header_logo"
        />
        <div className="Header_search">
          <input type="text" />
          <i className="fas fa-search Search_icon"></i>
        </div>
        <div className="Header_icon">
          <li>
            <i className="fas fa-shopping-cart"></i> <span>Cart</span>
          </li>
          <li>
            <i className="far fa-heart"></i> <span>Favorite</span>
          </li>
          <li>
            <i className="far fa-user"></i> <span>Cart</span>
          </li>
        </div>
      </div>
      <div className="Header_Nav">
        <div className="Nav_left">
          <li>home</li>
          <li>Skin care</li>
          <li>hair care</li>
          <li>body care</li>
          <li>make up</li>
        </div>
        <div className="Nav_right">
          <li>blog</li>
          <li>contact</li>
        </div>
      </div>
    </div>
  );
}

export default Header;
