import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.svg'
// import Holdex from '../assets/images/holdex.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
import useGetOwner from '../CustomHooks/GetOwner'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const [acc, setAcc] = useState('Connect Wallet')
  const [cookies, setCookies, removeCookie] = useCookies(['address'])
  const [ownerFlag] = useGetOwner(cookies.address)
  const location = useLocation()
  const pathname = location.pathname
  useEffect(() => {
    if (window.ethereum !== undefined) {
      window.ethereum.on('accountsChanged', accounts => {
        let selectedAccount = accounts[0]
        setCookies('address', selectedAccount)
        setAcc(converSubString(selectedAccount))
      })
      if (cookies.address !== undefined) {
        setAcc(converSubString(cookies.address))
      }

      if (cookies.address === 'undefined') {
        removeCookie('address')
        setAcc('Connect Wallet')
      }
    }
  }, [cookies.address, acc, setCookies, ownerFlag, removeCookie])
  const converSubString = arg => {
    var res = arg.substring(0, 2)
    var res2 = arg.substring(38, 42)
    const wall = res + '...' + res2
    return wall
  }
  const walletConnect = async () => {
    try {
      const { ethereum } = window
      ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }]
      })
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts !== null) {
        var wall = converSubString(accounts[0])
        setAcc(wall)
        setCookies('address', accounts[0])
      }
    } catch (error) {
      console.error(error)
    }
  }
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 50 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
  return (
    <>
      <header className='header-section'>
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
                {ownerFlag === true ? (
                  <>
                    <Link
                      to='/admin/dashboard1'
                      className={
                        pathname === '/admin/dashboard1'
                          ? ' active'
                          : ''
                      }
                    >
                      Admin Panel
                    </Link>

                  </>
                ) : (
                  <></>
                )}
                <Link
                  to='/'
                  className={
                    pathname === '/' ? ' active' : ''
                  }
                >
                  Pools
                </Link>
                <a
                  href='/#faqs'
                  className={
                    pathname === '#faqs' ? ' active' : ''
                  }
                >
                  FAQs
                </a>
              </Nav>
            </Navbar.Collapse>

            <div className='block-btn'>
              <a
                href='https://ultrapad.finance.server18.arhamsoft.info/'
                className='icon-btn shadow-btn text-capitalize'
              >
                {/* <img
                  src={Holdex}
                  className=' img-fluid h-5'
                  alt='currencylogo'
                /> */}
                Buy &nbsp; <span className='text-uppercase'>{" "} UltraPad </span>
              </a>
              <button
                className='d-inline light-blue-btn text-capitalize'
                onClick={walletConnect}
              >
                {acc}
              </button>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
