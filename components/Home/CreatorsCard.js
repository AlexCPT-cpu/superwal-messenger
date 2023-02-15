import React from "react";

const CreatorsCard = ({ source, username }) => {
  return (
    <div className="relative min-w-[180px] min-h-[180px]">
      <img
        className="rounded-lg lg:h-32 lg:w-32 cursor-pointer"
        src={source}
        alt="avatar"
      />

      <div className="">
        <div className="absolute top-2 left-4 rounded-2xl border-2 border-accent">
          <img className="cursor-pointer rounded-full h-6 w-6" src={source} alt="avatar" />
        </div>
        <p className="absolute top-2 left-14 text-white drop-shadow-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] bg-transparent text-sm cursor-pointer">{username}</p>
      </div>
    </div>
  );
};

export default CreatorsCard;
