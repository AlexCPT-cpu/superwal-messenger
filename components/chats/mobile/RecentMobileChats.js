import React from 'react'
import MobileUserChat from './MobileUserChat'

const RecentMobileChats = () => {
  return (
    <div className='overflow-y-scroll scrollbar-hide'>
        <MobileUserChat image='/fanzIcon.png' name='Fanzly' lastMessage='Click here for all updates' date='15 Jan' />
    </div>
  )
}

export default RecentMobileChats