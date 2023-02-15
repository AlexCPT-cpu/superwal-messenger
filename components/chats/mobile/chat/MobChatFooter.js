import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { MessageContext } from '../../../../context/MessageContext'

const MobChatFooter = () => {

  const { setMessage } = useContext(MessageContext)

  const setMsg = () => {
    const m = document.getElementById('messageInp').value
    setMessage(m)
    
    scrollTo('bottom')
  }

  const scrollTo = (elem) => {
    const x = document.getElementById(elem)

    x.scrollIntoView({
      behavior:"smooth"
    })
  }

  return (
    <div className='flex flex-row space-x-1 justify-start bottom-0 mb-3'>
    <div className='bg-[#fff] rounded-xl flex justify-between w-full m-2'>
        <input type='text' id='messageInp' className='bg-transparent h-[30px] ml-3 w-[80%]' />
    </div>
    <div onClick={setMsg}>
    <PaperAirplaneIcon className='w-7 bg-transparent cursor-pointer mr-1' />
    </div>
</div>
  )
}

export default MobChatFooter