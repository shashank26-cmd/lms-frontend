
import './App.css'

import { Routes,Route } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import Homepage  from './Pages/HomePage'
function App() {
 
  return (
  <>
  <Routes>

<Route path="/" element={<Homepage />}></Route>
<Route path='/about' element={<AboutUs />}></Route>

  </Routes>
  </>


  )
}

export default App
