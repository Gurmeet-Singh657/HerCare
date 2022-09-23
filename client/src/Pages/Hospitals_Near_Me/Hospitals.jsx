import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import HospitalsForm from '../../components/hospitals/HospitalsForm.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import SideBar from '../../components/sideBar/SideBar.jsx'

const Hospitals = () => {
    return (
        <>
            <Navbar />
            <HospitalsForm />
            {/* <Footer /> */}
        </>
    )
}

export default Hospitals