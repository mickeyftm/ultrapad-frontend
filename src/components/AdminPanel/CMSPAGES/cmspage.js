import React, { useEffect, useState, useCallback } from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col, Form } from 'react-bootstrap'
import Alerts from '../../Alerts/alert'
import axios from 'axios'
function CmsPage () {
  const [cms, setCms] = useState({
    terms_content: '',
    privacy_content: ''
  })
  const [alert, setAlert] = useState('')
  const handleChange = e => {
    const { name, value } = e.target

    setCms({ ...cms, [name]: value })
  }
  console.log(cms)
  const [disabled, setDisabled] = useState(true)

  const EditSetting = () => {
    setDisabled(false)
  }

  const handleSave = e => {
    axios
      .post(`${process.env.REACT_APP_ADMIN_API}/site_settings`, {
        terms_content: cms.terms_content,
        privacy_content: cms.privacy_content
      })
      .then(res => {
        console.log('setting responce', res.data.data)
        setCms({
          ...cms,
          terms_content: res.data.data.terms_content,
          privacy_content: res.data.data.privacy_content
        })
        e.preventDefault()
        setAlert('Successfully updated CMS')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
      .catch(err => {
        console.log('Error in  fetching settings Component', err)

        setAlert('Error in Updating CMS ')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
  }
  const FetchData = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_ADMIN_API}/site_settings`)
      .then(res => {
        console.log('setting responce', res)
        setCms({
          ...cms,
          terms_content: res.data.data.terms_content,
          privacy_content: res.data.data.privacy_content
        })
      })
      .catch(err => {
        console.log('Error in  fetching settings Component', err)
      })
  }, [cms])

  useEffect(() => {
    if (disabled === true) {
      FetchData()
    }
  }, [FetchData, disabled])
  return (
    <div>
      <div className='content'>
        <div className='cms-pg'>
          <Card>
            <Card.Header className='titles-sett'>
              <div>Manage CMS</div>
              <div>
                <button
                  className='d-inline light-blue-btn text-capitalize '
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className='d-inline light-blue-btn text-capitalize '
                  style={{marginLeft:"10px"}}
                  onClick={EditSetting}
                >
                  Edit
                </button>
              </div>
            </Card.Header>
            <Card.Body>
              <div className='cms-pages-style'>
                <div className='container'>
                  <Row>
                    <Col sm={12}>
                      <div className='cms-pages-style cms_terms'>
                        <Form>
                          <Form.Group className='mb-2'>
                            <Form.Label>Terms Content</Form.Label>
                            <Form.Control
                              as='textarea'
                              onChange={handleChange}
                              rows={3}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              disabled={disabled}
                              name='terms_content'
                              value={cms.terms_content}
                              placeholder='Enter Terms and Conditions Here'
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Privacy Content</Form.Label>
                            <Form.Control
                              as='textarea'
                              name='privacy_content'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              disabled={disabled}
                              rows={3}
                              value={cms.privacy_content}
                              placeholder='Enter Privacy Content Here'
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label></Form.Label>
                          </Form.Group>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
            {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CmsPage
