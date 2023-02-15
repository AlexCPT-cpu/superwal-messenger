import React from 'react'

const ChatHeader = ({ image, activeStatus, name }) => {
  return (
    <div className='flex flex-row space-x-6 justify-start p-3 border-b-2 top-0 border-b-content shadow-sm drop-shadow-sm  w-full'>
        <div>
            <img className='w-8 mt-1' src={image} alt={name} />
        </div>
        <div className='flex flex-col '>
            <div className='font-semibold text-sm'>{name}</div>
            <div className='text-sm'>{activeStatus}</div>
        </div>
    </div>
  )
}

export default ChatHeader