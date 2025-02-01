import React, { useState } from 'react'

export default function useFormFields() {
    const [fields,setFields]=useState({})
    const handleChange=(e)=>{
   
      setFields({...fields,[e.target.name]:e.target.value})
    }
  return (
  [fields,handleChange]
  )
}
