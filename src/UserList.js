import React from "react";

function User({ user }) {
  return (
    <div>
      <p>{user.id}</p>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "성희",
      email: "drexqq@gmail.com"
    },
    {
      id: 2,
      username: "희성",
      email: "qqxerd@gmail.com"
    },
    {
      id: 3,
      username: "누구",
      email: "who@gmail.com"
    }
  ];
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
