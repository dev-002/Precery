import React from "react";
import { Link, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <i className="https://cdn1.iconfinder.com/data/icons/jumpicon-marketing-glyph/32/-_Store-Shop-Mart-Market-Grocery-Mall-1024.png"></i>
        <span>B</span>P
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label for="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="Home Page HTML.html" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="#category">Categories</a>
        </li>

        <li>
          <a href="#popular-bundle-pack">Packages</a>
        </li>

        <li>
          <Link to="/contact" target="_blank">
            Contact
          </Link>
          {/* <a href="/src/components/contact/Contact">Contact&nbsp;Us</a> */}
        </li>

        <li>
          <Link to="/feedback" target="_blank">
            Feedback
          </Link>
        </li>

        <li>
          <Link to="/about" target="_blank">
            About&nbsp;us
          </Link>
        </li>

        <li>
          <a href="#download-app">App</a>
        </li>

        <li>
          <Link to="/signin" target="_blank">
            Sign&nbsp;up
          </Link>
        </li>

        <li>
          <Link to="/login" target="_blank">
            Login
          </Link>
        </li>
      </ul>
      <div className="right-nav">
        <Link to="/wishlist" target="_blank" className="like">
          <i className="fas fa-heart"></i>
          <span>2</span>
        </Link>

        <Link to="/cart" target="_blank" className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span>2</span>
        </Link>

        <Link to="/profile" target="_blank" className="user-profile">
          <i className="fas fa-user"></i>
          <span>1</span>
        </Link>
        {/* <a href="Profile HTML.html" className="user-profile"></a> */}
      </div>
    </nav>
  );
}
