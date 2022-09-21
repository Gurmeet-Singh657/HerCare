import Hospitals from "../../components/hospitals/HospitalsForm"
import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sideBar/SideBar"
import Slider from "../../components/slider/Slider.js"
import Footer from "../../components/Footer/Footer"

const home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <Footer/> */}
    </div>
  )
}

export default home