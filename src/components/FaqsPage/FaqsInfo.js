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
      <div class="page-heading my-lg-4 my-2"><h2 class="text-white text-capitalize mt-4 text-center">FAQs</h2></div>

        {/* <Accordion className='ido-front-side-faqs'>
            <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <h4 className='card-title text-white mb-0'>{item.title}</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p class="card-text">{item.description}</p>
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
                  <p class="card-text">{item.description}</p>
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
                  <p class="card-text">{item.description}</p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
              )
            })
          ) : (
            <></>
          )}
       

      
      </Container>
    </section>
  )
}

export default FaqsInfo
