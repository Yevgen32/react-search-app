import React from 'react';

import { NavLink } from 'react-router-dom';

import Logo from './assets/logo.png';

import './navigation.css';

const Navigation = () => {
  return (
    <div className="menu">
      <div className="logo">
        <a href="https://requestum.com/">
          <img src={Logo} alt="requestum" />
        </a>
      </div>
      <div className="other-links">
        <NavLink className="menu-link" to="/git">
          Github
        </NavLink>
        <NavLink className="menu-link" to="/users">
          users
        </NavLink>
        <NavLink className="menu-link" to="/">
          search
        </NavLink>
        <NavLink className="menu-link" to="/app">
          app
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
