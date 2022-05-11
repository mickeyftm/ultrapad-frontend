import React, {  useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import Alerts from '../../Alerts/alert'
function FaqModal ({ show, handleModal }) {
  console.log('add faq')

  const [faqs, setFaq] = useState({
    title: '',
    description: ''
  })
  const handleClose = () => {
    handleModal()

  }
  const [alert, setAlert] = useState('')
  const handleChange = e => {
    console.log(e)
    const { name, value } = e.target
    setFaq({ ...faqs, [name]: value })
  }
  const handleFaqSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_ADMIN_API}/faqs`, {
        title: faqs.title,
        description: faqs.description
      })
      .then(res => {
      
        setAlert('SuccessFullt Added Faq')
        setTimeout(()=>{
          setAlert("")
        },77000)
      
      })
      .catch(err => {
        console.log(err)
        setAlert('Unable to Add Faq,Check Server!!!')
        setTimeout(()=>{
          setAlert("")
        },77000)
      })
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} className='cms-pages-style' 
       backdrop="static"
       keyboard={false} 
      >
        <Modal.Header closeButton className='faq-modal'>
          <Modal.Title>Manage Faq's</Modal.Title>
          <button
            type='button'
            className='close-btn'
            onClick={handleClose}
            aria-label='Close'
          >
            ×
          </button>
        </Modal.Header>
        <Modal.Body className='faq-modal'>
          <Form className='form-border'>
            <Form.Group className='mb-3' controlId='FaqTitle'>
              <Form.Label>Faq Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={faqs.title}
                onChange={handleChange}
                placeholder='Enter Faq Title'
                required
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='description'
                value={faqs.description}
                placeholder='Enter Description'
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='faq-modal border-top-0'>
          {alert !== '' ? (
            <Alerts
              variant='success'
              className='msg-box-alert'
              message={alert}
              show={true}
            />
          ) : (
            <></>
          )}
          <Button
            className=' light-blue-btn text-capitalize'
            type='submit'
            onClick={handleFaqSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FaqModal
