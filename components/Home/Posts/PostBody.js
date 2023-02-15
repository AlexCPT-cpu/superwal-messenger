import React from "react";

const PostBody = () => {
  return (
    <div className="mt-6 justify-center flex bg-gray">
      <video
        className="w-full h-[370px] md:w-[600px] md:h-[600px] rounded-md object-cover bg-gray"
        controls
        loop
        autoPlay
        muted
      >
        <source src="/vid.mp4" type="video/mp4" />
        Video not supported
      </video>
    </div>
  );
};

export default PostBody;
