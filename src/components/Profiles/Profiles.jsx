import React, { useState, useEffect } from "react";

import styles from "./Profiles.module.css";

const Profiles = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  if (selectedUser) {
    return (
      <div className={styles.card}>
        <button onClick={handleBackClick}>Назад</button>
        <h3>{selectedUser.name}</h3>
        <p>
          nickname: <span>{selectedUser.username}</span>
        </p>
        <p>
          e-mail:<span> {selectedUser.email}</span>
        </p>
        <p>
          phone: <span> {selectedUser.phone}</span>
        </p>
        <p>
          website: <span> {selectedUser.website}</span>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.profiles_container}>
      <h2>Пользователи</h2>
      <ul className={styles.profiles_list}>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
