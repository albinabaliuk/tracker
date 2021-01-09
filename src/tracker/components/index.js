import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../shared/components/Button'
import ItemControls from './ItemControls'
import DateRange from './DateRange'
import Timer from './Timer'

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
  align-items: center;
`

const AddNewProject = styled.div`
  width: 90%;
  height: 80px;
  border: #b8b8b8 solid .7px;
  margin-top: 200px;
  border-radius: 5px;
  background-color: white;
  align-items: center;
  padding: 0px 30px;

  display: grid;
  grid-template-columns: auto 80px;
  grid-column-gap: 20px;
`

const InputArea = styled.input`
  outline: none !important;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: #989797 .5px solid;
  padding: 0px 20px;
`

const ItemTitle = styled.div`
  
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
  grid-template-columns: auto auto auto 80px;
  grid-column-gap: 10px;
  padding: 0 30px;
`

const Tracker = () => {
  const [activities, updateActivities] = useState([])
  const [inputValue, updateInputValue] = useState('')


  const onStart = (index) => () => {
    const newActivities = [...activities]

    newActivities[index].isActive = true

    if(!newActivities[index].startDate) {
      newActivities[index].startDate = Date.now()
    }

    updateActivities(newActivities)
  }

  const onStop = (index) => () => {
    const newActivities = [...activities]

    newActivities[index].isActive = false
    newActivities[index].endDate = Date.now()

    updateActivities(newActivities)
  }

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
        <Button
          onClick={addActivity}
          customColor='#000000'
        >
          Add
        </Button>

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
                <ItemTitle>
                  {activity.title}
                </ItemTitle>

                <DateRange activity={activity}/>

                <Timer isActive={activity.isActive}/>

                <ItemControls
                  activity={activity}
                  onStart={onStart(index)}
                  onStop={onStop(index)}
                />

              </TimingBar>
            ))
          )
      }
      </Wrapper>
    </Main>
  )
}

export default Tracker