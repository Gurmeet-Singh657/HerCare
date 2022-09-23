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
    >
      <ToggleButton value="list" aria-label="list">
      Rape/Sexual Assault
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
      Chain Snatching/Robbery
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
      Domestic Violence
      </ToggleButton>
      <ToggleButton value="pa" aria-label="pa">
      Physical Assault
      </ToggleButton>
      <ToggleButton value="st" aria-label="st">
      Stalking
      </ToggleButton>
      <ToggleButton value="oh" aria-label="oh">
      Online Harrasment
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default TypeOfViolence
