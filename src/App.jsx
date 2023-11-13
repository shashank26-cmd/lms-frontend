
import './App.css'

import { Routes,Route } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import Homepage  from './Pages/HomePage'
import Notfound from './Pages/Notfound'
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import Profile from './Pages/User/Profile'
// import DisplayLectures from './Pages/Dashboard/Displaylecture'
import AddLecture from './Pages/Dashboard/Addlecture'
import EditProfile from './Pages/User/EditProfile'
import Checkout from "./Pages/Payment/Checkout"
import DisplayLectures from './Pages/Dashboard/Displaylecture'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import CheckoutFail from './Pages/Payment/CheckoutFail'
import AdminDashboard from './Pages/Dashboard/AdminDashboard'
function App() {
 
  return (
  <>
  <Routes>

<Route path="/" element={<Homepage />}></Route>
<Route path='/about' element={<AboutUs />}></Route>
<Route path='*'  element={<Notfound />}></Route>
<Route path='/denied'  element={<Denied />}></Route>

<Route path='/course/description'  element={<CourseDescription />}></Route>

<Route path='/courses'  element={<CourseList />}></Route>

<Route path='/contact' element={<Contact />}></Route>

<Route path='/signup' element={<Signup />}></Route>
<Route path='/login' element={<Login />}></Route>


<Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
<Route path='/course/create' element={<CreateCourse />} />
<Route path='/course/addlecture' element={<AddLecture />} />
<Route path='/admin/dashboard' element={<AdminDashboard />} />


</Route>

<Route element={<RequireAuth allowedRoles={["ADMIN","USER"]} />}>
<Route path='/user/profile' element={<Profile />} />
{/* <Route path='/course/displaylectures' element={<DisplayLectures />}/> */}
<Route path='/user/editprofile' element={<EditProfile />} />
<Route path='/checkout' element={<Checkout />} />
<Route path='/checkout/success' element={<CheckoutSuccess />} />
<Route path='/checkout/fail' element={<CheckoutFail />} />


<Route path='/course/displaylectures' element={<DisplayLectures/>}/>


</Route>

  </Routes>
  </>


  )
}

export default App
