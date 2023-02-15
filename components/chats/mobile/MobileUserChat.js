import React from 'react'

const MobileUserChat = ({ image, name, date, lastMessage }) => {
  return (
    <div className='flex justify-between cursor-pointer mt-8'>
      <div className='flex flex-row space-x-4'>
      <div>
      <img className='w-9' src={image} alt={name} />
      </div>

      <div className='flex flex-col space-y-1'>
        <div className='text-xs font-semibold'>
          {name}
        </div>
        <div className='text-xs'>
          {lastMessage}
        </div>
      </div> 
      </div>

      <div className='text-xs mt-4 ml-32'>
        {date}
      </div>
    </div>
  )
}

export default MobileUserChat