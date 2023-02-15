import React, { useState } from "react";
import Popular from "./Popular";
import Latest from "./Latest";

const PopuLatest = () => {
  const [active, setIsActive] = useState(true);
  return (
    <div className="ml-6 lg:ml-32">
      {active ? (
        <div className="flex flex-col">
          <div className="text-left flex flex-row space-x-7">
            <h2 className="font-extrabold text-3xl text-accent cursor-pointer">Popular</h2>
            <h2
              onClick={() => setIsActive(false)}
              className="font-extrabold text-3xl cursor-pointer"
            >
              Latest
            </h2>
          </div>
          <Popular />
        </div>
      ) : (
        <div>
          <div className="text-left flex flex-row space-x-7">
            <h2
              onClick={() => setIsActive(true)}
              className="font-extrabold text-3xl cursor-pointer"
            >
              Popular
            </h2>
            <h2 className="font-extrabold text-3xl text-accent cursor-pointer">Latest</h2>
          </div>
          <Latest />
        </div>
      )}
    </div>
  );
};

export default PopuLatest;
