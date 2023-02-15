import React from 'react'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import Comments from './Comments'

export const PostFooter = () => {
  return (
    <div className='flex flex-col bg-gray'>
      <div className='flex justify-between bg-inherit'>
      <div className='flex flex-row mt-3 space-x-2 justify-center bg-inherit'>
        <div className='flex flex-row bg-inherit'>
        <HeartIcon className='w-6 bg-inherit' /> 1
          </div>
          <div className='flex flex-row bg-inherit'><ChatBubbleOvalLeftEllipsisIcon className='w-6 bg-inherit' />0</div>
          <div className='bg-inherit'>$0.00 tips</div>
        
      </div>
      <div className='flex-row flex mt-2 bg-inherit'>
        <div className='flex flex-row font-bold px-2 py-1 bg-purple-400 rounded-3xl bg-inherit'>
        <CurrencyDollarIcon className='w-6 bg-inherit' />
        Send Tip
      </div>
      <div className='bg-inherit mt-1'>
        <BookmarkIcon className='w-6 bg-inherit' />
      </div>
      </div>
      </div>
      <Comments />
    </div>
  )
}
