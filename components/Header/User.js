import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { Dropdown } from './Dropdown'
 

const User = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleSpeak = () => {
    const value = new SpeechSynthesisUtterance("Sunday Abeg Send me money")
    window.speechSynthesis.speak(value)
    }

  return (
    <div className="bg-transparent">
      {false ? (
        <div className="bg-lime-600 p-1 rounded-full border border-black text-white">
          GT
        </div>
      ) : (
        <div className="bg-foreground rounded-full cursor-pointer relative">
          <UserIcon
            className="bg-foreground w-5"
            onClick={() => setDropdown(!dropdown)}
          />
          {dropdown ? (
           <Dropdown show={dropdown} onClickOutside={() => {setDropdown(false)}} />
          ) : null}
        </div>
      )}
    </div>
  );
};


export default User