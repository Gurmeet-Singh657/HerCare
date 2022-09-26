import Hospitals from "../../components/hospitals/HospitalsForm";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider.js";
// import Form from '../../components/incidentForm/Form.js'
import { useNavigate } from "react-router-dom";
// import MapHome from "../../components/MapHome/MapHome";
import MapArea from "../../components/mapArea/MapArea.js";
import Footer from "../../components/Footer/Footer.jsx"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Slider />
      <MapArea/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
