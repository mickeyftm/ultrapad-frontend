import React, { useEffect, useState, useCallback } from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col, Form } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alerts from '../../Alerts/alert'
import axios from 'axios'



function CmsPage () {
  const [cms, setCms] = useState({
    terms_content: '',
    privacy_content: ''
  })
  const [terms, setTerms] = useState()
  const [privacy, setPrivacy] = useState()
  const [alert, setAlert] = useState('')
  // const handleChange = e => {
  //   const { name, value } = e.target

  //   setCms({ ...cms, [name]: value })
  // }

  const handleSave = e => {
    axios
      .post(`${process.env.REACT_APP_ADMIN_API}/site_settings`, {
        terms_content: terms,
        privacy_content: privacy
      })
      .then(res => {
        console.log('setting responce', res.data.data)
        setCms({
          ...cms,
          terms_content: res.data.data.terms_content,
          privacy_content: res.data.data.privacy_content
        })
        setTerms(res.data.data.terms_content);
        setPrivacy(res.data.data.privacy_content);
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
        setCms({
          ...cms,
          terms_content: res.data.data.terms_content,
          privacy_content: res.data.data.privacy_content
        })
        setTerms(res.data.data.terms_content);
        setPrivacy(res.data.data.privacy_content);

      })
      .catch(err => {
        console.log('Error in  fetching settings Component', err)
      })
  }, [cms])

  useEffect(() => {
    FetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
// CKEDITOR
  return (
    <div>
      <div className='content'>
        <div className='cms-pg'>
          <Card className='pt-lg-4 pt-3'>
            <Card.Header className='titles-sett'>
              <h2 className='text-shadow'>Manage CMS</h2>
              <div>
                <button
                  className='d-inline light-blue-btn text-capitalize '
                  onClick={handleSave}
                >
                  Save
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
                            {/* <Form.Control id="scroll-1"
                              as='textarea'
                              onChange={handleChange}
                              rows={3}
                              className={'text-white'}
                              name='terms_content'
                              value={cms.terms_content}
                              placeholder='Enter Terms and Conditions Here'
                              required
                            /> */}

                            
                           <span className="ido-ckeditor"> 
                           {/* <div dangerouslySetInnerHTML={{__html: '<p>First &middot; Second</p>'}}></div> */}
                           <CKEditor
                            editor={ClassicEditor}
                            data={terms}
                            onChange={ ( event, editor1 ) => {setTerms(editor1.getData())}}
                           />
                       </span>
                        
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Privacy Content</Form.Label>
                            <span className="ido-ckeditor">
                            <CKEditor
                              editor={ClassicEditor}  
                              data={privacy}
                              onChange={ ( event, editor1 ) => {setPrivacy(editor1.getData())}}
                            />
                            </span>
                            {/* <Form.Control id="scroll-1"
                              as='textarea'
                              name='privacy_content'
                              onChange={handleChange}
                              className={'text-white'}
                              rows={3}
                              value={cms.privacy_content}
                              placeholder='Enter Privacy Content Here'
                            /> */}
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
