import React, { useState } from 'react'
import IncidentDescription from './IncidentDescription';
import IncidentLocation from './IncidentLocation';
import Gender from './Gender';
import Identity from './Identity';
import Age from './Age';
import Time from './Time';
import TypeOfViolence from './TypeOfViolence';
import ReportedToPolice from './ReportedToPolice';
import "./incidentForm.css";
import axios from 'axios';
import { useCallback } from 'react';
import ProgressBar from '../ProgressBar/Progress'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';    
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate=useNavigate();  
  const curDT =  new Date().toLocaleString();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
     age: "",
     identity: "",
     gender: "",
     title: "",
     message: "",
     time: curDT,
     typeOfViolence: "",
     reportToPolice: "",
  })

//   const triggerAPI = useCallback(async () => {
//     // Use async await instead of chained promise
//    axios.post('http://localhost:4000/incident', formData)
//   }, []);

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(JSON.stringify(formData))
    await axios.post("http://localhost:4000/incident", JSON.stringify(formData), {headers: {"Content-Type": "application/json"}})
    .then((result) => {
        navigate("/")
    });
  }


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
        else if(page===3){
            return <Time formData={formData} setFormData={setFormData}/>

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
    const checkPage = () => {
        if(page===FormTitles.length - 1){
            return <button className="nextBtn navigateBtn"
                            onClick= {handleSubmit}
                        >Submit&nbsp;<ArrowForwardIcon style={{ fontSize: "20px" }} /></button>;
        }
        else{
            return <button className="nextBtn navigateBtn"
                            onClick={() => {
                                setPage((currPage) => currPage + 1)
                            }}
                        >Next&nbsp;<ArrowForwardIcon style={{ fontSize: "20px" }} /></button>;
        }
    }

    return (
        <>
            <div className="Form">
                <div className='form-container'>
                    <div> <ProgressBar done={parseInt(11.6 * page)}/></div>
                    <h1 className='formTitles'>{FormTitles[page]}</h1>
                    <div className='body'>{PageDisplay()}</div>
                    <div className='IncidentFormBtns'>
                        <button className="prevBtn navigateBtn"
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1)
                            }}
                        ><ArrowBackIcon style={{ fontSize: "20px" }} />&nbsp;Prev</button>
                        {checkPage()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
