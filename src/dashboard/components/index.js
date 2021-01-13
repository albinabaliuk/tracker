import React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import randomColor from 'randomcolor'


const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const getActivityDataValue = (activity) => {
  return activity.startDate
    ? activity.endDate
      ? activity.endDate - activity.startDate
      : Date.now() - activity.startDate
    : 0
}

const formatActivities = (activities) => {
  if ( !Array.isArray(activities) || activities.length === 0) return

  const data = {
    datasets: [{
      data: [],
      backgroundColor: []
    }],
    labels: []
  }

  activities.forEach((activity) => {
    data.labels.push(activity.title)

    const dataValue = getActivityDataValue(activity)
    data.datasets[0].data.push(dataValue)

    data.datasets[0].backgroundColor.push(randomColor())
  })

  return data
}



const Dashboard = (props) => {

  const isActivitiesEmpty = !Array.isArray(props.activities) || props.activities.length === 0
  console.log(props.activities, formatActivities(props.activities))
  return (
    <Main>
      { Boolean(!isActivitiesEmpty) && <Doughnut data={formatActivities(props.activities)}/> }
    </Main>
  )
}

export default Dashboard