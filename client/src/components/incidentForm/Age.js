import React from 'react'

function Age({formData, setFormData}) {
  return (
    <div>
      <input type="Number" min={18} placeholder="Age" value={formData.age} onChange={(event) => setFormData({...formData, age: event.target.value})} />

      {/* {if(formData.age <18){
        alert("Enter a age greater than 18 !!");

      }} */}
    </div>
  )
}

export default Age
