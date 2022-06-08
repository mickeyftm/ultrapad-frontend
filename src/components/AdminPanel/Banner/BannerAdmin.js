import React, { useLayoutEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons'


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
// TABLE ARRAY
const Pools = [
  [
    { id: 1, poolName: "pooldata1" },
    { id: 2, poolName: "pooldata2" },
    { id: 3, poolName: "pooldata3" },
    { id: 4, poolName: "pooldata4" },
    { id: 5, poolName: "pooldata5" },
    { id: 6, poolName: "pooldata6" },
    { id: 7, poolName: "pooldata7" }
  ],
  [
    { id: 1, poolName: "pooldata1" },
    { id: 2, poolName: "pooldata2" },
    { id: 3, poolName: "pooldata2" },
    { id: 4, poolName: "pooldata4" },
    { id: 5, poolName: "pooldata2" },
    { id: 6, poolName: "pooldata4" },
    { id: 7, poolName: "pooldata4" }
  ],
  [
    { id: 1, poolName: "pooldata" },
    { id: 2, poolName: "pooldata3" },
    { id: 3, poolName: "pooldata3" },
    { id: 4, poolName: "pooldata3" },
    { id: 5, poolName: "pooldata5" },
    { id: 6, poolName: "pooldata6" },
    { id: 7, poolName: "pooldata7" }
  ],
];
return (
    <div>
      <div className='content'>
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
              {/* TABLE */}
      <div className='manage-pools-pg'>
        <Card>
          <Card.Header className='titles-sett'>
            <h2 className='text-shadow'>Manage Pools</h2>
          </Card.Header>
          <Card.Body>
              <div className='table-responsive manage-pools'>
                <Table>
                  <thead>
                    {/* <tr>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                    </tr> */}
                  </thead>
                  <tbody>
                        {
                          Pools.map((pool, index) => {
                            return (
                              <tr key={index}>
                              {
                                pool.map((value, vIndex) => {
                                  return (
                                    <td key={vIndex}>
                                      {value.poolName}
                                    </td>
                                )
                              }) 
                              }
                              </tr>
                            )
                          })}
                  </tbody>
                </Table>
              </div>
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  )
}
export default BannerAdmin
