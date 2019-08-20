import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";

const FriendList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        console.log("friends res: ", res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className="friend-list">
      {friends.map(friend => (
        <FriendCard friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
