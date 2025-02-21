import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../pages/auth/SignUp'
import Login from '../pages/auth/Login'
import Home from '../pages/home/Home'
import Header from '../components/Header'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/signUp' element={<SignUp/>} />
       <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing