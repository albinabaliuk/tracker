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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const AddNewProject = styled.div`
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
  grid-column-gap: 4%;
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
  width: 90%;
  height: 40px;
  border: #b8b8b8 solid .7px;
  border-radius: 5px;
  background-color: white;
  align-items: center;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 10%;
`

const StartButton = styled.button`
  background-color: deepskyblue;
  border: gray 1px solid;
  width: 50%;
  height: 30px;
  border-radius: 5px;
  color: white;
  margin-left: 20px;
  cursor: pointer;
  outline: none;
  transition: all .3s ease;

  &:hover {
    background-color: #70a0b1;
  }
`

const Tracker = () => {
  const [activities, updateActivities] = useState([])
  const [inputValue, updateInputValue] = useState('')


  const onInputChange = (e) => {
    updateInputValue(e.target.value)
  }

  const addActivity = () => {
    if (!inputValue) {
      alert("Please enter an activity");
      return false;
    }

    const newActivity = {
      title: inputValue,
      startDate: null,
      endDate: null,
      isActive: false
    }

    updateActivities([ ...activities, newActivity ])

    updateInputValue('')
  }

  const onKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addActivity()
    }
  }

  const isActivitiesEmpty = activities.length === 0

  return (
    <Main>

      <Wrapper>
      <AddNewProject>
        <InputArea
          onKeyUp={onKeyUp}
          value={inputValue}
          onChange={onInputChange}
        />
        <StartButton
          onClick={addActivity}
        >
          Start
        </StartButton>

      </AddNewProject>

      {
        isActivitiesEmpty
          ? (
            <EmptyTitle>
              No activities created, please create new one to start working with it
            </EmptyTitle>
          )
          : (
            activities.map((activity, index) => (
              <TimingBar key={index}>
                <div>
                  {activity.title}
                </div>
              </TimingBar>
            ))
          )
      }
      </Wrapper>
    </Main>
  )
}

export default Tracker