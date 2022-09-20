import { Link } from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from "react";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dropdown from "../Dropdown/Dropdown.js";
import "./navbar.css"

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    const onMouseEnter = () => {
        setDropdown(true);
    }
    const onMouseLeave = () => {
        setDropdown(false);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                <div className='logo'></div>
                &nbsp;
                <div className="logohead">HerCare</div>
                {/* React */}
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                {!clicked && <DehazeIcon className="bars" style={{ fontSize: "35px" }} />}
                {clicked && <CancelIcon className="bars" style={{ fontSize: "35px" }} />}
            </div>
            <ul className={!clicked ? 'nav-menu' : 'nav-menu active'}>
                <li className="link-contain"><a className="nav-links" href="">Home</a></li>
                <li className="link-contain"><a className="nav-links" href="">View Data</a></li>
                <li className="link-contain"><a className="nav-links" href="">Hospitals near me</a></li>
                <li className="link-contain"><a className="nav-links" href="">Police Stations near me</a></li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="smalldisnon link-contain">
                    <div className="smalldisnon nav-links" href="">
                        <div className="droptx">More</div>
                        <div className="dropicon"><ArrowDropDownIcon /></div></div>
                    {dropdown &&
                        <Dropdown/>
                    }
                </li>
                <li className="disnon link-contain"><a className="nav-links" href="">Faqs</a></li>
                <li className="disnon link-contain"><a className="nav-links" href="">Contact Us</a></li>
                <li className="disnon link-contain"><a className="nav-links" href="">Legal Resources</a></li>
            </ul>
            <button className="btn">
                Help
                &nbsp;
                <div className="contentlogo">
                    <PrivacyTipIcon style={{ fontSize: "22px" }} />
                </div>
            </button>
        </nav>
    )
}

export default Navbar