import React from 'react'
import { useState, useEffect } from 'react'

import { injected } from '../wallets/injected'
import Button from 'react-bootstrap/Button'

import useMetaMask from '../CustomHooks/custommetamask'
function MetamaskTest () {
  const { connect, disconnect, isActive, account } = useMetaMask()
  return (
    <header className='App-header'>
      <Button onClick={connect} variant='secondary'>
        <img src='' alt='MetaMask' width='50' height='50' />{' '}
        Connect With MetaMask
      </Button>
      {isActive ? (
        <span>Connected with {account}</span>
      ) : (
        <span>Not Connected</span>
      )}

      <Button onClick={disconnect} variant='danger'>
        Disconnect from MetaMask{' '}
        <img src='images/noun_waving_3666509.svg' height='50' width='50' />
      </Button>
    </header>
  )
}

export default MetamaskTest
