import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { login, logout } from "../store/authSlice";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav flex-row">
            <li>
              <button
                className="text-white btn btn-link text-decoration-none"
                onClick={() => {
                  if (isLoggedIn) {
                    dispatch(logout());
                  } else {
                    dispatch(login());
                  }
                }}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
            {isLoggedIn && (
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
            )}
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
