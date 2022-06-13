import React, { useEffect, useState } from 'react'
import { Container, Accordion } from 'react-bootstrap'
import axios from 'axios'
const FaqsInfo = () => {
  const [faq, setFaq] = useState({
    id: 0,
    title: '',
    description: ''
  })
  useEffect(() => {
    axios.get('https://holdex-ido-server.server18.arhamsoft.info/api/faqs').then(res => {
        console.log(res.data.data)
        setFaq(res.data.data)
        // setAlert('')
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <section>
      <Container>
      <div className="page-heading my-lg-4 mt-0 mb-3"><h2 className="text-white text-capitalize mt-4 text-center">FAQs</h2></div>

        {/* <Accordion className='ido-front-side-faqs'>
            <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <h4 className='card-title text-white mb-0'>{item.title}</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="card-text">{item.description}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion> */}

        {/* <Accordion className='ido-front-side-faqs'>
          {faq.length > 0 ? (
            faq.map((item, index) => {
              return (
                <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <h4 className='card-title text-white mb-0'>{item.title}</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="card-text">{item.description}</p>
                </Accordion.Body>
            </Accordion.Item>
                
              )
            })
          ) : (
            <></>
          )} */}
          
          {faq.length > 0 ? (
            faq.map((item, index) => {
              return (
                <Accordion className='ido-front-side-faqs'>
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>
                      <h4 className='card-title text-white mb-0'>{item.title}</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="card-text">{item.description}</p>
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            
              )
            })
          ) : (
            
            <></>
          )}
          <div class="text-white d-flex justify-content-center align-items-center"><h4>No More FAQs</h4></div>
          <div className="d-flex justify-content-center align-items-center py-lg-4 py-3"> <button className="light-blue-btn">Load More</button></div>

      
      </Container>
    </section>
  )
}

export default FaqsInfo
