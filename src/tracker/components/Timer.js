import React, { Component }  from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'

const Wrapper = styled.div`
`


class Timer extends Component {
  state = {
    timing: 0
  }

  incrementTiming = () => {
    this.setState({
      ...this.state,
      timing: this.state.timing + 1
    })
  }

  formatDigit = (digit) => {
    return digit < 10 ? `0${digit}` : digit
  }

  formatTiming = () => {
    let timing = this.state.timing

    const hours = Math.floor(timing / 3600)

    if(hours > 0) {
      timing -= hours * 3600
    }

    const minutes = Math.floor(timing / 60)

    if(minutes > 0) {
      timing -= minutes * 60
    }

    const seconds = timing

    return `${this.formatDigit(hours)}:${this.formatDigit(minutes)}:${this.formatDigit(seconds)}`
  }

  render = () => {
    const {
      isActive
    } = this.props

    if(isActive && !this.interval) {
      this.interval = setInterval(this.incrementTiming, 1000)
    }

    if(!isActive && this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }

    return (
      <Wrapper>
        {this.formatTiming()}
      </Wrapper>
    )
  }
}

export default Timer