import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
const Banner = () => {
  const [tokenInfo, setTokenInfo] = useState({})

  const [copySuccess, setCopySuccess] = useState('')
  const textAreaRef = useRef(null)
  const [ setCopyCheck] = useState(false)

  async function copyToClipboard (e) {
    console.log(e)
    try {
      await navigator.clipboard.writeText(e)
      setCopyCheck(true)
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
    setCopySuccess('Copied!')
  }
  useEffect(() => {
    let dummyObj = {}

    axios.get(process.env.REACT_APP_COIN_API).then(res => {
      const {
        current_price,
        market_cap,
        total_supply,
        total_value_locked
      } = res.data.market_data

      dummyObj.price = current_price.usd.toFixed(6)
      dummyObj.market_cap = market_cap.usd
      dummyObj.supply = total_supply
      if (total_value_locked === null) {
        dummyObj.tvl = 0
      } else {
        dummyObj.tvl = total_value_locked
      }
      setTokenInfo(dummyObj)
    })
  }, [])
  return (
    <>
      <section className='hero-banner'>
        <div className='container-fluid custom-block'>
          <div className='banner-text'>
            <div className='text-wrapper'>
              <div className='text-wrapper'>
                <span className='banner-span text-uppercase'>
                  safest launchpad
                </span>
                <h1 className='banner-h1 text-uppercase'>multi-chain</h1>
              </div>
              <p className='light-p'>
                Launching hand-picked high-quality projects on the Blockchain.
              </p>
              <p className='p'>
                Stake UltraPad Finance tokens to get early-access to promising projects.
              </p>
            </div>
            <div className='block-btn text-wrapper'>
              <a
                className='d-inline shadow-btn text-capitalize'
                href={process.env.REACT_APP_Web_link}
              >
                apply as a project
              </a>
              <a
                className='d-inline light-blue-btn text-capitalize'
                href={process.env.REACT_APP_Web_link}
              >
                announcements
              </a>
              <a
                className='d-inline blue-outline-btn text-capitalize'
                href={process.env.REACT_APP_Web_link}
              >
                telegram
              </a>
            </div>
            <div className='clipboard'>
              <div className='clipboard-flex d-flex align-items-center'>
                <div className='block-btn'>
              
                  <a
                    className='d-inline blue-outline-btn text-capitalize'
                    href='http://google.com/'
                  >
                    Buy{" "} <span className='text-uppercase'> {" "}UltraPad</span>
                  </a>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                  <span
                    ref={textAreaRef}
                  
                  >
                    {process.env.REACT_APP_IDO_Address}
                  </span>
                  </div>
                  {copySuccess === '' ? (
                    <FontAwesomeIcon
                      icon={faCopy}
                      onClick={() => {
                        copyToClipboard(`${process.env.REACT_APP_IDO_Address}`)
                      }}
                    />
                  ) : (
                    <div ><p className='mb-0' style={{marginLeft:"10px"}}>{copySuccess}</p>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='market-cap'>
          <div className='container-fluid custom-block'>
            <div className='market-cap-inner'>
              <ul>
                <li>
                  <strong className='d-block price'>${tokenInfo.price}</strong>
                  <p className='blue-title mb-0'>price</p>
                </li>
                <li>
                  <strong className='d-block price'>
                    ${tokenInfo.market_cap}
                  </strong>
                  <p className='blue-title mb-0'>
                    Market Cap (Supply:{tokenInfo.supply})
                  </p>
                </li>
                <li>
                  <strong className='d-block price'>${tokenInfo.tvl}</strong>
                  <p className='blue-title mb-0'>TVL</p>
                </li>
                <li>
                  <strong className='d-block price'>$0.91</strong>
                  <p className='blue-title mb-0'>Raised in 103 projects</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Banner
