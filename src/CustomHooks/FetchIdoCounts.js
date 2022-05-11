import { useState, useEffect, useCallback } from 'react'
import { createClient } from 'urql'
function useFetchIdoCounts () {
  const API_URL = process.env.REACT_APP_SUBGRAPH_API_LATEST_BSC

  const [totalIdo, setTotalIdo] = useState({
    live: 0,
    upcoming: 0,
    ended: 0
  })
  const stateSetter = useCallback(
    (end, live, upcom) => {
      setTotalIdo({
        ...totalIdo,
        ended: end,
        upcoming: upcom,
        live: live
      })
    },
    [totalIdo]
  )
  const FetchCounts = useCallback(() => {
    async function EffectSolver () {
      var timestamp = await Math.round(+new Date() / 1000)
      console.log('fetchCounts')
      const Ended = `query{
          poolInfos (where:{startDate_lt: ${timestamp},  endDate_lt:${timestamp}  } ) {
              poolId        
              }   
          }`

      const Upcoming = `query{
            poolInfos(where:{startDate_gt: ${timestamp},  endDate_gt:${timestamp} } ) {
                poolId        
                }
              
           
            }`
      const Live = `query{
              poolInfos(where:{startDate_lt: ${timestamp},  endDate_gt:${timestamp}   } ) {
                  poolId        
                  }              
             
              }`

      const client2 = createClient({
        url: API_URL
      })

      const end = await client2.query(Ended).toPromise()

      console.log('ended ', end.data.poolInfos.length)

      const upcom = await client2.query(Upcoming).toPromise()
      console.log('upcom', upcom.data.poolInfos.length)

      const live = await client2.query(Live).toPromise()
      console.log('live ', live.data.poolInfos.length)

      stateSetter(
        end.data.poolInfos.length,
        live.data.poolInfos.length,
        upcom.data.poolInfos.length
      )
      console.log('i am in fetch Counts')
    }
    EffectSolver()
  }, [API_URL, stateSetter])
  useEffect(() => {
    FetchCounts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [totalIdo]
}

export default useFetchIdoCounts
