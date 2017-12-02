import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
      <nav className="navbar navbar-toggleable-md navbar-light inline bg-faded">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <IndexLink to="/">Starsidan</IndexLink>
          </li>
          <li className="nav-item">
            <Link to="/gamecontainer">Tabell</Link>
          </li>
          <li className="nav-item">
            <Link to="/betcontainer">Dina bet</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Header;
