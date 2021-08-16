
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserList from './UserList';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {

        setUser(response.data);
      })
     
  }, [])
  return (
    <div className="App">
    <h2 > API UserList</h2>
      {<UserList user={user}/>}

    </div>
  );
}

export default App;
