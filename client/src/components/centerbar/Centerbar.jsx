import Post from '../post/Post';
import Share from '../share/Share';
import './centerbar.css';
import axios from 'axios';
import { useState,useEffect } from 'react';


export default function Centerbar({username}) {
  const [posts, setPosts] = useState([]);
  const user = `post/profile/${username}`;
  
  useEffect(
    () => {
      const fetchPosts = async () => {
        const res = username
          ? await axios.get({user})
          : await axios.get("post/timeline/61fe4c4518dcab59f123c9ca");
        setPosts(res.data);
       
      }
       fetchPosts();
    }
    ,[]);
    console.log(posts);

  return (
    <div className='center'>
      <div className="feed">
        <Share/>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}

      </div>
  </div>
  );
}
