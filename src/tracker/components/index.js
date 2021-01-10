import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../shared/components/Button'
import ItemControls from '../containers/ItemControls'
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  grid-template-columns: 300px auto auto 80px;
  grid-column-gap: 10px;
  padding: 0 30px;
  margin-top: 10px;
  justify-self: center;
`

const Tracker = props => {
  const [inputValue, updateInputValue] = useState('')

  const onInputChange = (e) => {
    updateInputValue(e.target.value)
  }

  const addActivity = () => {
    if(!inputValue) {
      alert('Enter some activity!')
      return
    }

    props.addActivity(inputValue)
    updateInputValue('')
  }

  const onKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addActivity()
    }
  }

  const onAddClick = () => {
    addActivity()
  }

  const isActivitiesEmpty = props.activities.length === 0

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
          onClick={onAddClick}
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
            props.activities.map((activity, index) => (
              <TimingBar key={index}>
                <ItemTitle>
                  {activity.title}
                </ItemTitle>

                <DateRange activity={activity}/>

                <Timer isActive={activity.isActive}/>

                <ItemControls
                  isActivityActive={activity.isActive}
                  index={index}
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