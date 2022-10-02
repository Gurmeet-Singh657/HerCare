import React from "react";
import "./sidenav.css";
import { useState } from "react";
import Showincidentsshared from "../ShowIncidentsShared/ShowIncidentsShared.js";
import IncidentScrollbar from "../IncidentScrollbar/IncidentScrollbar.js";
import IncidentDialog from '../IncidentDialog/IncidentDialog.js'
import TopIncidentBar from "../topincidentbar/TopIncidentBar.jsx";
import TopSafetyTipsBar from "../TopSafetyTipsBar/TopSafetyTipsBar.js"
import { useContext } from "react"
import useFetch from "../../hooks/useFetch";
import { TogglerContext } from "../../context/Togglercontext";

const Sidenav = () => {
  const { takeincident, setTakeincident } = useContext(TogglerContext);
  const [Incident, setIncident] = useState(true);
  const handleIncidents = (currstatus) => {
    setIncident(currstatus);
  };
  if (Incident === false) {
    setTakeincident(false);
  }
  else {
    setTakeincident(true);
  }
  return (
    <div className="viewdatapage">
      <div className="sidebarshared">
        <div className="sidenav">
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
        </div>
        {Incident && (
          <div className="showincidentsshared">
            <TopIncidentBar />
          </div>
        )}
        {!Incident && (<div className="showsafetytipsshared">
          <TopSafetyTipsBar />
        </div>)}
      </div>
    </div>
  );
};

export default Sidenav;
