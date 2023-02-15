import React from 'react'
import UserChat from './UserChat'

const RecentChats = () => {
  return (
    <div className='overflow-y-scroll scrollbar-hide'>
        <UserChat image='/fanzIcon.png' name='Fanzly' lastMessage='Click here for all updates' date='15 Jan' />
    </div>
  )
}

export default RecentChats