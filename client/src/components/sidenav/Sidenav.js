import React from "react";
import "./sidenav.css";
import { useState } from "react";
import Showincidentsshared from "../ShowIncidentsShared/ShowIncidentsShared.js";
import IncidentScrollbar from "../IncidentScrollbar/IncidentScrollbar.js";
import IncidentDialog from '../IncidentDialog/IncidentDialog.js'

const Sidenav = () => {
  const [Incident, setIncident] = useState(true);
  const handleIncidents = (currstatus) => {
    setIncident(currstatus);
  };
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
            <Showincidentsshared />
          </div>
        )}
        {!Incident && <div className="showsafetytipsshared"></div>}
      </div>
      </div>
  );
};

export default Sidenav;
