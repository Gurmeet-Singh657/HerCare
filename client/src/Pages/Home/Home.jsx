import Hospitals from "../../components/hospitals/HospitalsForm";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider.js";
// import Form from '../../components/incidentForm/Form.js'
import { useNavigate } from "react-router-dom";
import MapArea from "../../components/mapArea/MapArea.js";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Slider />
      <MapArea />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
