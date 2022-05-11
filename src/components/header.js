import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
const Header = () => {
  const [acc, setAcc] = useState('Connect Wallet')
  const [cookies, setCookies] = useCookies(['address'])

  useEffect(() => {
    window.ethereum.on('accountsChanged', accounts => {
      let selectedAccount = accounts[0]
      console.log(accounts)
      setCookies('address', selectedAccount)
      setAcc(selectedAccount)
    })

    if (cookies.address !== undefined) {
      setAcc(cookies.address)
    }

    if (cookies.address === 'undefined') {
      setAcc('Connect Wallet')
    }


    
  }, [cookies, window.ethereum, acc])
  
  const walletConnect = async () => {
    try {
      const { ethereum } = window
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!

      ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }]
      })
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      console.log(accounts)
      setAcc(accounts[0])
      setCookies('address', accounts[0])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <header>
        <Navbar className='navbar navbar-expand-lg navbar-light' expand='lg'>
          <Container fluid className='custom-block'>
            <Navbar.Brand href='/'>
              <figure className='mb-0'>
                <img src={Logo} className='img-fluid' alt='SiteLogo' />
              </figure>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse
              className='collapse navbar-collapse'
              id='basic-navbar-nav'
            >
              <Nav className='m-auto navbar-nav'>
                <Nav.Link active href='#home'>
                  pools
                </Nav.Link>
                <Nav.Link href='#link'>FAQs</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <div className='block-btn'>
              <a href="http://google.com/" className='d-inline shadow-btn text-capitalize'>
                Buy <span className='text-uppercase'>Spad</span>
              </a>
              <a
                className='d-inline light-blue-btn text-capitalize'
                onClick={walletConnect}
              >
                {acc}
              </a>  
       
            </div>
       
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
