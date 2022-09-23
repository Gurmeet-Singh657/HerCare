import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Identity({formData, setFormData}) {

    const handleChange = (event) => {
        setFormData({...formData, identity: event.target.value})
      };

  return (
    <div class='identity-container'>
        <ToggleButtonGroup
      orientation="vertical"
      value={formData.identity}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
       Myself
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
       Someone Else
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default Identity
