import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
import gameOfThrones from './gameOfThrones'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  const houseArray = gameOfThrones.map((house) => {
    

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route path="/house/:id" element={<House />} />
          <Route path="/member/:id" element={<Member />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App