import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Dropdown = () => {
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);

    return (
        <ul
            onClick={handleClick}
            className={!click ? "dropdown-menu clicked" : "dropdown-menu active"}
        >
            <li>
                <NavLink to="/statedata" onClick={() => setClick(false)}>
                    Statewise Analytics
                </NavLink>
            </li>
            <li>
                <NavLink to="/chartdata" onClick={() => setClick(false)}>
                    Violence-wise Analytics
                </NavLink>
            </li>
        </ul>
    );
};

export default Dropdown;