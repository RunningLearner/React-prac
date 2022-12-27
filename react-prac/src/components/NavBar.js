import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-2">
              <NavLink
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/blogs"
              >
                blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
