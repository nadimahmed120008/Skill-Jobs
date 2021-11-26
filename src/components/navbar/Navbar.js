import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="d-flex  justify-content-between align-items-center">
          <Link to="/" className="link">
            <h2 className="m-0 text-success">
              <span className="text-primary">Skill.</span>Jobs
            </h2>
          </Link>
          <ul className="mt-2 mb-2">
            <li className="nav__items">
              <Link to="/" className="nav__link link">
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link to="about" className="nav__link link">
                About Us
              </Link>
            </li>
            <li className="nav__items">
              <Link to="contact" className="nav__link link">
                Contact
              </Link>
            </li>
            <li className="nav__items">
              <Link to="courses" className="nav__link link">
                Our Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
