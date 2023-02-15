import React from 'react'
import { UserCircleIcon, ChatBubbleOvalLeftEllipsisIcon, PlayCircleIcon, HomeIcon } from '@heroicons/react/24/outline'
import { RiCompass3Line } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className="flex justify-around shadow-md bg-foreground fixed w-full bottom-0 z-10 pt-4 pb-3 lg:hidden">
      <div className='bg-inherit'>
        <HomeIcon className='w-8 bg-inherit' />
      </div>
      <div className='bg-inherit'>
        <RiCompass3Line size='34' className='bg-inherit' />
      </div>
      <div className='bg-inherit'>
        <PlayCircleIcon className='w-8 bg-inherit' />
      </div>
      <div className='bg-inherit'>
        <ChatBubbleOvalLeftEllipsisIcon className='w-8 bg-inherit' />
      </div>
      <div className='bg-inherit'>
        <UserCircleIcon className='w-8 bg-inherit' />
      </div>
    </div>
  )
}

export default Footer