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

        {/* <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>What is Holdex Finance?</Accordion.Header>
            <Accordion.Body>
              Holdex Finance is an innovative technology project in the field of
              Fin-Tech and DeFi. The main task of which, is to create a
              transparent and decentralized platform for highly profitable and
              secure investments in cryptocurrencies. Thanks to the automated
              solutions and unique developments; the project team manages to
              minimize the risks and the number of user errors. The result is
              that, crypto investors get even more profit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              What can I do with Holdex Finance?
            </Accordion.Header>
            <Accordion.Body>
              Holdex Finance provides you swap, staking, yield farming
              operations. You can also invest in new projects on our ICO
              launchpad page. In addition, you can find the highest interest
              rates in the market with the H-APY Scanner (whose idea and project
              belong to our team) then you can make automatic purchases and
              sales with high interest rates with H-ATB.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Holdex Mobile App?</Accordion.Header>
            <Accordion.Body>
              You will be able to perform all transactions on our website
              quickly and securely.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>
              What is Holdex token contract address?
            </Accordion.Header>
            <Accordion.Body>
              Our tokenization process which is started on the BSC network, will
              be active on the ERC-20 and other networks later on. 2022 Q/3 Will
              be switched to mainnet and holdex token will turn into a pos coin.
              Below is our BSC-scan
              link:https://bscscan.com/token/0xd85b5e9a7c33832dcdb554ec07cdcc56810b2e5a
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      </Container>
    </section>
  )
}

export default FaqsInfo
