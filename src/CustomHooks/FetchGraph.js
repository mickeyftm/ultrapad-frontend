import { useEffect, useState, useCallback } from 'react'
import { createClient } from 'urql'
// import data from '../utils/api'
// import { ethers } from 'ethers'
import axios from 'axios'
function useFetchGraph () {
  const [dummyPool, setDummyPool] = useState([])
  const [time] = useState({})
  const API_URL = process.env.REACT_APP_SUBGRAPH_API_LATEST_BSC

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
      // var sec = a.getSeconds()

      var time1 = date + ' ' + month + ' ' + year
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
    const url = await axios.get(`https://ipfs.io/ipfs/${arg}`)
    return url.config.url
  }
  // const addDefaultImg = ev => {
  //   ev.target.src =
  //     'https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851'
  // }
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
      remainHour.hours = 0
    } else {
      remainHour.day = days
      remainHour.hours = hours
    }
    return remainHour
  }
  const FetchDataSetter = useCallback(
    async idoData => {
      let dummyArr = []
      // Data Parsing and Conversion appear here

      for (let i = 0; i < idoData.length; i++) {
        const {
          poolId,
          totalRaised,
          startDate,
          endDate,
          price,
          idoName,
          logoHash,
          socials
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
        var newtotalRaised

        if (totalRaised.length > 5) {
          newtotalRaised = `10${'^'}${totalRaised.toString().length}`
        } else {
          newtotalRaised = totalRaised
        }

        let dummyObj = {
          poolId: poolId,
          totalRaised: newtotalRaised,
          startDate: timinStart,
          endDate: timinEnd,
          price: price,
          idoName: idoName,
          logoHash: hashData,
          socials: socials,
          remainingHours: remainHour
        }
        dummyArr.push(dummyObj)
      }
      setDummyPool(dummyArr)
    },
    [timeConverter]
  )

  const fetchGraphData = useCallback(async () => {
    var timestamp = await Math.round(+new Date() / 1000)

    const tokensQuery = `query{
      poolInfos(where:{startDate_gt: ${timestamp},  endDate_gt:${timestamp} } ){
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
            decimal
            network
          }
     }
       
     }`
    const client2 = createClient({
      url: API_URL
    })

    const data2 = await client2.query(tokensQuery).toPromise()

    // console.log(' All graph data  ---', data2)

    if (data2.data !== null || data2.data !== undefined) {
      FetchDataSetter(data2.data.poolInfos)
    }
    // setDataG()
  }, [API_URL, FetchDataSetter])

  useEffect(() => {
    fetchGraphData()
  }, [fetchGraphData])
  return [dummyPool]
}
export default useFetchGraph
