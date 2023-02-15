import React from "react";
import MobileChats from "../components/chats/mobile/MobileChats";
import DesktopChats from '../components/chats/DesktopChats'

function chat() {
  return (
    <div className="mt-16">
       <div className="grid lg:hidden">
        <MobileChats />
       </div>

       <div className="hidden lg:grid border mt-28 border-black rounded-sm drop-shadow-sm shadow-lg max-w-[990px] m-auto">
        <DesktopChats />
       </div>
    </div>
  );
}

export default chat;
