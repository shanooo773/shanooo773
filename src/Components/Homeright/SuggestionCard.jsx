import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2020/03/01/21/12/cat-4894153_1280.jpg" alt="" />
            <div className='ml-2'>
                <p className='text-sm font-semibold ml-[-7px]'>userName</p><p className='text-sm font-semibold opacity-70 '>Follows you</p>
            </div>
        </div>
        <p className='text-blue-400 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionCard