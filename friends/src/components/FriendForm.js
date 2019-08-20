import React, { useState } from "react";

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const submitFriend = e => {
    e.preventDefault();
    // setNewFriend({ ...newFriend, id: Date.now() });
    props.addFriend(newFriend);
    setNewFriend({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <form onSubmit={submitFriend}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
