import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routers>

        <Route exact path="/" component={Houses} />
        <Route path="/house/:id" component={House} />
        <Route path="/member/:id" component={Member} />
      </Routers>
      </BrowserRouter>

      





    </div>
  )
}

export default App