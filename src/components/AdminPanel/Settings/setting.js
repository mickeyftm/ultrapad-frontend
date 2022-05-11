import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col, Form } from 'react-bootstrap'
import Alerts from '../../Alerts/alert'
import axios from 'axios'
function Setting () {
  const [settingDetail, setSettingDetails] = useState({
    site_title: '',
    site_description: '',
    meta_title: '',
    meta_keywords: '',
    telegram_link: '',
    medium_link: '',
    twitter_link: '',
    website_link: '',
    aap_link: '',
    poscast_link: '',
    meta_description: ''
  })
  const [alert, setAlert] = useState('')
  const [disabled, setDisabled] = useState(true)
  const handleChange = e => {
    const { name, value } = e.target

    setSettingDetails({ ...settingDetail, [name]: value })
  }
  const EditSetting = () => {
    setDisabled(false)
  }

  const SaveSettings = () => {
    // const {site_title,}

    axios
      .post(`${process.env.REACT_APP_ADMIN_API}/site_settings`, {
        site_title: settingDetail.site_title,
        site_description: settingDetail.site_description,
        meta_title: settingDetail.meta_title,
        meta_keywords: settingDetail.meta_keywords,
        meta_description: settingDetail.meta_description,
        telegram_link: settingDetail.telegram_link,
        medium_link: settingDetail.medium_link,
        twitter_link: settingDetail.twitter_link,
        website_link: settingDetail.website_link,

        aap_link: settingDetail.aap_link,
        poscast_link: settingDetail.poscast_link
      })
      .then(res => {
        console.log('setting responce', res.data.data)
        setSettingDetails(res.data.data)
        setAlert('SuccessFullt Edited Faq')
        setTimeout(() => {
          setAlert('')
        }, 3000)
        setDisabled(true)
      })
      .catch(err => {
        console.log('Error in  fetching settings Component', err)
        setAlert('Unable to Edit Settings Check for Error')
        setTimeout(() => {
          setAlert('')
        }, 3000)
      })
  }
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ADMIN_API}/site_settings`)
      .then(res => {
        console.log('setting responce', res.data.data)
        setSettingDetails(res.data.data)
      })
      .catch(err => {
        console.log('Error in  fetching settings Component', err)
      })
  }, [])

  return (
    <div>
      <div className='content'>
        <div className='cms-pg'>
          <Card>
            <Card.Header className='titles-sett text-center'>
            <div className='d-flex flex-sm-row flex-column justify-content-sm-between w-100'>
            <div className='mb-sm-0 mb-2'>Site Settings</div>
              <div>
                <button
                  className='d-inline light-blue-btn text-capitalize mb-sm-0 mb-2' 
                  onClick={SaveSettings}
                >
                  Save Settings
                </button>
                <button
                  className='d-inline light-blue-btn text-capitalize ms-2 ms-xs-0'
                  onClick={EditSetting}
                >
                  Edit Settings
                </button>
              </div>
            </div>
              
            </Card.Header>
            <Card.Body>
              <div className='cms-pages-style'>
                <div className='container'>
                  <Row>
                    <Col sm={12}>
                      <div className='cms-pages-style text-secondary'>
                        <Form>
                          <Form.Group className='mb-2'>
                            <Form.Label>Site Title</Form.Label>
                            <Form.Control
                              type='text'
                              name='site_title'
                              onChange={handleChange}
                              placeholder='Enter Name'
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              disabled={disabled}
                              value={settingDetail.site_title}
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Meta Title</Form.Label>
                            <Form.Control
                              type='text'
                              name='meta_title'
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              onChange={handleChange}
                              placeholder='Enter meta_title'
                              disabled={disabled}
                              value={settingDetail.meta_title}
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Group
                              className='mb-3'
                              controlId='exampleForm.ControlTextarea1'
                            >
                              <Form.Label>Meta keywords</Form.Label>
                              <Form.Control
                                type='text'
                                name='meta_keywords'
                                onChange={handleChange}
                                disabled={disabled}
                                className={
                                  disabled ? 'text-white-50' : 'text-white'
                                }
                                placeholder='Enter meta_keywords'
                                value={settingDetail.meta_keywords}
                              />
                            </Form.Group>
                            <Form.Label>Site Description</Form.Label>
                            <Form.Control
                              as='textarea'
                              rows={2}
                              disabled={disabled}
                              name='site_description'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter Description'
                              value={settingDetail.site_description}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Meta Description</Form.Label>
                            <Form.Control
                              as='textarea'
                              rows={2}
                              disabled={disabled}
                              name='site_description'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter Description'
                              value={settingDetail.site_description}
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Twitter Link</Form.Label>
                            <Form.Control
                              type='link'
                              name='twitter_link'
                              onChange={handleChange}
                              placeholder='Enter Twitter Link'
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              value={settingDetail.twitter_link}
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Telegram Link</Form.Label>
                            <Form.Control
                              type='link'
                              onChange={handleChange}
                              name='telegram_link'
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter Telegram Link'
                              value={settingDetail.telegram_link}
                            />
                          </Form.Group>{' '}
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Medium Link</Form.Label>
                            <Form.Control
                              type='link'
                              name='medium_link'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter Medium Link'
                              value={settingDetail.medium_link}
                            />
                          </Form.Group>{' '}
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>App Link</Form.Label>
                            <Form.Control
                              type='link'
                              name='aap_link'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter App Link'
                              value={settingDetail.aap_link}
                            />
                          </Form.Group>{' '}
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Podcast Link</Form.Label>
                            <Form.Control
                              type='link'
                              name='poscast_link'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter Podcast Link'
                              value={settingDetail.poscast_link}
                            />
                          </Form.Group>{' '}
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Label>Website Link</Form.Label>
                            <Form.Control
                              type='link'
                              name='website_link'
                              onChange={handleChange}
                              className={
                                disabled ? 'text-white-50' : 'text-white'
                              }
                              placeholder='Enter Website Link'
                              value={settingDetail.website_link}
                            />
                          </Form.Group>{' '}
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

export default Setting
