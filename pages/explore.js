import React from 'react'
import { ExploreCard } from '../components/explore/ExploreCard'
import { PaidExploreCard } from '../components/explore/PaidExploreCard'

const explore = () => {
  return (
    <div className='mt-28 mb-28 flex justify-center flex-col ml-6 space-y-5'>
        <ExploreCard />
        <PaidExploreCard />
    </div>
  )
}

export default explore