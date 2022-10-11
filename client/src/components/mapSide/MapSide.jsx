import "./mapSide.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MapSide = () => {
  const navigate = useNavigate();
  const [Incident, setIncident] = useState(true);

  const handleIncidents = (status) => {
    console.log(status);
    setIncident(status);
  };
  return (
    <>
      <div className="mapside">
        <div className="incidenttips">
          <div
            className={
              Incident ? "togactive incidentsnearme" : "incidentsnearme"
            }
            onClick={() => handleIncidents(true)}
          >
            Incidents
          </div>
          <div
            className={!Incident ? "togactive safetytips" : "safetytips"}
            onClick={() => handleIncidents(false)}
          >
            Safety Tips
          </div>
        </div>
        {Incident && (
          <>
            <div className="incidenttitle">
              Have you been sexually harassed?
            </div>
            <div className="incidentdesc">
              Join the 40000+ people who have shared their experiences to make
              public spaces safer. Sharing your experience helps us identify
              patterns and create safer spaces. Information is analysed to
              engage our communities to find solutions and hold our civic and
              police officials accountable to have better policies and
              infrastructure. Your information remains anonymous.
            </div>
            <div className="incidentbtn">
              <button
                className="incidentsharebtn"
                onClick={() => navigate("/incidentform")}
              >
                Share Your Incident Anonymously
              </button>
            </div>
          </>
        )}
        {!Incident && (
          <>
            <div className="Safetytipstitle">
              How do you navigate public places safely?
            </div>
            <div className="Safetytipsdesc">
              Have you found a way out of a potentially traumatic experience?
              Have you identified ways to commute through your city safely? Tell
              us what you do for your safety so that others can do the same.
            </div>
            <div className="Safetytipsbtn">
              <button
                className="Safetytipssharebtn"
                onClick={() => navigate("/safetytipform")}
              >
                Share Safety Tip Anonymously
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MapSide;
