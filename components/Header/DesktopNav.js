import React from "react";
import { SearchBar } from './SearchBar'
import Image from 'next/image'
import Link from "next/link";
import { ThemeSwitch } from './ThemeSwitch'
import User from './User'

const DesktopNav = () => {
  return (
    <div className="flex justify-between py-5 shadow-md bg-foreground">
      <div className="flex space-x-10 justify-evenly bg-foreground">
        <div className="mt-3 bg-foreground">
            <Image className="bg-foreground" width={30} height={30} src='thirteen.svg' alt="logo"/>
        </div>

        <div className="flex space-x-3 font-extrabold mt-2 bg-foreground">
            <Link className="text-content hover:text-accent bg-foreground" href='/'>Home</Link>
            <Link className="text-content hover:text-accent bg-foreground" href='/live/popular'>Live</Link>
            <Link className="text-content hover:text-accent bg-foreground" href='/explore'>Explore</Link>
            <Link className="text-content hover:text-accent bg-foreground" href='/chat'>Chat</Link>
        </div>

        <div className="bg-foreground w-full">
            <SearchBar />
        </div>

      </div>

      <div className="mt-2 bg-foreground flex flex-row space-x-6 pr-10">
        <ThemeSwitch className='bg-foreground' />
        <User className='bg-foreground' />
      </div>
    </div>
  );
};

export default DesktopNav;
