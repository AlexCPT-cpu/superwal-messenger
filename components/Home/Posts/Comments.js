import React, { useState } from "react";

const Comments = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-2 bg-gray">
      {showMore ? (
        <span className="bg-inherit">
          abella awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww
          awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww
          awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww
          awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww
          awwwwwww awwwwwww awwwwwww awwwwwww
        </span>
      ) : (
        <span className="bg-inherit">
          abella awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww awwwwwww
        </span>
      )}
      {showMore ? (
        <span
          onClick={() => setShowMore(!showMore)}
          className="ml-4 text-accent bg-inherit"
        >
          ...Show less
        </span>
      ) : (
        <span
          onClick={() => setShowMore(!showMore)}
          className="ml-4 text-accent bg-inherit"
        >
          ...Show More
        </span>
      )}
      <div className="flex flex-col mt-3 bg-inherit">
        <span className="bg-inherit">View all 0 Comments</span>
        <span className="text-accent bg-inherit">Add a comment</span>
      </div>
    </div>
  );
};

export default Comments;
