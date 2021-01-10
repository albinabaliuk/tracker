import React  from 'react'
import Button from '../../shared/components/Button'

const ItemControls = (props) => {
  const {
    isActivityActive,
    index,
    endActivity,
    startActivity
  } = props

  return isActivityActive
    ? (
      <Button
        customColor='#f44336'
        onClick={endActivity(index)}
      >
        Stop
      </Button>
    )
    : (
      <Button
        onClick={startActivity(index)}
      >
        Start
      </Button>
    )
}

export default ItemControls