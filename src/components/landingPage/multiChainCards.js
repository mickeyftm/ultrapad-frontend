import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Arenum from '../../assets/images/arenum.png'
import Icon1 from '../../assets/images/icon-1.png'
import Icon2 from '../../assets/images/icon-2.png'
import Twitter from '../../assets/images/twiiter.png'
import Icon4 from '../../assets/images/icon-4.png'
import Genso from '../../assets/images/genso.png'
import Seror from '../../assets/images/seor.png'
import { Row, Nav, Col, Tab } from 'react-bootstrap'
import useFetchGraph from '../../CustomHooks/FetchGraph'

const MultiChainCards = () => {
  //Custom hook for fetching data from subgraph
  
  const [dataG] = useFetchGraph()
 const [first,setFirst]=useState({})
  const [time,setTime]=useState({});
 function timeConverter(UNIX_timestamp){
    // var a = new Date(UNIX_timestamp * 1000);
    var a=new Date(UNIX_timestamp*1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time1 = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    time.month=month;
    time.hour=hour;
    time.min=min;
    time.date=date;
    console.log(time)
    return time1;  
}
  
 
 useEffect(() => {

   
    // console.log('chain data 1', dataG.poolDetail)
    if(dataG.poolDetail!==undefined )
    {
        // console.log('chain data 2', dataG.poolReq2.description)
        console.log("statrt date",dataG.poolData.poolStartDate)
   timeConverter(dataG.poolData.poolStartDate)
        setFirst(dataG);
    }
  }, [dataG])

  return (
    <>
    {
    dataG.poolReq2!=undefined?
                       
      <section className='tab-cards'>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <div className='container-fluid custom-block'>
            <Nav variant='pills'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Upcoming (22)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Ended (71)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Ended NFT (11)</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 mb-md-5 mb-3'>
                    <Link to='/product' className='card mb-3'>
                      <div className='d-flex align-items-lg-center'>
                        <figure className='mb-0 game-img'>
                          <img
                            className='img-fluid'
                            src={Arenum}
                            alt='Gammes'
                          />
                        </figure>
                        <div className='w-100'>
                          <strong className='card-title'>Arenum Games</strong>
                          <div className='d-flex justify-content-between align-items-center'>
                            <p className='text-uppercase'>$ARN</p>
                           {/* <a href="#" href="#" className='tag-btn text-uppercase'>upcoming</a> */}
                          </div>
                        </div>
                      </div>
                      <div className='social-icon-bar'>
                       
                        <ul>
                          <li>
                              <figure className='mb-0'>
                                <img className='img-fluid' src={Icon1} />
                              </figure>
                            
                          </li>
                          <li>
                              <figure className='mb-0'>
                                <img className='img-fluid' src={Icon2} />
                              </figure>
                          </li>
                          <li>
                              <figure className='mb-0'>
                                <img className='img-fluid' src={Twitter} />
                              </figure>
                          </li>
                          <li>
                              <figure className='mb-0'>
                                <img className='img-fluid' src={Icon4} />
                              </figure>
                          </li>
                        
                        </ul>
                      </div>
                      <p>
                
                       {dataG.poolReq2.description}
                   
                      </p>
                      <div className='progress-bar-div'>
                        <div className='d-flex justify-content-between'>
                          <p className='mb-2'>
                            registration close in 4 hours, 59 minutes
                          </p>
                          <span className='bar-result'>0%</span>
                        </div>
                        <div className='progress mb-2'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow='25'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='game-price'>0 BUSD</p>
                          <p>0/2222222 SEOR</p>
                        </div>
                      </div>
                      <div className='card-footer'>
                        <div className='card-footer-content'>
                          <ul>
                            <li>
                              <p className='text-capitalize'>starts</p>
                              <div>
                                <strong className='d-block feature-price blue'>
                                  {time.month}{time.date}
                                </strong>
                                <span className='text-capitalize'>
                                  {time.hour}:{time.min} UTC
                                </span>
                              </div>
                            </li>
                            <li>
                              <p className='text-capitalize'>price</p>
                              <div>
                                <strong className='d-block feature-price purple'>
                                  1SMCW
                                </strong>
                                <span className='text-capitalize'>
                                  =0.13 BUS
                                </span>
                              </div>
                            </li>
                            <li>
                              <p className='text-capitalize'>total raise</p>
                              <div>
                                <strong className='d-block feature-price pink'>
                                  $100,000
                                </strong>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </section>
:<></>

}
 </>
  )
}

export default MultiChainCards
