import React, { useEffect, useState, useCallback } from 'react'

import Abi from '../../utils/api'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ethers } from 'ethers'
import Alerts from '../Alerts/alert'

function OrderDetail ({ ownerAddress, idoAddress }) {
  // console.log(ownerAddress, idoAddress)
  const [alert] = useState('')
  const [orderDetail, setOrderDetail] = useState({
    userAddress: ownerAddress,

    idoAddress: idoAddress,
    claimAmount: 0,
    purchasedAmount: 0
  })
  const FetchProvider = async (tokenAdd, Abi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    var address = tokenAdd
    var contract = await new ethers.Contract(address, Abi, signer)
    return contract
  }
  const FormatData = useCallback(async () => {
    const contract = await FetchProvider(idoAddress, Abi)
    // console.log('contract  --', contract)

    const purchasedAmou = parseInt(
      await contract.purchasedAmounts(ownerAddress)
    )
    // console.log('purchased amount', purchasedAmou)
    const claimedAmou = parseInt(await contract.claimedAmounts(ownerAddress))
    // console.log('Claimed amount', claimedAmou)
    setOrderDetail({
      ...orderDetail,
      claimAmount: claimedAmou,
      purchasedAmount: purchasedAmou
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownerAddress])

  useEffect(() => {
    FormatData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FormatData,orderDetail])
  // const AlertNotify = (message, time) => {
  //   setAlert(message)

  //   setTimeout(() => {
  //     setAlert('')
  //   }, time)
  // }
  const ClaimTokens = async () => {
    const contract = await FetchProvider(idoAddress, Abi)
    // console.log('contract', contract)
    const claimAmount = await contract.claim(
      parseInt(orderDetail.purchasedAmount)
    )
    const receipt = await claimAmount.wait()

    console.log('receipt', receipt)
    const contract2 = await FetchProvider(idoAddress, Abi)
    const claimedAmou = parseInt(await contract2.claimedAmounts(ownerAddress))
    console.log(claimedAmou)
  }

  return (
    <>
      {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}

      <div class='products-table table-responsive manage-pools p-0 mt-1 mx-0'>
        <div className='amount_block_code mt-lg-2 mt-1'>
          <ul>
            <li>
              <div className='d-sm-flex text-white justify-content-between '>
                <div className='sale text-capitalize'>
                  <span>Total Purchased Amount</span>
                </div>
                <span>{orderDetail.purchasedAmount}</span>
              </div>
            </li>
            <li>
              <div className='d-sm-flex text-white justify-content-between '>
                <div className='sale text-capitalize'>
                  <span>Claimed Amount</span>
                </div>
                <span>{orderDetail.claimAmount}</span>
              </div>
            </li>
            <li>
              <div className='text-center light-btn-div'>
                {orderDetail.purchasedAmount === 0 ? (
                  <div className='claim_text_block'>
                  <h4 className='mb-0 claim_text fs-lg-2 fs-6 text-uppercase'>
                    Nothing to Claim
                    {/* <FontAwesomeIcon className='del-icon' icon={faTrash} /> */}
                  </h4></div>
                ) : orderDetail.purchasedAmount > 0 &&
                  orderDetail.purchasedAmount !== orderDetail.claimAmount ? (
                  <button className='ml-2 light-blue-btn' onClick={ClaimTokens}>
                    Claim
                    {/* <FontAwesomeIcon className='del-icon' icon={faTrash} /> */}
                  </button>
                ) : orderDetail.purchasedAmount > 0 &&
                  orderDetail.purchasedAmount === orderDetail.claimAmount ? (
                  <div className='d-flex align-items-center'>
                  <div class="badges m-0"><span class="outerside level">Claimed
                  <FontAwesomeIcon className='ms-1' icon={faCheck} style={{color: "#fff"}} />
                  </span></div>
                    </div>

                    
                  
                ) : (
                  <td></td>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

    
    </>
  )
}

export default OrderDetail
