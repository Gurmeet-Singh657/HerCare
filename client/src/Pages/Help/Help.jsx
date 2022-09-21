import Navbar from "../../components/navbar/Navbar"
import "./Help.css"
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WomanIcon from '@mui/icons-material/Woman';
import CloseIcon from '@mui/icons-material/Close';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import FloodIcon from '@mui/icons-material/Flood';
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="help">

        <div className="bigsize hospitalsnearme" onClick={() => navigate("/hospitals")}>
          <div className="hostext">Hospitals Near Me</div>
          <LocalHospitalIcon />
        </div>
        <div className="helpcontain">
          <h1 className="helptitle">Emergency Numbers</h1>
          <div className="helpnumbers">
            <div className="helptext">
              <div className="helpername"><LocalPoliceIcon />&nbsp;Police:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">100</a></div>
            </div>
            <div className="helptext">
              <div className="helpername"><FireTruckIcon />&nbsp;Fire:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">101</a></div>
            </div>
            <div className="helptext">
              <div className="helpername"><LocalHospitalIcon />&nbsp;Ambulance:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">102</a></div>
            </div>
            <div className="helptext">
              <div className="helpername"><WomanIcon />&nbsp;Women Helpline:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">1091</a></div>
            </div>
            <div className="helptext">
              <div className="helpername"><CloseIcon />&nbsp;Women Helpline - ( Domestic Abuse ):&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">181</a></div>
            </div>
            <div className="helptext">
              <div className="helpername"><EmergencyShareIcon />&nbsp;Pan-India Emergency Number:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">112</a></div>
            </div>
            <div className="helptext">
              <div className="helpername"><FloodIcon />&nbsp;Disaster Management Services:&nbsp;&nbsp;</div>
              <div className="helperNumber"><a className="helpa" href="tel:+98XXXXXXXX" target="_blank" rel="noopener">108</a></div>
            </div>
          </div>
        </div>
        <div className="bigsize policestationsnearme" onClick={() => navigate("/police")}>
          <div className="policetext">Police Stations Near Me</div>
          <LocalPoliceIcon />
        </div>

        <div className="hospitalsnearmesm" onClick={() => navigate("/hospitals")}>
          <div className="hostext">Hospitals Near Me</div>
          <LocalHospitalIcon />
        </div>
        <div className="policestationsnearmesm" onClick={() => navigate("/police")}>
          <div className="policetext">Police Stations Near Me</div>
          <LocalPoliceIcon />
        </div>
      </div>
    </>
  )
}

export default Help