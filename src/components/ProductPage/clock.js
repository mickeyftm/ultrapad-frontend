import React, { useEffect, useState } from 'react'
function Clock (props) {
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date())
    if (time < 0) {
      setState({ ...state, days: 0, hours: 0, minutes: 0, seconds: 0 })
    } else {
      const seconds = Math.floor((time / 1000) % 60)
      const minutes = Math.floor((time / 1000 / 60) % 60)

      const hours = (Math.floor(time / (1000 * 60 * 60)) % 24) - 5
      const days = Math.floor(time / (1000 * 60 * 60 * 24))
      setState({
        ...state,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
    }
  }

  getTimeUntil(props.deadline)
  useEffect(() => {
    

    const time = setInterval(() => getTimeUntil(props.deadline), 1000)
    return () => {
      getTimeUntil(props.deadline)
      clearInterval(time)
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const leading0 = num => {
    return num < 10 ? '0' + num : num
  }

 
  return (
    <div>
      <div id='clockdiv' className='py-2'>
        <div>
          <span class='days'>{leading0(state.days)}</span>
          <div class='smalltext'>Days</div>
        </div>
        <div>
          <span class='hours'> {leading0(state.hours)}</span>
          <div class='smalltext'>Hours</div>
        </div>
        <div>
          <span class='minutes'> {leading0(state.minutes)}</span>
          <div class='smalltext'>Minutes</div>
        </div>
        <div>
          <span class='seconds'>{leading0(state.seconds)}</span>
          <div class='smalltext'>Seconds</div>
        </div>
      </div>
    </div>
  )
}
export default Clock
