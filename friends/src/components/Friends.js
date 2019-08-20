import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = props => {
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

  return <h1>Friends Page</h1>;
};

export default Friends;
