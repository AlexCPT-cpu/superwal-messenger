import React from 'react'
import MobChatHeader from './chat/MobChatHeader'
import MobChatBody from './chat/MobChatBody'
import MobChatFooter from './chat/MobChatFooter'

const MoChat = () => {
  return (
    <div className='min-w-full'>
        <MobChatHeader image='/fanzIcon.png' name='Fanzly' activeStatus='Active' />
        <MobChatBody />
        <MobChatFooter />
    </div>
  )
}

export default MoChat