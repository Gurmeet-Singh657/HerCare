import "./policeStations.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";

const PoliceStations = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setAnimate(true);
      }, "75s");
      setAnimate(false);
    };
  }, []);
  return (
    <div className={animate ? "policedetails applyanimation" : "policedetails"}>
      <div className="plcsearchimg"></div>
      <div className="plcinputForms">
        <div className="plcform">
          Please enter location to find Police Stations in that area
        </div>
        <input
          type="text"
          className="plcformInput"
          placeholder="Enter location"
        />
        <button type="submit" className="plcsubmitBtn">
          NEXT&nbsp;
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default PoliceStations;
