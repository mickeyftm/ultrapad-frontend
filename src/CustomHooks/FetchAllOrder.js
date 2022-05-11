import { useEffect, useState, useCallback } from 'react'
import { createClient } from 'urql'
function useFetchAllOrder () {
  // import data from '../utils/api'
  // import { ethers } from 'ethers'
  const [time] = useState({})
  const [AllOrders, setAllOrders] = useState({
    poolId: 0,
    idoName: '',
    poolingToken: '',
    isEnable: '',
    startDate: ''
  })
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
  const FetchDataSetter = useCallback(
    idoData => {
      async function FetchHelper (idoData) {
        let dummyArr = []
        // Data Parsing and Conversion appear here

        for (let i = 0; i < idoData.length; i++) {
          const {
            poolId,
          
            poolingToken,
            startDate,
            endDate,
          
            idoName,
         
          
            isEnable,
            poolMeta
          } = idoData[i]
          await Math.round(+new Date() / 1000)
          const timinStart = timeConverter(startDate)
          const timinEnd = timeConverter(endDate)
        
          let dummyObj = {
            poolId: poolId,
            idoName: idoName,
            poolingToken: poolingToken,
            isEnable: isEnable,
            startDate:timinStart,
            endDate:timinEnd,
            network:poolMeta.network

          }
          dummyArr.push(dummyObj)
        }
        console.log('dummy Array', dummyArr)

     
        setAllOrders(dummyArr)
      }

      FetchHelper(idoData)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timeConverter]
  )
  
  
  
  const fetchGraphData = useCallback(async () => {
    const tokensQuery = `{
      poolInfos {
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
        }
      }
      
        
      }`
    const client2 = createClient({
      url: API_URL
    })

    const data2 = await client2.query(tokensQuery).toPromise()

  
    console.log(' All graph data  ---', data2)

    if (data2.data !== null || data2.data !== undefined) {
      FetchDataSetter(data2.data.poolInfos)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_URL])

  useEffect(() => {
    fetchGraphData()
  }, [fetchGraphData])
  return [AllOrders]
}

export default useFetchAllOrder
