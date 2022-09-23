import React from 'react'

function Date({formData, setFormData}) {
  return (
    <div>
      <input type="date" placeholder="Date" value={formData.date} onChange={(event) => setFormData({...formData, date: event.target.value})}/>
      <input type="time" placeholder="TIme" value={formData.time} onChange={(event) => setFormData({...formData, time: event.target.value})}/>
    </div>
  )
}

export default Date
