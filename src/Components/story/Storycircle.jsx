import React from 'react'
import { useNavigate } from 'react-router-dom'

function Storycircle() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='w-16 h-16 rounded-full' src="https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery" alt="" />
        <p>username</p>
    </div>
  )
}

export default Storycircle