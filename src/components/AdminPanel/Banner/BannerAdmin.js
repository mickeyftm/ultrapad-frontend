import React, { useLayoutEffect, useState } from 'react'
import { createClient } from 'urql'
function BannerAdmin () {
  const [poolAmount, setPoolAmount] = useState(0)
  const API_URL = process.env.REACT_APP_SUBGRAPH_API_LATEST_BSC
  const FetchGraphCount = async id => {
    const tokensQuery = `{
          poolInfos 
          
          {
            poolId
          }
          
            
          }`

    const client2 = createClient({
      url: API_URL
    })

    const data2 = await client2.query(tokensQuery).toPromise()

    console.log('data with id', data2.data)
    if (data2.data.poolInfos !== null && data2.data.poolInfos !== undefined) {
      setPoolAmount(data2.data.poolInfos.length)
    }
  }

  useLayoutEffect(() => {
    FetchGraphCount()
  })

  return (
    <div>
      <div className='content'>
        <div className=''>
          <div className='row'>
            <div className='col-md-12'>
              <div className='panel dark-theme'>
                <div className='panel-body dashboard-cards'>
                  <div className='row mb-3 justify-content-between align-content-center'>
                    <div className='col-12 col-12 mb-3'>
                      <div className='widget-metric_6 animate bg-primary box-primary-shadow'>
                        <div className='right'>
                          <span className='value'>
                            Number Of Pools - {poolAmount}
                          </span>
                          <span className='title'>Users</span>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-12 mb-3">
                                            <div className="widget-metric_6 animate blue-yellow box-primary-shadow">
                                                <div className="right">
                                                    <span className="value">Total Stakings</span>
                                                    <span className="title">Users</span>
                                                </div>
                                            </div>
                                        </div> */}
                    {/* <div className="col-md-4 col-12 mb-3">
                                            <div className="widget-metric_6 animate blue-light box-primary-shadow">
                                                <div className="right">
                                                    <span className="value">Admin Users</span>
                                                    <span className="title">2</span>
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BannerAdmin
