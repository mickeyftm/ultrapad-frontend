import React, { useState, useEffect } from 'react'
import moment from 'moment'

const IDOClock = props => {
  const { date1 } = props

  const [endDate, setEndDate] = useState({})
  const HandleCountDown = () => {
    console.log('date1', moment(date1))
    var startTime = moment(date1)
    var endTime = moment().format('MMMM Do YYYY, h:mm:ss a')

    console.log('time start', startTime)

    console.log('time end', endTime)
    const timeDuration = moment.duration(startTime.diff(endTime))
    console.log('time duration', timeDuration)
    setEndDate({
      years: timeDuration.years() >= 0 ? timeDuration.years() : 0,
      months: timeDuration.months() >= 0 ? timeDuration.months() : 0,
      days: timeDuration.days() >= 0 ? timeDuration.days() : 0,
      hours: timeDuration.hours() >= 0 ? timeDuration.hours() : 0,
      minuts: timeDuration.minutes() >= 0 ? timeDuration.minutes() : 0,
      seconds: timeDuration.seconds() >= 0 ? timeDuration.seconds() : 0
    })
  }
  useEffect(() => {
    const timeInterval = setInterval(() => {
      HandleCountDown()
    }, 1000)
    return () => clearInterval(timeInterval)
  })
  return (
    <>
      <div id='clockdiv' className='py-2'>
        {endDate.years === 0 &&
        endDate.months === 0 &&
        endDate.days === 0 &&
        endDate.hours === 0 &&
        endDate.minuts === 0 &&
        endDate.seconds === 0 ? (
          <>
            <p className='font-weight-normal remaingin-balance m-0 font-size-sm text-danger text-center mt-1'>
              Deadline Passed
            </p>
          </>
        ) : (
          (endDate.years ||
            endDate.months ||
            endDate.days ||
            endDate.hours ||
            endDate.minuts ||
            endDate.seconds) && (
            <div className='d-flex font-weight-bold font-size-md text-center justify-content-between'>
              <div className='d-flex flex-column'>
                <span className='d-color d-c-width'>
                  {endDate.days} {''} <span>D</span>
                </span>
              </div>
              {/* <span className='d-color'>:</span> */}
              <div className='d-flex flex-column'>
                <span class='hours'>
                  {' '}
                  {endDate.hours} {''} <span>H</span>
                </span>
              </div>
              {/* <span className='d-color'>:</span> */}
              <div className='d-flex flex-column'>
                <span className='d-color d-c-width'>
                  {endDate.minuts} {''} <span>M</span>
                </span>
              </div>
              {/* <span className='d-color'>:</span> */}

              <div className='d-flex flex-column'>
                <span className='d-color d-c-width'>
                  {endDate.seconds} {''} <span>S</span>
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}
export default IDOClock
