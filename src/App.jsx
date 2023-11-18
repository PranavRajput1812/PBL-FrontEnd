

import './App.css'

import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import CompanyList from './Pages/Company/CompanyList'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Notfound from './Pages/Notfound'
import Signup from './Pages/SignUp'

function App() {
 


  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/company' element={<CompanyList/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
    
    </Routes>
   
    </>
  )
}

export default App
