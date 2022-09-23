import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Gender({formData, setFormData}) {

  const handleChange = (event) => {
    setFormData({...formData, gender: event.target.value});
  };

  return (
    <div className='gender-container'>
      <ToggleButtonGroup
      orientation="vertical"
      value={formData.gender}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
       Male
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
       Female
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
       Other
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default Gender
