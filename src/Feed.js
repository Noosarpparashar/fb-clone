import React, {useState,useEffect} from 'react'
import "./Feed.css"
import StoriesReel from "./StoriesReel"  
import Status from "./Status" 
import Post from "./Post"
import db from './firebase'
import {useStateValue} from "./StateProvider" 
function Feed() {

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
    );

    }, []);

    return (
        <div className="feed">
            <div className="storiesReel">
            <StoriesReel />
        
            </div>
            <div className="statusUpdate"  >
               
            <Status />
            </div> 
            {posts.map((post)=>(
                <Post
                profilePic={post.data.profilePic}
                message={post.data.message}
                username={post.data.username}
                 />
            ))}
            <Post 
            message="fndskjfjsd"/>
       
          
        </div>
    )
}

export default Feed
