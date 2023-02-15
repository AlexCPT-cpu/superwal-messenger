import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const SearchBar = () => {
  return (
    <div className='flex flex-row px-4 bg-background py-2 rounded-full space-x-2 md:w-[500px]'>
      <MagnifyingGlassIcon className='w-5 text-foreground bg-transparent' />
      <input className='bg-transparent text-md' type='text' placeholder='Search' />
    </div>
  )
}
