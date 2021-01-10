import * as ActionTypes from '../actions/types'

const initialState = {
  activities: []
}

const tracker = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TRACKING_ACTIVITY: {
      const newActivity = {
        title: action.payload.title,
        startDate: null,
        endDate: null,
        isActive: false
      }

      return {
        ...state,
        activities: [...state.activities, newActivity]
      }
    }

    case ActionTypes.START_TRACKING_ACTIVITY: {
      const index = action.payload.index
      const newActivities = [...state.activities]

      newActivities[index].isActive = true

      if(!newActivities[index].startDate) {
        newActivities[index].startDate = Date.now()
      }


      return {
        ...state,
        activities: newActivities
      }
    }

    case ActionTypes.END_TRACKING_ACTIVITY: {
      const index = action.payload.index
      const newActivities = [...state.activities]

      newActivities[index].isActive = false

      newActivities[index].endDate = Date.now()


      return {
        ...state,
        activities: newActivities
      }
    }

    default: {
      return state
    }
  }
}

export default tracker