import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import PolicyIcon from "@mui/icons-material/Policy";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import GavelIcon from "@mui/icons-material/Gavel";
import { useState } from "react";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

const SideBar = () => {
  const [activeindex, setActiveIndex] = useState(1);
  const handleactiveindex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="navList">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/legal_resources"
          >
            <PolicyIcon />
            &nbsp;&nbsp;Legal Resources
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/contact"
          >
            <PhoneIcon />
            &nbsp;&nbsp;Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/about"
          >
            <InfoIcon />
            &nbsp;&nbsp;About HerCare
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/faqs"
          >
            <HelpIcon />
            &nbsp;&nbsp;FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/sexual_violence_laws"
          >
            <GavelIcon />
            &nbsp;&nbsp;Sexual Violence Laws
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "nav-link sideactive" : "nav-link"
            }
            to="/filing_of_fir"
          >
            <LocalPoliceIcon />
            &nbsp;&nbsp;Filing of a FIR
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
