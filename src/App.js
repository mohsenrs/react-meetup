import { Route, Switch } from 'react-router-dom'
import AllMeetUps from './pages/AllMeetUps'
import NewMeetUp from './pages/NewMeetUp'
import Favorites from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetUps />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUp />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </>
  )
}

export default App
