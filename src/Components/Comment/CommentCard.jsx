import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [Isliked,Setliked]=useState();
    const handlelike=()=>{
        Setliked(!Isliked)
    }
  return (
    <div>
        <div className='flex items-center justify-between py-5 '>
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_640.jpg" alt="" />
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>
                        <span className='ml-2'>nice post</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-1'>
                        <span>1 min ago</span>
                        <span>23 likes</span>
                    </div>
                </div>
            </div>
{Isliked? <AiFillHeart onClick={handlelike} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/>:<AiOutlineHeart onClick={handlelike}  className='text-xs hover:opacity-50 cursor-pointer'/>}
        </div>
    </div>
  )
}

export default CommentCard