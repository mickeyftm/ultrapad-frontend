import React, { useState, useEffect, useCallback } from 'react'
import { Row, Container } from 'react-bootstrap'
import { ProgressBar } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
import './productinfo.css'
import Abi from '../../utils/api'
import { ethers } from 'ethers'
import { useParams } from 'react-router-dom'
import UserInfo from './UserInfo'
import axios from 'axios'
import TokenAbi from '../../utils/token20Abi'
import { createClient } from 'urql'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Alerts from '../Alerts/alert'
const ProductInfo = () => {
  const { id } = useParams()
  const [approveErr, setApproveErr] = useState('')
  const [biddTokenInfo, setBiddTokenInfo] = useState({
    name: '',
    decimals: ''
  })
  const [approveAmou, setApproveAmou] = useState(0)
  const [itemId] = useState(id)

  const API_URL = process.env.REACT_APP_SUBGRAPH_API_LATEST_BSC
  const [alert] = useState('')
  const [item, setItem] = useState({
    poolingToken: '',
    poolId: '',
    hardCap: '',
    startDate: '',
    endDate: '',
    price: '',
    totalSupply: '',
    biddingToken: '',
    idoAddress: '',
    logoHash: '',
    infoHash: '',
    isEnable: '',
    idoName: '',
    status: '',
    socials: [],
    remainTime: {
      day: ' '
    }
  })
  const [acc, setAcc] = useState('Connect Wallet')
  const [cookies, setCookies, removeCookie] = useCookies(['address'])

  // const [totalStake] = useState(0)
  // const [totBidStake, setTotBidStake] = useState(0)
  const [totAucStake, setTotAucStake] = useState(0)

  const [stakeAmou, setStakeAmou] = useState(0)
  const [bidPerUser, setBidPerUser] = useState(0)
  const [percen, setPercent] = useState(0)
  const [errors, setErrors] = useState('')
  const [stakErr, setStakErr] = useState('')
  //for checking user balance if user has balance
  const [balan, setBal] = useState(0)

  const [time] = useState({})
  // ----------------------------------------
  // ----------- Helper Functions -----------
  // ----------------------------------------

  const timeConverter = useCallback(
    UNIX_timestamp => {
      // var a = new Date(UNIX_timestamp * 1000);
      var a = new Date(UNIX_timestamp * 1000)
      var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      var year = a.getFullYear()
      var month = months[a.getMonth()]
      var date = a.getDate()
      var hour = a.getHours()
      var min = a.getMinutes()
      var sec = a.getSeconds()
      var time1
      if (parseInt(hour) > 12) {
        time1 =
          date +
          ' ' +
          month +
          ' ' +
          year +
          ' ' +
          min +
          ':' +
          sec +
          ' ' +
          'pm' +
          ' '
      } else if (
        (time1 =
          date +
          ' ' +
          month +
          ' ' +
          year +
          ' ' +
          min +
          ':' +
          sec +
          ' ' +
          ' am ' +
          ' ')
      )
        time.month = month
      time.hour = hour
      time.min = min
      time.date = date

      // console.log('time', time)
      return time1
    },
    [time]
  )
  const ParseData = async arg => {
    const url = await axios.get(`https://ipfs.infura.io/ipfs/${arg}`)

    return url.data
  }
  const addDefaultImg = ev => {
    ev.target.src =
      'https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851'
  }
  const GetRemainDays = async arg => {
    var unix = await Math.round(+new Date() / 1000)
    // console.log(unix)
    var date1 = unix
    var date2 = arg

    // To calculate the time difference of two dates
    var Difference_In_Time = date2 - date1
    var remainHour = {}
    var days = Math.floor(Difference_In_Time / 86400)
    var hours = Math.floor(days / 60)
    if (days < 0) {
      remainHour.day = 0
      if (remainHour.hours <= 0) {
        remainHour.hours = 0
      }
    } else {
      remainHour.day = days
      remainHour.hours = hours
    }
    return remainHour
  }
  const converSubString = arg => {
    var res = arg.substring(0, 2)
    var res2 = arg.substring(38, 42)
    const wall = res + '...' + res2
    return wall
  }
  const FetchProvider = async (tokenAdd, Abi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    var address = tokenAdd
    var contract = await new ethers.Contract(address, Abi, signer)
    return contract
  }
  const GetBiddingTokenInfo = async args => {
    const contract = await FetchProvider(args.biddingToken, TokenAbi)
    const Decimals = parseInt(await contract.decimals())
    const decimalConvert = Math.pow(10, Decimals)
    const name = await contract.name()
    setBiddTokenInfo({
      ...biddTokenInfo,
      name: name,
      decimals: decimalConvert
    })
    return decimalConvert
  }
  const CheckApprove = useCallback(
    async args => {
      const contract = await FetchProvider(args.biddingToken, TokenAbi)
      console.log('cookies address', cookies.address)
      var balanPool = parseInt(await contract.balanceOf(cookies.address))
      console.log('balance', balanPool)

      const decimal = await GetBiddingTokenInfo(args)
      console.log('decimals', decimal)

      const balDeci = parseInt(balanPool) / decimal
      setBal(balDeci)
      console.log('idoAddress', args.idoAddress)
      const allowance = await contract.allowance(
        cookies.address,
        args.biddingToken
      )
      console.log('allowance', allowance)

      if (parseInt(allowance) <= 0) {
        console.log('allowance', allowance)
        // if not allowance then go for approve
        setApproveErr('Wait ! it takes some time for Approval')
      } else {
        setApproveErr('')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies.address]
  )
  const handleApprove = useCallback(async () => {
    const contract = await FetchProvider(item.biddingToken, TokenAbi)
    if (approveAmou > 0) {
      const approve = await contract.approve(item.biddingToken, approveAmou)

      console.log('approve', approve)

      const receipt = await approve.wait()

      console.log('receipt', receipt)
    } else {
      setErrors('Enter approve amount greater than 0')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.idoAddress, cookies.address])

  // ----------------------------------------
  // --------- Helper Functions End ---------
  // ----------------------------------------

  const GetTotalStakeAmout = useCallback(
    async args => {
      const { idoAddress, totalSupply } = args
      const tokenAdd = idoAddress

      const contract = await FetchProvider(tokenAdd, Abi)
      console.log(contract)
      const totalBidding = parseInt(await contract.totalPurchasedAmount())
      if (cookies.address !== undefined) {
        const purchasedAmouPerUser = parseInt(
          await contract.purchasedAmounts(cookies.address)
        )
        setBidPerUser(purchasedAmouPerUser)
      }
      console.log('total Bidding Amount')
      setTotAucStake(parseInt(totalBidding))
      const perc = ((parseInt(totalBidding) / totalSupply) * 100).toFixed(2)
      setPercent(perc)
      // setTotBidStake(totalBidding * item.swapRate)
    },

    [cookies.address]
  )
  const handleApproveAmount = e => {
    setApproveAmou(e.target.value)
  }
  const FetchDataSetter = useCallback(
    async idoData => {
      // Data Parsing and Conversion appear here
      console.log('ido data', idoData)
      const hashData = await ParseData(idoData.infoHash)
      console.log('ipfs values ', hashData)

      const {
        title,
        description,
        poolingToken,
        biddingToken,

        tokenPrice,
        // totalSupply,
        // networks,
        // poolEndDate,
        // poolStartDate,

        // hash,
        isKyc,
        logo,
        twitter,
        discord,
        medium,
        telegram,
        website
      } = hashData
      await Math.round(+new Date() / 1000)
      console.log('End date', idoData.endDate)
      var poolStatus = ''
      var unix = Math.round(+new Date() / 1000)
      if (unix < idoData.startDate && unix < idoData.endDate) {
        poolStatus = 'upcoming'
      } else if (unix >= idoData.endDate) {
        poolStatus = 'close'
        console.log('poolStaus', poolStatus)
      } else if (unix > idoData.startDate && unix < idoData.endDate) {
        console.log('poolStatus', poolStatus)
        poolStatus = 'open'
      }
      const timinStart = timeConverter(idoData.startDate)
      const timinEnd = timeConverter(idoData.endDate)
      const remainHour = await GetRemainDays(idoData.endDate)

      console.log('logo', logo)
      // console.log(logoHash)
      let dummyObj = {
        poolId: idoData.poolId,

        startDate: timinStart,
        endDate: timinEnd,
        price: tokenPrice,
        idoAddress: idoData.poolingToken,
        totalSupply: parseInt(idoData.totalRaised),
        hardCap: parseInt(idoData.totalRaised) * tokenPrice,
        name: title,
        logo: logo,
        description: description,
        biddingToken: biddingToken,
        poolingToken: poolingToken,
        socials: [medium, twitter, discord, website, telegram],
        remainTime: remainHour,
        isKyc: isKyc.toString(),
        poolStatus: poolStatus
      }
      console.log('dummyObj', dummyObj)
      if (
        cookies.address !== undefined &&
        dummyObj.biddingToken !== undefined
      ) {
        CheckApprove(dummyObj)
        GetTotalStakeAmout(dummyObj)
      }
      setItem(dummyObj)
    },
    [timeConverter, GetTotalStakeAmout, CheckApprove, cookies.address]
  )

  const fetchWithId = useCallback(
    async id => {
      console.log('id', id)
      var str = id
      str = str.replace(':', '')
      console.log('string after parse', typeof str)

      const tokensQuery = `{
      poolInfos (where :{ poolingToken:${str} }) 
      
      {
        poolId
        startDate
        totalRaised
        startDate
        endDate
        price
        poolingToken
        idoName
        logoHash
        infoHash
        isEnable
      }
      
        
      }`

      const client2 = createClient({
        url: API_URL
      })

      const data2 = await client2.query(tokensQuery).toPromise()

      console.log('data with id', data2.data)
      if (data2.data.poolInfos !== null && data2.data.poolInfos !== undefined) {
        FetchDataSetter(data2.data.poolInfos[0])
      }
    },
    [API_URL, FetchDataSetter]
  )

  // const addDefaultImg = ev => {
  //   ev.target.src =
  //     'https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851'
  //   ev.target.alt = ''
  // }

  //pass as callback to userinfo to get balance

  // It helps to get the total stake amount for the pool

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
    fetchWithId(itemId)
  }, [
    cookies.address,
    acc,
    setCookies,
    removeCookie,
    fetchWithId,
    itemId,
    GetTotalStakeAmout
  ])

  // ----------------------------------
  // ------Form and Field Handlers-----
  // ----------------------------------

  const handleChange = e => {
    setStakeAmou(e.target.value)
  }

  console.log('acc aftee remove', acc)
  const handleStakeClick = async () => {
    if (
      stakeAmou <= 0 ||
      // stakeAmou < parseInt(item.minBuyAmount) ||
      stakeAmou > balan
    ) {
      // console.log('stakeAmou ', stakeAmou)
      setErrors(`You dont have Enough ${biddTokenInfo.name} `)
    } else {
      setErrors('')
      // const sumTotal = parseInt(totalStake) + parseInt(stakeAmou)
      //checking if total Bidding amount +user try to stake is less than allowder amount
      // if (sumTotal < item._pooledSellAmount) {
      setStakErr('')
      const tokenAdd = item.idoAddress
      console.log('token address', tokenAdd)
      const contract = await FetchProvider(tokenAdd, Abi)
      // const stakeWithDecimal = stakeAmou * tokenInf.decimal
      // console.log('bidding token decimals', tokenInf.decimal)

      console.log('stake amou', stakeAmou)
      console.log(biddTokenInfo.decimals)
      const stakeWithBid = stakeAmou * parseInt(biddTokenInfo.decimals)
      console.log(stakeWithBid)
      const stake = contract
        .purchase(stakeAmou)
        .then(async res => {
          const receipt = await res.wait()

          console.log('receipt', receipt)

          await GetTotalStakeAmout(item)
        })
        .catch(err => {
          console.log('error in fetching ', err.data.message)
        })
      console.log(stake)

      setApproveErr('')

      //after placing orer it should again check for total bidding tokens to update pool balance

      // } else {
      // setStakErr('Stake Limit Exceeded Reduce Stake Amount')
      // }
    }
  }
  // const AlertNotify = (message, time) => {
  //   setAlert(message)

  //   setTimeout(() => {
  //     setAlert('')
  //   }, time)
  // }

  // ----------------------------------
  // ---Form and Field Handlers End----
  // ----------------------------------
  return (
    <section className='section_padding' id='productInfo'>
        <Container>
          {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
          <Row>
            <div className='col-lg-4 mb-lg-0 mb-3'>
              <div className='profile-info'>
                <div className='top-sec skeleton'>
                  <div className='profile'>
                    <img
                      src={`https://ipfs.io/ipfs/${item.logo}`}
                      alt='Profile img'
                      // onError={addDefaultImg}
                    />
                  </div>
                  <div className='name'>
                    <h2>{item.name}</h2>
                    <div className='text-sm font-secondary text-ignored'>
                      {item.name} / {biddTokenInfo.name}
                    </div>
                  </div>
                </div>
                <div className='badges'>
                  <span className='outerside soon'>Soon</span>
                  <span className='outerside level'>level</span>
                  {item.isKyc === 'true' ? (
                    <span className='outerside kyc'>KYC</span>
                  ) : (
                    <></>
                  )}{' '}
                </div>
                <div className='wallet-sec text-center'>
                  <Dropdown>
                    <Dropdown.Toggle
                      id='dropdown-basic'
                      className='wallet-info'
                    >
                      {acc}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleDisconnectWallet}>
                        Disconnect
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {item.poolStatus === 'close' ? (
                    <>
                      <h4 className='text-white mt-2'>Pool Ended</h4>
                    </>
                  ) : item.poolStatus === 'upcoming' ? (
                    <h4 className='text-white mt-2'>Pool Not Started </h4>
                  ) : (
                    <>
                    
                      <div className='input-wrapper'>
                        {approveErr === '' ? (
                          <>
                            <div className='filed-wrapper stack_flex'>
                              <input
                                type='number'
                                onChange={handleChange}
                                value={stakeAmou}
                                placeholder='Enter value to Stake'
                                name='stake-amou'
                                className='input-field text-white p-1 px-2 rounded'
                                required
                              />
                              <button
                                className='light-blue-btn rounded'
                                onClick={handleStakeClick}
                              >
                                Stake
                              </button>
                            </div>
                            {/* <button
                            className='light-blue-btn rounded'
                            onClick={handleStakeClick}
                          >
                            Stake
                          </button> */}
                          </>
                        ) : (
                          <>
                            <button
                              className='light-blue-btn'
                              onClick={handleApprove}
                            >
                              Approve Tokens
                            </button>
                          </>
                        )}
                      </div>

                      <UserInfo
                        item={item.biddingToken}
                        bal={balan}
                        idoAddress={item.idoAddress}
                        bidName={biddTokenInfo.name}
                      />
                    </>
                  )}
                  {errors !== '' ? (
                    <div className='text-danger p-1'>{errors}</div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className='usd skeleton'>
                  <h3 className='mt-4'>
                    {' '}
                    1 {item.name} = {item.price} {biddTokenInfo.name}{' '}
                  </h3>
                  <h4 className='mt-2'>
                    {' '}
                    {item.price} {biddTokenInfo.name} = 1 {item.name}{' '}
                  </h4>
                </div>
                <div className='progress-bar'>
                  <div className='prog-text d-flex'>
                    <span>
                      Close in {item.remainTime.day} Days,{' '}
                      {item.remainTime.hours} hours
                    </span>
                    <span>{percen}%</span>
                  </div>
                  <ProgressBar now={percen} />
                  <div className='prog-text d-flex '>
                    <span>{totBidStake} BUSD</span>
                    <span className='pt-2'>
                      {totAucStake} /{item.totalSupply} ({item.name})
                    </span>
                  </div>
                  {stakErr !== '' ? (
                    <div>
                      <p className='text-danger p-1'>{stakErr}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className='wifi text-white'>
                  <span>IDO and distribution on BSC</span>
                </div>

                <div className='d-sm-flex text-white justify-content-between '>
                  <div className='sale mb-2'>
                    <span>User Buy Amount</span>
                  </div>
                  <span>{bidPerUser}</span>
                </div>
                <div className='d-sm-flex text-white justify-content-between '>
                  <div className='sale'>
                    <span>Sale</span>
                  </div>
                  <span>{item.startDate}</span>
                </div>
                {/ AMOUNT-BLOCK-CODE /}
                <div className='amount_block_code mt-lg-5 mt-3'>
                  <ul>
                    <li>
                      <div className='d-sm-flex text-white justify-content-between '>
                        <div className='sale text-capitalize'>
                          <span>Total Purchased Amount</span>
                        </div>
                        <span>0</span>
                      </div>
                    </li>
                    <li>
                      <div className='d-sm-flex text-white justify-content-between '>
                        <div className='sale text-capitalize'>
                          <span>Claim Amount</span>
                        </div>
                        <span>0</span>
                      </div>
                    </li>
                    <li>
                      <div className='text-center light-btn-div'>
                        <a
                          href='#'
                          className='d-inline-block light-btn text-capitalize'
                        >
                          action
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-8 mb-lg-0 mb-3'>
              <div className='coin-detail text-white'>
                <div className='d-flex align-items-center skeleton'>
                  <div className='coin-profile'>
                    <img
                      src={`https://ipfs.io/ipfs/${item.logo}`}
                      alt='Profile img'
                      // onError={addDefaultImg}
                    />
                  </div>
                  <h2>{item.name}</h2>
                </div>
                <p>{item.description}</p>
                <div className='social-icons'>
                  <ul className='mb-0'>
                    <li>
                      <a href='https://ultrapad.finance.server18.arhamsoft.info/'></a>
                    </li>
                    <li>
                      <a href='https://ultrapad.finance.server18.arhamsoft.info/'></a>
                    </li>
                    <li>
                      <a href='https://ultrapad.finance.server18.arhamsoft.info/'></a>
                    </li>
                    <li>
                      <a href='https://ultrapad.finance.server18.arhamsoft.info/'></a>
                    </li>
                    <li className='mx-0'>
                      <a href='https://ultrapad.finance.server18.arhamsoft.info/'></a>
                    </li>
                  </ul>
                </div>
                <div className='pool-detail'>
                  <h4>Pool Details</h4>

                  <ul>
                    <li className='d-sm-flex'>
                      <div className='w-50 mb-sm-0 mb-1'>
                        <span className='title'>Access Type: </span>
                        <span> Levels</span>
                      </div>
                      <div className='w-50'>
                        <span className='title'>Hard Cap: </span>
                        <span> ${item.hardCap}</span>
                      </div>
                    </li>
                    <li>
                      <span className='title'>Swap Rate: </span>
                      <span className='desc-color'>
                        1 {item.name}
                        <span className='text-white'> = </span> ${item.price} |{' '}
                        {item.price} {item.name}
                        <span className='text-white'> per </span> {item.price}{' '}
                        {biddTokenInfo.name}
                      </span>
                    </li>
                    <li className='mb-0'>
                      <span className='title'>Start/end: </span>
                      <span>
                        {item.startDate}UTC - {item.endDate} UTC
                      </span>
                    </li>
                  </ul>
                  <h4>Token</h4>
                  <ul>
                    <li>
                      <span className='title'>Token: </span>
                      <span className='desc-color'>
                        {' '}
                        {item.name}({item.name})
                      </span>
                    </li>
                    <li>
                      <span className='title'>Type: </span>
                      <span> Levels</span>
                    </li>
                    <li>
                      <span className='title'>Total Supply: </span>
                      <span>{/* {/ {item.totalSupply} {item.name} /} */}</span>
                    </li>
                    <li>
                      <span className='title'>Initial Supply: </span>
                      <span className='desc-color'>
                        {' '}
                        {item.hardCap} {item.name}
                        <span className='text-white'>, market cap </span>
                        $981 039
                      </span>
                    </li>
                    <li className='mb-0'>
                      <span className='title'>Token Listing: </span>
                      <span> TBA</span>
                    </li>
                  </ul>
                  <h4>Distribution</h4>
                  <ul className='mb-0'>
                    <li>
                      <span className='title'>Distribution: </span>
                      <span> Claimed on Holdex</span>
                    </li>
                    <li className='mb-0'>
                      <span className='title'>Vesting: </span>
                      <span>{item.tokenVestion}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
    
    </section>
  )
}
export default ProductInfo
