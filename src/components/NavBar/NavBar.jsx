import React from 'react'
import { NavLink } from 'react-router-dom'
import bank from '../../assets/Images/bank.svg'
import teacher from '../../assets/Images/teacher.svg'
import chartsquare from '../../assets/Images/chartsquare.svg'
import setting from '../../assets/Images/setting.svg'
import home from '../../assets/Images/home.svg'
import Header from '../Header/Header'
function Navbar() {
  return (
    <>
   
    <nav className='flex flex-col  mt-5 text-white font-semibold  '>
     <NavLink className="flex text-[14px] items-center justify-center gap-3 w-[192px] h-[44px] hover:bg-[#2C86D2] rounded-md"  to={"/"}> <img src={home} alt="" /> Dashboard</NavLink>
     <NavLink className="flex text-[14px] items-center justify-center gap-3 w-[192px] h-[44px] hover:bg-[#2C86D2] rounded-md" to={"/teachers"}> <img src={home} alt="" /> Teachers</NavLink>
     <NavLink className="flex text-[14px] items-center justify-center gap-3 w-[192px] h-[44px] hover:bg-[#2C86D2] rounded-md" to={"/students"}> <img src={teacher} alt="" /> Students</NavLink>
     <NavLink className="flex text-[14px] items-center justify-center gap-3 w-[192px] h-[44px] hover:bg-[#2C86D2] rounded-md" to={"/billing"}> <img src={bank} alt="" /> Billing</NavLink>
     <NavLink className="flex text-[14px] items-center justify-center gap-3 -[w192px] h-[44px] hover:bg-[#2C86D2] rounded-md" to={"/settingsandprofile"}> <img src={setting} alt="" /> SettingsAndProfile</NavLink>
     <NavLink className="flex text-[14px] items-center justify-center gap-3 w-[192px] h-[44px] hover:bg-[#2C86D2] rounded-md" to={"/exams"}> <img src={chartsquare} alt="" /> Exams</NavLink>
     <NavLink className="flex text-[14px] mt-[30px] items-center justify-center gap-3 w-[192px] h-[44px] hover:bg-[#2C86D2] rounded-md" to={"/features"}> <img src={bank} alt="" /> Features <button className='bg-[#B9D7F1] w-[41px] h-[14px] rounded-md text-white text-[10px] space-x-3  '>NEW</button></NavLink>
    </nav>
    
    </>
  )
}

export default Navbar