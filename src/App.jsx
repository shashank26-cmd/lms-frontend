
import './App.css'

import { Routes,Route } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import Homepage  from './Pages/HomePage'
import Notfound from './Pages/Notfound'
function App() {
 
  return (
  <>
  <Routes>

<Route path="/" element={<Homepage />}></Route>
<Route path='/about' element={<AboutUs />}></Route>
<Route path='*'  element={<Notfound />}></Route>

  </Routes>
  </>


  )
}

export default App
