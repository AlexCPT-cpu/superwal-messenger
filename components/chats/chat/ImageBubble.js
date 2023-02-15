import React from 'react'

const ImageBubble = ({ timeStamp, image, comment }) => {
  return (
    <div className='my-8 ml-8 mt-3 cursor-pointer'>
      <div style={{borderTopRightRadius:"10px", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}} className='bg-purple-300 pb-2 text-white text-left w-fit'>
        <div>
          <img style={{borderTopRightRadius:"10px"}} className='w-[180px] h-[200px]' src={image} alt={comment} />
        </div>
        <div className='bg-transparent text-white text-left ml-3 mt-2'>{comment}</div>
      </div>
      <div className='text-xs font-bold text-left ml-2 mt-1'>{timeStamp}</div>
    </div>
  )
}

export default ImageBubble

ImageBubble.defaultProps = {
  timeStamp: 'Oct 29, 2022 1:47 PM',
  image: '/davido.png',
  comment: 'Good To Go'
}