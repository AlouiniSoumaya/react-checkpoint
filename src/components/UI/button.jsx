import React from 'react'
import {Button} from 'react-bootstrap'

export default function CustomButton({className, variant}) {
  return (
    <div> 
        <Button className={className} variant={variant}>Primary</Button>
    </div>
  )
}
