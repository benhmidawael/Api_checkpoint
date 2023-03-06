import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PostCard from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([])
 useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (res) {
    // handle success
    setPosts(res.data)

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
        {posts.map((el) =>
        <PostCard key={el.i} post={el} />)
        }
      </header>
    </div>
  )
}

export default App;
