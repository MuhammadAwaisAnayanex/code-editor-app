import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../pages/auth/SignUp'
import Login from '../pages/auth/Login'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing