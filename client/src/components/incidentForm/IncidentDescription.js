import React from 'react'

function IncidentDescription({formData, setFormData}) {
  return (
    <div>
      <input type="text" placeholder="Title" value={formData.title} onChange={(event) => setFormData({...formData, title: event.target.value})} />  
      <input type="text" placeholder="Message" value={formData.message} onChange={(event) => setFormData({...formData, message: event.target.value})}/>
    </div>
  )
}

export default IncidentDescription
