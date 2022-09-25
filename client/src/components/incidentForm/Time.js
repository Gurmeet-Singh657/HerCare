import React from 'react'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers-pro';

function Time({formData, setFormData}) {
  // return (
  //   <div className='date'>
  //     <input type="date" placeholder="Date" value={formData.date} onChange={(event) => setFormData({...formData, date: event.target.value})}/>
  //     <input type="time" placeholder="TIme" value={formData.time} onChange={(event) => setFormData({...formData, time: event.target.value})}/>
  //   </div>
  // )

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setFormData({...formData, time: newValue})
    console.log(formData)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Date&Time picker"
          value={formData.time}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );

}

export default Time
