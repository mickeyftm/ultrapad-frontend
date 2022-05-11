import React, { useEffect, useCallback } from 'react'
import { ethers } from 'ethers'
import TokenAbi from '../../utils/token20Abi'
import { useCookies } from 'react-cookie'

const UserInfo = props => {
  const [cookies] = useCookies(['address'])
  const fetchBal = useCallback(async () => {
    console.log('we are in user Info', props)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    var address = props.item
    var contract = new ethers.Contract(address, TokenAbi, signer)

    const count = await contract.balanceOf(cookies.address)
    console.log('balc', count.toString())
    props.setter(count.toString())
  }, [cookies.address, props])

  useEffect(() => {}, [cookies.address, fetchBal, props.item])

  return (
      <div className='m-2'>
        <p className='wallet_blnc'>
          <span className='text-capitalize text-white'>balance:</span> <span>{props.bal} {props.bidName}{' '}</span>
        </p>

        {/* <span className='col-6 m-2'>
          <a href='http://google.com/'>How to participate</a>
        </span> */}
      </div>
  )
}
export default UserInfo
