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
import { DefualtImageSetter } from '../../utils/globalHelpers'
import Alerts from '../Alerts/alert'
import OrderDetail from '../OrderDetails/orderdetail'
import LoaderProductSkeleton from './productSkeleton'
import moment from 'moment'
// import CountdownMonths from './timer'
import IDOClock from './idoClock'
import ModalLoading from './loadingModal'
const ProductInfo = () => {
  const { id } = useParams()

  const API_URL = process.env.REACT_APP_SUBGRAPH_API_LATEST_BSC
  const [loading, setLoading] = useState(false)
  const [itemId] = useState(id) //get Pool Id from custom Navigation
  const [item, setItem] = useState({
    idoTokenSymbol: '',
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

  //wallet and user Handling states
  const [approveAmou, setApproveAmou] = useState(0)
  const [acc, setAcc] = useState('Connect Wallet')
  const [cookies, setCookies, removeCookie] = useCookies(['address'])
  const [balan, setBal] = useState(0)
  //wallet and user Handling states

  // bidding and staking states
  const [biddTokenInfo, setBiddTokenInfo] = useState({
    name: '',
    decimals: 1,
    symbol: ''
  })
  const [totAucStake, setTotAucStake] = useState(0)
  const [stakeAmou, setStakeAmou] = useState(0)
  const [bidPerUser, setBidPerUser] = useState(0)
  const [percen, setPercent] = useState(0)
  // bidding and staking states

  // error handling states
  const [errors, setErrors] = useState('')
  const [alert, setAlert] = useState('')
  const [approveErr, setApproveErr] = useState('')
  const [stakErr, setStakErr] = useState('')
  // error handling states

  // const [time] = useState({})

  // ----------------------------------------
  // ----------- Helper Functions -----------
  // ----------------------------------------

  const ParseData = async arg => {
    const url = await axios.get(`https://ipfs.infura.io/ipfs/${arg}`)

    return url.data
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
    const symbol = await contract.symbol()
    setBiddTokenInfo({
      ...biddTokenInfo,
      name: name,
      decimals: decimalConvert,
      symbol: symbol
    })
    return decimalConvert
  }
  const CheckApprove = useCallback(
    async args => {
      /*BALANCE SET*/
      const contract = await FetchProvider(args.biddingToken, TokenAbi)
      var balanPool = await contract.balanceOf(cookies.address)
      const decimal = await GetBiddingTokenInfo(args)
      const balDeci = (balanPool / decimal).toFixed(3)
      setBal(balDeci)
      /*BALANCE SET*/

      const allowance = await contract.allowance(
        cookies.address,
        args.idoAddress
      )

      
      if (parseInt(allowance.toString()) <= 0) {
        // if not allowance then go for approve
        setApproveErr('Wait ! it takes some time for Approval')
      } else {
        setApproveErr('')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies.address]
  )

  // ----------------------------------------
  // --------- Helper Functions End ---------
  // ----------------------------------------

  const GetTotalStakeAmout = useCallback(
    async args => {
      const { idoAddress, totalSupply, biddingToken } = args

      const tokenAdd = idoAddress

      // Get bidding decimal here

      const biddingTokenContract = await FetchProvider(biddingToken, TokenAbi)

      const Decimals = parseInt(await biddingTokenContract.decimals())
      const arg = {
        biddingToken
      }
      CheckApprove(arg)
      const decimalConvert = Math.pow(10, Decimals)
      // Get bidding decimal here

      //  Get total purchase Amount per User
      const contract = await FetchProvider(tokenAdd, Abi)
      console.log(contract)
      const totalBidding = parseInt(await contract.totalPurchasedAmount())
      if (cookies.address !== undefined) {
        const purchasedAmouPerUser = parseFloat(
          await contract.purchasedAmounts(cookies.address)
        )

        const newPurchaseAmount =
          purchasedAmouPerUser / parseInt(decimalConvert)

        setBidPerUser(newPurchaseAmount)
      }

      // console.log('total Bidding Amount')

      const divWithDecimals = totalBidding / decimalConvert
      // const result = exponentialToDecimal(divWithDecimals)

      setTotAucStake(divWithDecimals)

      const divTotalBid = totalBidding / decimalConvert
      const perc = ((divTotalBid / totalSupply) * 100).toFixed(2)
      setPercent(perc)
      //  Get total purchase Amount per User
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies.address]
  )

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
        isKyc,
        logo,
        twitter,
        discord,
        medium,
        poolStartDate,
        telegram,
        website
      } = hashData
      console.log('i am here ')
      const contract = await FetchProvider(poolingToken, TokenAbi)
      console.log('contract', contract)
      const symbol = await contract.symbol()
      console.log('symnbol', symbol)
      var poolStatus = ''
      var unix = Math.round(+new Date() / 1000)
      if (unix < idoData.startDate && unix < idoData.endDate) {
        poolStatus = 'upcoming'
      } else if (unix >= idoData.endDate) {
        poolStatus = 'close'
      } else if (unix > idoData.startDate && unix < idoData.endDate) {
        poolStatus = 'open'
      }

      const timinStart = moment
        .unix(idoData.startDate)
        .format('MMMM Do YYYY, h:mm:ss a')
      console.log('dates', timinStart)
      const timinEnd = moment
        .unix(idoData.endDate)
        .format('MMMM Do YYYY, h:mm:ss a')
      const remainHour = await GetRemainDays(idoData.endDate)

      var newTotalRaised =
        idoData.totalRaised / Math.pow(10, idoData.poolMeta.decimal)
      console.log('newTotalRaised', idoData.totalRaised)

      var newPrice =
        parseInt(idoData.price) /
        parseInt(Math.pow(10, idoData.poolMeta.decimal))

      let dummyObj = {
        poolId: idoData.poolId,
        symbol: symbol,
        startDate: timinStart,
        endDate: timinEnd,
        price: tokenPrice,
        idoAddress: idoData.poolingToken,
        totalSupply: newTotalRaised,
        hardCap: (newTotalRaised * newPrice).toFixed(3),
        name: title,
        logo: logo,
        description: description,
        biddingToken: biddingToken,
        poolingToken: poolingToken,
        socials: [medium, twitter, discord, website, telegram],
        decimals: idoData.poolMeta.decimal,
        remainTime: remainHour,
        isKyc: isKyc.toString(),
        poolStatus: poolStatus,
        timeCounter: poolStartDate
      }
      console.log('i am here ')
      console.log('dummyObj ----', dummyObj)
      setItem(dummyObj)
      if (cookies.address !== undefined) {
        await CheckApprove(dummyObj)
        GetTotalStakeAmout(dummyObj)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [GetTotalStakeAmout, CheckApprove]
  )

  const fetchWithId = useCallback(
    async id => {
      console.log('id', id)
      var str = id

      str = str.replace(':', '')

      const tokensQuery = `{
      poolInfos (where :{ poolingToken:"${str}" }) 
      
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
        poolMeta{
          network
          decimal
        }
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
    const remainAucAmount = item.totalSupply - totAucStake
    console.log('remainAucAmount', remainAucAmount)
    if (
      item.totalSupply < e.target.value ||
      remainAucAmount < e.target.value ||
      e.target.value < 0
    ) {
      setErrors('Enter Valid Amount')
    } else {
      setErrors('')
    }
    setStakeAmou(e.target.value)
  }
  const handleApprove = async () => {
    const contract = await FetchProvider(item.biddingToken, TokenAbi)

    const newApproveAmou = parseFloat(approveAmou * biddTokenInfo.decimals)
    const approve = await contract.approve(
      item.idoAddress,
      '115792089237316195423570985008687907853269984665640564039457584007913129639935'
    )
    console.log(newApproveAmou)
    console.log('approve', approve)

    const receipt = await approve.wait()
    setApproveErr('')
    console.log('receipt', receipt)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }
  const handleStakeClick = async () => {
    if (cookies.address !== undefined) {
      if (
        parseFloat(stakeAmou) <= 0 ||
        // stakeAmou < parseInt(item.minBuyAmount) ||
        parseFloat(stakeAmou) > parseFloat(balan)
      ) {
        // console.log('stakeAmou ', stakeAmou)
        setErrors(`You dont have Enough ${biddTokenInfo.name} `)
      } else {
        setErrors('')

        setStakErr('')
        const tokenAdd = item.idoAddress
        console.log('token address', tokenAdd)
        const contract = await FetchProvider(tokenAdd, Abi)
        console.log(biddTokenInfo)
        // const stakeWithDecimal = stakeAmou * tokenInf.decimal
        // console.log('bidding token decimals', tokenInf.decimal)

        console.log('decimals', biddTokenInfo.decimals)

        const stakeWithBid = (
          stakeAmou * parseInt(biddTokenInfo.decimals)
        ).toString()

        console.log('stakeWithBid', stakeWithBid)
        setLoading(true)
        contract
          .purchase(stakeWithBid)
          .then(async res => {
            const receipt = await res.wait()
            setLoading(false)
            console.log('receipt', receipt)

            await GetTotalStakeAmout(item)
          })
          .catch(err => {
            setLoading(false)
            AlertNotify(`Error in Staking Tokens ${err}`, 4000)
           
            console.log('error in fetching ', err)
          })

        setApproveErr('')
      }
    } else {
      AlertNotify('Connect Your MetaMask', 4000)
    }
  }

  // ----------------------------------
  // ---Form and Field Handlers End----
  // ----------------------------------
  const AlertNotify = (message, time) => {
    setAlert(message)

    setTimeout(() => {
      setAlert('')
    }, time)
  }

  return (
    <section className='section_padding' id='productInfo'>
      {item.poolId !== '' ? (
        <Container>
          {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
          <Row>
            <div className='col-lg-4 mb-lg-0 mb-3'>
              <div className='profile-info'>
                <div className='top-sec '>
                  <div className='profile'>
                    <img
                      src={`https://ipfs.io/ipfs/${item.logo}`}
                      alt='Profile img'
                      onError={DefualtImageSetter}
                    />
                  </div>
                  <div className='name'>
                    <h2>{item.name}</h2>
                    <div className='text-sm font-secondary text-ignored'>
                      {item.symbol} / {biddTokenInfo.symbol}
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
                  {item.poolStatus === 'close' ? (
                    <>
                      <h4 className='text-white mt-2'>Sale Ended</h4>
                    </>
                  ) : item.poolStatus === 'upcoming' ? (
                    <>
                      <h4 className='text-white mt-3'>
                        Sale Starts on
                        {/* <CountdownMonths poolStartDate={item.startDate} /> */}
                        <IDOClock date1={item.startDate} />
                      </h4>
                    </>
                  ) : (
                    <>
                      <div className='input-wrapper justify-content-center'>
                        {approveErr === '' ? (
                          <>
                            <div className='slide_text_code'>
                              <div className='d-flex'>
                                <div className='filed-wrapper'>
                                  <input
                                    type='number'
                                    onChange={handleChange}
                                    value={stakeAmou}
                                    placeholder='Enter value to Stake'
                                    name='stake-amou'
                                    className='input-field text-white border-left'
                                    required
                                  />
                                </div>
                                {errors === '' ? (
                                  <button
                                    className='light-blue-btn border-left'
                                    onClick={handleStakeClick}
                                  >
                                    Stake
                                  </button>
                                ) : (
                                  <button
                                    className='light-blue-btn '
                                    disabled={true}
                                  >
                                    Stake
                                  </button>
                                )}
                              </div>
                              <div className='slide_text w-100'>
                                <span>
                                  {stakeAmou} {item.symbol} ={' '}
                                  {(stakeAmou * item.price).toFixed(4)}{' '}
                                  {biddTokenInfo.symbol}{' '}
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='slide_text_code'>
                              <div className='d-flex'>
                                <div className='filed-wrapper'>
                                  <input
                                    type='number'
                                    onChange={e => {
                                      console.log(e.target.value)
                                      setApproveAmou(parseFloat(e.target.value))
                                    }}
                                    value={'Approve Your Tokens'}
                                    placeholder='Approve Your Tokens'
                                    name='approveAmou'
                                    disabled={true}
                                    className='input-field text-white'
                                    required
                                  />
                                </div>
                                <button
                                  className='light-blue-btn'
                                  onClick={handleApprove}
                                >
                                  Approve
                                </button>
                              </div>
                            </div>
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
                    <div className='text-danger p-1'>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      <span className='ml-2'>{errors}</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className='usd '>
                  <h3 className='mt-4'>
                    {' '}
                    1 {item.symbol} = {item.price} {biddTokenInfo.symbol}{' '}
                  </h3>
                  <h4 className='mt-2'>
                    {' '}
                    {item.price} {biddTokenInfo.symbol} = 1 {item.symbol}{' '}
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
                    {/* <span>{totBidStake} BUSD</span> */}
                    <span className='pt-2'>
                      {totAucStake} {item.symbol} /{item.totalSupply.toFixed(2)}{' '}
                      {item.symbol}
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
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 640 512'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z'></path>
                  </svg>
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

                {item.poolStatus === 'close' &&
                cookies.address !== undefined ? (
                  <OrderDetail
                    idoAddress={item.idoAddress}
                    ownerAddress={cookies.address}
                    bidDecimal={item.biddingToken}
                    poolDecimal={item.decimals}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* here Start product infp */}
            <div className='col-lg-8 mb-lg-0 mb-3'>
              <div className='coin-detail text-white'>
                <div className='d-flex flex-sm-row flex-column align-items-center justify-content-between'>
                  <div className='coin-profile d-flex align-items-center'>
                    <img
                      src={`https://ipfs.io/ipfs/${item.logo}`}
                      alt='Profile img'
                      onError={DefualtImageSetter}
                    />
                    <h2 className='mb-0 ms-1'>{item.name}</h2>
                  </div>

                  <div className='mb-sm-0 mb-2'>
                    <img
                      src='https://dex-bin.bnbstatic.com/static/images/logo_BNB_Chain.svg'
                      className='chainLogo'
                      alt='network logo'
                    ></img>
                  </div>
                </div>

                <p>{item.description}</p>
                <div className='social-icons'>
                  <ul className='mb-0'>
                    <li>
                      <a href='http://google.com/'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 448 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z'></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href='http://google.com/'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 576 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z'></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href='http://google.com/'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href='http://google.com/'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 496 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'></path>
                        </svg>
                      </a>
                    </li>
                    <li className='mx-0'>
                      <a href='http://google.com/'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 384 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'></path>
                        </svg>
                      </a>
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
                        1 {item.symbol}
                        <span className='text-white'> = </span> ${item.price} |{' '}
                        {item.price} {item.symbol}
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
                        {item.name}({item.symbol})
                      </span>
                    </li>
                    <li>
                      <span className='title'>Type: </span>
                      <span> Levels</span>
                    </li>
                    <li>
                      {/* <span className='title'>Total Supply: </span>
                      <span> {/* {item.totalSupply} {item.name} */}
                      {/* </span> */}
                    </li>
                    <li>
                      <span className='title'>Initial Supply: </span>
                      <span className='desc-color'>
                        {' '}
                        {item.hardCap} {item.symbol}
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
                      <span> Claimed on UltraPad</span>
                    </li>
                    <li className='mb-0'>
                      <span className='title'>Vesting: </span>
                      {/* <span>{item.tokenVestion}</span> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {loading? <ModalLoading /> : <></>}
          </Row>
        </Container>
      ) : (
        <>
          <LoaderProductSkeleton />
        </>
      )}
    </section>
  )
}
export default ProductInfo
