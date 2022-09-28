import React from 'react'
import "./sidenav.css"
import { useState } from 'react';
import Showincidentsshared from '../ShowIncidentsShared/ShowIncidentsShared.js';

const Sidenav = () => {
    const [Incident, setIncident] = useState(true);

    const handleIncidents = (status) => {
        setIncident(status);
    }
    return (
        <div className='sidebarshared'>
            <div className='sidenav'>
                <div className='incidenttips'>
                    <div className={Incident ? 'togactive incidentsnearme' : 'incidentsnearme'} onClick={() => handleIncidents(true)}>Incidents</div>
                    <div className={!Incident ? 'togactive safetytips' : 'safetytips'} onClick={() => handleIncidents(false)}>Safety Tips</div>
                </div>
            </div>
            {Incident && <div className='showincidentsshared'>
                <Showincidentsshared />
            </div>}
            {
                !Incident &&
                <div className='showsafetytipsshared'>

                </div>
            }
        </div>
    )
}

export default Sidenav;