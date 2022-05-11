import React, { useState } from 'react'
// import {Alert} from "react-bootstrap"
function Alerts (props) {
  console.log('props', props.status)
  const [show, setShow] = useState(props.show)
  const handleClose = () => {
    setShow(false)
  }

  return (
    <div id={show !== false ? 'message' : 'hidden-message'}>
      <div id='inner-message' className='alert alert-error'>
        <p className='content'>{props.message}</p>
        <h2 type='button' data-dismiss='alert' onClick={handleClose}>
          &times;
        </h2>
      </div>
    </div>
  )
}

export default Alerts
