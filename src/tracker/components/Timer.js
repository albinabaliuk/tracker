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
    console.log(this.state.timing + 1)
    this.setState({
      ...this.state,
      timing: this.state.timing + 1
    })
  }

  render = () => {
    const {
      isActive
    } = this.props
    console.log(isActive)
    // setTimeout(this.incrementTiming, 1000)
    // if(isActive) {
    //   this.timeout = setTimeout(this.incrementTiming, 1000)
    // }
    //
    // if(!isActive && this.timeout) {
    //   clearTimeout(this.timeout)
    //   this.timeout = null
    // }

    return (
      <Wrapper>
        {this.state.timing}
      </Wrapper>
    )
  }
}

export default Timer