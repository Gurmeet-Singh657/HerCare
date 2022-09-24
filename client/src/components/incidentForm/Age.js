import React from 'react'

import TextField from '@mui/material/TextField';
function Age({formData, setFormData}) {
  return (
    <div className='age'>
      <TextField id="standard-basic" fullWidth  label="Age" variant="standard" min={18}  value={formData.age} onChange={(event) => setFormData({...formData, age: event.target.value})}/>
      {/* {if(formData.age <18){
        alert("Enter a age greater than 18 !!");

      }} */}
    </div>
  )
}

export default Age
