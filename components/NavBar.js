import React from 'react'
import DesktopNav from './Header/DesktopNav'
import MobileNav from './Header/MobileNav'

const NavBar = () => {
  return (
    <div className='fixed w-full z-10'>
      <div className='hidden lg:grid'>
      <DesktopNav />
      </div>
        <div className='lg:hidden'>
          <MobileNav />
        </div>
    </div>
  )
}

export default NavBar