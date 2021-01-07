import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as TimeTrackerIcon } from '../../shared/assets/icons/time-tracker.svg'
import { ReactComponent as ReportsIcon } from '../../shared/assets/icons/reports.svg'
import { ReactComponent as DashboardIcon } from '../../shared/assets/icons/dashboard.svg'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, .2);
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  grid-column-gap: 10px;
  
  cursor: pointer;
  text-decoration: none;
  
  padding: 10px;
  transition: all .3s ease;
`

const Title = styled.div`
  line-height: 20px;
  vertical-align: middle;
`

const Icon = styled.div``

const NavMenu = () => {
  return (
    <Main>
      <NavLink
        to='/tracker'
        activeClassName='activeNavItem'
      >
        <Item>
          <Icon>
            <TimeTrackerIcon />
          </Icon>

          <Title>Tracker</Title>
        </Item>
      </NavLink>

      <NavLink
        to='/dashboard'
        activeClassName='activeNavItem'
      >
        <Item>
          <Icon>
            <DashboardIcon />
          </Icon>

          <Title>Dashboard</Title>
        </Item>
      </NavLink>

      <NavLink
        to='/reports'
        activeClassName='activeNavItem'
      >
        <Item>
          <Icon>
            <ReportsIcon />
          </Icon>

          <Title>Reports</Title>
        </Item>
      </NavLink>
    </Main>
  )
}

export default NavMenu