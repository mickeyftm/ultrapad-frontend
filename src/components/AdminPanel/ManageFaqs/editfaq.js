import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import Alerts from '../../Alerts/alert'
function EditFaqModal ({ show, handleEditModal, data }) {
  console.log('Edit faqs')
  const [faq, setFaq] = useState({
    id: data.id,
    title: data.title,
    description: data.description
  })
  const [alert, setAlert] = useState('')
  const handleClose = () => {
    setFaq({ ...faq, title: '', description: '' })
    handleEditModal()
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFaq({ ...faq, [name]: value })
  }
  const handleFaqSubmit = () => {
    axios
      .put(`${process.env.REACT_APP_ADMIN_API}/faqs/${faq.id}`, {
        title: faq.title,
        description: faq.description
      })
      .then(res => {
        console.log('successfully Edited faq')
        // After 3 seconds set the show value to false
        setAlert('SuccessFully Edited Faq')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
      .catch(err => {
        console.log(err)

        setAlert('Unable to Edit.Check for Error!!!')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
    console.log('submit here')
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className='cms-pages-style'
        backdrop='static'
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
          <Form>
            <Form.Group className='mb-3' controlId='FaqTitle'>
              <Form.Label>Faq Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={faq.title}
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
                value={faq.description}
                placeholder='Enter Description'
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
        <Modal.Footer className='faq-modal  border-top-0'>
          <Button
            className='blue-imp light-blue-btn text-capitalize'
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

export default EditFaqModal
