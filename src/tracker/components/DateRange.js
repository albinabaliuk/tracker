import React  from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const DateElement = styled.div`
  
`

const Dash = styled.div`
  &::after {
    content: '-';
    margin: 0 10px;
  }
`

const getDate = (timestamp) => {
  return timestamp
    ? DateTime
      .fromMillis(timestamp)
      .toLocaleString(DateTime.TIME_WITH_SECONDS)
    : '00:00:00'
}

const DateRange = (props) => {
  const {
    activity
  } = props

  const startDate = getDate(activity.startDate)
  const endDate = getDate(activity.endDate)

  return (
    <Wrapper>
      <DateElement>
        {startDate}
      </DateElement>

      <Dash />

      <DateElement>
        {endDate}
      </DateElement>
    </Wrapper>
  )

}

export default DateRange