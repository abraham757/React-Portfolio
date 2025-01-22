import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './Navtabs.css';


function NavTabs() {
  const currentPage = useLocation().pathname;
    
  return (
    <nav className="nav-tabs">
      <div className="nav-container">
        <Link
          to="/"
          className={`nav-link ${
            currentPage === '/'
              ? 'text-lapis-500 font-bold'
              : 'text-french-500 hover:text-lapis-500'
          }`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`nav-link ${
            currentPage === '/about'
              ? 'text-lapis-500 font-bold'
              : 'text-french-500 hover:text-lapis-500'
          }`}
        >
          About
        </Link>

        <Link
          to="/portfolio"
          className={`nav-link ${
            currentPage === '/portfolio'
              ? 'text-lapis-500 font-bold'
              : 'text-french-500 hover:text-lapis-500'
          }`}
        >
          Portfolio
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${
            currentPage === '/contact'
              ? 'text-lapis-500 font-bold'
              : 'text-french-500 hover:text-lapis-500'
          }`}
        >
          Contact
        </Link>

        <Link
          to="/resume"
          className={`nav-link ${
            currentPage === '/resume'
              ? 'text-lapis-500 font-bold'
              : 'text-french-500 hover:text-lapis-500'
          }`}
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default NavTabs;