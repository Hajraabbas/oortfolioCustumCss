import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../app/styles/navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">Hajra</div>
        {/* Main Navigation Links */}
        <ul className="navbar-links">
          <li className="navbar-link"><a href="#hero">Home</a></li>
          <li className="navbar-link"><a href="#about">About</a></li>
          <li className="navbar-link"><a href="#contact">Contact</a></li>
        </ul>
        {/* Hamburger Menu Icon */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {/* Dropdown Menu for Mobile */}
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li className="navbar-link"><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li className="navbar-link"><a href="#about" onClick={toggleMenu}>About</a></li>
        <li className="navbar-link"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
