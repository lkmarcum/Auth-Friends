import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

const FriendList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const addFriend = newFriend => {
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, newFriend)
      .then(res => {
        console.log("add friend res: ", res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

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
      <FriendForm addFriend={addFriend} />
      {friends.map(friend => (
        <FriendCard friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
