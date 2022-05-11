import React from 'react';
import { faCheck, faExclamation, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  Modal } from 'react-bootstrap'
function ModalBox({modalShow,setModalShow}) {
  return <div>
 <Modal className="pool-modal"
          show={modalShow}
          onHide={() => setModalShow(false)}
          // size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Auction
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="items-list">
              <div className="item">
                <div className="icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="content">
                  <h5>Approve ANN Token</h5>
                  <p>This transaction is conducted only once per collection</p>
                  <button className="blue-outline-btn">Done</button>
                </div>
              </div>
              <div className="item">
                <div className="icon pending">
                  <FontAwesomeIcon icon={faExclamation} />
                </div>
                <div className="content">
                  <h5>Approve ANN Token</h5>
                  <p>This transaction is conducted only once per collection</p>
                  <button className="blue-outline-btn">Done</button>
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
              <button className="light-blue-btn">Create Auction</button>
            </div>
          </Modal.Body>

        </Modal>



  </div>;
}

export default ModalBox;
