import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Privacy() {

    const [data, setData] = useState('')
      useEffect(() => {
        axios.get('https://holdex-ido-server.server18.arhamsoft.info/api/site_settings').then(res => {
            setData(res.data.data.privacy_content)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])

    return (
        <>
            <div className='container'>

                <div class="page-content">
                    <div className="page-heading">
                        <h2 className='text-white  mt-4'>Privacy Policy</h2>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: data}}></p>
                </div>
            </div>
        </>
    )
}

export default Privacy
