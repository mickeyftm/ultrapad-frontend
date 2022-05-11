import { useEffect, useState } from 'react'
import data from '../utils/api'

import { ethers } from 'ethers'

function useGetOwner (walletAdd) {
  const [ownerFlag, setOwnerFlag] = useState('')
  useEffect(() => {
    
    async function fetch () {
      if (typeof window.ethereum !== undefined ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        var address = process.env.REACT_APP_IDO_Address
        var contract = new ethers.Contract(address, data, signer)
        const ownerAdd = await contract.owner()
        console.log("owner add ",ownerAdd)
        if (walletAdd !== undefined ) {
          if (ownerAdd.toLowerCase() === walletAdd.toLowerCase()) {
            setOwnerFlag(true)
          } else {
            setOwnerFlag(false)
          }
        }
        else{
          console.log("connecy your wallet")
        }
      }
    }
    fetch()
  }, [walletAdd])

  return [ownerFlag]
}

export default useGetOwner
