import Hospitals from "../../components/hospitals/Hospitals"
import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sideBar/SideBar"
import Slider from "../../components/slider/Slider.js"

const home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <Hospitals/> */}
      <SideBar/>
    </div>
  )
}

export default home