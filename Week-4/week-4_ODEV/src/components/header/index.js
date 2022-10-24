import PropTypes from "prop-types";
import React from "react";
import {  Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div>
      <Navbar
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink eventKey="1" as={Link} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink eventKey="2" as={Link} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink eventKey="3" as={Link} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink eventKey="4" as={Link} to="/notfound">
                  
                  Notfound
                </NavLink>
              </li>
            </ul>
            {/* Toggle Btn for dark/light mode */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}     

                       
              
              
                 
               
            

// Declare a filter/Check in advance for dataType of passed tags
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //Set compultion to add title
  aboutText: PropTypes.string,
};

// Here Set default values of title & aboutText if not passed to it
Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About",
  contactText: "Contact",
  foundText: "Notfound",
};
