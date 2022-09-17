import "./navbar.css"
import { useEffect, useRef, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Typography } from '@material-ui/core'
import Logo from "../../images/mainLogo.png"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    console.log(wrapperRef);

    return (
        <>
            <div className='container'>
                <div className="logoParent"><div className='logo'>
                </div></div>
                <ul className='mainMenu'>
                    <li className="menuItems">Home</li>
                    <li className="menuItems">View Data</li>
                    <li className="menuItems">Hospitals near me</li>
                    <li className="menuItems">Police Stations near me</li>
                    <li className="menuItems">
                        <button className="dropdown" ref={wrapperRef} onClick={() => setOpen(!open)}>
                            <span className="more">More</span>
                            <ExpandMoreIcon />
                        </button>
                        {open && <div className="options">
                            <div className="optionItems">Contact Us</div>
                            <div className="optionItems">Faqs</div>
                            <div className="optionItems">Legal Resources</div>
                        </div>}
                    </li>
                </ul>
                <div className="right">
                    <button>Help</button>
                </div>
            </div>
            <hr /></>
    )
}

export default Navbar