import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons'
  
import ReactTooltip from 'react-tooltip'
import { Form } from 'react-bootstrap'
function Info ({name,desc}) {
  return (
    <>
    <Form.Label>
     {name}
      {' '}
      <a className='ms-1' data-tip data-for={name} href='goggle.com'>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </a>
      <ReactTooltip id={name} type='info'>
        <p className='m-0'>{name}</p>
        <span>{desc}</span>
      </ReactTooltip>
      </Form.Label>
    </>
  )
}

export default Info
