import React, { useState } from 'react'
import IncidentDescription from './IncidentDescription';
import IncidentLocation from './IncidentLocation';
import Gender from './Gender';
import Identity from './Identity';
import Age from './Age';
import Date from './Date';
import TypeOfViolence from './TypeOfViolence.js';
import ReportedToPolice from './ReportedToPolice.js';
import Progress from '../Progress/Progress.js';
import "./style.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        age: "",
        identity: "",
        gender: "",
        title: "",
        message: "",
        date: "",
        time: "",
        typeOfViolence: "",
        reportToPolice: "",
    })
    const FormTitles = ["For Whom You are Sharing For?", "How old are you ?", "Please tell us your gender", "Please share your Incident Here", "Can you tell us when this happened?", "Select type of violence you experienced", "Have you reported the incident to the police?", "Please tell us where the incident took place"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Identity formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
            return <Gender formData={formData} setFormData={setFormData} />
        }
        else if (page === 2) {
            return <Age formData={formData} setFormData={setFormData} />
        }
        else if (page === 3) {
            return <Date formData={formData} setFormData={setFormData} />
        }
        else if (page === 4) {
            return <IncidentDescription formData={formData} setFormData={setFormData} />
        }
        else if (page === 5) {
            return <TypeOfViolence formData={formData} setFormData={setFormData} />
        }
        else if (page === 6) {
            return <ReportedToPolice formData={formData} setFormData={setFormData} />
        }
        else {
            return <IncidentLocation />
        }
    }

    return (
        <>
            <div className="IncidentFormContainer">
                <div className='mainheader'>Share Your Incident Anonymously</div>

                <div className='form-container'>
                    <h1 className='formTitles'>{FormTitles[page]}</h1>
                    <div className='body'>{PageDisplay()}</div>
                    <div className='IncidentFormBtns'>
                        <button className="prevBtn navigateBtn"
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1)
                            }}
                        ><ArrowBackIcon style={{ fontSize: "20px" }} />&nbsp;Prev</button>
                        <button className="nextBtn navigateBtn"
                            disabled={page === FormTitles.length - 1}
                            onClick={() => {
                                setPage((currPage) => currPage + 1)
                            }}
                        >Next&nbsp;<ArrowForwardIcon style={{ fontSize: "20px" }} /></button>
                    </div>
                </div>
                <Progress done={parseInt(11.6 * page)} />
            </div>
        </>
    )
}

export default Form
