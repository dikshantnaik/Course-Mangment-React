import React, { Fragment } from "react";
import "./navbar.scss";
const navbar = () => {
  return (
    <Fragment>
      <nav>
        <ul class="menuItems">
          <li>
            <a href="/" data-item="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/about" data-item="About">
              About
            </a>
          </li>

          <li>
            <a href="/contact" data-item="Contact">
              Contact
            </a>
          </li>
          <li class="sign-login">
            <a href="/signup" data-item="Sign Up">
              Sign Up
            </a>
          </li>
          <li class="sign-login">
            <a href="/login" data-item="Login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default navbar;
