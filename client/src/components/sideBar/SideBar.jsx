import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="navList">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/legal_resources">
            Legal Resources
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About HerCare
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/volunteer">
            Volunteer with HerCare
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/donate">
            Donate to HerCare
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
