import React from 'react'
import ring from '../../assets/Images/ring.svg'
function Header() {
  return (
    <div className='flex gap-5 items-center '>
       <button> <img src={ring} alt="" /></button>
        <button className='w-[100px] h-[40px] bg-[#2C86D2] rounded-md text-white'>Log Out</button>
    </div>
  )
}

export default Header