import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
import { BrowserRouter, Routers, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Route exact path="/" component={Houses} />
        <Route path="/house/:id" component={House} />
        <Route path="/member/:id" component={Member} />
      </BrowserRouter>

      





    </div>
  )
}

export default App