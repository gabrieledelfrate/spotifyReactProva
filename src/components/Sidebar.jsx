import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-2">      
      <div className="nav-btn">
        <button className="btn signup-btn" type="button">Sign Up</button>
        <button className="btn login-btn" type="button">Login</button>
        <NavLink to="#">Cookie Policy</NavLink> |
        <NavLink to="#">Privacy</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
