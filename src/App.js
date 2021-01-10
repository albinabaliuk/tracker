import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import Dashboard from './dashboard/components'
import Tracker from './tracker/containers'
import NavMenu from './navMenu/components'
import Reports from './reports/components'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

const Application = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const App = () => {
  return (
    <Provider store={store} >
      <Wrapper>
        <BrowserRouter>
          <Application>
            <NavMenu/>

            <Switch>
              <Route path='/tracker'>
                <Tracker/>
              </Route>
              <Route path='/dashboard'>
                <Dashboard/>
              </Route>
              <Route path='/reports'>
                <Reports />
              </Route>
            </Switch>
          </Application>
        </BrowserRouter>
      </Wrapper>
    </Provider>
  )
}

export default App
