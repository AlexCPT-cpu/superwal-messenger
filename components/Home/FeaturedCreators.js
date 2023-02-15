import React from 'react'
import CreatorsCard from './CreatorsCard'
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';


const FeaturedCreators = () => {

  const creators = ["Cleo", "Matt", "Benete", "Angela", "Kaye"]
  const images = [
  {
    image: 'one.avif',
    username: '@cedlex'
  },
  {
    image: 'two.avif',
    username: '@Grayson'
  },
  {
    image: 'three.avif',
    username: '@magne'
  },
  {
    image: 'five.avif',
    username: '@odinson'
  },
  {
    image: 'six.avif',
    username: '@jack'
  },
]

  return (
    <div>
      <div className='flex justify-between px-6'>
      <h2 className='font-extrabold text-3xl'>Featured Creators</h2>
      <h3 className='text-accent text-lg mt-1 md:mt-0 cursor-pointer'>View All</h3>
      </div>
        <div className='flex flex-row space-x-3 ml-3 mr-3 mt-5 lg:space-x-0 lg:ml-7 overflow-x-auto scrollbar-hide'>
          {images.map((creator, index) => {
            return (
             <CreatorsCard key={index} source={creator.image} username={creator.username} />
            )
          })
          }
          </div>
    </div>
  )
}

export default FeaturedCreators