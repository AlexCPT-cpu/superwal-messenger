import React from 'react'
import FeaturedCreators from './FeaturedCreators'
import PopuLatest from './PopuLatest'

const HomePage = () => {
  return (
    <div className='mt-24'>
      <FeaturedCreators />
      <PopuLatest />
    </div>
  )
}

export default HomePage