import React, { useState, useRef, useEffect } from 'react'
// import DatePicker from "react-datepicker"
import { Link } from 'react-router-dom'
import {
  faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons'
import 'react-datepicker/dist/react-datepicker.css'
import uploadImg from '../../assets/images/photo.png'
import {
  Form,
  Button,
  Row,
  Modal,
  Accordion,
  Dropdown,
  FormGroup
} from 'react-bootstrap'
import data from '../../utils/api'
import TokenAbi from '../../utils/token20Abi'
import './createpool.css'
import newAbi from '../../utils/newIdoAbi'
import { create } from 'ipfs-http-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faExclamation,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

import Info from '../InfoBtn/info'
import { ethers } from 'ethers'
import { useCookies } from 'react-cookie'
import ErrorLabels from '../ErrorLabels/errorlabels'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import StorageAbi from '../../utils/StorageAbi'
import byteCode from '../../utils/idoByteCode'
import Alerts from '../Alerts/alert'
// import ManagePools from '../AdminPanel/ManagePools/ManagePools'
const client = create('https://ipfs.infura.io:5001/api/v0')
function Createpool () {
  //----------------------------------------------
  // ---------- All states appear Below ----------
  //----------------------------------------------

  const [cookies] = useCookies('address')
  const [acc, setAcc] = useState('')
  const [modalSuccess, setModalSuccess] = useState(false)
  const [poolName, setPoolName] = useState('')
  const [poolDecimals, setPoolDecimals] = useState(0)
  const [bidName, setBidName] = useState('')
  const [poolBalErr] = useState('')
  const [bidBalErr, setBidBalErr] = useState('')
  const [back, setBack] = useState(false)
  const [alert, setAlert] = useState('')
  const [createCheck, setCreateCheck] = useState(false)
  console.log(back)
  var myRef = useRef([])
  // const [btnActive, setBt  nActive] = useState(true)
  const [networks] = useState(['BSC', 'ETH'])

  const [sDate, setSDate] = useState(new Date())

  const [eDate, setEDate] = useState(new Date())
  const [idoTokenAdd, setIdoTokenAdd] = useState('')
  const [poolMeta, setPoolMeta] = useState({
    title: '',
    description: '',

    // -----------------To generate hash
    poolingToken: '', //address
    biddingToken: '', //address
    logo: '',

    // ----------- Dates ---------
    poolStartDate: new Date(), //date
    poolEndDate: new Date(), //date
    //

    hash: '',
    networks: 'Select A Network',

    // Tokenomics
    tokenPrice: 0,
    marketCap: 0,
    totalSupply: 0,
    isKyc: false,

    // ------- Socials -------
    website: '',
    telegram: '',
    discord: '',
    medium: '',
    twitter: ''
  })
  const [poolBalance, setPoolBalance] = useState(0)

  const [errors, setErrors] = useState({})

  const [apTok1, setApTok1] = useState(false)
  const [apTok2, setApTok2] = useState(false) //flag for token 2
  const [depositStatus, setDepositStatus] = useState(false)
  const [apPool, setApPool] = useState(false)

  const [modalShow, setModalShow] = React.useState(false)

  //----------------------------------------------
  // ---------- All states appear above ----------
  //----------------------------------------------
  useEffect(() => {
    if (cookies.address !== undefined) {
      setAcc(cookies.address)
    }

    if (cookies.address === 'undefined') {
      setAcc('Connect Wallet')
    }
  }, [cookies.address, acc])

  //----------------------------------------------
  // ----- All Event Handlers appear Below -------
  //----------------------------------------------

  // const handleCreateCheck = async () => {
  //   handleValidation()
  //   setCreateCheck(true)
  //   myRef.current.scrollIntoView()
  //   console.log('myRef', myRef)
  // }
  const handleNetwork = async network => {
    console.log('network selection', network)

    const { ethereum } = window
    if (network === 'ETH') {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }]
        })
        setPoolName('')

        setPoolMeta({
          ...poolMeta,
          networks: 'ETH',
          poolingToken: '',
          biddingToken: ''
        })
        setErrors({ ...errors, poolingToken: '', biddingToken: '' })
      } catch (addError) {
        console.error('Error in switching network', addError)
      }
    } else if (network === 'BSC') {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x61' }]
        })
        setBidName('')

        setPoolMeta({
          ...poolMeta,
          networks: 'BSC',
          poolingToken: '',
          biddingToken: ''
        })

        setErrors({ ...errors, poolingToken: '', biddingToken: '' })
      } catch (addError) {
        console.error('error in switching network', addError)
      }
    }
  }
  const handleStartDate = e => {
    console.log('date', e[0])
    setSDate(e[0])
  }

  const handleEndDate = e => {
    console.log('date', e[0])
    setEDate(e[0])
  }
  const handleKyc = e => {
    let isChecked = e.target.checked
    console.log('checked', isChecked)
    setPoolMeta({ ...poolMeta, isKyc: isChecked })
  }
  const handleChange = async e => {
    console.log(data)
    // e.preventDefault()
    const { name, value } = e.target
    if (name === 'logo') {
      const file = e.target.files[0]
      console.log('file', file)
      const logoUrl = await client.add(file)
      console.log('logo url', logoUrl)
      const url = await `${logoUrl.path}`
      console.log(url)
      setPoolMeta({ ...poolMeta, [name]: url })
    } else if (name === 'poolingToken') {
      console.log('We are in poolin gtoken')
      setPoolMeta({ ...poolMeta, [name]: value })
      // if (ethers.utils.isAddress(value) && value != '' && value != null) {

      const contract = await FetchProvider(value, TokenAbi)
      setPoolName('')
      console.log(contract)
      if (contract !== undefined) {
        setErrors({ ...errors, poolingToken: '' })
        console.log('start')
        setPoolName('loading')
        contract
          .name()
          .then(res => {
            console.log('hello', res)

            if (res !== bidName) {
              setPoolName(res)
              fetchBal(value) //setting balance of depositing token

              contract
                .totalSupply()
                .then(res => {
                  setPoolMeta({
                    ...poolMeta,
                    totalSupply: res,
                    poolingToken: value
                  })
                })
                .catch(err => {
                  console.log(
                    'error in fetching total supply of polling token',
                    err
                  )
                })
            } else {
              setErrors({
                ...errors,
                poolingToken: 'Both tokens address cannot be same'
              })
            }
            console.log('end')
          })
          .catch(err => {
            setPoolName('')
            if (poolMeta.networks === 'ETH') {
              setErrors({
                ...errors,
                poolingToken: 'Enter valid ERC20 token address'
              })
            } else {
              setErrors({
                ...errors,
                poolingToken: 'Enter valid BEP20 token address'
              })
            }
          })
      } else {
        setErrors({ ...errors, poolingToken: 'Enter Valid Address' })
      }
      // }
      // handleValidation()
    } else if (name === 'biddingToken') {
      console.log('We are in Bidding gtoken')
      setPoolMeta({ ...poolMeta, [name]: value })
      // if (ethers.utils.isAddress(value) && value != '' && value != null) {
      const contract = await FetchProvider(value, TokenAbi)

      console.log(contract)
      setBidName('')
      if (contract !== undefined) {
        setErrors({ ...errors, biddingToken: '' })
        console.log('start')
        setBidName('loading')
        contract
          .name()
          .then(res => {
            console.log('hello', res)
            if (res !== poolName) {
              setBidName(res)
            } else {
              setErrors({
                ...errors,
                biddingToken: 'Both tokens address cannot be same'
              })
            }
            console.log('end')
          })
          .catch(err => {
            setBidName('')
            if (poolMeta.networks === 'ETH') {
              setErrors({
                ...errors,
                biddingToken: 'Enter valid ERC20 token address'
              })
            } else {
              setErrors({
                ...errors,
                biddingToken: 'Enter valid BEP20 token address'
              })
            }
          })
      } else {
        setErrors({
          ...errors,
          biddingToken: 'Enter valid address'
        })
      }
      // }
      // handleValidation()
    } else {
      // handleValidation()
      setPoolMeta({ ...poolMeta, [name]: value })
    }
    // handleValidation()
  }
  //add validations to fieds to catch errors
  const handleValidation = async () => {
    const {
      title,
      // description,
      tokenPrice,
      marketCap,
      // poolStartDate,
      // poolEndDate,
      poolingToken,
      biddingToken,
      website,
      telegram,
      discord,
      medium,
      totalSupply,
      twitter,
      network
    } = poolMeta
    var newErrors = {}
    console.log('check value is ', createCheck)
    if (title === '') {
      newErrors.title = 'Please enter title value'
    }
    console.log('token price type', typeof tokenPrice)
    if (tokenPrice === 0 || tokenPrice === null) {
      newErrors.tokenPrice = 'Please define token Price'
    }
    if (marketCap === 0 || marketCap === null) {
      newErrors.marketCap = 'Please define market Cap'
    }
    if (totalSupply === 0 || totalSupply === null) {
      newErrors.totalSupply = 'Please define market Cap'
    }

    if (network === '') {
      newErrors.network = 'Please select network'
    }
    // const poolStartDate1 = await Math.floor(
    //   new Date(poolStartDate.getTime() / 1000)
    // )

    console.log('start date', sDate)
    console.log('end date', eDate)
    var startDate = Date.parse(sDate)
    const sDate1 = startDate / 1000
    var endDate = Date.parse(eDate)
    const eDate1 = endDate / 1000

    if (sDate1 <= 0 || sDate1 > eDate1) {
      console.log('errors in start date')
      newErrors.poolStartDate =
        'Start date less than end date and greater current time'
    }

    if (eDate <= 0 || eDate < sDate) {
      console.log('errors in End date')

      newErrors.poolEndDate =
        ' Pool end date should greater than start date and current time'
    }

    if (!ethers.utils.isAddress(poolingToken)) {
      console.log('pooling token', poolingToken)
      newErrors.poolingToken = ' Enter valid pooling token address'
    }
    console.log('pool balance ', typeof poolBalance)

    console.log('market cap balance ', typeof marketCap)
    if (parseInt(poolBalance) < parseInt(marketCap)) {
      newErrors.marketCap =
        ' You dont have Enough Balance to Deposit in For IDO'
    }

    if (!ethers.utils.isAddress(biddingToken)) {
      newErrors.biddingToken = ' Enter valid bidding token address'
    }
    const regex = new RegExp(
      '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    )
    if (!regex.test(website)) {
      newErrors.website = 'Enter valid website link'
    }
    if (!regex.test(telegram)) {
      newErrors.telegram = 'Enter valid telegram link'
    }

    if (!regex.test(twitter)) {
      newErrors.twitter = 'Enter valid twitter link'
    }

    if (!regex.test(medium)) {
      newErrors.medium = 'Enter valid medium link'
    }

    if (!regex.test(discord)) {
      newErrors.discord = 'Enter valid discord link'
    }

    console.log(newErrors)
    if (
      Object.keys(newErrors).length > 0 ||
      poolName === '' ||
      poolName === 'loading' ||
      bidName === '' ||
      bidName === 'loading'
    ) {
      setErrors(newErrors)
      setModalShow(false)
      return false
    } else {
      // setBtnActive(true)
      setErrors({})
      setCreateCheck(true)
      setApPool(false)
      return true
    }
  }

  //Function to initialize pool
  // const GetHash = async e => {}
  // function to fetch Provider and signer
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
  const initiatingPool = async () => {
    const { tokenPrice } = poolMeta

    //setting dates in required UNIX format.otherwise throw error.

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const factory = new ethers.ContractFactory(newAbi, byteCode, signer)
    // If your contract requires constructor args, you can specify them here

    var startDate = Date.parse(sDate)
    const start1 = startDate / 1000
    var endDate = Date.parse(eDate)
    const end1 = endDate / 1000

    console.log('end Date', end1)

    console.log('Start Date', start1)

    const price = tokenPrice * Math.pow(10, poolDecimals)
    console.log(price)
    const contract = await factory.deploy()
    console.log('contract transaction here', contract)
    const receipt = await contract.deployTransaction.wait()
    console.log('contract factory', contract.deployTransaction.hash)

    console.log('Contract address', contract.address)
    setIdoTokenAdd(contract.address)
    console.log('receipt', receipt)

    return contract.address
  }
  const CheckBalance = async () => {
    const poolingToken = poolMeta.poolingToken
    const contract = await FetchProvider(poolingToken, TokenAbi)
    console.log('pooling token address', poolingToken)
    const balanPool = parseFloat(await contract.balanceOf(acc))
    return balanPool
  }
  // const { poolingToken } = poolMeta
  const CheckIdoAllowance = async addressIdo => {
    const poolingToken = poolMeta.poolingToken
    const contract = await FetchProvider(poolingToken, TokenAbi)
    const allowance = await contract.allowance(acc, addressIdo)
    console.log('allowance ', parseInt(allowance))
    return allowance
  }
  const ApproveAllowance = async addressIdo => {
    // const { poolingToken } = poolMeta

    const poolingToken = poolMeta.poolingToken
    const contract = await FetchProvider(poolingToken, TokenAbi)

    console.log('we are in approve allowance ', contract)
    const approve = await contract.approve(
      addressIdo,
      '115792089237316195423570985008687907853269984665640564039457584007913129639935'
    )
    const receipt = await approve.wait()
    console.log('receipt', receipt)
    setApTok2(true)

    console.log('approval status', approve)
    return approve
  }

  const exponentialToDecimal = exponential => {
    let decimal = exponential.toString().toLowerCase()
    if (decimal.includes('e+')) {
      const exponentialSplitted = decimal.split('e+')
      let postfix = ''
      for (
        let i = 0;
        i <
        +exponentialSplitted[1] -
          (exponentialSplitted[0].includes('.')
            ? exponentialSplitted[0].split('.')[1].length
            : 0);
        i++
      ) {
        postfix += '0'
      }
      const addCommas = text => {
        let j = 3
        let textLength = text.length
        while (j < textLength) {
          text = `${text.slice(0, textLength - j)},${text.slice(
            textLength - j,
            textLength
          )}`
          textLength++
          j += 3 + 1
        }
        return text
      }
      decimal = addCommas(exponentialSplitted[0].replace('.', '') + postfix)
    }
    if (decimal.toLowerCase().includes('e-')) {
      const exponentialSplitted = decimal.split('e-')
      let prefix = '0.'
      for (let i = 0; i < +exponentialSplitted[1] - 1; i++) {
        prefix += '0'
      }
      decimal = prefix + exponentialSplitted[0].replace('.', '')
    }
    return decimal
  }

  const depositTokens = async idoAddress => {
    const {
      poolingToken,
      biddingToken,
      isKyc,
      tokenPrice,
      marketCap
    } = poolMeta

    const fetchIdoContract = await FetchProvider(idoAddress, newAbi)
    console.log('we are in depositing token', idoAddress)
    var startDate = Date.parse(sDate)
    const start1 = startDate / 1000
    var endDate = Date.parse(eDate)
    const end1 = endDate / 1000
    // clean price
    const price = (tokenPrice * Math.pow(10, poolDecimals)).toString()
    const priceNew = exponentialToDecimal(price)
    var cleanPrice = priceNew.replace(/,/g, '')
    console.log('clean value', cleanPrice)

    // clean price

    // clean marketCap
    const marketCapNew1 = marketCap * Math.pow(10, poolDecimals)
    const decimalsNew = exponentialToDecimal(marketCapNew1)
    console.log('market cap new in initiate pool', decimalsNew)
    var cleanStr = decimalsNew.replace(/,/g, '')
    console.log('clean value', cleanStr)
    // clean marketCap

    fetchIdoContract
      .initiateIDO(
        cleanStr,
        poolingToken,
        biddingToken,
        cleanPrice,
        cleanStr,
        start1,
        end1,
        isKyc
      )
      .then(res => {
        console.log('success deposit', res)
        setApPool(true)
        callStorage(idoAddress)
      })
      .catch(err => {
        console.log(err)
        AlertNotify(`Error in Depositing Token${err.data}`, 5000)
      })
  }

  const callStorage = async idoAddress => {
    const {
      isKyc,
      networks,
      tokenPrice,
      title,
      website,
      telegram,
      discord,
      marketCap,
      medium,
      twitter,
      logo
    } = poolMeta
    var startDate = Date.parse(sDate)
    const sDate1 = startDate / 1000

    var endDate = Date.parse(eDate)
    const eDate1 = endDate / 1000

    var storageContract
    if (networks === 'BSC') {
      console.log('we are in bsc')
      storageContract = await FetchProvider(
        process.env.REACT_APP_STORAGE_ADDRESS_BSC,
        StorageAbi
      )
    } else if (networks === 'ETH') {
      console.log('we are in eth')
      storageContract = await FetchProvider(
        process.env.REACT_APP_STORAGE_ADDRESS_ETH,
        StorageAbi
      )
    }

    client.add(JSON.stringify(poolMeta)).then(async res => {
      console.log('ipfs hash', res.path)


      
      // price clean
      const price = (tokenPrice * Math.pow(10, poolDecimals)).toString()
      const priceNew = exponentialToDecimal(price)
      var cleanPrice = priceNew.replace(/,/g, '')
      // price clean

      // marketcap new
      const marketCapNew = (marketCap * Math.pow(10, poolDecimals)).toString()
      const decimalsNew = exponentialToDecimal(marketCapNew)
      var cleanStr = decimalsNew.replace(/,/g, '')
      // marketcap new

      console.log('clean value', cleanStr)
      storageContract
        .initiatePool([
          cleanStr,
          sDate1,
          eDate1,
          cleanPrice,
          parseInt(poolDecimals),
          networks,
          idoAddress,
          title,
          logo,
          res.path,
          isKyc,
          [website, telegram, discord, medium, twitter]
        ])
        .then(res => {
          AlertNotify('SuccessFully Store Storage', 5000)
          console.log(res)
          setDepositStatus(true)
          setModalSuccess(true)
        })
        .catch(err => {
          console.log(err)
          AlertNotify('Error in Storing IDO', 5000)
        })
    })

    //send IDO to storage Contract
  }

  const fetchBal = async address => {
    console.log(address)
    const contract = await FetchProvider(address, TokenAbi)
    const Decimals = parseInt(await contract.decimals())

    console.log('deicmals', Decimals)
    const count = parseInt(await contract.balanceOf(cookies.address))
    const balInDecimals = (count / Math.pow(10, Decimals)).toFixed(3)
    setPoolDecimals(Decimals)
    console.log('simle balance', count)
    console.log('bal in decimals', balInDecimals)
    setPoolBalance(balInDecimals)
  }

  const IDOSale = async () => {
    const validate = await handleValidation()
    console.log('validate', validate)
    setApTok1(false)
    setApTok2(false)
    setApPool(false)
    setDepositStatus(false)
    setModalSuccess(false)
    if (validate) {
      setModalShow(true)

      var idoAddress = await initiatingPool()

      var timeContract = await FetchProvider(idoAddress, newAbi)
      const result = await timeContract.endTime()
      console.log('end time of contract', result.toString())
      setApTok1(true)
      const balanceCheck = await CheckBalance()

      if (parseInt(balanceCheck) > 0) {
        const idoAllowance = await CheckIdoAllowance(idoAddress)
        if (parseInt(idoAllowance) <= 0) {
          //if not allowance then go for approve
          setApTok2(false)

          await ApproveAllowance(idoAddress)

          //
          //deposit tokens here

          // setTimeout(async () => {
          const deposit = await depositTokens(idoAddress)

          // })

          console.log(deposit)
          // }, 5000)
        } else {
          setApTok2(true)
        }
      } else {
        setBidBalErr(`You dont have ${poolMeta.title} Enough balance`)
        AlertNotify(
          `You Dont Have ${poolMeta.title} ,Deposit Some then Try Again`,
          5000
        )
      }
    } else {
      AlertNotify('Check for Errors !!!! ', 5000000)
      setModalShow(false)
    }
  }

  const handleImgError = ev => {}
  const handleBack = () => {
    setBack(true)
  }

  const AlertNotify = (message, time) => {
    setAlert(message)

    setTimeout(() => {
      setAlert('')
    }, time)
  }
  return (
    <>
      <div className='container'>
        <div className='d-flex flex-sm-row flex-column flex-column-reverse align-items-center justify-content-between'>
          <div className='page-heading my-lg-4 my-2'>
            <h2 className='text-white '>Create Pool</h2>
          </div>
          <div>
            <Button
              onClick={handleBack}
              // onClick={() => setAddPool(false)}
              className='text-white light-blue-btn text-capitalize d-inline w-md-25 btn-design'
            >
              <FontAwesomeIcon
                className='add-icon mx-2 ms-0'
                icon={faArrowAltCircleLeft}
              />
              Back to Pools
            </Button>
          </div>
        </div>

        <div className='heading'>
          <h3 className='text-white  mt-4'>Information</h3>
        </div>
        <hr className='text-white'></hr>

        <Form className='create-pool text-white' onKeyUp={handleValidation}>
          <Row className='align-items-center'>
            <div className='col-md-6 mb-md-0 mb-3'>
              <Form.Group
                className='mb-md-4 mb-4 input_error'
                controlId='title'
              >
                <Info
                  name={'Title'}
                  desc={'Title Should be in String amd max 50 letter'}
                />
                <Form.Control
                  type='text'
                  ref={myRef}
                  placeholder='Enter Title of Token'
                  value={poolMeta.title}
                  name='title'
                  onChange={handleChange}
                  isInvalid={!!errors.title}
                />
                <ErrorLabels props={errors.title} />
              </Form.Group>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='img-cover-box'>
                {/* <p className='mb-0'> Image will be appear here</p> */}
                {poolMeta.logo !== '' ? (
                  <>
                    <img
                      src={`https://ipfs.infura.io/ipfs/${poolMeta.logo}`}
                      alt='logo'
                      className='img-fluid'
                      width='100'
                      height='100'
                      onError={handleImgError}
                    ></img>

                    <Form.Control
                      className='upload_logo h-100 w-100 p-0'
                      name='logo'
                      placeholder='Upload Logo'
                      type='file'
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <Form.Label htmlFor='fileUpload'>
                      <p className='logo_text mb-0 w-75'>
                        {/* <FontAwesomeIcon
                          className='add-icon mx-2 ms-0'
                          icon={faPlusCircle}
                        /> */}
                        <figure className='mx-auto upload-img'>
                          <img src={uploadImg} className='img-fluid' alt='Upload'></img>
                        </figure>
                        <span>Drop your image here, or <span className='text-shadow fw-bold'>Browse</span></span>
                      </p>
                    </Form.Label>
                    <Form.Control
                      className='upload_logo h-100 w-100 p-0'
                      name='logo'
                      placeholder='Upload Logo'
                      type='file'
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>
            </div>

            <div className='col-md-12 mb-md-0 mb-3'>
              <Form.Group
                className='mb-md-5 mb-4 cms-pages-style'
                controlId='description'
              >
                <Info
                  name={'Description'}
                  desc={'Description should be general and brief'}
                />
                <Form.Control
                  as='textarea'
                  rows={3}
                  name='description'
                  value={poolMeta.description}
                  placeholder='Enter Description'
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </Row>
          {/* Chain Information */}
          <div className='heading'>
            <h3 className='text-white mt-4'>Chain Information</h3>
          </div>
          <hr className='text-white mb-md-5 mb-3'></hr>
          <Row>
            <div className='col-md-6 mb-md-0 mb-3'>
              <Form.Group className='mb-md-5 mb-4' controlId='poolStartDat1e'>
                <Info name={'Network'} desc={'Select Network e.g Bsc,Eth'} />
                <Dropdown style={{ backgroundColor: '#050d5982' }}>
                  <Dropdown.Toggle
                    className='p-lg-4 p-3 primary_dropdown'
                    id='dropdown-basic'
                    style={{ backgroundColor: '#050d5982', width: '100%' }}
                  >
                    {poolMeta.networks}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ width: '100%', backgroundColor: '#1F1D3D' }}
                    name='network'
                    isinvalid={!!errors.network}
                  >
                    {networks.map((item, index) => {
                      return (
                        <Dropdown.Item
                          className='text-white network-drop'
                          value={item}
                          key={index}
                          onClick={() => {
                            handleNetwork(item)
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      )
                    })}
                    <ErrorLabels props={errors.title} />
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group className='mb-md-5 mb-4' controlId='poolingToken'>
                <Info
                  name={'Pooling Token'}
                  desc={'Enter Address of pooling token in hex form e.g 0x....'}
                />
                {poolName === '' ? (
                  <></>
                ) : poolName === 'loading' ? (
                  <p className='text-white text-end float-end'>
                    <img
                      src='https://i.stack.imgur.com/qq8AE.gif'
                      alt='loader'
                      style={{ width: '15%' }}
                    />
                  </p>
                ) : (
                  <p className='text-white text-end float-end'>{poolName}</p>
                )}

                <Form.Control
                  type='text'
                  value={poolMeta.poolingToken}
                  onChange={handleChange}
                  name='poolingToken'
                  isInvalid={!!errors.poolingToken}
                  placeholder='Paste pooling token address'
                />
                <ErrorLabels props={errors.poolingToken} />
              </Form.Group>
            </div>
            <div className='col-md-6 mb-md-5 mb-4'>
              <div className='d-flex flex-column justify-content-end h-100'>
                <Form.Group className='input_error' controlId='biddingToken'>
                  <Info
                    name={'Bidding Token'}
                    desc={'Enter Address of Bidding in hex form e.g 0x....'}
                  />
                  {bidName === '' ? (
                    <></>
                  ) : bidName === 'loading' ? (
                    <p className='text-white text-end float-end'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        style={{ width: '15%' }}
                        alt='loader'
                      />
                    </p>
                  ) : (
                    <p className='text-white text-end float-end'>{bidName}</p>
                  )}
                  <Form.Control
                    className='input_error'
                    type='text'
                    value={poolMeta.biddingToken}
                    onChange={handleChange}
                    name='biddingToken'
                    isInvalid={!!errors.biddingToken}
                    placeholder='Paste Bidding token address'
                  />
                  <ErrorLabels props={errors.biddingToken} />
                </Form.Group>
              </div>
            </div>
          </Row>

          {/*-------------------- Tokennomics------------- */}
          <div className='heading'>
            <h3 className='text-white  mt-4'>Tokenomics</h3>
          </div>
          <hr className='text-white mb-5'></hr>

          <Row>
            <div className='col-md-6'>
              <Form.Group
                className='mb-md-5 mb-4 cms-pages-style'
                controlId='description'
              >
                <Info name={'Price'} desc={'Enter Token Current Price '} />
                <Form.Control
                  type='number'
                  name='tokenPrice'
                  value={poolMeta.tokenPrice}
                  placeholder='Enter Price'
                  onChange={handleChange}
                  isInvalid={!!errors.tokenPrice}
                />
                <ErrorLabels props={errors.tokenPrice} />
              </Form.Group>
              <Form.Group
                className='mb-5 cms-pages-style'
                controlId='description'
              >
                <Info name={'Market Cap'} desc={'Enter Token Market Cap '} />
                <Form.Control
                  type='number'
                  name='marketCap'
                  value={poolMeta.marketCap}
                  placeholder='Enter MarketCap of Token'
                  onChange={handleChange}
                  isInvalid={!!errors.marketCap}
                />
                <p className='text-secondary mt-1 mb-0'>
                  Current Balance :{poolBalance} {poolName}{' '}
                </p>
                <ErrorLabels props={errors.marketCap} />
              </Form.Group>
            </div>
            <div className='col-md-6'>
              <Form.Group
                className='mb-md-5 mb-4 cms-pages-style'
                controlId='TotalBiddingToken'
              >
                <Info name={'Total Supply'} desc={'Token Total Supply'} />
                <Form.Control
                  type='number'
                  className='text-secondary'
                  disabled={true}
                  value={poolMeta.totalSupply}
                  placeholder='Token Total Supply'
                  isInvalid={!!errors.totalSupply}
                />
                <ErrorLabels props={errors.totalSupply} />
              </Form.Group>
            </div>
          </Row>
          {/*-------------- Date--------------- */}
          <div className='heading'>
            <h3 className='text-white  mt-4'>Date</h3>
          </div>
          <hr className='text-white mb-5'></hr>

          <Row>
            <div className='col-md-6 mb-md-0 mb-3'>
              <Form.Group
                className='mb-md-5 mb-4 d-flex flex-column'
                controlId='poolStartDate11'
              >
                <Info
                  name={'Listing Date'}
                  desc={'Enter Date When IDO will Open'}
                />

                <Flatpickr
                  data-enable-time
                  name='poolStartDate'
                  defaultdate={sDate}
                  onChange={e => {
                    handleStartDate(e)
                  }}
                  isInvalid={!!errors.poolStartDate}
                />

                {errors.poolStartDate !== '' ? (
                  <p className='text-danger'>{errors.poolStartDate}</p>
                ) : (
                  <></>
                )}
              </Form.Group>
             
            </div>
            <div className='col-md-6 mb-md-0 mb-3'>
              <Form.Group
                className='mb-md-5 mb-4 d-flex flex-column'
                controlId='poolEndDate'
              >
                <Info name={'IDO end Date'} desc={'Enter when IDO will End'} />
                <Flatpickr
                  data-enable-time
                  name='poolEndDate'
                  defaultdate={eDate}
                  isInvalid={!!errors.poolEndDate}
                  onChange={e => {
                    handleEndDate(e)
                  }}
                />

                {errors.poolEndDate !== '' ? (
                  <p className='text-danger'>{errors.poolEndDate}</p>
                ) : (
                  <></>
                )}
              </Form.Group>
            </div>
            <div className='col-md-6 mb-md-0 mb-3'>
              <FormGroup
                className='mb-md-5 mb-4 d-flex flex-column'
                controlId='poolStartDate'
              >
                <Info
                  name={'Is KYC Enables'}
                  desc={'Enter KYC enanble/disable for this IDO '}
                />
                <div className='switch'>
                  <input
                    id='switch-1'
                    type='checkbox'
                    className='switch-input'
                    checked={poolMeta.isKyc}
                    onChange={e => handleKyc(e)}
                  />
                  <label htmlFor='switch-1' className='switch-label'>
                    {/* Switch */}
                  </label>
                </div>
              </FormGroup>
            </div>
          </Row>
          {/*------------- Socials----------------- */}
          <div className='heading'>
            <h3 className='text-white  mt-4'>Other Details</h3>
          </div>
          <hr className='text-white mb-5'></hr>

          <Row>
            <div className='col-md-6 mb-md-0 mb-3'>
              <Form.Group className='mb-md-5 mb-4' controlId='twitter'>
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type='url'
                  value={poolMeta.twitter}
                  onChange={handleChange}
                  name='twitter'
                  placeholder='Twitter Link'
                  isInvalid={!!errors.twitter}
                />

                <ErrorLabels props={errors.twitter} />
              </Form.Group>

              <Form.Group className='mb-md-5 mb-4' controlId='medium'>
                <Form.Label>Medium</Form.Label>
                <Form.Control
                  type='url'
                  value={poolMeta.medium}
                  onChange={handleChange}
                  name='medium'
                  placeholder='Medium Link'
                  isInvalid={!!errors.medium}
                />

                <ErrorLabels props={errors.medium} />
              </Form.Group>
              <Form.Group className='mb-md-5 mb-4' controlId='formBasicEmail'>
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type='url'
                  value={poolMeta.website}
                  onChange={handleChange}
                  name='website'
                  placeholder='Website Link'
                  isInvalid={!!errors.website}
                />

                <ErrorLabels props={errors.website} />
              </Form.Group>
            </div>
            <div className='col-md-6 mb-md-0 mb-3'>
              <Form.Group className='mb-md-5 mb-4' controlId='formBasicEmail'>
                <Form.Label>Discord</Form.Label>
                <Form.Control
                  type='url'
                  value={poolMeta.discord}
                  onChange={handleChange}
                  name='discord'
                  placeholder='Discord Link'
                  isInvalid={!!errors.discord}
                />

                <ErrorLabels props={errors.discord} />
              </Form.Group>

              <Form.Group className='mb-md-5 mb-4' controlId='formBasicEmail'>
                <Form.Label>Telegram</Form.Label>
                <Form.Control
                  type='url'
                  value={poolMeta.telegram}
                  onChange={handleChange}
                  name='telegram'
                  placeholder='Telegram Link'
                  isInvalid={!!errors.telegram}
                />

                <ErrorLabels props={errors.telegram} />
              </Form.Group>
            </div>
          </Row>

          {/*------------ tokennomics---------- */}
          <div className='btn-wrapper border-0'>
            <Button
              // type='submit'
              className='light-blue-btn w-10'
              // onClick={GetHash}

              onClick={IDOSale}
            >
              Create Pool
            </Button>
          </div>
        </Form>
      </div>
      {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
      {modalShow ? (
        <Modal
          className='pool-modal '
          show={modalShow}
          backdrop='static'
          keyboard={false}
          onHide={() => setModalShow(false)}
          // size="md"

          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Create Auction
            </Modal.Title>
          </Modal.Header>

          {alert !== '' ? <Alerts message={alert} show={true} /> : <></>}
          <Modal.Body>
            {/* <div className="loader">
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div> */}
            {modalSuccess === true ? (
              <div className='text-center modal-success-status'>
                <div>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div>Pool Added Successfully</div>
                <div>
                  <Link to={`/pool:${idoTokenAdd}`}>
                    Direct To Pool Details
                  </Link>
                </div>
              </div>
            ) : (
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className={apTok1 ? 'icon' : 'icon pending'}>
                      <FontAwesomeIcon
                        icon={apTok1 ? faCheck : faExclamation}
                      />
                      {apTok1 ? (
                        ''
                      ) : (
                        <div className='loader'>
                          <div className='lds-ring'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )}
                    </div>
                    {poolBalErr === '' ? (
                      <>{'Initiating Pool'}</>
                    ) : (
                      <p className='text-danger p-2'>{poolBalErr}</p>
                    )}
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div className={apTok2 ? 'icon' : 'icon pending'}>
                      <FontAwesomeIcon
                        icon={apTok2 ? faCheck : faExclamation}
                      />
                      {apTok2 ? (
                        ''
                      ) : (
                        <div className='loader'>
                          <div className='lds-ring'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )}
                    </div>
                    {bidBalErr === '' ? (
                      <>Approve {poolName} Token</>
                    ) : (
                      <p className='text-danger p-2'>{bidBalErr}</p>
                    )}
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <div className={apPool ? 'icon' : 'icon pending'}>
                      <FontAwesomeIcon
                        icon={apPool ? faCheck : faExclamation}
                      />
                      {apPool ? (
                        ''
                      ) : (
                        <div className='loader'>
                          <div className='lds-ring'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )}
                    </div>
                    Tokens Transfer
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    <div className={depositStatus ? 'icon' : 'icon pending'}>
                      <FontAwesomeIcon
                        icon={depositStatus ? faCheck : faExclamation}
                      />
                      {depositStatus ? (
                        ''
                      ) : (
                        <div className='loader'>
                          <div className='lds-ring'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )}
                    </div>
                    Saving Pool To Blockchain
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            )}
          </Modal.Body>
          <Modal.Footer className='text-center'>
            <Button
              variant='primary'
              onClick={() => {
                setModalShow(false)
              }}
            >
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ''
      )}
    </>
  )
}

export default Createpool
