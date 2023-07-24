import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/file-drop">File Drop</Link>
        </li>
        <li>
          <Link to="/messaging">Messaging</Link>
        </li>
        <li>
          <Link to="/website-setup">Website Setup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
