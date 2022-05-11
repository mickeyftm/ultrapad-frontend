import React, { useCallback, useState, useEffect } from 'react'
import './landing.css'

import axios from 'axios'
import { Nav, Tab } from 'react-bootstrap'
import { createClient } from 'urql'
import IdoCards from './IdoCards'
import useFetchIdoCounts from '../../CustomHooks/FetchIdoCounts'

// import useFetchGraph from '../../CustomHooks/FetchGraph'
import LoaderCardSkeleton from './loaderCardSkeleton'
// import { ethers } from 'ethers'
const MultiChainCards = () => {
  //Custom hook for fetching data from subgraph
  const API_URL = process.env.REACT_APP_SUBGRAPH_API_LATEST_BSC

  const [itemPerPage, setItemPerPage] = useState(0)
  const [time] = useState({})
  const [poolStatus, setPoolStatus] = useState('')

  const [totalIdo] = useFetchIdoCounts()

  const [idoInfo, setIdoInfo] = useState([])
  const timeConverter = useCallback(UNIX_timestamp => {
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
    // var sec = a.getSeconds()

    var time1 = date + ' ' + month + ' ' + year
    time.month = month
    time.hour = hour
    time.min = min
    time.date = date
    // console.log('time', time)
    return time1
  },[time])

  const ParseData = async arg => {
    const url = await axios.get(`https://ipfs.io/ipfs/${arg}`)
    return url.config.url
  }
  const GetRemainDays = async arg => {
    var unix = await Math.round(+new Date() / 1000)
    var date1 = unix
    var date2 = arg

    // To calculate the time difference of two dates
    var Difference_In_Time = date2 - date1
    var remainHour = {}
    var days = Math.floor(Difference_In_Time / 86400)
    var hours = Math.floor(days / 60)
    if (days < 0) {
      remainHour.day = 0
      remainHour.hours = 0
    } else {
      remainHour.day = days
      remainHour.hours = hours
    }
    return remainHour
  }

  const GetTotalStakeAmout = async (token, raised) => {
    // const tokenAdd = token.toUpperCase()
    console.log('token address', token)

    let perc = Math.floor(Math.random() * 100)
    return perc
    //  Get total purchase Amount per User

    // const contract = await CustomRpcProvider(token, IdoAbi)
    // console.log('token', contract)
    // const total = await contract.owner()
    // console.log('total', total)

    // console.log('token address', contract)
    // const BidToken = (await contract.totalPurchasedAmount()).toString()
    // console.log('total purchase', BidToken)

    // const totalBidding = parseInt(await contract.totalPurchasedAmount())
    // console.log('token address', totalBidding)

    //   const newPurchaseAmount =
    //     purchasedAmouPerUser / parseInt(decimalConvert)

    //   setBidPerUser(newPurchaseAmount)
    // }

    // console.log('total Bidding Amount')

    // const divWithDecimals = totalBidding / decimalConvert
    // // const result = exponentialToDecimal(divWithDecimals)

    // setTotAucStake(divWithDecimals)

    // const divTotalBid = totalBidding / decimalConvert
    // const perc = ((divTotalBid / totalSupply) * 100).toFixed(2)
    // setPercent(perc)
    // return perc
    //  Get total purchase Amount per User
  }

  const FetchDataSetter = useCallback(
    idoData => {
      async function FetchHelper (idoData) {
        let dummyArr = []
        // Data Parsing and Conversion appear here

        for (let i = 0; i < idoData.length; i++) {
          const {
            poolId,
            totalRaised,
            poolingToken,
            startDate,
            endDate,

            price,
            idoName,
            logoHash,
            socials,
            poolMeta
          } = idoData[i]
          await Math.round(+new Date() / 1000)
          const timinStart = timeConverter(startDate)
          const timinEnd = timeConverter(endDate)
          // console.log(totalRaised.toString().length)

          const remainHour = await GetRemainDays(endDate)
          var hashData
          if (logoHash === '') {
            hashData = await ParseData(
              'QmanLUKX8zzq9cNFYMDKTExp1ARfLmpS3mWyAyC2PGpCXa'
            )
          } else {
            hashData = await ParseData(logoHash)
          }

          var newTotalRaised =
            parseInt(totalRaised) / parseInt(Math.pow(10, poolMeta.decimal))
          var newPrice =
            parseInt(price) / parseInt(Math.pow(10, poolMeta.decimal))

          const percentFilled = await GetTotalStakeAmout(
            poolingToken,
            newTotalRaised
          )

          let dummyObj = {
            poolId: poolId,
            totalRaised: newTotalRaised.toFixed(2),
            idoAddress: poolingToken,
            startDate: timinStart,
            endDate: timinEnd,
            price: newPrice,
            idoName: idoName,
            logoHash: hashData,
            socials: socials,
            remainingHours: remainHour,
            salePercent: percentFilled
          }
          dummyArr.push(dummyObj)
        }

        var arr = idoInfo
        arr.push(...dummyArr)
        setIdoInfo(arr)
      }

      FetchHelper(idoData)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timeConverter, idoInfo]
  )

  const fetchLiveIdo = async () => {
    var timestamp = await Math.round(+new Date() / 1000)

    const tokensQuery = `{
      
      poolInfos(orderBy:poolId orderDirection:asc, first:4 skip:${itemPerPage} where:{startDate_lt: ${timestamp},  endDate_gt:${timestamp}  } ){
      poolingToken
      
      poolId
      totalRaised
      startDate
      endDate
      price
      
      idoName
      logoHash
      infoHash
      isEnable
      idoName
      socials{
        poolId
        social
      }
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

    // console.log('Upcoming Pools', data2.data)
    // console.log('data here', data2.data)
    if (data2.data !== null || data2.data !== undefined) {
      FetchDataSetter(data2.data.poolInfos)

      // setIdoInfo(data2.data.poolInfos)
    }
  }
  useEffect(() => {
    fetchUpcomingIdo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchUpcomingIdo = async () => {
    console.log('flag value', idoInfo, itemPerPage)

    var timestamp = await Math.round(+new Date() / 1000)

    const tokensQuery = `{
     poolInfos(orderBy:poolId orderDirection:asc, first:4 skip:${itemPerPage} where:{startDate_gt: ${timestamp},  endDate_gt:${timestamp}  } ){
        poolingToken
        poolId
        totalRaised
        startDate
        endDate
        price

        idoName
        logoHash
        infoHash
        isEnable
        idoName
        socials{
          poolId
         social
        
      }
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

    // console.log('Upcoming Pools', data2.data)
    console.log(data2.data)
    if (data2.data !== null || data2.data !== undefined) {
      FetchDataSetter(data2.data.poolInfos)

      // setIdoInfo(data2.data.poolInfos)
    }
  }
  const fetchEndedIdo = async () => {
    var timestamp = await Math.round(+new Date() / 1000)
    console.log('itemPerPage', itemPerPage)
    const tokensQuery = `{
    poolInfos (orderBy:poolId orderDirection:asc, first:4 skip:${itemPerPage} ,  where:{startDate_lt: ${timestamp},  endDate_lt:${timestamp}  } ) {
      poolingToken
      poolId
      totalRaised
      startDate
      endDate
      price
      poolingToken
      idoName
      logoHash
      infoHash
      isEnable
      idoName
      socials{
        poolId
        social
        
      }
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

    // console.log(data2.data)
    if (data2.data !== null || data2.data !== undefined) {
      FetchDataSetter(data2.data.poolInfos)
    }
  }
  const handleLoadMore = () => {
    if (poolStatus === 'live') {
      console.log('handle status', poolStatus)
      setItemPerPage(itemPerPage + 4)
      fetchLiveIdo()
    } else if (poolStatus === 'upcoming') {
      console.log('handle status', poolStatus)

      setItemPerPage(itemPerPage + 4)
      fetchUpcomingIdo()
    } else if (poolStatus === 'ended') {
      console.log('handle status', poolStatus)
      setItemPerPage(itemPerPage + 4)
      fetchEndedIdo()
    }
  }

  const handleUpcoming = () => {
    setIdoInfo([])
    setPoolStatus('upcoming')
    idoInfo.length = 0

    setItemPerPage(0)
    fetchUpcomingIdo()
  }
  const handleLive = () => {
    setPoolStatus('live')
    setIdoInfo([])
    idoInfo.length = 0

    setItemPerPage(0)
    fetchLiveIdo()
  }
  const handleEnded = () => {
    setPoolStatus('ended')
    setIdoInfo([])
    idoInfo.length = 0

    setItemPerPage(0)
    fetchEndedIdo()
  }

  return (
    <>
      <section className='tab-cards'>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <div className='container-fluid custom-block'>
            <Nav variant='pills'>
              <Nav.Item>
                <Nav.Link
                  name='first'
                  eventKey='first'
                  onClick={handleUpcoming}
                >
                  Upcoming ({totalIdo.upcoming})
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link name='second' eventKey='second' onClick={handleLive}>
                  Live({totalIdo.live})
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link name='third' eventKey='third' onClick={handleEnded}>
                  Ended ({totalIdo.ended})
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <>
                <Tab.Pane eventKey='first'>
                  {totalIdo.upcoming > 0 && idoInfo.length <= 0 ? (
                    <>
                      <LoaderCardSkeleton />
                    </>
                  ) : totalIdo.upcoming > 0 ? (
                    <>
                      <IdoCards idoArr={idoInfo} />
                      {totalIdo.upcoming <= itemPerPage ? (
                        <></>
                      ) : (
                        <div className='d-flex justify-content-center align-items-center'>
                          {' '}
                          <button
                            className='light-blue-btn'
                            onClick={handleLoadMore}
                          >
                            Load More
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='text-white d-flex justify-content-center align-items-center'>
                      <h4>No Upcoming IDO's</h4>
                    </div>
                  )}
                </Tab.Pane>

                <Tab.Pane eventKey='second'>
                  {totalIdo.live > 0 && idoInfo.length <= 0 ? (
                    <>
                      <LoaderCardSkeleton />
                    </>
                  ) : totalIdo.live > 0 && idoInfo.length > 0 ? (
                    <>
                      <IdoCards idoArr={idoInfo} />

                      {totalIdo.live <= itemPerPage ? (
                        <></>
                      ) : (
                        <div className='d-flex justify-content-center align-items-center'>
                          {' '}
                          <button
                            className='light-blue-btn'
                            onClick={handleLoadMore}
                          >
                            Load More
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='text-white d-flex justify-content-center align-items-center'>
                      <h4>No Upcoming IDO's</h4>
                    </div>
                  )}
                </Tab.Pane>

                <Tab.Pane eventKey='third'>
                  {totalIdo.ended > 0 && idoInfo.length <= 0 ? (
                    <>
                      {' '}
                      <LoaderCardSkeleton />
                    </>
                  ) : totalIdo.ended > 0 ? (
                    <>
                      <IdoCards idoArr={idoInfo} />
                      {totalIdo.ended <= itemPerPage ? (
                        <></>
                      ) : (
                        <div className='d-flex justify-content-center align-items-center'>
                          {' '}
                          <button
                            className='light-blue-btn'
                            onClick={handleLoadMore}
                          >
                            Load More
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='text-white d-flex justify-content-center align-items-center'>
                      <h4>No Upcoming IDO's</h4>
                    </div>
                  )}
                </Tab.Pane>
              </>
            </Tab.Content>
          </div>
        </Tab.Container>
      </section>
    </>
  )
}

export default MultiChainCards
