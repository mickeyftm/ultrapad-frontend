import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
// import Footer from './components/footer'
import Landing from './components/landingPage/landingPage'
import Product from './components/ProductPage/ProductPage'
import Terms from './components/Terms/Terms'
import Privacy from './components/Privacy/Privacy'
import Faqs from './components/FaqsPage/Faqs'
import Admin from './components/AdminPanel/admin'
import useGetOwner from './CustomHooks/GetOwner'
import { useCookies } from 'react-cookie'
import { ethers } from 'ethers'
import Alerts from './components/Alerts/alert'

function App () {
  const [cookies, setCookies] = useCookies(['address'])
  const [alert, setAlert] = useState('')
  const [ownerFlag, setOwnerFlag] = useGetOwner(cookies.address)
  useEffect(() => {
    async function fetch () {
      const { ethereum } = window
      if (ethereum) {
        var provider = new ethers.providers.Web3Provider(ethereum) || "https://data-seed-prebsc-1-s1.binance.org:8545/";

        const isMetaMaskConnected = async () => {
          const accounts = await provider.listAccounts()
          return accounts.length > 0
        }

        await isMetaMaskConnected().then(async connected => {
          if (connected) {
            console.log('MetamasK connected ')
            ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x61' }]
            })
            const accounts = await ethereum.request({
              method: 'eth_requestAccounts'
            })
            if (accounts !== null) {
              
              setCookies('address', accounts[0])
            }
          } else {
            AlertNotify(
            "Connect Your Metamask",3000
            )
          }
        })

       
      } else {
        console.log('Error in Getting metamask')
        AlertNotify(
          `Metamask is not Installed.Install metamask from ${'https://chrome.google.com/webstore/detail/metamask'}`
        ,10000)
      }
    }
    fetch()
  }, [cookies.address, setCookies, setOwnerFlag])
  const AlertNotify = (message,time) => {
    setAlert(message)

    setTimeout(() => {
      setAlert('')
    }, time)
  }
  return (
    <div className='App'>
    
      <div className='wrapper'>
        
      {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
        <Header />


        <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/pool:id' exact element={<Product />} />
            <Route path='/tos' exact element={<Terms />} />
            <Route path='/privacy' exact element={<Privacy />} />
            <Route path='/faqs' exact element={<Faqs />} />
            {ownerFlag === true ? (
              <>
                {' '}
                <Route path='/admin/*' exact element={<Admin />} />
              </>
            ) : (
              <></>
            )}
          </Routes>
        </main>
       
      </div>
    </div>
  )
}

export default App
