import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/pages/UnAuth/Login/Login'
import SignUp from '../src/pages/UnAuth/SignUp/SignUp'

function UnAuthentication({setToken, setsignUpData}) {
  return (
    <Routes>
      <Route path='/' element={<Login setToken={setToken}/>}/>
    <Route path='/sign-up' element={<SignUp setsignUpData={setsignUpData}/>}/>
    </Routes>
  )
}

export default UnAuthentication
