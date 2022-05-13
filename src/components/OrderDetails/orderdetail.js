import React, { useEffect, useState, useCallback } from 'react'

import Abi from '../../utils/api'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import TokenAbi from '../../utils/token20Abi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ethers } from 'ethers'
import Alerts from '../Alerts/alert'

function OrderDetail ({ ownerAddress, idoAddress, bidDecimal, poolDecimal }) {
  console.log('idoadrews', idoAddress)
  const [alert] = useState('')
  const [orderDetail, setOrderDetail] = useState({
    userAddress: ownerAddress,
    biddingDecimal: bidDecimal,
    idoAddress: idoAddress,
    claimAmount: 0,
    poolingDecimal: poolDecimal,
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

    const bidToken = await FetchProvider(bidDecimal, TokenAbi)
    const Decimals = parseInt(await bidToken.decimals())
    const purchasedAmou = parseFloat(
      await contract.purchasedAmounts(ownerAddress)
    )
    const newPurchase = parseFloat(purchasedAmou / Math.pow(10, Decimals))
    const claimedAmou = parseFloat(await contract.claimedAmounts(ownerAddress))

    const newClaimedAmount = claimedAmou / Math.pow(10, Decimals)
    setOrderDetail({
      ...orderDetail,
      claimAmount: newClaimedAmount,
      purchasedAmount: newPurchase,
      biddingDecimal: Decimals
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownerAddress, bidDecimal])

  useEffect(() => {
    FormatData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [FormatData, orderDetail])

  const ClaimTokens = async () => {
    const contract = await FetchProvider(idoAddress, Abi)

    const newClaim = (
      orderDetail.purchasedAmount * Math.pow(10, orderDetail.biddingDecimal)
    ).toString()

    const claimAmount = await contract.claim(newClaim)
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
                    </h4>
                  </div>
                ) : orderDetail.purchasedAmount > 0 &&
                  orderDetail.purchasedAmount !== orderDetail.claimAmount ? (
                  <button className='ml-2 light-blue-btn' onClick={ClaimTokens}>
                    Claim
                    {/* <FontAwesomeIcon className='del-icon' icon={faTrash} /> */}
                  </button>
                ) : orderDetail.purchasedAmount > 0 &&
                  orderDetail.purchasedAmount === orderDetail.claimAmount ? (
                  <div className='d-flex align-items-center'>
                    <div class='badges m-0'>
                      <span class='outerside level'>
                        Claimed
                        <FontAwesomeIcon
                          className='ms-1'
                          icon={faCheck}
                          style={{ color: '#fff' }}
                        />
                      </span>
                    </div>
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
