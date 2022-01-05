import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css'

function Navigation() {
  return (
    <div className="navigation">
    <nav className="navbar navbar-expand-lg">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="toggle-navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink className="nav-link" to="/"> 
           Home
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/NftPage"> 
            NFT Membership
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="https://www.leaflink.com/c/chron-city-distribution/">Order Online</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" target="_blank" href="https://Chroncity.com">Chron City</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navigation;
