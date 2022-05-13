

import React from 'react'
import { Row, Container, ProgressBar } from 'react-bootstrap'
function LoaderProductSkeleton () {
  return (
    <Container>
      <Row>
        <div className='col-lg-4 mb-lg-0 mb-3'>
          <div className='profile-info'>
            <div className='top-sec skeleton profile_skeleton'>
              <div className=''></div>
              <div className='name'>
                <h2></h2>
                <div className='text-sm font-secondary text-ignored'></div>
              </div>
            </div>
            <div className='badges'>
              {/* <span className='outerside soon'>Soon</span>
              <span className='outerside level'>level</span> */}
            </div>
            <div className='wallet-sec text-center'></div>

            <div className='usd skeleton'>
              <h3 className='mt-4'>
                {' '}

              </h3>
              <h4 className='mt-2'>
                {' '}

              </h4>
            </div>
            <div className='progress-bar'>
              <div className='prog-text d-flex'>
                <span>
                  {/* Close in {item.remainTime.day} Days, {item.remainTime.hours}{' '}
                  hours */}
                </span>
                <span></span>
              </div>
              <ProgressBar now={0} />
              <div className='prog-text d-flex '>
                <span className='pt-2'>
                </span>
              </div>
            </div>
            <div className='wifi text-white'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 640 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z'></path>
              </svg>
              <span>IDO and distribution on BSC</span>
            </div>
            <div className='d-sm-flex text-white justify-content-between '>
              <div className='sale mb-2'>
                <span>User Buy Amount</span>
              </div>
              <span></span>
            </div>
            <div className='d-sm-flex text-white justify-content-between '>
              <div className='sale'>
                <span>Sale</span>
              </div>
              <span></span>
            </div>
            {/* AMOUNT-BLOCK-CODE */}
            <div className='amount_block_code mt-lg-5 mt-3'>
                <ul>
                  <li>
                    <div className='d-sm-flex text-white justify-content-between '>
                      <div className='sale text-capitalize'>
                        <span>Total Purchased Amount</span>
                      </div>
                      <span>0</span>
                    </div>
                  </li>
                  <li>
                    <div className='d-sm-flex text-white justify-content-between '>
                      <div className='sale text-capitalize'>
                        <span>Claim Amount</span>
                      </div>
                      <span>0</span>
                    </div>
                  </li>
                  <li>
                    <div className='text-center light-btn-div'>
                      <a href='#' className='d-inline-block light-btn text-capitalize'>action</a>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        {/* {/ here we will paste product page /} */}
        <div className='col-lg-8 mb-lg-0 mb-3'>
          <div className='coin-detail text-white'>
            <div
              className='d-flex align-items-center skeleton coin_skeleton'
            >
              <div className='coin-profile'></div>
              <h2></h2>
            </div>
            <p></p>

            <div className='pool-detail'>
              <h4>Pool Details</h4>

              <ul>
                <li className='d-sm-flex'>
                  <div className='w-50 mb-sm-0 mb-1'>
                    <span className='title'>Access Type: </span>
                    <span> Levels</span>
                  </div>
                  <div className='w-50'>
                    <span className='title'>Hard Cap: -- </span>
                    <span></span>
                  </div>
                </li>
                <li>
                  <span className='title'>Swap Rate: -- </span>
                  <span className='desc-color'>
                  </span>
                </li>
                <li className='mb-0'>
                  <span className='title'>Start/end: -- : -- : -- </span>
                  <span>
                  </span>
                </li>
              </ul>
              <h4>Token </h4>
              <ul>
                <li>
                  <span className='title'>Token: {' -- '} </span>
                  <span className='desc-color'>
                    {' '}
                  </span>
                </li>
                <li>
                  <span className='title'>Type: </span>
                  <span> Levels</span>
                </li>
                <li>
                  <span className='title'>Total Supply: </span>
                  <span> {'--'}</span>
                </li>
                <li>
                  <span className='title'>Initial Supply: {' --- '} </span>
                  <span className='desc-color'> </span>
                </li>
                <li className='mb-0'>
                  <span className='title'>Market Cap:{' -- '} </span>
                </li>
              </ul>
              <h4>Distribution</h4>
              <ul className='mb-0'>
                <li>
                  <span className='title'>Distribution: </span>
                  <span> Claimed on UltraPad </span>
                </li>
                <li className='mb-0'>
                  <span className='title'>Vesting: </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}


export default LoaderProductSkeleton