import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import PaidImageRow from './PaidImageRow'

export const PaidExploreCard = () => {
  return (
    <div className='mt-3 bg-gray flex-col rounded-lg p-3 w-[93%] lg:w-[70%] shado'>
        <div className='justify-between flex bg-inherit mt-3'>
            <div className='flex bg-inherit flex-row space-x-2'>
            <div className='bg-accent bg-inherit dot text-center text-white text-3xl'>
                #
            </div>
            <div className='text-lg font-semibold bg-inherit text-center mt-1 cursor-pointer'>26 Posts</div>
            </div>
            <div className='flex bg-inherit flex-row space-x-2 mt-1 cursor-pointer'> 
         <div className='text-accent font-semibold text-lg bg-inherit'>View all</div>
            <div className='bg-inherit'><ArrowRightCircleIcon className='w-5 mt-1 bg-inherit' /></div>
            </div>
        </div>
        <div className='bg-inherit'>
            <PaidImageRow />
        </div>
    </div>
  )
}
