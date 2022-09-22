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
        <li label="faqs" className="nav-item">
          <NavLink name="faqs" className="nav-link" to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sexual_violence_laws">
            Sexual Violence Laws
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/filing_of_fir">
            Filing of a FIR
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
