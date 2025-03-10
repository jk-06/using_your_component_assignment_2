import React, { useState } from "react";

function LikeButton({ isLikedInitially }) {
  const [isLiked, setIsLiked] = useState(isLikedInitially);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: isLiked ? "red" : "gray",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {isLiked ? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;
