// import { Link } from "@mui/material"
import CancelIcon from "@mui/icons-material/Cancel";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Dropdown from "../Dropdown/Dropdown.js";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Analytics from "../Analytics/Analytics.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [analyticsclicked, setAnalyticsclicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleanalyticsclicked = () => {
    setAnalyticsclicked(!clicked);
  };
  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  const onMouseEnterAnalytics = () => {
    setAnalytics(true);
  };
  const onMouseLeaveAnalytics = () => {
    setAnalytics(false);
  };

  const helpdirected = () => {
    navigate("/help");
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <div className="logo"></div>
        &nbsp;
        <div className="logohead">HerCare</div>
        {/* React */}
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        {!clicked && (
          <DehazeIcon className="bars" style={{ fontSize: "35px" }} />
        )}
        {clicked && (
          <CancelIcon className="bars" style={{ fontSize: "35px" }} />
        )}
      </div>
      <ul className={!clicked ? "nav-menu" : "nav-menu active"}>
        <li className="link-contain">
          <NavLink className="nav-links" to="/">
            Home
          </NavLink>
        </li>
        <li className="link-contain">
          <NavLink className="nav-links" to="/viewdata">
            Shared Incidents & Safety Tips
          </NavLink>
        </li>
        <li className="link-contain">
          <NavLink className="nav-links" to="/TenNgos">
            Top NGOs
          </NavLink>
        </li>
        <li
          className="link-contain"
        >
          <NavLink className="nav-links" to="/Analytics">
            Analytics
          </NavLink>
        </li>
        <li
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => {
            setDropdown(!dropdown);
          }}
          className="smalldisnon link-contain"
        >
          <div className="smalldisnon nav-links" href="">
            <div className="droptx">More</div>
            <div className="dropicon">
              <ArrowDropDownIcon />
            </div>
          </div>
          {dropdown && <Dropdown />}
        </li>
        <li className="disnon link-contain">
          <NavLink className="nav-links" to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li className="disnon link-contain">
          <NavLink className="nav-links" to="/faqs">
            Faqs
          </NavLink>
        </li>
        <li className="disnon link-contain">
          <NavLink className="nav-links" to="/legal_resources">
            Legal Resources
          </NavLink>
        </li>
      </ul>
      <button className="btn" onClick={helpdirected}>
        Help &nbsp;
        <div className="contentlogo">
          <PrivacyTipIcon style={{ fontSize: "22px" }} />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
