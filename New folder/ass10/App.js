import './App.css';
import Posts from './components/Posts';
import { useState,useEffect } from 'react';

// Function to fetch posts from the API
const getPosts =async () =>{
  try{
    let response =await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    return data
  }catch(err){
    alert('Error:',err) // Alert error if fetching fails
  }
}

function App() {
  const [posts,setPosts] = useState([]) // State to hold posts data
  
  useEffect(()=>{
    // Fetch posts when the component mounts
    getPosts().then((data)=>{
      setPosts(data) // Update state with fetched posts
    })
  },[])



  return (
    <div className="App" style={{ padding: '1px', textAlign: 'left' }}>
      {/* Display posts if available, otherwise show "no data found" */}
      {posts.length > 0 ? (posts.map((obj)=><Posts title={obj.title} />) // Render each post
        ): (
          <h2>no data found</h2>) // Message when no posts are available
      }
    </div>
  );
}

export default App;
