import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const Chat = () => {
  return (
    <div className='flex flex-col w-[100%]'>
        <ChatHeader image='/fanzIcon.png' name='Fanzly' activeStatus='Active' />
        <ChatBody />
        <ChatFooter />
    </div>
  )
}

export default Chat