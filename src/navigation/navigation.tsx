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
        <a className="menu-link" href="https://github.com/Yevgen32/react-search-app">
          github
        </a>
        <NavLink className="menu-link" to="/users">
          users
        </NavLink>
        <NavLink className="menu-link" to="/react-search-app">
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
