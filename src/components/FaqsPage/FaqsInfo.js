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
    <section id='faqs'>
      <Container>
        <div className='faq-heading'>
          <h2>FAQs</h2>
        </div>
        <Accordion>
          {faq.length > 0 ? (
            faq.map((item, index) => {
              return (
                
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body >
                     {item.description}
                    </Accordion.Body>
                  </Accordion.Item>
                
              )
            })
          ) : (
            <></>
          )}
        </Accordion>

      
      </Container>
    </section>
  )
}

export default FaqsInfo
