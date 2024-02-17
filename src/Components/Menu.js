import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../Images/logo.png';
import { FaBars } from 'react-icons/fa';
function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  //Detecting Mobile Devices

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Function to open and close menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when user clicks outside of it or on a link

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {
        isMobile ?
          <div className="dropdown-menu" ref={menuRef}>
            <div className='nav'>
              <button className="dropdown-toggle" onClick={toggleMenu}>
                <span className="icon">
                  <FaBars />
                </span>
                Menu
              </button>
              <NavLink onClick={() => setIsOpen(false)} to="/"><img className="m-img" src={Image} alt="Loading" /></NavLink>
            </div>
            {isOpen && (
              <ul className="dropdown-menu-list">
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/generate-letter">Generate Letter</NavLink>
                </li>
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/donate">Donate</NavLink>
                </li>
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/disclaimer">Disclaimer</NavLink>
                </li>
                <li>
                  <NavLink activeclassname="active" onClick={() => setIsOpen(false)} to="/privacy-policy">Privacy Policy</NavLink>
                </li>
              </ul>
            )}
          </div>
          :
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/" activeclassname="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/generate-letter" activeclassname="active">Generate Letter</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" activeclassname="active">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" activeclassname="active">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/donate" activeclassname="active">Donate</NavLink>
              </li>
              <li>
                <NavLink to="/disclaimer" activeclassname="active">Disclaimer</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" activeclassname="active">Privacy Policy</NavLink>
              </li>
            </ul>
            <NavLink to="/"><img className="img" src={Image} alt="Loading" /></NavLink>
          </nav>
      }
    </div>
  );
}
export default Menu;