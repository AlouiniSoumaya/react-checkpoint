import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

export default function Input({type, className, placeholder, label,defaultValue,setFirstName}) {
  return (
    <div>
         <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      className={className}
      type={type}
      defaultValue={defaultValue}
    />
  </InputGroup>
    </div>
  )
}
