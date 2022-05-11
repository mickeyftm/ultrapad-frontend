import React from 'react'
import { ProgressBar,Row } from 'react-bootstrap'

function LoaderCardSkeleton () {
  return (
      <Row>
    <div className='col-lg-4 col-md-6 mb-md-5 mb-3'>
      <div className='card mb-3'>
        <div className='d-flex align-items-lg-center skeleton' animation='wave'>
          <figure className='mb-0 game-img'>
            {/* <img
                    className='img-fluid profile'
                    src={item.logoHash}
                    alt='Gammes'
                    //    onError={addDefaultImg}
                  /> */}
          </figure>

          <div className='w-100'>
            <strong className='card-title s-line first'>
              {/* ${item.idoName} */}
            </strong>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='text-uppercase s-line second'>
                {/* ${item.idoName} */}
              </p>
              {/* <a href="#" href="#" className='tag-btn text-uppercase'>upcoming</a> */}
            </div>
          </div>
        </div>
        <div className='social-icon-bar'>
          <ul></ul>
        </div>

        <div className='progress-bar'>
          <div className='prog-text d-flex '>
            <p className='mb-2'>
              {/* {item.remainingHours.day} Days and{' '} */}
              {/* {item.remainingHours.hours} Hours */}
            </p>
          </div>
          <div className='mb-2'>
            <ProgressBar now={0} />
          </div>
          <div className='d-flex justify-content-between'>
            <p className='game-price'>0 BUSD</p>
            <p>{/* {item.initialSupply} {item.name} */}</p>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer-content'>
            <ul className='skeleton'>
              <li>
                <p className='text-capitalize'>starts</p>
                <div>
                  <strong className='d-block feature-price blue'>
                    {"-"}
                  </strong>
                  <span className='text-capitalize'>
                  
                  </span>
                </div>
              </li>
              <li>
                <p className='text-capitalize'>price</p>
                <div>
                  <strong className='d-block feature-price purple'>
                    {" - "}
                  </strong>
                  <span className='text-capitalize'>
                    {/* ={item.price} $ */}
                  </span>
                </div>
              </li>
              <li>
                <p className='text-capitalize'>total raise</p>
                <div>
                  <strong className='d-block feature-price pink text-center'>
                  {"-"}
                  </strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-4 col-md-6 mb-md-5 mb-3'>
      <div className='card mb-3'>
        <div className='d-flex align-items-lg-center skeleton' animation='wave'>
          <figure className='mb-0 game-img'>
            {/* <img
                    className='img-fluid profile'
                    src={item.logoHash}
                    alt='Gammes'
                    //    onError={addDefaultImg}
                  /> */}
          </figure>

          <div className='w-100'>
            <strong className='card-title s-line first'>
              {/* ${item.idoName} */}
            </strong>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='text-uppercase s-line second'>
                {/* ${item.idoName} */}
              </p>
              {/* <a href="#" href="#" className='tag-btn text-uppercase'>upcoming</a> */}
            </div>
          </div>
        </div>
        <div className='social-icon-bar'>
          <ul></ul>
        </div>

        <div className='progress-bar'>
          <div className='prog-text d-flex '>
            <p className='mb-2'>
              {/* {item.remainingHours.day} Days and{' '} */}
              {/* {item.remainingHours.hours} Hours */}
            </p>
          </div>
          <div className='mb-2'>
            <ProgressBar now={0} />
          </div>
          <div className='d-flex justify-content-between'>
            <p className='game-price'>0 BUSD</p>
            <p>{/* {item.initialSupply} {item.name} */}</p>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer-content'>
            <ul className='skeleton'>
              <li>
                <p className='text-capitalize'>starts</p>
                <div>
                  <strong className='d-block feature-price blue'>
                    {"-"}
                  </strong>
                  <span className='text-capitalize'>
                  
                  </span>
                </div>
              </li>
              <li>
                <p className='text-capitalize'>price</p>
                <div>
                  <strong className='d-block feature-price purple'>
                    {" - "}
                  </strong>
                  <span className='text-capitalize'>
                    {/* ={item.price} $ */}
                  </span>
                </div>
              </li>
              <li>
                <p className='text-capitalize'>total raise</p>
                <div>
                  <strong className='d-block feature-price pink text-center'>
                  {"-"}
                  </strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-4 col-md-6 mb-md-5 mb-3'>
      <div className='card mb-3'>
        <div className='d-flex align-items-lg-center skeleton' animation='wave'>
          <figure className='mb-0 game-img'>
            {/* <img
                    className='img-fluid profile'
                    src={item.logoHash}
                    alt='Gammes'
                    //    onError={addDefaultImg}
                  /> */}
          </figure>

          <div className='w-100'>
            <strong className='card-title s-line first'>
              {/* ${item.idoName} */}
            </strong>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='text-uppercase s-line second'>
                {/* ${item.idoName} */}
              </p>
              {/* <a href="#" href="#" className='tag-btn text-uppercase'>upcoming</a> */}
            </div>
          </div>
        </div>
        <div className='social-icon-bar'>
          <ul></ul>
        </div>

        <div className='progress-bar'>
          <div className='prog-text d-flex '>
            <p className='mb-2'>
              {/* {item.remainingHours.day} Days and{' '} */}
              {/* {item.remainingHours.hours} Hours */}
            </p>
          </div>
          <div className='mb-2'>
            <ProgressBar now={0} />
          </div>
          <div className='d-flex justify-content-between'>
            <p className='game-price'>0 BUSD</p>
            <p>{/* {item.initialSupply} {item.name} */}</p>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer-content'>
            <ul className='skeleton'>
              <li>
                <p className='text-capitalize'>starts</p>
                <div>
                  <strong className='d-block feature-price blue'>
                    {"-"}
                  </strong>
                  <span className='text-capitalize'>
                  
                  </span>
                </div>
              </li>
              <li>
                <p className='text-capitalize'>price</p>
                <div>
                  <strong className='d-block feature-price purple'>
                    {" - "}
                  </strong>
                  <span className='text-capitalize'>
                    {/* ={item.price} $ */}
                  </span>
                </div>
              </li>
              <li>
                <p className='text-capitalize'>total raise</p>
                <div>
                  <strong className='d-block feature-price pink text-center'>
                  {"-"}
                  </strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Row>
  )
}

export default LoaderCardSkeleton
