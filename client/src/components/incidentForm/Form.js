import React, {useState} from 'react'
import IncidentDescription from './IncidentDescription';
import IncidentLocation from './IncidentLocation';
import Gender from './Gender';
import Identity from './Identity';
import Age from './Age';
import Date from './Date';
import TypeOfViolence from './TypeOfViolence';
import ReportedToPolice from './ReportedToPolice';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
     age: "",
     identity: "",
     gender: "",
     title: "",
     message: "",
     date: "",
     time:"",
     typeOfViolence: "",
     reportToPolice: "",
  })
  const FormTitles = ["Identity", "Personal Info" , "Personal Info" , "Incident Description" , "Incident Description" , "Type Of Violence" , "ReportedToPolice" , "Incident Location"];

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
            return <Date formData={formData} setFormData={setFormData}/>
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
        <div className='progressbar'></div>
        <div className='form-container'>
            <div className='header'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'>
                <button
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1)
                    }}
                >Prev<  /button>
                <button
                    disabled={page === FormTitles.length-1}
                    onClick={() => {
                        setPage((currPage) => currPage + 1)
                    }}
                >Next</button>
            </div>
        </div>

    </div>
  )
}

export default Form
