import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faTimes
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
// const Pools = [
//   [
//     { id: 1, poolName: "pool" },
//     { id: 2, poolName: "network" },
//     { id: 3, poolName: "pooldata3" },
//     { id: 4, poolName: "pooldata4" },
//     { id: 5, poolName: "pooldata5" },
//     { id: 6, poolName: "pooldata6" },
//     { id: 7, poolName: "pooldata7" }
//   ],
//   [
//     { id: 1, poolName: "pooldata1" },
//     { id: 2, poolName: "pooldata2" },
//     { id: 3, poolName: "pooldata2" },
//     { id: 4, poolName: "pooldata4" },
//     { id: 5, poolName: "pooldata2" },
//     { id: 6, poolName: "pooldata4" },
//     { id: 7, poolName: "pooldata4" }
//   ],
//   [
//     { id: 1, poolName: "pooldata" },
//     { id: 2, poolName: "pooldata3" },
//     { id: 3, poolName: "pooldata3" },
//     { id: 4, poolName: "pooldata3" },
//     { id: 5, poolName: "pooldata5" },
//     { id: 6, poolName: "pooldata6" },
//     { id: 7, poolName: "pooldata7" }
//   ],
// ];
return (
    <div>
      <div className='content'>
        
              {/* TABLE */}
      <div className='manage-pools-pg'>

        <Card className='pt-lg-4 pt-3'>
              {/* CARD ROW */}
      <div className='row'>
            <div className='col-md-12'>
              <div className='panel dark-theme'>
                <div className='panel-body dashboard-cards h-auto'>
                  <div className='row mb-3 shadow-cards justify-content-between align-content-center'>
                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-3'>
                      <div className='widget-metric_6 animate bg-primary box-primary-shadow'>
                        <div className='right'>
                          <span className='value'>
                          Manage Pools
                            {/* Number Of Pools - {poolAmount} */}
                          </span>
                          {/* <span className='title'>Users</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="widget-metric_6 animate blue-yellow box-primary-shadow">
                            <div className="right">
                                <span className="value">Manage Faqs</span>
                                {/* <span className="title">Users</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="widget-metric_6 animate blue-light box-primary-shadow">
                            <div className="right">
                                <span className="value">CMS Pages</span>
                                {/* <span className="title">2</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="widget-metric_6 animate blue-light box-primary-shadow">
                            <div className="right">
                                <span className="value">Settings </span>
                                {/* <span className="title">2</span> */}
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
      {/*  END CARD ROW*/}
          <Card.Header className='titles-sett'>
            <h2 className='text-shadow'>Top Pools - {poolAmount} </h2>
          </Card.Header>
          <Card.Body>
              {/* <div className='table-responsive manage-pools'>
                <Table>
                  <thead>
                  </thead>
                  <tbody>
                        {
                          Pools.map((pool, index) => {
                            return (
                              <tr className='text-capitalize' key={index}>
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
              </div> */}

              <div className='table-responsive manage-pools'>
                      <Table>
                        <thead>
                          <tr>
                            <th>Pool</th>
                            <th>Name</th>
                            <th>Network</th>
                            <th>Enable</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                              <tr >
                                <td>
                                  
                                  <Link to=""
                                    style={{ color: 'white' }}
                                  >
                                    <FontAwesomeIcon
                                    className='del-icon'
                                    icon={faExternalLinkAlt}
                                  />
                                    0x...
                                  </Link>
                                </td>
                                <td>Nest Arcade</td>

                                <td>BSC</td>
                                <td>
                         
                                    <Badge className='px-2 py-1' bg='info'>Active</Badge>
                      
                                    {/* <Badge className='px-2 py-1' bg='secondary'>Disabled</Badge> */}
                        
                                </td>
                                <td>11 Mar 2022</td>
                                <td>17 Mar 2022</td>
                                <td>
                                  <button
                                    className='del_btn'
                                  
                                  >
                            
                                      <FontAwesomeIcon
                                        className='del-icon'
                                        icon={faTimes}
                                      />
                           
                                      {/* <FontAwesomeIcon
                                        className='del-icon'
                                        icon={faCheck}
                                      /> */}
                 
                                  </button>
                                </td>
                              </tr>
                            
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
