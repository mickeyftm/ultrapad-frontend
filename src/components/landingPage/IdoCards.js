import React from 'react'
import Icon2 from '../../assets/images/icon-2.png'
import Icon1 from '../../assets/images/icon-1.png'
import Twitter from '../../assets/images/twiiter.png'
import Icon4 from '../../assets/images/icon-4.png'
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function IdoCards ({ idoArr }) {
  // console.log(idoArr)
  const socialLinks = [Icon1, Icon2, Twitter, Icon4, Icon4]
  //   console.log('ido arr in cards', idoArr)
const addDefaultImg = ev => {
    ev.target.src =
      'https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851'
  }
  return (
    <div className='row'>
      {idoArr.map((item, index) => {
        return (
          <div className='col-lg-4 col-md-6 mb-md-5 mb-3' key={index}>
            <Link
              to={`/${'pool'}:${item.idoAddress}`}
              className='card mb-3'
              //   state={{ item: item }}
            >
              <div className='d-flex align-items-lg-center ' animation='wave'>
                <figure className='mb-0 game-img'>
                  <img
                    className='img-fluid profile'
                    src={item.logoHash}
                    alt='Gammes'
                       onError={addDefaultImg}
                  />
                </figure>

                <div className='w-100'>
                  <strong className='card-title s-line first'>
                    ${item.idoName}
                  </strong>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='text-uppercase s-line second'>
                      ${item.idoName}
                    </p>
                    {/* <a href="#" href="#" className='tag-btn text-uppercase'>upcoming</a> */}
                  </div>
                </div>
              </div>
              <div className='social-icon-bar'>
                <ul>
                  {item.socials.social.map((item, index) => {
                    return (
                      <li key={index}>
                        <figure className='mb-0'>
                          <img
                            className='img-fluid'
                            src={`${socialLinks[index]}`}
                            alt='Gammes'
                          />
                        </figure>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className='progress-bar'>
                <div className='prog-text d-flex '>
                  <p className='mb-2'>
                    {item.remainingHours.day} Days and{' '}
                    {item.remainingHours.hours} Hours
                  </p>
                </div>
                <div className='mb-2'>
                  <ProgressBar
                    now={item.salePercent}
                    style={{ color: 'pink' }}
                  />
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='game-price'>0 {item.idoName}</p>
                  <p>{/* {item.initialSupply} {item.name} */}</p>
                </div>
              </div>
              <div className='card-footer'>
                <div className='card-footer-content'>
                  <ul className=''>
                    <li>
                      <p className='text-capitalize'>starts</p>
                      <div>
                        <strong className='d-block feature-price blue'>
                          {item.startDate}
                        </strong>
                        <span className='text-capitalize'>
                          {/* {time.hour}:{time.min} UTC */}
                        </span>
                      </div>
                    </li>
                    <li>
                      <p className='text-capitalize'>price</p>
                      <div>
                        <strong className='d-block feature-price purple'>
                          {item.price}
                        </strong>
                        <span className='text-capitalize'>={item.price} $</span>
                      </div>
                    </li>
                    <li>
                      <p className='text-capitalize'>total raise</p>
                      <div>
                        <strong className='d-block feature-price pink'>
                          ${item.totalRaised}
                        </strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default IdoCards
