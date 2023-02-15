import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PlusCircleIcon,
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const MobileNav = () => {
  //const [openNav, setOpenNav] = useState()
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
  };

  return (
    <div className="flex justify-between py-5 shadow-md bg-foreground">
      <div
        id="mySidenav"
        className="h-[100%] overflow-x-hidden pt-32 fixed w-0 z-10 top-0 left-0 text-center bg-background"
      >
        <p className="closebtn absolute top-2 right-5 text-4xl" onClick={() => closeNav()}>
          &times;
        </p>
        <div className="flex flex-col text-2xl font-semibold space-y-8">
          <Link
            className="text-content hover:text-accent"
            href="/"
            onClick={() => closeNav()}
          >
            Home
          </Link>
          <Link
            className="text-content hover:text-accent"
            href="/live/popular"
            onClick={() => closeNav()}
          >
            Live
          </Link>
          <Link
            className="text-content hover:text-accent"
            href="/explore"
            onClick={() => closeNav()}
          >
            Explore
          </Link>
          <Link
            className="text-content hover:text-accent"
            href="/chat"
            onClick={() => closeNav()}
          >
            Chat
          </Link>
        </div>
      </div>
      <div className="mt-2 bg-foreground ml-2">
        <Image
          className="bg-foreground"
          width={30}
          height={30}
          src="/thirteen.svg"
          alt="logo"
        />
      </div>

      <div className="flex flex-row bg-foreground space-x-5">
        <PlusCircleIcon className="w-7 bg-foreground" />
        <MagnifyingGlassIcon className="w-7 bg-foreground" />
        <BellIcon className="w-7 bg-foreground" />
        <Bars3Icon
          className="w-9 bg-foreground mr-2"
          onClick={() => openNav()}
        />
      </div>
    </div>
  );
};

export default MobileNav;
