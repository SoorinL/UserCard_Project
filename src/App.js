import React, { useState } from "react";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userData) => {
    setUsers((prev) => {
      return [...prev, userData];
    });
    console.log("users :: ", users);
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList datas={users} />
    </div>
  );
}

export default App;
