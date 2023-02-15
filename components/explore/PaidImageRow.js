import React from 'react'

const PaidImageRow = () => {
  return (
    <div className='bg-gray mb-5 flex justify-between overflow-x-auto space-x-4 scrollbar-hide mt-5'>
    <div className="relative min-w-[160px] min-h-[160px] rounded-lg blur-none">
      <img src='/user1.jpeg' className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer blur-lg" alt='exploreImg' />
      <div className="absolute top-14 left-12 bg-transparent">
      <img src='/lock-2.png' className='bg-transparent w-16' />
      </div>
      </div>
      <div className="relative min-w-[180px] min-h-[180px] rounded-lg blur-none">
      <img src='/user2.png'  className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer blur-lg" alt='exploreImg' />
      <div className="absolute top-14 left-12 bg-transparent">
      <img src='/lock-2.png' className='bg-transparent w-16' />
      </div>
      </div>
      <div className="relative min-w-[180px] min-h-[180px] rounded-lg blur-none">
      <img src='/user3.png'  className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer blur-lg" alt='exploreImg' />
      <div className="absolute top-14 left-12 bg-transparent">
      <img src='/lock-2.png' className='bg-transparent w-16' />
      </div>
      </div>
      <div className="relative min-w-[180px] min-h-[180px] rounded-lg blur-none">
      <img src='/user1.jpeg' className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer blur-lg" alt='exploreImg' />
      <div className="absolute top-14 left-12 bg-transparent">
      <img src='/lock-2.png' className='bg-transparent w-16' />
      </div>
      </div>
      <div className="relative min-w-[180px] min-h-[180px] rounded-lg blur-none">
      <img src='/user4.jpeg' className="rounded-lg w-52 h-40 lg:h-40 lg:w-60 cursor-pointer blur-lg" alt='exploreImg' />
      <div className="absolute top-14 left-12 bg-transparent">
      <img src='/lock-2.png' className='bg-transparent w-16' />
      </div>
      </div>
    </div>
  )
}

export default PaidImageRow