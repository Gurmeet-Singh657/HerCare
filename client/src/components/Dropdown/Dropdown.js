import './dropdown.css'
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react';

const Dropdown = () => {
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);
    
    return (
        <ul onClick={handleClick} className={!click ? 'dropdown-menu clicked' : 'dropdown-menu active'}>
            <li><a onClick={() => setClick(false)}>Faqs</a></li>
            <li><a onClick={() => setClick(false)}>Contact Us</a></li>
            <li><a onClick={() => setClick(false)}>Legal Resources</a></li>
        </ul>
    )
}

export default Dropdown