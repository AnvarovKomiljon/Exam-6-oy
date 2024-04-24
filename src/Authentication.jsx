import React from 'react'
import { useState } from 'react'
import DashboardLogo from '../src/assets/Images/DashboardLogo.svg'
import Dashboard from "../src/pages/Dashboard/Dashboard"
import Teachers from "../src/pages/Teachers/Teachers"
import Students from "../src/pages/Students/Students"
import Billing from "../src/pages/Billing/Billing"
import SettingsAndProfile from "../src/pages/SettingsAndProfile/SettingsAndProfile"
import Exams from "../src/pages/Exams/Exams"
import Features from "../src/pages/Features/Features"
import AddTeacher from "../src/pages/Auth/AddTeacher/AddTeacher"
import SingleTeacher from "../src/pages/SingleTeacher/SingleTeacher"
import { Routes, Route } from 'react-router-dom'
import NavBar from "../src/components/NavBar/NavBar"
import Header from "../src/components/Header/Header"
function Authentication() {
  const [teacher, setTeacher] = useState(JSON.parse(window.localStorage.getItem("teacher")) || [
    {
      id: 1,
      name: "komiljon",
      email: "komiljon@gmail.com",
      subjact: "",
      class: "",
      gender: "",
      age: "19"
    }
  ])
  window.localStorage.setItem("teacher", JSON.stringify(teacher))
  return (
    <>

      <div className='flex'>
        <nav className='w-[20%] p-5 h-[100vh] bg-[#152259]   '>
          <img className='pl-[66px] pt-[20px] mt-10' src={DashboardLogo} alt="" />
          <p className='text-white text-[14px] pl-[55px] pt-[20px] mt-5 items-center justify-center'>Udemy Inter. school</p>
          <p className='mt-10 border-b border-[#BDBDBD]'></p>
          <NavBar />

        </nav>
        
        <Routes>
      
          <Route path='/' element={<Dashboard teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/teachers' element={<Teachers teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/students' element={<Students teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/billing' element={<Billing teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/settingsandprofile' element={<SettingsAndProfile teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/exams' element={<Exams teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/features' element={<Features teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/add' element={<AddTeacher teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/singleteacher/:id' element={<SingleTeacher teacher={teacher} />} />
        </Routes>

      </div>
    </>
  )
}

export default Authentication