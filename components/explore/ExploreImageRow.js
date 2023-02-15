import React from 'react'

const ExploreImageRow = () => {
  return (
    <div className='bg-gray mb-5 flex flex-row space-x-4 overflow-x-auto scrollbar-hide mt-5'>
        <img src='/user1.jpeg' className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer" alt='exploreImg' />
        <img src='/user2.png'  className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer" alt='exploreImg' />
        <img src='/user3.png'  className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer" alt='exploreImg' />
        <img src='/user1.jpeg' className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer" alt='exploreImg' />
        <img src='/user4.jpeg' className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer" alt='exploreImg' />
    </div>
  )
}

export default ExploreImageRow