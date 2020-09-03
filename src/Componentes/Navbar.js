import React from 'react';
import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo">
            <FaFingerprint className="navbar-icon" />
            Quarto Quadrante
          </Link>
          <div className="menu-icon">

          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
