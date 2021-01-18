import React from 'react';

import Logo from './assets/logo.png';

import './header.css';

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
        <span className="menu-link" >
          users
        </span>
        <span className="menu-link" >
          search
        </span>
        <span className="menu-link" >
          app
        </span>
      </div>
    </div>
  );
};

export default Navigation;
