import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';

function App() {
  const [Users, setUsers] = useState([])
 useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (res) {
    // handle success
    setUsers(res.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 }, [])
 

  return (
    <div className="App">
      <header className="App-header">
        {Users.map((el) =>
        <UserList key={el.i} user={el} />)
        }
      </header>
    </div>
  )
}

export default App;
