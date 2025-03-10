import React from "react";
import LikeButton from "./likebutton"; 

function PostCard({ profileImage, username, content, isLikedInitially }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <img
          src={profileImage}
          alt={`${username}'s profile`}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <strong>{username}</strong>
      </div>
      <p>{content}</p>
      <LikeButton isLikedInitially={isLikedInitially} />
    </div>
  );
}

export default PostCard;
