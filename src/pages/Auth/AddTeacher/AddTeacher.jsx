import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, } from 'react-router-dom'
import { useState } from 'react'
function AddTeacher({ teacher, setTeacher }) {
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState(null)
  const importImgChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]))
  }
  const handleSubmitTeacher = (e) => {
    e.preventDefault()
    const data = {
      id: teacher.length ? teacher[teacher.length - 1].id + 1 : 1,
      avatarImg: imgUrl,
      name: e.target.name.value,
      email: e.target.email.value,
      subjact: e.target.subjact.value,
      class: e.target.class.value,
      gender: e.target.gender.value,
      about: e.target.about.value,
      age: e.target.age.value
    }
    if (imgUrl == null) {
      toast.error('Please choose your image!')
    }
    else {
      setTeacher([...teacher, data])
      toast.success('Teacher added successfully!')
      setTimeout(() => {
        navigate('/teachers')
      }, 1000)
    }
  }
  return (
    <form onSubmit={handleSubmitTeacher} className='  h-[500px] p-2 rounded-md m-5'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex justify-between'>
        <h2 className='mb-5 font-semibold text-[20px]'>Add Teacher</h2>
        <button type='submit' className='w-[80px] h-[40px] bg-[#2C86D2] rounded-md text-white'>Save</button>
      </div>
      <div className='flex flex-wrap items-center justify-between  w-[990px]' >
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>Full Name</span>
          <input name='name' className="w-[407px] h-[40px] p-1.5 outline-none rounded-md  border-[1px] border-slate-300 " type="text" placeholder='Enter your name' />
        </label>
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>Class</span>
          <input name='class' className="w-[407px] h-[40px] p-1.5 outline-none rounded-md  border-[1px] border-slate-300 " type="text" placeholder='Class' />
        </label>
        
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>Email</span>
          <input name='email' className="w-[407px] h-[40px] p-1.5 outline-none rounded-md  border-[1px] border-slate-300 " type="text" placeholder='Enter your email' />
        </label>
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>Gender</span>
          <input name='gender' className="w-[407px] h-[40px] p-1.5 outline-none rounded-md  border-[1px] border-slate-300 " type="text" placeholder='Gender' />
        </label>
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>Subjact</span>
          <input name='subjact' className="w-[407px] h-[40px] p-1.5 outline-none rounded-md  border-[1px] border-slate-300 " type="text" placeholder='Subjact' />
        </label>
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>Age</span>
          <input name='age' className="w-[407px] h-[40px] p-1.5 outline-none rounded-md  border-[1px] border-slate-300 " type="number" placeholder='Enter Your Age' />
        </label>
        <label className='flex flex-col m-5'>
          <span className='mb-2 opacity-60 text-[14px]'>About</span>
          <input name='about' type="text" placeholder='About' className='p-1.5  outline-none rounded-md w-[400px] h-[195px] border-[1px] border-slate-300 ' />
        </label>
        <label className='flex cursor-pointer m-5'>
          <span className='hover:text-blue-500 w-[40%] inline-block   '>Import image</span>
          <input type="file" onChange={importImgChange} className="p-1.5 scale-0 opacity-0 outline-none rounded-md  " name="chooseFile" placeholder='Import image' />
          {imgUrl ? <img src={imgUrl} width={100} height={100} alt='Choose image' /> : ""}
        </label>

      </div>
    </form>
  )
}

export default AddTeacher