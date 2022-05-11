import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { Button, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faExternalLinkAlt,
  faTimes,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { TailSpin } from 'react-loader-spinner'
import useFetchAllOrder from '../../../CustomHooks/FetchAllOrder'
import Createpool from '../../CreatePool/createpool'
import StorageAbi from '../../../utils/StorageAbi'
import { ethers } from 'ethers'
import Alerts from '../../Alerts/alert'



function ManagePools () {

  const [AllOrders] = useFetchAllOrder()
  const [addPool, setAddPool] = useState(false)

  const [alert, setAlert] = useState('')

  useEffect(() => {}, [alert])
  const FetchProvider = async (tokenAdd, Abi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    if (ethers.utils.isAddress(tokenAdd)) {
      var address = tokenAdd
      var contract = new ethers.Contract(address, Abi, signer)
      console.log(contract)
      return contract
    } else {
      console.log('You Enter Invalid Address')
    }
  }
  const handleEnable = async (e, poolId) => {
    console.log(e)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { chainId } = await provider.getNetwork()
    console.log(chainId)
    if (chainId === 97) {
      const StorageAddress = process.env.REACT_APP_STORAGE_ADDRESS_BSC
      const contract = await FetchProvider(StorageAddress, StorageAbi)
      console.log(contract)

      const enable = !e.isEnable
      console.log('enable', enable)
      console.log('enable', e.poolId)

      console.log('enable', typeof e.poolId)

      const statusChnage = await contract.setIsDeleted(
        parseInt(e.poolId),
        enable.toString()
      )

      const receipt = await statusChnage.wait()

      console.log('receipt', receipt)
      AlertNotify(`Successfully chnage Pool Status`, 3000)

      // .then(res => {
      //   console.log(`Successfully chnage Pool Status ${res}`)
      //   AlertNotify(`Successfully chnage Pool Status ${res}`, 3000)
      // })
      // .catch(err => {
      //   AlertNotify(`Error in chnaging status${err}`, 3000)
      //   console.log('error in chnaging status', err)
      // })
    } else if (chainId === 4) {
      const StorageAddress = process.env.REACT_APP_STORAGE_ADDRESS_ETH
      const contract = await FetchProvider(StorageAddress, StorageAbi)
      console.log(contract)
      const enable = !e.isEnable
      contract
        .setIsDeleted(e.poolId, enable)
        .then(res => {
          AlertNotify(`Successfully chnage Pool Status ${res}`, 3000)

          console.log('res', res)
        })
        .catch(err => {
          AlertNotify(`Error in chnaging status${err}`, 3000)

          console.log('error in chnaging status', err)
        })
    }
    // const contract=await FetchProvider(e.poolingToken,)
    // console.log(contract);
    // setIsDeleted()
  }

  const AlertNotify = (message, time) => {
    setAlert(message)

    setTimeout(() => {
      setAlert('')
    }, time)
  }
  return (
    <div>
      <div className='content'>
        <div className='manage-pools-pg'>
          {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
          {addPool ? (
            <>
              <Card className='pt-lg-3 pt-1'>
                {/* <Button
                  onClick={() => setAddPool(false)}
                  className='text-white light-blue-btn text-capitalize d-inline w-md-25'
                >
                  <FontAwesomeIcon className='add-icon' icon={faBackward} />{' '}
                  Back to Pools
                </Button> */}
                <Card.Header className='titles-sett'>
                  <Createpool />
                </Card.Header>
              </Card>
            </>
          ) : (
            <Card>
              <Card.Header className='titles-sett'>
                Manage Pools
                <Button
                  onClick={() => setAddPool(true)}
                  className='text-white light-blue-btn text-capitalize d-inline'
                >
                  <FontAwesomeIcon className='add-icon' icon={faPlus} /> Add
                  Pool
                </Button>
              </Card.Header>
              <Card.Body>
                {AllOrders.length > 0 ? (
                  <>
                    <div className='table-responsive manage-pools'>
                      <Table>
                        <thead>
                          <tr>
                            {/* <th>Pool #</th> */}
                            <th>Pool</th>
                            <th>Name</th>

                            <th>Network</th>
                            <th>Enable</th>

                            <th>Start</th>
                            <th>End</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {AllOrders.map((item, index) => {
                            return (
                              <tr key={index}>
                                {/* <td>{item.poolId}</td> */}
                                <td>
                                  {' '}
                                  
                                  <Link
                                    to={`/pool:${item.poolingToken}`}
                                    style={{ color: 'white' }}
                                  >
                                    <FontAwesomeIcon
                                    className='del-icon'
                                    icon={faExternalLinkAlt}
                                  />{' '}
                                    0x...{item.poolingToken.substring(39, 42)}
                                  </Link>
                                </td>
                                <td>{item.idoName}</td>

                                <td>{item.network}</td>
                                <td>
                                  {item.isEnable ? (
                                    <Badge className='px-2 py-1' bg='info'>Active</Badge>
                                  ) : (
                                    <Badge className='px-2 py-1' bg='secondary'>Disabled</Badge>
                                  )}{' '}
                                </td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td>
                                  <button
                                    className='del_btn'
                                    onClick={() => {
                                      handleEnable(item)
                                    }}
                                  >
                                    {item.isEnable ? (
                                      <FontAwesomeIcon
                                        className='del-icon'
                                        icon={faTimes}
                                      />
                                    ) : (
                                      <FontAwesomeIcon
                                        className='del-icon'
                                        icon={faCheck}
                                      />
                                    )}
                                  </button>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </>
                ) : (
                  <div className='text-center faq-loader'>
                    <TailSpin
                      height='100'
                      width='100'
                      color='#46bdf4'
                      ariaLabel='loading'
                    />
                  </div>
                )}
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
export default ManagePools
