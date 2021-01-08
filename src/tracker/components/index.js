import React, { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as AddProjectIcon } from '../../shared/assets/icons/plus-blue.svg'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f2f6f8;
`

const AddNewProject = styled.div`
  position: relative;
  width: 90%;
  height: 80px;
  border: #b8b8b8 solid .7px;
  margin-top: -300px;
  border-radius: 5px;
  background-color: white;
  align-items: center;
  padding: 0px 30px;

  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 10%;
`

const InputArea = styled.input`
  outline: none !important;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: #989797 .5px solid;
  padding: 0px 20px;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  cursor: pointer;
  grid-column-gap: 5%;

  color: #6abae5;
`

const Icon = styled.div`
  cursor: pointer;
`

const EmptyTitle = styled.div`
  
`

const TimingBar = styled.div`
  position: absolute;
  margin-top: 120px;
  width: 100%;
  height: 40px;
  border: #b8b8b8 solid .7px;
  border-radius: 5px;
  background-color: white;
  align-items: center;
`

const StartButton = styled.button`
`

const Tracker = () => {
  const [activities, updateActivities] = useState([])

  //TODO don't add any activity if input is empty
  //TODO clear input after adding an activity
  //TODO focus on input after adding an activity
  const addActivity = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const activityTitle = e.target.value

      const newActivity = {
        title: activityTitle
      }

      updateActivities([ ...activities, newActivity ])
    }
  }

  const isActivitiesEmpty = activities.length === 0

  return (
    <Main>
      <AddNewProject>
        <InputArea
          onKeyUp={addActivity}
        />

       <Item>
         Project
        <Icon>
          <AddProjectIcon />
        </Icon>
       </Item>
      </AddNewProject>

      {
        isActivitiesEmpty
          ? (
            <EmptyTitle>
              No activities created, please create new one to start working with it
            </EmptyTitle>
          )
          : (
            activities.map(activity => (
              <div>
                {activity.title}

                <StartButton>
                  Start
                </StartButton>
              </div>
            ))
          )
      }
    </Main>
  )
}

export default Tracker