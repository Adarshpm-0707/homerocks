import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="glass-nav">
      <nav className="container glass-nav-inner">
        {/* Logo */}
        <Link to="/" className="glass-nav-brand" onClick={closeMenu}>
          <img src={logo} alt="HOMEROCKS Logo" className="nav-logo" />
        </Link>

        {/* Mobile toggler */}
        <button
          className="glass-nav-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav items in glass container */}
        <div className={`glass-nav-menu ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className="glass-nav-link"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className="glass-nav-link"
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
            className="glass-nav-link"
          >
            Products
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className="glass-nav-link"
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className="glass-nav-link"
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="glass-nav-link"
          >
            Contact
          </NavLink>

          <NavLink
            to="/get-measurement"
            onClick={closeMenu}
            className="glass-nav-link glass-nav-cta"
          >
            Get Measurement
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
