import React from 'react'
import { GrDiamond } from 'react-icons/gr'
import { ChatBubbleOvalLeftEllipsisIcon, EllipsisVerticalIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'

const PostHeader = () => {
  return (
    <div className='flex justify-between bg-gray'>
      <div className='flex flex-row bg-inherit'>
      <div className='bg-inherit'>
        <img src='/postImg.png' className='lg:w-12 lg:h-12 w-10 h-10 rounded-full' />
      </div>
      <div className='bg-inherit'>
        <div className='flex flex-row mt-1 ml-4 space-x-2 bg-inherit'>
          <div className='bg-inherit'>abella</div>
          <div className='bg-inherit'>•  <span className='text-accent text-sm bg-inherit'>Follow</span></div>
        </div>
        <div className='text-sm font-extralight ml-4 bg-inherit'>2 days ago</div>
      </div>
      </div>
      <div className='flex flex-row space-x-3 bg-inherit'>
          <ChatBubbleOvalLeftEllipsisIcon className='w-6 bg-inherit' />
          <SpeakerWaveIcon className='w-6 bg-inherit' />
          <EllipsisVerticalIcon className='w-7 bg-inherit' />
        </div>
    </div>
  )
}

export default PostHeader