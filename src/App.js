import React, { useState } from 'react'
import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { CssBaseline } from '@mui/material'

import Price from './Pages/Price'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AuthContext from './Utils/AuthContext'
import LoginRegisterPage from './Pages/LoginRegister'

export default function App() {
  const [token,setToken]=useState()
  const handleToken=(e)=>{
    setToken(e)
  }
  return (
    <>
    <AuthContext.Provider value={{token,handleToken}}>
      
   
     <Navbar/>
      <Routes>
       
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login-register' element={<LoginRegisterPage/>}/>
        <Route path='/price' element={<Price/>}/>
      </Routes>
     </AuthContext.Provider>
    </>
  )
}
