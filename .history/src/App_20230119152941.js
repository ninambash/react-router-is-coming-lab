import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
import gameOfThrones from './gameOfThrones'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Houses getData={gameOfThrones} />} />
          <Route path="/house/:id" element={<House getData={gameOfThrones}/>} />
          <Route path="/member/:id" element={<Member getData={gameOfThrones}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App