import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
import gameOfThrones from './gameOfThrones'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  //console.log(gameOfThrones)
  return (
    
    
      <BrowserRouter>
        <Routes>
          <Route path="/houses" element={<Houses gameOfThrones={gameOfThrones} />} />
          <Route path="/houses/:id" element={<House getData={gameOfThrones}/>} />
          <Route path="/houses/:houseId/members/:memberId" element={<Member getData={gameOfThrones}/>} />
        </Routes>
      </BrowserRouter>

    
  )
}

export default App