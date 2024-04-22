import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
function Login({setToken}) {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || {login:"komiljon"}
  const navigate = useNavigate()
  const loginSubmit = (e) => {
    e.preventDefault()
    const data = {
      login:e.target.login.value,
      password:e.target.password.value
    }
    if(data.login == newData.login){
      toast.success('Successfully pass :)')
     navigate ('/')
    }else{
      toast.error('Data is not compatible!')
    }
    setTimeout(() => {
        setToken(data)
    }, 1000);
    window.localStorage.setItem("token", JSON.stringify(data))
  }
  return (
    <div className='w-full h-[100vh] bgbody pt-[40px]'>
    <Toaster position="top-center" reverseOrder={false}/>
      <h2 className='text-center font-bold text-[22px] text-[gray-400]'>Welcome, Log into you account</h2>
      <form onSubmit={loginSubmit} className='w-[475px] p-5 rounded-lg bg-white m-auto'>
        <p className='text-center pt-[10px] text-[#6C6C6C] text-[18px]'>It is our great pleasure to have you on board! </p>
        <label className='flex flex-col gap-[11px] mt-[50px]'>
          <input name='login' className='p-3 rounded-md border-[1px] border-slate-400 outline-none focus:shadow-md focus:shadow-[#2C86D2]' type="text" placeholder='Enter your login' />
        </label>
        <label className='flex flex-col gap-[11px] mt-[19px]'>
          <input name='password' className='p-3 rounded-md border-[1px] border-slate-400 outline-none focus:shadow-md focus:shadow-[#2C86D2]' type="password" placeholder='Enter your password' />
        </label>
        <button className='w-full h-[44px] border-none bg-[#2C86D2] rounded-md mt-[35px] text-white'>Login</button>
        <Link to={"/sign-up"} className='block text-center p-[10px] text-[#2C86D2] ' >Sign up</Link>
      </form>
    </div>
  )
}

export default Login
