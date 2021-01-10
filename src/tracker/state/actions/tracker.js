import * as ActionTypes from './types'

export const addActivity = (title) => ({
  type: ActionTypes.ADD_TRACKING_ACTIVITY,
  payload: {
    title
  }
})

export const startActivity = (index) => ({
  type: ActionTypes.START_TRACKING_ACTIVITY,
  payload: {
    index
  }
})

export const endActivity = (index) => ({
  type: ActionTypes.END_TRACKING_ACTIVITY,
  payload: {
    index
  }
})