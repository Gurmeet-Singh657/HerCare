import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function ReportedToPolice({formData, setFormData}) {
    const handleChange = (event) => {
        setFormData({...formData, reportToPolice: event.target.value});
      };

  return (
    <div>
        <ToggleButtonGroup
      orientation="vertical"
      value={formData.reportToPolice}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
      Yes I did
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
      I will, in the future
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
      I am not sure if I want to
      </ToggleButton>
      <ToggleButton value="no" aria-label="no">
      No
      </ToggleButton>
      <ToggleButton value="it" aria-label="it">
      I tried
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default ReportedToPolice
