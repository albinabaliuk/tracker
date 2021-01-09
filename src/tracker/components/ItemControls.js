import React  from 'react'
import Button from '../../shared/components/Button'

const ItemControls = (props) => {
  const {
    activity,
    onStop,
    onStart
  } = props

  return activity.isActive
    ? (
      <Button
        customColor='#f44336'
        onClick={onStop}
      >
        Stop
      </Button>
    )
    : (
      <Button
        onClick={onStart}
      >
        Start
      </Button>
    )
}

export default ItemControls