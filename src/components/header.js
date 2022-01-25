import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet_2.png';

const Header = () => (
  <div className="navContainer">
    <img src={logo} alt="planet" />
    <h1 className="Heading">Space Traveler&apos;s Hub</h1>
    <nav className="navBar">
      <ul className="navBarUl">
        <li key={1}>
          <NavLink activeclassname="active" to="/">
            Rockets
            {' '}
          </NavLink>
        </li>
        <li key={2}>
          <NavLink activeclassname="active" to="/missions">
            {' '}
            Missions
            {' '}
          </NavLink>
        </li>
        <li key={3}>
          <NavLink activeclassname="active" to="/profile">
            {' '}
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
export default Header;
