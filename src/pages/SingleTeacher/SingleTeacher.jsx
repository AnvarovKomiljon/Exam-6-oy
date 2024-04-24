import React from 'react'
import { useParams } from 'react-router-dom'
import phone from '../../assets/Images/phone.svg'
import email from '../../assets/Images/email.svg'
import message from '../../assets/Images/message.svg'
function SingleTeacher( {teacher} ) {
  const { id } = useParams()
  const singleData = teacher.find(item => item.id == id)
  return (
    <div className='flex items-center justify-center pl-[229px] gap-[100px] '>
      <div className='flex flex-col items-center justify-center gap-3'>
      <img className='m-10 rounded-lg items-center justify-center' src={singleData.avatarImg} alt="" width={180} height={180}  />
      <h2 className=' items-center justify-center font-bold'>{singleData.name} </h2>
      <h3 className='items-center justify-center m-1'>{singleData.subjact}</h3>
      <div className='flex gap-3 m-10 '>
        <a href="PhoneNumber"><img src={phone} alt="" /></a>
        <a href="EmailAddress"><img src={email} alt="" /></a>
        <a href="Message"><img src={message} alt="" /></a>
      </div>
      </div>
      <div>
        <strong className='mt-10 opacity-60 w-[335px]'>{singleData.about}</strong>
        <div className='flex gap-[50px] mt-10 '>
         <h2 className=' flex flex-col'>
          Age
          <strong className='mt-5'>{singleData.age}</strong>
          </h2> 
          <h2 className=' flex flex-col'>
            Gender
            <strong className='mt-5'>{singleData.gender}</strong>
            </h2>
        </div>
      </div>
    </div>
  )
}

export default SingleTeacher