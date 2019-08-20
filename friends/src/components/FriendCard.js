import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div className="friend-card">
      <h3>{friend.name}</h3>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default FriendCard;
