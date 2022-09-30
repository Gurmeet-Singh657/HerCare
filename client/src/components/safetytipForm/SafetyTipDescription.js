import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SafetyTipDescription({ formData, setFormData }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-error"
          label="Title"
          value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })}
          variant="filled"
          fullWidth={true}
          inputProps={{
            maxLength: 30,
          }}
        />
        <div className='incidenttitleanddesc'>
          {formData.title.length}/30
        </div>
      </div>
      <div>
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          inputProps={{
            maxLength: 300,
            minLength:10
          }}
        />
         <div className='incidenttitleanddesc'>
        {formData.message.length}/300
      </div>  
      </div>
    </Box>

  )
}

export default SafetyTipDescription
