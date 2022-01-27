import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';
import { GrClose } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';
import logo from '../images/planet_2.png';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="navContainer">
      <h1 className="Heading">
        <img className="header_img" src={logo} alt="planet" />
        Space Traveler&apos;s Hub
      </h1>
      <button className="hamburger" type="button" onClick={handleToggle}>
        {navbarOpen ? <FiMenu /> : <FiMenu />}
      </button>
      {navbarOpen && (
        <nav className="hamburger_nav">
          <ul className={`hamburger_ul ${navbarOpen ? 'showMenu' : ''}`}>
            <li className="close_li" key={0}>
              <button aria-label="close" className="close_button" type="button" onClick={() => closeMenu()}><GrClose /></button>
            </li>
            <li key={1}>
              <NavLink
                activeclassname="active change"
                to="/"
                onClick={() => closeMenu()}
              >
                Rockets
              </NavLink>
            </li>
            <li key={2}>
              <NavLink
                activeclassname="active"
                to="/missions"
                onClick={() => closeMenu()}
              >
                Missions
              </NavLink>
            </li>
            <li key={3}>
              <NavLink
                activeclassname="active"
                to="/profile"
                onClick={() => closeMenu()}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <nav className="navBar">
        <ul className={`navBarUl ${navbarOpen ? ' showMenu' : ''}`}>
          <li key={1}>
            <NavLink
              activeclassname="active"
              to="/"
              onClick={() => closeMenu()}
            >
              Rockets
            </NavLink>
          </li>
          <li key={2}>
            <NavLink
              activeclassname="active"
              to="/missions"
              onClick={() => closeMenu()}
            >
              Missions
            </NavLink>
          </li>
          <li>|</li>
          <li key={3}>
            <NavLink
              activeclassname="active"
              to="/profile"
              onClick={() => closeMenu()}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
