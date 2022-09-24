import React, {useState} from 'react'
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

function Form() {
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

  const triggerAPI = useCallback(async () => {
    // Use async await instead of chained promise
    const res = await axios.post("http://localhost:3000/incident", { formData });
    console.log(res)
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    triggerAPI();
  }, [triggerAPI])

 const FormTitles = ["For Whom You are Sharing For?", "How old are you ?", "Please tell us your gender", "Please share your Incident Here", "Can you tell us when this happened?", "Select type of violence you experienced", "Have you reported the incident to the police?", "Please tell us where the incident took place"];

    const PageDisplay = () => {
        if(page===0){
            return <Identity formData={formData} setFormData={setFormData}/>
        }
        else if(page === 1) {
            return <Gender formData={formData} setFormData={setFormData}/>
        }
        else if(page===2){
            return <Age formData={formData} setFormData={setFormData}/>
        }
        else if(page===3){
            return <Time formData={formData} setFormData={setFormData}/>
        }
        else if(page === 4){
            return <IncidentDescription formData={formData} setFormData={setFormData}/>
        }
        else if(page === 5){
            return <TypeOfViolence formData={formData} setFormData={setFormData}/>            
        }
        else if(page===6){
            return <ReportedToPolice formData={formData} setFormData={setFormData}/>
        }
        else{
            return <IncidentLocation/>
        }
    }

  return (
    <div className='Form'>
        
        <div className='form-container'>

        {/* <div className='progressbar'>
            <div style={{ width: 100*page }}> </div>
        </div> */}
            <ProgressBar done={parseInt(11.6 * page)}/>
            <div className='content'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
               <div className='body'>{PageDisplay()}</div>
                <div className='IncidentFormBtns'>
                    <button class="navigateBtn prevBtn"
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                        ><ArrowBackIcon style={{ fontSize: "20px" }} />&nbsp;Prev </button>
    
                    {(() => {
                        switch(page) {
                            case 7: return <button class="nextBtn navigateBtn " 
                            onClick={handleSubmit}
                            > SUBMIT&nbsp;<ArrowForwardIcon style={{ fontSize: "20px" }} /> </button>;
                            default: return <button class="nextBtn navigateBtn"
                            onClick={() => {
                                setPage((currPage) => currPage + 1)
                            }}
                            >Next&nbsp;<ArrowForwardIcon style={{ fontSize: "20px" }} /></button>
                        }
                        }
                    )()}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Form
