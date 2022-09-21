import "./policeStations.css"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PoliceStations = () => {
    return (
        <div className="policedetails" >
            <div className="plcsearchimg"></div>
            <div className="plcinputForms">
                <div className="plcform">Please enter location to find Police Stations in that area</div>
                <input type="text" className="plcformInput" placeholder="Enter location" />
                <button type="submit" className="plcsubmitBtn">NEXT&nbsp;<ArrowForwardIcon /></button>
            </div>
        </div>
    )
}

export default PoliceStations