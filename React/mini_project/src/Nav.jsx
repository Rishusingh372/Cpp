import React from "react";
import './style.css'

const Nav = () => {
  return (
    <nav >
      <div className="logo">MyApp</div>
      <ul >
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Gallery</a></li>

      </ul>
    </nav>
  );
}

export default Nav;