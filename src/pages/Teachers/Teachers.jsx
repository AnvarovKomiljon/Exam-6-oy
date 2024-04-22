import React from 'react'
import search from '../../assets/Images/search.svg'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function Teachers({ teacher, setTeacher }) {
  const handleSearchTeacher = (evt) => {
    const value = evt.target.value
    const localTeacher = JSON.parse(window.localStorage.getItem("teacher"))
   const filteredTeacher =  localTeacher.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    setTeacher([...filteredTeacher])

  }
  const handleDeleteTeacher = (evt) => {
    const clickedId = evt.target.id
    const findedTeacher = teacher.findIndex(item => item.id == clickedId)
    teacher.splice(findedTeacher, 1)
    toast.success('Teacher deleted successfully!')
    setTeacher([...teacher])
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex w-[1056px] h-[60px] justify-between pl-[66px] pt-[20px]'>
        <h2>Teachers</h2>
        <Link to={"/add"} className="w-[199px] h-[40px] items-center text-center py-[13px] rounded-md bg-[#2C86D2] text-white font-semibold">ADD TEACHER</Link>
      </div>
      <div className='pl-[66px] pt-[20px] items-center'>
        <label className='flex border 1px border-slate-300 w-[1061px] h-[40px]  gap-3'>
          <img src={search} alt="" width={16} height={16} className='ml-5' />
          <input onChange={handleSearchTeacher} className='outline-none' type="search" placeholder="Search for a student by name or email" />
        </label>
      </div>

      <div className='p-5 items-center justify-center'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='bg-slate-300 p-2'>User Img</th>
              <th className='bg-slate-300 p-2'>Name</th>
              <th className='bg-slate-300 p-2'>Subject</th>
              <th className='bg-slate-300 p-2'>Class</th>
              <th className='bg-slate-300 p-2'>Email adrress</th>
              <th className='bg-slate-300 p-2'>Gender</th>
              <th className='bg-slate-300 p-2'>Action</th>
            </tr>
          </thead>
          <tbody key={teacher.id}>
            {teacher.map(item => (
              <tr >
                <td className='p-2 text-center'><img src={item.avatarImg} alt="Student img" width={70} height={70} /></td>
                <td className='p-2 text-center'>{item.name}</td>
                <td className='p-2 text-center'>{item.email}</td>
                <td className='p-2 text-center'>{item.subject}</td>
                <td className='p-2 text-center'>{item.class}</td>
                <td className='p-2 text-center'>{item.gender}</td>
                <td className='p-2 text-center'>
                  <button id={item.id} onClick={handleDeleteTeacher} type='button' className='bg-red-500 text-white px-3 p-2 text-[13px] rounded-md'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teachers