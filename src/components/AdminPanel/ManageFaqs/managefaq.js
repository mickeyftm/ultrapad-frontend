import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import FaqModal from './addfaqmodal'
import EditFaqModal from './editfaq'
import { TailSpin } from 'react-loader-spinner'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Alerts from '../../Alerts/alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ManageFaq () {
  const [show, setShow] = useState(false)
  const [faqs, setFaqs] = useState([])
  //edit type mean either we want to Edit faqs or just add new Faq
  const [editModal, setEditModal] = useState('')
  const [alert, setAlert] = useState('')
  const handleModal = () => {
    setShow(false)
    setEditModal('')
  }
  const handleEditModal = () => {
    setEditModal('')
    setShow(false)
  }

  useEffect(() => {
    const fetch = () => {
      axios
        .get('https://holdex-ido-server.server18.arhamsoft.info/api/faqs')
        .then(res => {
          console.log(res.data.data)
          setFaqs(res.data.data)
          setAlert('')
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetch()
  }, [alert, show,editModal])
  const DeleteFaqHandler = item => {
    console.log(item)
    axios
      .delete(
        `https://holdex-ido-server.server18.arhamsoft.info/api/faqs/${item.id}`
      )
      .then(res => {
        console.log(res)
        // e.preventDefault()
        setAlert('Successfully Deleted')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
      .catch(err => {
        setAlert('Unable to Delete')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
  }

  const AddFaqHandler = () => {
    setShow(true)
    setEditModal('')
  }
  const EditFaqHandler = item => {
    setEditModal(item)
    setShow(false)
  }
  console.log('value edit', editModal)
  return (
    <div>
      <div className='content faqs-pg'>
        <Card>
          <Card.Header className='titles-sett'>
            <h2 className='text-shadow'>Manage FAQS</h2>
            <button
              className='d-inline light-blue-btn text-capitalize'
              onClick={AddFaqHandler}
            >
              <FontAwesomeIcon className='add-icon' icon={faPlus} /> Add Faq
            </button>
          </Card.Header>

          {faqs.length > 0 ? (
            faqs.map((item, index) => {
              return (
                <div
                  className='manage-pools  border border-secondary '
                  key={index}
                >
                  <div className='card-header border-bottom border-primary'>
                    <h4 className='card-title text-white mb-0'>
                      {'Q'}
                      {' . '}
                      {item.title}
                    </h4>
                  </div>
                  <div className='faqs-wraper'>
                    <div className='card-body text-white'>
                      <p className='card-text'>{item.description}</p>
                      <ul className='nav nav-pills card-header-pills faqs-admn-styling mx-2'>
                        <li
                          className='nav-item text-white border border-warning space-between yellow-box'
                          onClick={() => EditFaqHandler(item)}
                        >
                          <p className='nav-link text-white'>EDIT</p>
                        </li>
                        <li
                          className='nav-item border border-primary green-box'
                          onClick={() => DeleteFaqHandler(item)}
                        >
                          <p className='nav-link text-white '>DELETE </p>
                        </li>
                      </ul>
                      {alert !== '' ? (
                        <Alerts message={alert} show={true} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <>
              <div className='text-center faq-loader'>
                <TailSpin
                  height='150'
                  width='150'
                  color='#46bdf4'
                  ariaLabel='loading'
                />
              </div>
            </>
          )}
        </Card>
      </div>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Modal title
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {show ? <FaqModal show={show} handleModal={handleModal} /> : <></>}
      {editModal !== '' ? (
        <EditFaqModal
          show={true}
          handleEditModal={handleEditModal}
          data={editModal}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default ManageFaq
