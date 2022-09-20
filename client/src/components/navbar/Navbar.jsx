import "./navbar.css"
import { useEffect, useRef, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../../images/mainLogo.png"
import DehazeIcon from '@mui/icons-material/Dehaze';


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [navopen, setnavOpen] = useState(false)

    const [whenSmall, setWhenSmall] = useState(false)


    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.screen.width);
        }

        if (windowSize < 840) {
            setWhenSmall(true)
            setOpen(false)
        }
        else {
            setWhenSmall(false)
            setnavOpen(false)
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize]);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false)
                    setnavOpen(false);
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
                {/* <div className="logoParent"><div className='logo'></div></div> */}
                {!whenSmall && <>
                    <div className="logoParent"><div className='logo'></div></div>
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
                    <div className="right largehelp">
                        <button>Help</button>
                    </div>
                </>}
                {whenSmall && <><div className="smallnav">
                    <button className="smallwidth" ref={wrapperRef} onClick={() => setnavOpen(!navopen)}>
                        <span className="more"><DehazeIcon style={{ fontSize: "35px" }} /></span>
                    </button>
                </div>
                    <div className="logoParent smaller"><div className='logo'></div></div>
                    <div className="right">
                        <button>Help</button>
                    </div>
                </>}

            </div>
            {navopen && <div className="navopt transf">
                <div className="navoptItems">Home</div>
                <div className="navoptItems">View Data</div>
                <div className="navoptItems">Hospitals near me</div>
                <div className="navoptItems">Police Stations near me</div>
                <div className="navoptItems">Faqs</div>
                <div className="navoptItems">Contact Us</div>
                <div className="navoptItems">Legal Resources</div>
            </div>}
            <hr />
        </>
    )
}

export default Navbar