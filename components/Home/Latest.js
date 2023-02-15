import React from 'react'
import PostHeader from './Posts/PostHeader'
import PostBody from './Posts/PostBody'
import { PostFooter } from './Posts/PostFooter'

const Latest = () => {
  return (
    <div className='mt-3 drop-shadow-xl shadow-xl bg-gray rounded-lg p-3 w-[93%] lg:w-[70%]'>
        <div className='bg-inherit'>
            <PostHeader />
            <PostBody />
            <PostFooter />
        </div>
    </div>
  )
}

export default Latest