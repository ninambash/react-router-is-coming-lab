import House from './components/House'
import Houses from './components/Houses'
import Member from './components/Member'
im
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
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