import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(false);

  const handleclick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className="navbar">
          <div className="navbar-container container">

            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>

              <FaFingerprint className="navbar-icon" />
              Quarto Quadrante

          </Link>

            <div className="menu-icon" onClick={handleclick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                  Home
              </Link>
              </li>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                  Services
              </Link>
              </li>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                  Products
              </Link>
              </li>

              <li className="nav-btn">
                {button
                  ? (
                    <Link to='/sign-up' className='btn-link'>
                      <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    </Link>)
                  : (
                    <Link to='/sign-up' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu} >
                        SIGN UP
                  </Button>
                    </Link>
                  )}
              </li>

            </ul>




          </div>

        </div>



      </IconContext.Provider>

    </>
  );
}

export default Navbar;
