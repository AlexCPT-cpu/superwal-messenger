import React from 'react'
import ChatBubbles from './ChatBubbles'
import ImageBubble from './ImageBubble'

const ChatBody = () => {
  return (
    <div className='overflow-y-scroll scrollbar-hide mt-20 max-h-[450px] w-[666px]'>
        <ChatBubbles />
        <ChatBubbles />
        <ImageBubble image='/davido.png' />
        <ChatBubbles />
        <ImageBubble image='/talks.png' />
        <ChatBubbles />
    </div>
  )
}

export default ChatBody