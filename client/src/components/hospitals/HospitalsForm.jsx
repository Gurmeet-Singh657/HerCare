import "./hospitals.css"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HospitalsForm = () => {
    return (
        <div className="hospitaldetails" >
            <div className="searchimg"></div>
            <div className="inputForms">
                <div className="form">Please enter location to find hospitals in that area</div>
                <input type="text" className="formInput" placeholder="Enter location" />
                <button type="submit" className="submitBtn">NEXT&nbsp;<ArrowForwardIcon /></button>
            </div>
        </div>
    )
}

export default HospitalsForm