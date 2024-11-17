import React from 'react'

const Searchuser = () => {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img  className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/19930930/pexels-photo-19930930/free-photo-of-a-smartphone-and-a-coffee-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load " alt="" />
            <div className='ml-3'>
                <p>fullname</p>
                <p className='opacity-70'>username</p>
            </div>
        </div>
    </div>
  )
}

export default Searchuser