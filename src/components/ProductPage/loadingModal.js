import React from 'react'

// import Clip from '../../components/Comps-Utils/ClipLoader'
import { Modal } from 'react-bootstrap'
import { BounceLoader } from 'react-spinners'
function ModalLoading () {
  return (
    <div>
      <Modal
      
        show={true}
        className='d-flex align-items-center '
      
      >
        <Modal.Body className='d-flex flex-column text-center justify-content-center align-items-center h-75 p-4'   style={{ background: '#6d3cfb',color:"white",fontSize:"15px",width:"550px",height:"250px",borderRadius:"4px" }}>
        <h3 className='mt-4 mb-4'>We're Almost There</h3>
          <BounceLoader size={60} className='mb-4' color='white' />
          <h5 className='mt-4 mb-4'>Transaction In progress </h5>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalLoading
