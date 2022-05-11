import React from 'react'
import { Form } from 'react-bootstrap'
const ErrorLabels= (props)=> {
  return  (
    <>
    { 
      props.props !== undefined ?
    
      <Form.Control.Feedback type='invalid'>
         {props.props}
      </Form.Control.Feedback>
    : 
    
    <></>
   }
   </>
   )

}

export default ErrorLabels
