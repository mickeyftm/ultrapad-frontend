import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Terms() {

    const [data, setData] = useState('')
      useEffect(() => {
        axios.get('https://holdex-ido-server.server18.arhamsoft.info/api/site_settings').then(res => {
            setData(res.data.data.terms_content)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])

    return (
        <>
            <div className='container'>
                <div className="section_padding">
                    <div className='terms-page'>
                        <div className="page-heading my-lg-4 my-2">
                            <h2 className='text-white text-capitalize mt-4 text-center'>Terms of use</h2>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: data}}></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Terms
