import React, { useEffect } from 'react'
import { createClient } from 'urql'
function Display () {
  useEffect(async () => {
    const APIURL = 'https://api.studio.thegraph.com/query/17020/ido/v1.1.31'

    const tokensQuery = `
      query {

        poolData(id:1)
        {
          id
          poolId
          _poolingToken
          _biddingToken
          _minBuyAmount
          _pooledSellAmount
          minimumBiddingAmountPerOrder
          userId
          orderCancellationEndDate
          
        }
        poolReq2(id:1)
        {
          poolId
          tittl
          swapRate
          hardCap
          accessType
          description
          
        }
        poolDetail(id:1){
         social 
        }
        
        
      }
      
    `

    const client = createClient({
      url: APIURL
    })

    const data = await client.query(tokensQuery).toPromise()
    console.log(data.data)
  }, [])

  return <div></div>
}

export default Display
