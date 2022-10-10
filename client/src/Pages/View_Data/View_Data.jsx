import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import IncidentScrollbar from "../../components/IncidentScrollbar/IncidentScrollbar.js"
import "./View_Data.css"
import Sidenav from '../../components/sidenav/Sidenav.js'
import SafetyTipsScrollbar from "../../components/SafetyTipsScrollbar/SafetyTipsScrollbar.jsx"
import { useContext } from "react";
import { TogglerContext } from '../../context/Togglercontext.js'
import IncidentDialog from '../../components/SafetyTipDialog/SafetyTipDialog.jsx'
import Footer from '../../components/Footer/Footer.jsx'
const View_Data = () => {
    const { takeincident, setTakeincident } = useContext(TogglerContext);
    return (
        <>
            <Navbar />
            <div className='viewdatacont'>
                <div className="topfilterbar">
                    <Sidenav />
                </div>
                <div className="cardsofincident">

                    {takeincident && <IncidentScrollbar />}
                    {!takeincident && <SafetyTipsScrollbar />}
                </div>
            </div>
            <div className="viewdatafooter">
                <Footer />
            </div>
        </>
    )
}

export default View_Data