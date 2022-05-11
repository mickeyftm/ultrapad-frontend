import React,{useEffect,useState} from 'react';
import { createClient } from 'urql'
function useFetchGraph() {
  
  const [dataG,setDataG]=useState({});
    useEffect(async () => {
        const APIURL = 'https://api.studio.thegraph.com/query/17020/ido/v1.1.31'
        const count=3;
        const tokensQuery = `
          query {
    
            poolData(id:${count})
            {
              id
              poolId
              _poolingToken
              _biddingToken
              _minBuyAmount
              _pooledSellAmount
              poolStartDate
              poolEndDate
              minimumBiddingAmountPerOrder
              userId
              orderCancellationEndDate
              
            }
            poolReq2(id:${count})
            {
              poolId
              tittl
              swapRate
              hardCap
              accessType
              description
              
            }
            poolDetail(id:${count}){
             social 
            }
            
            
          }
                 `
            const client = createClient({
          url: APIURL
        })
    
        const data = await client.query(tokensQuery).toPromise()
        const date=
        console.log("hello g",data.data)
        
        setDataG(data.data);
    
  
  }, [])
    return [dataG];
}
export default useFetchGraph;
