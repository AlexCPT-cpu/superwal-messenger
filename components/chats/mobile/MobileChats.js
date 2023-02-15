import React from "react";
import RecentMobileChats from "./RecentMobileChats";
import { useState } from "react";
import MoChat from "./MoChat";

const MobileChats = () => {
  const [selected, isSelected] = useState(false);

  return (
    <div>
      {selected ? (
        <div className="mt-4">
          <MoChat />
        </div>
      ) : (
        <div onClick={() => isSelected(!selected)}>
          <div className="flex flex-col p-4">
            <h3 className="font-extrabold text-4xl">Chats</h3>
            <div>
              <RecentMobileChats />
            </div>
            <div className="flex justify-center flex-col mt-[200px] mb-[200px] ml-8">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="No_chat"
                  width="95.675"
                  height="95.674"
                  viewBox="0 0 95.675 95.674"
                  webcrx=""
                >
                  <g id="chat-9" transform="translate(0)">
                    <path
                      id="Path_109001"
                      data-name="Path 109001"
                      d="M210.52,199.627a39.349,39.349,0,0,0-3.54-55.047,44.994,44.994,0,0,1-43.222,57.259c-.573,0,2.887.02-10.742-.064a39.194,39.194,0,0,0,27.746,11.463l36.543-.187a2.805,2.805,0,0,0,1.955-4.8Z"
                      transform="translate(-124.423 -117.563)"
                      fill="#b1c0f8"
                    />
                    <path
                      id="Path_109002"
                      data-name="Path 109002"
                      d="M39.335,78.67A39.329,39.329,0,1,0,9.576,65.059L.836,73.685a2.805,2.805,0,0,0,1.956,4.8ZM22.611,25.414H56.245a2.8,2.8,0,0,1,0,5.606H22.611a2.8,2.8,0,0,1,0-5.606Zm0,11.212H56.245a2.8,2.8,0,0,1,0,5.606H22.611a2.8,2.8,0,0,1,0-5.606Zm-2.8,14.015a2.8,2.8,0,0,1,2.8-2.8H56.245a2.8,2.8,0,0,1,0,5.606H22.611a2.8,2.8,0,0,1-2.8-2.8Z"
                      fill="#9063FD"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex justify-center">
                <p className="font-semibold text-md">No conversation found !</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileChats;
