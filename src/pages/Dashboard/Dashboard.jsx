import React from 'react'
import logo1 from '../../assets/Images/logo1.svg'
import logo2 from '../../assets/Images/logo2.svg'
import logo3 from '../../assets/Images/logo3.svg'
import rotate from '../../assets/Images/rotate.svg'
import down from '../../assets/Images/down.svg'
function Dashboard() {
  return (
    <div className='w-full h-[100vh] bgbody pt-[40px]'>
      <h1 className='text-center font-bold text-[22px] text-[#4F4F4F]'>Welcome to your dashboard, Udemy school</h1>
      <h2 className='text-center font-semibold text-[18px] text-[#4F4F4F] mt-5'>Uyo/school/@teachable.com</h2>
      <div className='flex flex-col'>
        <div className='flex items-center gap-3 justify-center mt-20 '>
          <img className='w-[36px] h-[36px] ' src={logo1} alt="" />
          <div>
            <h2 className='font-bold text-[24px] text-[#4F4F4F]'>Add other admins </h2>
            <p className='w-[514px] h-[38px] opacity-60'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </div>
        <div className='flex items-center gap-3 justify-center mt-20 '>
          <img className='w-[36px] h-[36px] ' src={logo2} alt="" />
          <div>
            <h2 className='font-bold text-[24px] text-[#4F4F4F]'>Add classes </h2>
            <p className='w-[514px] h-[38px] opacity-60'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </div>
        
        <div className='flex items-center ml-40 gap-3 justify-center mt-20 '>
          <img className='w-[36px] h-[36px] ' src={logo3} alt="" />
          <div>
            <h2 className='font-bold text-[24px] text-[#4F4F4F]'>Add students </h2>
            <p className='w-[514px] h-[38px] opacity-60'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
          <button className='flex items-center justify-center gap-3 w-[181px] h-[60px] border-none bg-[#152259] rounded-[30px] mt-[35px] text-white'> <img src={rotate} alt="" width={16} height={16} /> Support <img src={down} alt="" width={16} height={16}  /> </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard