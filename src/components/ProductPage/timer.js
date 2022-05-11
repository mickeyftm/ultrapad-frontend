import React, { useState } from 'react'
import Clock from './clock'

const CountdownMonths = ({ poolStartDate, callbackTime }) => {


  const [deadline] = useState(poolStartDate)
  console.log('deadline', deadline)
  
  return (
    <div>
      <Clock deadline={deadline} />
    </div>
  )
}
export default CountdownMonths
