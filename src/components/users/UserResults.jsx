import React, { useState } from "react";
import { useEffect } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

export default function UserResults() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
}
