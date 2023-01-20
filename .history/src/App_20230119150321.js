import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route path="/house/:id" element={<House />} />
        <Route exact path="/" component={Houses} />
        <Route path="/house/:id" component={House} />
        <Route path="/member/:id" component={Member} />
      
      </BrowserRouter>

      





    </div>
  )
}

export default App