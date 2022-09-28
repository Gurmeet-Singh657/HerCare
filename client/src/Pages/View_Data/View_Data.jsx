import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import TabPanel from "../../components/tabPanel/TabPanel.js"
import IncidentScrollbar from "../../components/IncidentScrollbar/IncidentScrollbar.js"
import "./View_Data.css"
import Sidenav from '../../components/sidenav/Sidenav.js'
const View_Data = () => {
    return (
        <>
            <Navbar />
            <div className='viewdatacont'>
                <div className="sidebar">
                    {/* <TabPanel /> */}
                    <Sidenav/>
                    </div>
                <IncidentScrollbar />
            </div>
        </>
    )
}

export default View_Data