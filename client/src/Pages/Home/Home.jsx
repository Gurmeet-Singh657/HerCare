import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider.js";
import "./home.css"
import MapArea from "../../components/mapArea/MapArea.js";
import Footer from "../../components/Footer/Footer.jsx"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homebody">
        <Slider />
        <MapArea />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
