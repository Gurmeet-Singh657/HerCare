import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function TypeOfViolence({formData, setFormData}) {
   const handleChange = (event) => {
        setFormData({...formData, typeOfViolence: event.target.value});
      };
    
  return (
    <div>
      <ToggleButtonGroup
      orientation="vertical"
      value={formData.typeOfViolence}
      exclusive
      onChange={handleChange}
      fullWidth={true}
    >
      <ToggleButton value="Rape/Sexual Assault" aria-label="list">
      Rape/Sexual Assault
      </ToggleButton>
      <ToggleButton value="Chain Snatching/Robbery" aria-label="module">
      Chain Snatching/Robbery
      </ToggleButton>
      <ToggleButton value="Domestic Violence" aria-label="quilt">
      Domestic Violence
      </ToggleButton>
      <ToggleButton value="Physical Assault" aria-label="pa">
      Physical Assault
      </ToggleButton>
      <ToggleButton value="Stalking" aria-label="st">
      Stalking
      </ToggleButton>
      <ToggleButton value="Online Harrasment" aria-label="oh">
      Online Harrasment
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default TypeOfViolence
