import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import PoliceStations from '../../components/policeStations/PoliceStations.js'
import SideBar from '../../components/sideBar/SideBar.jsx'

const Police_Stations = () => {
  return (
    <div>
        <Navbar/>
        {/* <SideBar/> */}
        <PoliceStations/>
    </div>
  )
}

export default Police_Stations