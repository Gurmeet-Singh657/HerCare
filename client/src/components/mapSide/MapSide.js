import "./mapSide.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import OpenDialog from "../openDialog/OpenDialog.js";

const MapSide = () => {
    const navigate = useNavigate();
    const [openfilter, setOpenFilter] = useState(false);
    const handlefilter = () => {
        setOpenFilter(true);
    }
    return (
        <>
            <div className='mapside'>
                <div className='incidenttips'>
                    <div className='togactive incidentsnearme'>Incidents</div>
                    <div className='safetytips'>Safety Tips</div>
                </div>
                <div className="incidenttitle">
                    Have you been sexually harassed?
                </div>
                <div className="incidentdesc">
                    Join the 40000+ people who have shared their experiences to make public spaces safer. Sharing your experience helps us identify patterns and create safer spaces. Information is analysed to engage our communities to find solutions and hold our civic and police officials accountable to have better policies and infrastructure. Your information remains anonymous.
                </div>
                <div className="incidentbtn">
                    <button className="incidentsharebtn" onClick={() => navigate("/shareIncident-form")}>Share Your Incident Anonymously</button>
                </div>
                <div className="incidentshared">
                    <div className="incidentsharedtitle">Incidents shared by community</div>
                    <div className="filtersection1">
                        <button className="filterincidents" onClick={() => setOpenFilter(!openfilter)}>Filter</button>
                        <button className="clearincidents">Clear</button>
                    </div>
                </div>
            </div>
            {openfilter && <OpenDialog openfilter={openfilter} setOpenFilter={setOpenFilter}/>}
        </>

    )
}

export default MapSide