import React from 'react'

const ChatBubbles = ({ timeStamp, message }) => {
  return (
    <>
    {message ?
      <>
      <div className='my-8 ml-8 mt-3'>
      <div style={{borderTopRightRadius:"10px", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}} className='bg-accent px-3 py-2 text-white text-left w-fit'>{message}</div>
      <div className='text-xs font-bold text-left ml-2 mt-1'>{timeStamp}</div>
    </div>
    </>
    :
    <></>
    }
    </>
  )
}

export default ChatBubbles

ChatBubbles.defaultProps = {
  timeStamp: '',
  message: ''
}