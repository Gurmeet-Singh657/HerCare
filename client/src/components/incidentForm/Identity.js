import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Identity({formData, setFormData}) {

    const handleChange = (event) => {
        setFormData({...formData, identity: event.target.value})
      };

  return (
    <div className='identity-container'>
        <ToggleButtonGroup
      orientation="vertical"
      value={formData.identity}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton style={{backgroundColor : "white", padding : "10px", color : "black", width : "300px", margin: "3% 0", borderRadius : "8px"}}  value="list" aria-label="list">
       Myself
      </ToggleButton>
      <ToggleButton style={{backgroundColor : "white", padding : "10px", color : "black", width : "300px", margin: "3% 0", borderRadius : "8px"}} value="module" aria-label="module">
       Someone Else
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default Identity
