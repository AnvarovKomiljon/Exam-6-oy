import React from 'react'
import ring from '../../assets/Images/ring.svg'
function Header() {
const handleLogOut = () => {
 
}
  return (
    <div className='flex gap-5 justify-end items-center mt-5 '>
       <button> <img src={ring} alt="" width={24} height={24} /></button>
        <button className='font-semibold' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Header