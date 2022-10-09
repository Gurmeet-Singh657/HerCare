import "./hospitals.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";

const HospitalsForm = () => {
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
    <div className="hospitalcontainer">
      <div
        className={
          animate ? "hospitaldetails applyanimation" : "hospitaldetails"
        }
      >
        <div className="searchimg"></div>
        <div className="inputForms">
          <div className="form">
            Please enter location to find hospitals in that area
          </div>
          <input
            type="text"
            className="formInput"
            placeholder="Enter location"
          />
          <button type="submit" className="submitBtn">
            NEXT&nbsp;
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalsForm;
