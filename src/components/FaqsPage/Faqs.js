import React from 'react'
import { Accordion } from 'react-bootstrap'
function Faqs() {

    return (
        <>
            <div className='container'>

            <div class="section_padding">
                <div className='terms-page'>
                    <div className="page-heading my-lg-4 my-2">
                        <h2 className='text-white text-capitalize mt-4 text-center'>FAQs</h2>
                    </div>
                    <section id='faqs'>
        <div className='faq-heading'>
          <h2>FAQs</h2>
        </div>
                    <Accordion>
                
                  <Accordion.Item>
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body >
                    </Accordion.Body>
                  </Accordion.Item>

        </Accordion>
    </section>
                </div>
                </div>
            </div>
        </>
    )
}

export default Faqs
