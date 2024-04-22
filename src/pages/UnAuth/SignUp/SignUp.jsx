import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function SignUp({setsignUpData}) {
  
  const navigate = useNavigate()
  const signUpFormSubmit = (e) => {
    e.preventDefault()

    const newdata = {
      login:e.target.login.value,
      password:e.target.password.value
    }
    
    toast.success('Information update!')
    setTimeout(() => {
      setsignUpData(newdata);
      navigate('/login')
    }, 1000);
    window.localStorage.setItem("newToken", JSON.stringify(data))
  }
  return (
    <div className='w-full h-[100vh] bgbody pt-[40px]'>
<h2 className='text-center font-bold text-[22px] text-[gray-400]'>Welcome, Sign up</h2>
      <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={signUpFormSubmit} className='w-[475px] p-5 rounded-lg bg-white m-auto'>
      <label className='flex flex-col gap-[11px] mt-[50px]'>
          <input name='login' className='p-3 rounded-md border-[1px] border-slate-400 outline-none focus:shadow-md focus:shadow-[#2C86D2]' type="text" placeholder='Enter your Fullname' />
        </label>
        <label className='flex flex-col gap-[11px] mt-[19px]'>
          <input name='login' className='p-3 rounded-md border-[1px] border-slate-400 outline-none focus:shadow-md focus:shadow-[#2C86D2]' type="text" placeholder='Enter your login' />
        </label>
        <label className='flex flex-col gap-[11px] mt-[19px]'>
          <input name='password' className='p-3 rounded-md border-[1px] border-slate-400 outline-none focus:shadow-md focus:shadow-[#2C86D2]' type="password" placeholder='Enter your password' />
        </label>
        <button className='w-full h-[44px] border-none bg-[#2C86D2] rounded-md mt-[35px] text-white'>SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUp
